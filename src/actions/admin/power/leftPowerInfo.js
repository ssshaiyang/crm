import { getAllPowerListInfo,postAllPowerListInfo, getHasPowerListInfo, getClickRolePowerInfo, getAllPowerClassificationInfo,
    getClickPowerListInfo,getRoleMemberListInfo,addMemberListInfo,getAllMemberListInfo,getRoleApplyListInfo,delAllMemberListInfo,delPowerList,putAllPowerListInfo } from "../../../utils/interface.js"
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

// 消除获取后数据bug
export const updateCodeInfo = function () {
    return (dispatch) => {
                let action = {
                    type: "UPDATE_CODE_INFO",
                    payload: {
                        code:0
                    }
                }
                dispatch(action);
    }
}
//添加角色权限
export const postPowerListInfo = function (prams = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "POST_POWER_LIST_INFO",
                    payload: {
                        // data: res.data,
                        // id: prams.role_name
                        code:res.error_code
                    }
                }
                dispatch(action);
            }
        }
       postAllPowerListInfo(prams, cb);
    }
}

// 修改角色权限
export const putPowerListInfo = function (prams = {}) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "PUT_POWER_LIST_INFO",
                    payload: {
                        code:res.error_code
                    }
                }
                dispatch(action);
            }
        }
        putAllPowerListInfo(prams, cb);
    }
}
export const getHasPowerList = function () {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
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

export const delPowerListInfo = function (prams = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_POWER_LIST_INFO",
                    payload: {
                        code:res.error_code
                    }
                }
                dispatch(action);
            }
        }
        console.log(prams)
        delPowerList(prams, cb);
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
                        id: prams.role_name,
                        code:res.error_code
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

//获取选中的权限列表
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
            console.log(prams.role_id)
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_ROLE_MEMBER",
                    payload: {
                        data: res.data,
                        id: prams.role_name,
                        checkId:prams.role_id
                    }
                }
                dispatch(action);
            }
        }
        getRoleMemberListInfo(prams.role_id, cb);
    }
}

export const addMemberList = function (params) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_MEMBER_LIST",
                    payload: {
                        error_code: res.error_code,
                        code:res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addMemberListInfo(params, cb);
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

// 删除角色人员
export const delMemberListInfo = function (param={}) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_ALL_MEMBER_LIST",
                    payload: {
                        code: res.error_code,
                    }
                }
                dispatch(action);
            }
        }
        delAllMemberListInfo(param, cb);
    }
}

//获取所有应用信息
export const getRoleApplyList = function (param={}) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
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
        getRoleApplyListInfo(param, cb);
    }
}



