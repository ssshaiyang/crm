import {giveFrameWorkBranch,updateDepartMemberInfo,delDepartMemberInfo,getDepartMemberInfo,getDepartmentsInfo} from "../../../../utils/interface.js"
export const getAllBranchFrameWork = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                console.log("ppp",res.data)
                let action = {
                    type: 'FRAME_WORK_ADD_BRANCH_LIST',
                    payload: {
                        data: res.data,
                        code:0
                    }
                }
                dispatch(action);
            }
        }
        giveFrameWorkBranch(null, cb);
    }
}
// 防止页面在获取后不断刷新
updateDepartCode
export const updateDepartCode = function() {
    return (dispatch) => {
                let action = {
                    type: 'UPDATE_DEPART_CODE',
                    payload: {
                        code:0
                    }
                }
                dispatch(action);
    }
}
export const updateDepartInfo = function(prams={}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'UPDATE_DEPART_MEMBER',
                    payload: {
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        updateDepartMemberInfo(prams, cb);
    }
}

export const delDepartInfo = function(id) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'DEL_DEPART_MEMBER',
                    payload: {
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delDepartMemberInfo(id, cb);
    }
}
export const getDepartInfo = function(id) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_DEPART_MEMBER',
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDepartMemberInfo(id, cb);
    }
}

export const getDepartmentData = function(id) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_DEPARTMENTS_DATA',
                    payload: {
                        data: res.data,
                        departCode:res.error_code
                    }
                }
                dispatch(action);
            }
        }
        getDepartmentsInfo(id, cb);
    }
}


