'use strict';

var Example = React.createClass({
    displayName: 'Example',

    render: function render() {
        console.log(this.props.children.length); // 4
        return React.createElement('div', null, this.props.children);
    }
});

var FancyLink = React.createClass({
    displayName: 'FancyLink',

    render: function render() {
        switch (this.props.size) {}
        return React.createElement('a', this.props, this.props.children);
    }
});

var MyDiv = React.createClass({
    displayName: 'MyDiv',

    render: function render() {

        return React.createElement('div', this.props, this.props.children);
    }
});

var MyArrElements = React.createClass({
    displayName: 'MyArrElements',

    render: function render() {
        var styles = {
            fontSize: '2em',
            lineHeight: '1.6'
        };

        var greeting = [React.createElement('span', { style: styles, className: 'myClass', htmlFor: 'id', key: 'greet' }, 'Hello'), ' ', React.createElement('span', { key: 'world' }, 'World'), '!'];
        return React.createElement('div', null, greeting);
    }
});
/*
ReactDOM.render(
    <Example>
        <MyDiv class={'Пойдет в this.props'}>
            <p>Пойдет в this.props.children </p>
        </MyDiv>
        <MyArrElements/>
        <FancyLink href={'myURL'}>   href пойдет в this.props  </FancyLink>


        <span key="greet">Hello</span>
        {' '}
        <span key="world">World</span>
        !
    </Example>,
    document.getElementById('app')
);
*/
function log(event) {
    console.log("value: ", event.target.value);
    console.log("defaultValue: ", event.target.defaultValue);
}
ReactDOM.render(React.createElement('textarea', { defaultValue: 'hello', onChange: log }), document.getElementById('app'));