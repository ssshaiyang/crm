import { getDepartSelectBranch, addDepartInfoModel } from "../../../utils/interface.js"

export const getSelectList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_SELECT_DEPART_LIST",
                    payload: {
                        visible: res.data,
                    }
                }
                dispatch(action);
            }
        }
        getDepartSelectBranch(null, cb);
    }
}

export const checkCode = function () {
    return (dispatch) => {
        let action = {
            type: "CHECK_CODE",
            payload: {
                code: 0,
            }
        }
        dispatch(action);
    }
}
export const addDepartInfo = function (param = {}) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DEPART_INFO_MODEL",
                    payload: {
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addDepartInfoModel(param, cb);
    }
}
