import React  from 'react';
import { connect } from 'react-redux'

// берем компонент поля (Field) и провайдер для формы (reduxForm)
import {Field, reduxForm, formValueSelector, initialize,FormSection} from 'redux-form';
import {validate,warn, asyncValidate} from './formValidate';
import store from './store.js';


/* кастомное поле в ввиде компонента */
class StepInput extends React.Component {
    render(){
         // инициируем событие onChange для input по клику
        const {input:{value,onChange}, meta: { touched, error, warning },label} = this.props;
        return (
            <div>
                <span>{label}.The current value is {value}</span>
                <button type={'button'} onClick={()=>onChange(value+1)}>Inc</button>
                <button type={'button'} onClick={()=>onChange(value-1)}>Dec</button>
                {/* ошибка для поля*/}
                {touched && ((error && <span style={{backgroundColor:"red"}}>{error}</span>) || (warning && <span  style={{backgroundColor:"brown"}}>{warning}</span>))}
            </div>
        )
    }
}

class Form extends React.Component {

    /* кастомные поле в ввиде методов */

    // функция, которая возвращает свою реализацию
    renderFieldInput  =  ({ input, label, type, placeholder, meta: { touched, error, warning }}) =>  (
      <div>
            <label>{label}</label>
            <div>
                <input  {...input} placeholder={placeholder} type={type} />
                {/* ошибка для поля*/}
                {touched && ((error && <span style={{backgroundColor:"red"}}>{error}</span>) || (warning && <span  style={{backgroundColor:"brown"}}>{warning}</span>))}
            </div>
        </div>
    );

    renderFieldInputCheckbox({ input,id, label, type, placeholder, meta: { touched, error, warning }}) {

            if(input.value){// определяем по value его состояние видимости
                return (
                        <div>
                            <label for={id}>{label}
                               <input  {...input} id={id} placeholder={placeholder}  checked="true" type={type} />
                            </label>
                            {/* ошибка для поля*/}
                            {touched && ((error && <span style={{backgroundColor:"red"}}>{error}</span>) || (warning && <span  style={{backgroundColor:"brown"}}>{warning}</span>))}
                        </div>
                );
            }else{
                return (
                        <div>
                            <label for={id}>{label}
                              <input  {...input} id={id} placeholder={placeholder}  type={type} />
                            </label>
                            {/* ошибка для поля*/}
                            {touched && ((error && <span style={{backgroundColor:"red"}}>{error}</span>) || (warning && <span  style={{backgroundColor:"brown"}}>{warning}</span>))}
                        </div>
                );
            }
    }



    renderFieldRadio  ({ input,data,checked, label, meta: { touched, error, warning }}) {

        return (<div>
            <label>{label}</label>
            <div>
                {
                    data.map( (item) =>{
                    return  (checked ===item.value) ?
                              (<div><label>  <input {...input} type={'radio'} value={item.value} checked/>{item.label}</label></div> )
                            :
                              (<div><label>  <input {...input} type={'radio'} value={item.value} />{item.label}</label></div> );

                    })
                }
                {/* ошибка для поля*/}
                {touched && ((error && <span style={{backgroundColor:"red"}}>{error}</span>) || (warning && <span  style={{backgroundColor:"brown"}}>{warning}</span>))}
            </div>
        </div>);
    }



    renderFieldTextArea = ({ input,value, label, placeholder, meta: { touched, error, warning }}) => (

        <div>
            <label>{label}</label>
            <div>
                <textarea  {...input} placeholder={placeholder}  />
                {/* ошибка для поля*/}
                {touched && ((error && <span style={{backgroundColor:"red"}}>{error}</span>) || (warning && <span  style={{backgroundColor:"brown"}}>{warning}</span>))}
            </div>
        </div>
    );

    // Это позволяет делать такие вещи, как ограничение одного значения поля на основе значения другого поля
    // Поле не реагирует на действия если не прошла проверку
    // можно модифицировать ввод
    MyNormalizeAgeForSex(otherField){
        //value - Текущее Значение поля
        //previousValue - Предыдущее значение поля
        //allValues - Все значения в форме с текущим значением полей
        //previousAllValues - Все значения в форме перед текущим изменением поля

     return function (value, previousValue, allValues,previousAllValues) {

         switch (otherField){
             case 'age':
                 if(allValues["sex"] === 'female' && parseInt(allValues[otherField]) <= 20 ){

                     if(parseInt(allValues[otherField]) <= 20) console.log('Все Female должны быть старше 20');

                     return  previousValue ;
                 }else{
                     return value;
                 }
             case 'sex':
                 if(allValues[otherField] === 'female'){

                     if(value < 20) console.log('Все Female должны быть старше 20');

                     return value < 20 ? previousValue : value ;
                 }else{
                     return value;
                 }
             default :
                 return value;
         }
     }
    }



    render(){
        // по умолчанию handleSubmit принимает функцию обработчик
        // reset скидывает значения до значений, заданных во время инициализации
        // в данном случае до undefined, так как значение не задано

        // error будет при submit валидации когда прийдет error от родителя
        // change для изменения полей формы
        const {
            error,
            favoriteColorValue,employed,sex,
            handleSubmit, pristine, reset, submitting,change } = this.props;


        return (
            <form onSubmit={handleSubmit}>
                {/* принимает имя поля, тип и остальные свойства, которые расмотрим позже*/}

                <Field name="title" component={this.renderFieldInput} type="text" label={'title'}  placeholder="title"/>
                <Field name="text" component={this.renderFieldInput} type="text" label={'text'}  placeholder="text"/>

                <Field name="firstName" component={this.renderFieldInput} type="text" label={'First Name'} placeholder="First Name"/>
                <Field name="lastName" component={this.renderFieldInput} label={'Last Name'}  type="text" placeholder="Last Name"/>
                <Field name="age" type="number" component={this.renderFieldInput} label="Age" normalize={this.MyNormalizeAgeForSex('sex')}/>

                <Field name="email" component={this.renderFieldInput} type="email" label={'Email'}  placeholder="Email"/>

                <Field name="sex" component={this.renderFieldRadio} type="radio" label={"Sex"} checked={sex} data={[{label:"Female",value:"female"},{label:"Male",value:"male"}]}  normalize={this.MyNormalizeAgeForSex('age')}/>

                <div>
                    <label>Favorite Color</label>
                    <div>
                        <Field name="favoriteColor" component="select">
                            <option></option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                        {/* ошибка для поля*/}
                    </div>
                </div>
                {/* name стают переменными , при активации выбора добавить стили*/}
                {favoriteColorValue && <div style={{
                    height: 80,
                    width: 200,
                    margin: '10px auto',
                    backgroundColor: favoriteColorValue
                }}/>}



                <Field name="employed" label="Employed" id={"employed"} component={this.renderFieldInputCheckbox}  type="checkbox" label={'Employed'}/>
                {/*если есть выбранный то показать*/
                    employed &&
                    <Field name="addinfo" component={this.renderFieldInput} type="text" label={'Active checkbox'}  placeholder="text"/>
                }

                  /* компонент класс*/
                <Field name="step" label="Test component"  component={StepInput}/>

                /* FormSection группировка полей */
                <FormSection name={'level1'}>
                    <Field name="value1" label="Test FormSection 1"  component={this.renderFieldInput}/>
                    <FormSection name={'level2'}>
                        <Field name="value2" label="Test FormSection 2"  component={this.renderFieldInput}/>
                    </FormSection>
                </FormSection>


                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    {/* изменить значение поля формы change  */}
                    <button type="button" onClick={()=>{change('sex','female')}}>change sex</button>
                    <button type="button" onClick={()=>{change('level1.value1',0)}}>change level1.value1</button>
                    <button type="button" onClick={()=>{change('level1',{value1:1,level2:{value2:3}})}}>change level1</button>
                    {/*изменим state */}
                    <button type="button" onClick={()=>{
                        store.dispatch({
                        type:"CHANGE_STATE_FOR_FORM",
                        payload:(store.getState().info.InitializationForm)
                    })

                    }}>change store </button>


                    {/*общая ошибка для формы по submit*/}
                    {error && <div style={{backgroundColor:"red"}}>{error}</div>}
                </div>
            </form>
        );
    }

}


Form = reduxForm({
    form: 'unique', // имя формы в state (state.form.post)
    enableReinitialize: true,//поля формы отслеживают состояние
    // подключение валидации на клиенте
    validate,
    warn,

    asyncValidate,
    asyncBlurFields: [ 'title','text' ] // asynchronous validation т.е. ответ от сервера
})(Form);





// для активных т.е. выбранных елементов radio,checkbox,select
const selector = formValueSelector('unique');

Form = connect(
    state => {
        // name стают переменными и отрисовывается новая разметка

        const employed = selector(state, 'employed');
        const favoriteColorValue = selector(state, 'favoriteColor');
        const sex = selector(state, 'sex');

        // together as a group
        //const { firstName, lastName } = selector(state, 'firstName', 'lastName')
        return {
            employed,
            favoriteColorValue,
            sex,
            initialValues:state.info.InitializationForm
            //fullName: `${firstName || ''} ${lastName || ''}`
        }
    },
    null

)(Form);


export default Form;







/*



Form.propTypes ={
    counter1:  PropTypes.number.isRequired,
    counter2:  PropTypes.number.isRequired,
    counter3:  PropTypes.number.isRequired,
    counter4:  PropTypes.number.isRequired
};




function mapStateToProps(state,ownProps) {
    return {
        counter1:  state.counter1,
        counter2:  state.counter2,
        counter3:  state.counter3,
        counter4:  state.counter4,
        initialValues:{
            name:'John',
            surname:"Wezer",
            step: state.info.step
        }
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        nextQuestion: nextQuestion
    },dispatch);
}

//export default connect(mapStateToProps,mapDispatchToProps)(Form);

 const MasterContainer = R.compose(
        connect(mapStateToProps,matchDispatchToProps),
        reduxForm({
            form:'sampleForm',
            onSubmit:value => console.log('sender',value),

        })
    )(Form);

export default MasterContainer;
*/