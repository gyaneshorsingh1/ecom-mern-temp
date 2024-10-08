import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducer";


const reducer = combineReducers ({
    products: productReducer,
})

let initialState = {
    products:[],
    loading:false,
    error:null,
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;