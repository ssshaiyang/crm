import {giveFrameWorkBranch,updateDepartMemberInfo,delDepartMemberInfo} from "../../../../utils/interface.js"
export const getAllBranchFrameWork = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                console.log("ppp",res.data)
                let action = {
                    type: 'FRAME_WORK_ADD_BRANCH_LIST',
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        giveFrameWorkBranch(null, cb);
    }
}

export const updateDepartInfo = function(prams={}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'UPDATE_DEPART_MEMBER',
                    payload: {
                        data: res.data
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
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        delDepartMemberInfo(id, cb);
    }
}
