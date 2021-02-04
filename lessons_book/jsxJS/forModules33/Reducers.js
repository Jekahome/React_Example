


let InitializationForm = {
    title : "асинхронный <10",
    text : "асинхронный >10",
    firstName:"синхронный",
    lastName:"синхронный",
    age:18,
    email:"empty",
    sex:"male",
    favoriteColor:"blue",
    employed:true,
    notes:"textarea",
    step:8,
    level1:{
        value1:1,
        level2:{
            value2:2
        }
    }
};


let defaults =
    {
        counter1:1,
        counter2:2,
        counter3:3,
        counter4:4,
        posts:[],
        InitializationForm:InitializationForm
    };

//Reducers
const info = (state = defaults, action) => {

   //console.log('reducers',action,state);

    switch (action.type) {
        case 'one':
            return {...state,counter1: state.counter1 + action.payload };
        case 'two':
            return {...state,counter2: state.counter2 + action.payload };
        case 'three':
            return {...state,counter3: state.counter3 + action.payload };
        case 'four':
            return {...state,counter4: state.counter4 + action.payload };
        case 'CREATE_POST':

          let posts = Array.from( state.posts) ;
            console.log('reducers CREATE_POST',action.payload);
            posts.push(action.payload);
            return {...state,posts: posts };
        case 'CHANGE_STATE_FOR_FORM':
            console.log('CHANGE_STATE_FOR_FORM',action.payload );
            return {...state,InitializationForm:{...action.payload,title:"!CHANGE_STATE_FOR_FORM!"} };
        default:
            return state;

    }
};

export default info;

