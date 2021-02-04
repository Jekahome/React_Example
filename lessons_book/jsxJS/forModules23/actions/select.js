//создатель действия


export const ActionSelect = (block=null) => {

    console.log("ActionSelect",block);

    // <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    //  console.info(window.Babel.transform(car.code,{presets:['es2015','react']}).code);

    return {
        type:"SELECT",
        payload:block
    };
};
