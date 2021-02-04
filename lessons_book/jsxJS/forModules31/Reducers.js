
let defaults =
    {
        counter1:1,
        counter2:2,
        counter3:3,
        counter4:4,
        step:1
    };

//Reducers
const info = (state = defaults, action) => {

    console.log('reducers',action.type,state)

    switch (action.type) {
        case 'one':
            return {...state,counter1: state.counter1 + action.payload };
        case 'two':
            return {...state,counter2: state.counter2 + action.payload };
        case 'three':
            return {...state,counter3: state.counter3 + action.payload };
        case 'four':
            return {...state,counter4: state.counter4 + action.payload };
        default:
            return state;

    }
};

export default info;