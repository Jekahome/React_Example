import {getIssues} from "../api";
//Обновляем store этим действием
export const loadIssues = ()=> {
    return {
        type:"PROMISE",// перенаправление в middlewares
        actions:['ISSUES_LOADING','ISSUES_LOADED','ISSUES_LOAD_FAILURE'],
        promise:getIssues()
    }
};

