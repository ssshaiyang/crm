import { getDepartSelectBranch, addDepartInfoModel } from "../../../utils/interface.js"

export const getSelectList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_SELECT_DEPART_LIST",
                    payload: {
                        visible: res.data,
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        getDepartSelectBranch(null, cb);
    }
}

export const addDepartInfo = function (param = {}) {
    return (dispatch) => {
        function cb(res) {
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
