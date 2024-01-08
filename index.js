const store = require("./App/store");
const cakeActions = require("./Features/Cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./Features/IceCream/icecreamSlice").icecreamActions;
const fetchUsers = require("./Features/User/userSlice").fetchUsers;

console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(() => {
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3));
store.dispatch(fetchUsers())

unsubscribe();
