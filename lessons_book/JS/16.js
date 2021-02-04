"use strict";

var arr = [1, 2, 3, 4, "5"];
var h1 = "Hello";
var RAQUO = " \xBB";

var firstname = 'John<scr' + 'iptsrc="http://evil/co.js"></scr' + 'ipt>';

var attr = {
    href: 'http://example.org',
    target: '_blank'
};

ReactDOM.render(React.createElement("div", null, React.createElement("h1", null, ' ', h1 + RAQUO, ' plus ', " \xBB", firstname), React.createElement("a", attr, "link"), React.createElement("ul", null, arr.map(function (data, indx) {
    return React.createElement("li", { key: indx }, data);
})), React.createElement("div", { "class": "input-field col s12" }, React.createElement("select", { name: "selectName" }, arr.map(function (data, indx) {
    return React.createElement("option", { key: indx, value: indx }, data);
})))), document.getElementById('app'));