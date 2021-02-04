
const nextQuestion_ = (count = 1) => {
    return {
        type: 'NEXT_QUESTION',
        payload: {
            add: count
        }
    }
};

export const nextQuestion = (count = 1)  => {
    console.log("ActionInsert",count);
    return (nextQuestion_(count));
};