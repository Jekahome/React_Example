
import usersJson from './users.json';

// Store API
export function selectStore(){
    try {
        var Data_ = window.localStorage.getItem('data');
        if(!Data_)Data_={};
        else Data_ = JSON.parse(Data_);
        return Data_;
    } catch (e) {
        // console.log(e instanceof SyntaxError); // true
            console.log('message',e.message+'\nname:',e.name+ '\nfileName:',e.fileName+'\nlineNumber:',e.lineNumber+ '\ncolumnNumber:',e.columnNumber+ '\n'+e.stack);
            if(confirm("Clear data ?"))
                window.localStorage.removeItem('data');
            return {};
    }
}

export function deleteStore(id){
    var Data_ = selectStore();
    delete Data_[id];
    window.localStorage.setItem("data",JSON.stringify(Data_));
}

export function insertStore(value = "default"){
    try {
        var Data_ = window.localStorage.getItem('data');
        if(!Data_)Data_={"0":value};
        else {
            Data_ = JSON.parse(Data_);
            var max=0;
            Object.keys(Data_).map(function (key ) {
                max=parseInt(key)>max?parseInt(key):max;
            } );
            Data_[max+1]=value;
        }
        window.localStorage.setItem("data",JSON.stringify(Data_));
    } catch (e) {
        // console.log(e instanceof SyntaxError); // true
        console.log('message',e.message+'\nname:',e.name+ '\nfileName:',e.fileName+'\nlineNumber:',e.lineNumber+ '\ncolumnNumber:',e.columnNumber+ '\n'+e.stack);
        if(confirm("Clear data ?")){
            window.localStorage.removeItem('data');
        }
        return {};
    }
}

export function saveStore(id = 0,value = "default"){
    try {
        var Data_ = window.localStorage.getItem('data');
        if(!Data_)Data_={"0":value};
        else {
            Data_ = JSON.parse(Data_);
            Data_[parseInt(id)] = value;
        }
        window.localStorage.setItem("data",JSON.stringify(Data_));
    } catch (e) {
        // console.log(e instanceof SyntaxError); // true
        console.log('message',e.message+'\nname:',e.name+ '\nfileName:',e.fileName+'\nlineNumber:',e.lineNumber+ '\ncolumnNumber:',e.columnNumber+ '\n'+e.stack);
        if(confirm("Clear data ?"))
            window.localStorage.removeItem('data');
        return {};
    }
}

export function getTrack(){
    try {
      return [
          {id:1,name:"one"},
          {id:1,name:"two"},
          {id:1,name:"free"},
          {id:1,name:"four"}
      ];
    } catch (e) {
        return [];
    }
}


export function search(value) {
    let Data = Object.assign({},selectStore());
    for(var item in Data){
        if(!Data.hasOwnProperty(item)) continue;// свойства только этого объекта

        if(Data[item].indexOf(value,0)==-1){
            delete Data[item];
        }
    }
    return Data;
}

export function users() {

    return (usersJson);
}




/*
    localStorage.setItem("data",'{"0":"default"}')
    localStorage.getItem('data')
    localStorage.removeItem('key');// удаление ключа
    localStorage.clear();  //очистка

 */
