import React from 'react';
// npm install --save prop-types
import PropTypes from 'prop-types'; // ES6


export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {myText: this.props.myText};

    }

    getData = (e) => {

            let data = {};
            this.props.fields.forEach(field =>
                data[field.id] = this.refs[field.id].getValue()
            );
            return data;

    }


    render = (e) => {
        return (
            <form className="Form">{this.props.fields.map(field => {

                    return (
                        <div className="FormRow" key={field.id}>
                            <label className="FormLabel" htmlFor={field.id}>{field.label}:</label>
                            <input id={field.id} type={'text'} />
                        </div>
                    );

            }, this)}
            <button onClick={this.submit}>{this.state.myText}</button>
            </form>
        );
    }

    submit = (e) =>{
        console.log('submit');
        //как предотвратить отправку
        //где данные из формы
        //клик или отправка формы

        this.setState({
            myText:'submit'
        });
        return false;
    }

    //Инициализация свойства для состояния
    getInitialState () {
        return {
            myText: 'default'
        }
    }


    static getDefaultProps = {
        myText: "default"
    };

    static propTypes = {
        fields: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string,
            options: PropTypes.arrayOf(PropTypes.string),
        })).isRequired,
        initialData: PropTypes.object,
        readonly: PropTypes.bool,
    };
}




