const redux = require("redux")

const createStore = redux.createStore();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action object

// {
//     type: BUY_CAKE,
//     info: 'first reduc axtion';
// }

// action creater

function buy_cake() {
  return {
    type: BUY_CAKE,
    info: "first reduc axtion",
  };
}


function buy_icecream() {
    return {
        type: BUY_ICECREAM,
        info: 'bought ice cream'
    }
}

// action is an object with type property
// and action creater is an function that returns an action

// this is an reducer

// (previousState, action) => newState


const initialState = {
    numberOfCakes : 10,
    numberOfIcecreams: 100
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case BUY_CAKE: return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }

        case BUY_ICECREAM : return {
            ...state,
            numberOfIcecreams = state.numberOfIcecreams - 1
        }

        default : return state 
    }
}

const store = createStore(reducer);

console.log('initial state' , store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
    
})

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());

unsubscribe()
