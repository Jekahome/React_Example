import React from 'react';
// npm install --save prop-types
import PropTypes from 'prop-types'; // ES6

// Для компонентов не использующих состояние подходят функции
function Button(props) {

    return props.href
        ? <a {...props} className={props.className} >{props.value}</a>
        : <button {...props} className={props.className} />;
}

Button.propTypes = {
    href: PropTypes.string,
};

Button.defaultProps = {
    value: 'link default'

};

export default Button;


