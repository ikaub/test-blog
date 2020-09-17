import {createStore, applyMiddleware} from "redux";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {State_I} from "../types/types";


const makeStore: MakeStore<State_I> = (context: Context) => createStore(postReducer, applyMiddleware(thunk));
export const wrapper = createWrapper<State_I>(makeStore);