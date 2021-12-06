import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const middleware = [thunk];

const store1 = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store1 };
