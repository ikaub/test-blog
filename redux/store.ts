import {createStore, applyMiddleware} from "redux";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {State_I} from "../types/types";
import {createCookieMiddleware} from 'redux-cookie';
import Cookies from 'js-cookie';

const makeStore: MakeStore<State_I> = (context: Context) =>
    createStore(postReducer, applyMiddleware(thunk, createCookieMiddleware(Cookies)));
export const wrapper = createWrapper<State_I>(makeStore);