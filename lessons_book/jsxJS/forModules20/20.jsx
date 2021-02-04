var Block = React.createClass({
    getInitialState(){

        return {
            text:this.props.text,
            update:false
        } ;
    },
    render(){

        if(this.state.update){
            return  (<div>
                <input ref='input' type="text" style={{width:'100px'}} defaultValue={this.state.text}/>
                <button  onClick={this.save} className="save">save</button>
            </div>)
        }else{
            return  (<div>
                <span className="tablo">{this.state.text}</span>
                <button onClick={this.update} className="update">update</button>
                <button onClick={this.delete} className="delete">delete</button>
            </div>)
        }


    },
    // Для обьявления принимаемых свойств и их типов
    propTypes:{
        text:React.PropTypes.string,// поле тип строка

    },
    getDefaultProps() {// Начальная инициализация или создание (По умолчанию )
        return {
            text:'default'
        }
    },
    update(e){
        this.setState({update:true});
        //console.log(e.target.parentNode.querySelector('.tablo'))

    },
    save(e){

        this.props.saveBlock(this.props.id,this.refs.input.value);

        this.setState({
            update:false,
            text:this.refs.input.value
        });

    },
    delete(){

        this.props.deleteBlock(this.props.id);
    }
});


var ArrBlock = React.createClass({


    getInitialState() {
        //this.render=this.render.bind(this);
        var Data = window.localStorage.getItem('data');
        if(!Data)Data={};
        else Data = JSON.parse(Data);

        return {
            data:Data
        };
    },

    render(){
          var This = this;
          return ( <div> {
                          Object.keys(this.state.data).map( function (key){
                              return <Block key={key} id={key} text={this.state.data[key]} saveBlock={This.saveBlock} deleteBlock={This.deleteBlock} />

                          }.bind(This))
                        }
                        <button onClick={This.insertBlock} className="plus">{' + '}</button>
                  </div>);

    },
    // Для обьявления принимаемых свойств и их типов
    propTypes:{
        data: React.PropTypes.objectOf (React.PropTypes.string ),
    },
    getDefaultProps() {// (По умолчанию )
        return {
            data:{}
        }
    },
    insertBlock(){
        var Data = window.localStorage.getItem('data');
        if(!Data){
            Data = {"0":"default"};
        }
        else {
            Data = JSON.parse(Data);

            //найти следующий ключ
            var max = 0;
            Object.keys(Data).map(function (key ) {
                max = parseInt(key) > max? parseInt(key): max;
            } );
            Data[max+1]="default";
        }


        window.localStorage.setItem("data",JSON.stringify(Data));

        this.setState({
            data:Data
        });
    },
    deleteBlock(index){
        var Data = JSON.parse( localStorage.getItem('data') );

        delete Data[index];

        window.localStorage.setItem("data",JSON.stringify(Data));

        this.setState({
            data:Data
        });

    },
    saveBlock(index,value){
        var Data = JSON.parse( localStorage.getItem('data') );

        Data[index] = value;

        window.localStorage.setItem("data",JSON.stringify(Data));

        this.setState({
            data:Data
        });
    }
});


// передача компоненту стартовых данных
ReactDOM.render(

    <ArrBlock />,
    document.getElementById('app')
);


