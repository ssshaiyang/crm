import { getAllPowerListInfo, getHasPowerListInfo, getClickRolePowerInfo, getAllPowerClassificationInfo, 
    getClickPowerListInfo,getRoleMemberListInfo,addMemberListInfo,getAllMemberListInfo,getRoleApplyListInfo } from "../../../utils/interface.js"
export const getPowerListInfo = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_POWER_LIST_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAllPowerListInfo(null, cb);
    }
}

export const getHasPowerList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_HAS_POWER_LIST_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getHasPowerListInfo(null, cb);
    }
}

export const getClickRolePower = function (prams = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CLICK_ROLE_POWER",
                    payload: {
                        data: res.data,
                        id: prams.role_name
                    }
                }
                dispatch(action);
            }
        }
        getClickRolePowerInfo(prams.role_id, cb);
    }
}

export const getAllPowerClassification = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_POWER_CLASSIFICATION",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAllPowerClassificationInfo(null, cb);
    }
}

export const getClickPowerList = function (id) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CLICK_POWER_LIST",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getClickPowerListInfo(id, cb);
    }
}

export const getRoleMemberList = function (prams = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_ROLE_MEMBER",
                    payload: {
                        data: res.data,
                        id: prams.role_name
                    }
                }
                dispatch(action);
            }
        }
        getRoleMemberListInfo(prams.role_id, cb);
    }
}

export const addMemberList = function (id) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_MEMBER_LIST",
                    payload: {
                        error_code: res.error_code,
                    }
                }
                dispatch(action);
            }
        }
        addMemberListInfo(id, cb);
    }
}

export const getMemberListInfo = function (param={}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_ALL_MEMBER_LIST",
                    payload: {
                        data: res.data,
                    }
                }
                dispatch(action);
            }
        }
        getAllMemberListInfo(param, cb);
    }
}

//获取所有应用信息
export const getRoleApplyList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_ALL_APPLY_INFO",
                    payload: {
                        data: res.data,
                    }
                }
                dispatch(action);
            }
        }
        getRoleApplyListInfo(null, cb);
    }
}



