
import React from 'react';
import ReactDOM from 'react-dom';
import Excel from './Excel';
import Button from './Button';
import Form from './Form';
import BlockH1 from './BlockH1';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

const app = document.getElementById('app');



ReactDOM.render(
    <div>
        <BlockH1> Welcome to The App! </BlockH1>
        <Excel  initialData={data} headers={headers}/>
        <Button className={'classButton'} href={'http://react.loc/19'} value={'link'}/>

        <Form
            myText='button'
            fields={[
                {label: 'Rating', type: 'rating', id: 'rateme'},
                {label: 'Greetings', id: 'freetext'},
            ]}
            initialData={ {rateme: 4, freetext: 'Hello'} } />

    </div>
    ,
    app
);
