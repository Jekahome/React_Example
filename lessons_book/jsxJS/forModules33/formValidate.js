/*
Redux-form поддерживает три вида валидации:

Синхронная валидация
Асинхронная валидация
Валидация во время сабмита

Для синхронной и асинхронной валидации создадим файл formValidate.js
 */


// синхронная валидация

// не сработает submit при errors
export const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Must be > 3 characters'
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 3) {
        errors.lastName = 'Must be > 3 characters'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
};


// сработает submit при warnings
export const warn = values => {
    const warnings = {};
    if (values.age > 21) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
};



//асинхронная валидация

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//принимает два параметра значения и redux dispatch
export const asyncValidate = (values/*, dispatch */) => {
    return sleep(1000) // имитация серверного ответа
        .then(() => {

            if (!values.title) {
                // для асинхронной валидации нужно бросить объект с ошибкой
                throw {title: 'Поле обязательно для заполнения!'}
            } else if (values.title.length > 10) {
                throw {title: 'Заголовок должен быть не более 10 символов!'}
            }

            if (!values.text) {
                // для асинхронной валидации нужно бросить объект с ошибкой
                throw {text: 'Поле обязательно для заполнения!'}
            } else if (values.text.length < 10) {
                throw {text: 'Текст должен быть больше 10 символов!'}
            }
        })
};