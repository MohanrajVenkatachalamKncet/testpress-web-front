import {
    USERNAME,
    ADDLIST,
    COUNT,
    USERSCORE
} from "./actionTypes.js"

export const setUserName = (s) => {
    return {type:USERNAME,payload:s};
};
export const setQuestions = (s)=>{
    return {type:ADDLIST,payload:s}
}
export const setCount = (s)=>{
    return {type:COUNT,payload:s}
}
export const setUserScore = (s)=>{
    return {type:USERSCORE,payload:s}
}