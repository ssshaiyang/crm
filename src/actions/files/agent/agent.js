import {
    getAgentInfoLists,
    addAgentInfoLists,
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