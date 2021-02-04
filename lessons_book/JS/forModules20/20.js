'use strict';

var Block = React.createClass({
    displayName: 'Block',
    getInitialState: function getInitialState() {

        return {
            text: this.props.text,
            update: false
        };
    },
    render: function render() {

        if (this.state.update) {
            return React.createElement(
                'div',
                null,
                React.createElement('input', { ref: 'input', type: 'text', style: { width: '100px' }, defaultValue: this.state.text }),
                React.createElement(
                    'button',
                    { onClick: this.save, className: 'save' },
                    'save'
                )
            );
        } else {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'span',
                    { className: 'tablo' },
                    this.state.text
                ),
                React.createElement(
                    'button',
                    { onClick: this.update, className: 'update' },
                    'update'
                ),
                React.createElement(
                    'button',
                    { onClick: this.delete, className: 'delete' },
                    'delete'
                )
            );
        }
    },

    // Для обьявления принимаемых свойств и их типов
    propTypes: {
        text: React.PropTypes.string // поле тип строка

    },
    getDefaultProps: function getDefaultProps() {
        // Начальная инициализация или создание (По умолчанию )
        return {
            text: 'default'
        };
    },
    update: function update(e) {
        this.setState({ update: true });
        //console.log(e.target.parentNode.querySelector('.tablo'))
    },
    save: function save(e) {

        this.props.saveBlock(this.props.id, this.refs.input.value);

        this.setState({
            update: false,
            text: this.refs.input.value
        });
    },
    delete: function _delete() {

        this.props.deleteBlock(this.props.id);
    }
});

var ArrBlock = React.createClass({
    displayName: 'ArrBlock',
    getInitialState: function getInitialState() {
        //this.render=this.render.bind(this);
        var Data = window.localStorage.getItem('data');
        if (!Data) Data = {};else Data = JSON.parse(Data);

        return {
            data: Data
        };
    },
    render: function render() {
        var This = this;
        return React.createElement(
            'div',
            null,
            ' ',
            Object.keys(this.state.data).map(function (key) {
                return React.createElement(Block, { key: key, id: key, text: this.state.data[key], saveBlock: This.saveBlock, deleteBlock: This.deleteBlock });
            }.bind(This)),
            React.createElement(
                'button',
                { onClick: This.insertBlock, className: 'plus' },
                ' + '
            )
        );
    },

    // Для обьявления принимаемых свойств и их типов
    propTypes: {
        data: React.PropTypes.objectOf(React.PropTypes.string)
    },
    getDefaultProps: function getDefaultProps() {
        // (По умолчанию )
        return {
            data: {}
        };
    },
    insertBlock: function insertBlock() {
        var Data = window.localStorage.getItem('data');
        if (!Data) {
            Data = { "0": "default" };
        } else {
            Data = JSON.parse(Data);

            //найти следующий ключ
            var max = 0;
            Object.keys(Data).map(function (key) {
                max = parseInt(key) > max ? parseInt(key) : max;
            });
            Data[max + 1] = "default";
        }

        window.localStorage.setItem("data", JSON.stringify(Data));

        this.setState({
            data: Data
        });
    },
    deleteBlock: function deleteBlock(index) {
        var Data = JSON.parse(localStorage.getItem('data'));

        delete Data[index];

        window.localStorage.setItem("data", JSON.stringify(Data));

        this.setState({
            data: Data
        });
    },
    saveBlock: function saveBlock(index, value) {
        var Data = JSON.parse(localStorage.getItem('data'));

        Data[index] = value;

        window.localStorage.setItem("data", JSON.stringify(Data));

        this.setState({
            data: Data
        });
    }
});

// передача компоненту стартовых данных
ReactDOM.render(React.createElement(ArrBlock, null), document.getElementById('app'));