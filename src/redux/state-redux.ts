import { createStore, combineReducers } from 'redux';
import userReducer from './usersReducer';
import categoryReducer from './categoryReducer';


const reducer = combineReducers({
   users: userReducer,
   category: categoryReducer
});

type Reducer = typeof reducer;
export type AppStateType = ReturnType<Reducer>



const store = createStore(reducer);
export default store;
