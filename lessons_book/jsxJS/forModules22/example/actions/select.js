//создатель действия

export const ActionSelect = (car) => {

   // alert("Now car is:" +car.name);

 // <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  //  console.info(window.Babel.transform(car.code,{presets:['es2015','react']}).code);

    return {
        type:"CAR_SELECTED",
        payload:car
    };
};


