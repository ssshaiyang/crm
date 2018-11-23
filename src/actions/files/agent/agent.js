import {
    getAgentInfoLists,
    addAgentInfoLists,
    getAgentContactInfo,
    getAgentBankInfo,
    addAgentBankInfo,
    addAgentContactInfo,
    delAgent,editAgent
}
from "../../../utils/interface.js"

//获取代理商信息
export const getAgentInfo = function(params = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_AGENT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAgentInfoLists(params, cb);
    }
}

//添加代理商
export const addAgentInfo = function(params = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_AGENT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        addAgentInfoLists(params, cb);
    }
}

export const getAgentContact = function(params = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type: "GET_AGENT_CONTACT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAgentContactInfo(params, cb)
    }
}

export const addAgentContact = function(params = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type: "ADD_AGENT_BANK_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        addAgentContactInfo(params, cb)
    }
}

export const getAgentBank = function(params = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type: "GET_AGENT_BANK_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAgentBankInfo(params, cb)
    }
}

export const addAgentBank = function(params = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type: "ADD_AGENT_BANK_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        addAgentBankInfo(params, cb)
    }
}


export const delAgentInfo = function(params = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type: "DEL_AGENT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        delAgent(params, cb)
    }
}

export const editAgentInfo = function(params = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type: "EDIT_AGENT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        editAgent(params, cb)
    }
}