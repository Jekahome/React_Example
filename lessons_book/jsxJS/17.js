var Example = React.createClass({
    render: function() {
        console.log(this.props.children.length); // 4
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

var FancyLink = React.createClass({
    render: function() {
        switch(this.props.size) {
// совершение каких-либо действий на основе свойства 'size'
        }
        return <a {...this.props}>{this.props.children}</a>;
    }
});

var MyDiv = React.createClass({
    render: function() {

        return <div {...this.props}>{this.props.children}</div>;
    }
});

var MyArrElements = React.createClass({
    render: function() {
        var styles = {
            fontSize: '2em',
            lineHeight: '1.6'
        };

        var greeting = [
            <span style={styles} className="myClass" htmlFor="id" key="greet">Hello</span>,
            ' ',
            <span key="world">World</span>,
            '!'
        ];
        return <div>{greeting}</div>;
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
ReactDOM.render(
    <textarea defaultValue="hello" onChange={log} />,
    document.getElementById('app')
);


