//UseState Similar - GLOBAL STORE 
import {USERNAME,ADDLIST,COUNT,USERSCORE} from './actionTypes.js';
const initial_state={
    username:"",
    questions:[],
    count:0,
    userscore:"",

}
export const rootReducer = (state = initial_state, action) => {
    switch (action.type) {
        case USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case ADDLIST:{      
            return{
                ...state,
                questions:action.payload
            }
        }
        case COUNT:{
            return{
                ...state,
                count:action.payload
            }
        }
        case USERSCORE:{
            return{
                ...state,
                userscore:action.payload
            }
        }
        default:
            return state;
    }
};