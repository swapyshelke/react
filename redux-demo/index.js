const BUY_CAKE = "BUY_CAKE";

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


// action is an object with type property
// and action creater is an function that returns an action

// this is an reducer

// (previousState, action) => newState


const initialState = {
    numberOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case BUY_CAKE: return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }

        default : return state 
    }
}