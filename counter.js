// steps
const { createStore } = require("redux");

// initial state
const initialState = {
    count: 0,
};
// actions = two types 1. action / 2. action creator
//  increment
// decrement
// reset
// increase by amount
// action

{
    type: "INCREMENT";
}
// Action Creator
const incrementAction = () => {
    return {
        type: "INCREMENT",
    };
};

{
    type: "DECREMENT";
}
// Action Creator
const decrementAction = () => {
    return {
        type: "DECREMENT",
    };
};

{
    type: "RESET";
}
// Action Creator
const resetAction = () => {
    return {
        type: "RESET",
    };
};
{
    type: "INCREASE_BY_AMT";
}
// Action Creator
const increaseByAmt = () => {
    return {
        type: "INCREASE_BY_AMT",
    };
};

// reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1,
        };
    }
    else if (action.type === 'DECREMENT') {
        return {
            count: state.count - 1,
        }
    }
    else if (action.type === 'RESET') {
        return {
            count: 0,

        }
    }
};

// store
const store = createStore(counterReducer);

// subscribe to store
store.subscribe(() => {
    const data = store.getState();
    console.log(data);
})
// dispatch action
// increment
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
// decrement
store.dispatch(decrementAction())
// reset 
store.dispatch(resetAction())



