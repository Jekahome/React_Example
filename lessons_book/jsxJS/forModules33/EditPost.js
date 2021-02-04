import React from 'react';

import {
    initialize,
    getFormValues,
    isDirty,
    isPristine,
    isValid,
    isInvalid,
    SubmissionError
} from 'redux-form'// https://redux-form.com/6.1.1/docs/api/actioncreators.md/

import {connect} from 'react-redux';

import Form from './Form'
import store from './store.js';



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class EditPost extends React.Component{
    constructor(props) {
        super(props);
        /*
            Если нам надо задать значение, при инициализации используем actionCreator initialize,
            который принимает первым параметром название формы,
            вторым объект с значениями. Например, для статьи по id:
        */
        // post = {title: " Текст заголовка ", text: " Текст статьи "}
        let {unique, initializeUnique} = this.props;

       console.log('EditPost constructor');

        // инициализация // лучьше через состояние с привязкой к самой форме initialValues с enableReinitialize: true
        //initializeUnique(unique);
    }

    handleSubmit(values){
        console.log('EditPost handleSubmit',values);

        // Общая ошибка для формы тут должна генерироваться

        // симуляция ответа сервера

       // серверная проверка submit
        return sleep(1000) // simulate server latency
            .then(() => {
                if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.lastName)) {
                    throw new SubmissionError({ lastName: 'User does not exist', _error: 'Login failed!' })
                }  else {
                    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
                    store.dispatch({
                        type:"CREATE_POST",
                        payload:values
                    });
                }
            })

    }

    render() {
        //let {unique, dispatch} = this.props;
        return (
            <div>
                {/* передаем обработчик*/}
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

// прокидываем в props функцию initializePost для инициализации формы
function mapDispatchToProps(dispatch){
    return {
        initializeUnique: function (uniqueData){
            dispatch(initialize('unique', uniqueData));
        }
    }
}

// прокидываем в props объект для инициализаци формы
function mapStateToProps(state, ownProps){
    //const id = ownProps.params.id;
   // console.log('state',state);
    return {
        /*values: getFormValues('unique')(state.info.InitializationForm),
        dirty: isDirty('unique')(state),
        pristine: isPristine('unique')(state),
        valid: isValid('unique')(state),
        invalid: isInvalid('unique')(state),*/

        unique: state.info.InitializationForm // начальная инициализация, после появится заполненное свойство state.form

    }
}
export default connect(mapStateToProps,null /*mapDispatchToProps*/)(EditPost);

