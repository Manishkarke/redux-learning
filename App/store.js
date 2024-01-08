const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../Features/Cake/cakeSlice");
const userReducer = require("../Features/User/userSlice");
const icecreamReducer = require("../Features/IceCream/icecreamSlice");
const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: { cake: cakeReducer, icecream: icecreamReducer, user: userReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
