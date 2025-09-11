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