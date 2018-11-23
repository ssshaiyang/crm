import { getAllMenuListInfo,getDepartSelectListInfo,putAllDepartInfo,deleteAllDepartInfo,getPositionListData} from "../../../utils/interface.js"
export const getDepartSelectList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DEPART_SELECT_LIST_INFO",
                    payload: {
                        data: res.data,
                        code:res.error_code
                    }
                }
                dispatch(action);
            }
        }
        getDepartSelectListInfo(null, cb);
    }
}


export const getAllMenuList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let actionList = {
                    type: "GET_ALL_MENU_LIST",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(actionList);
            }
        }
        getAllMenuListInfo(null, cb);
    }
}

export const putDepartInfo = function (param = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "PUT_ALL_DEPART_INFO",
                    payload: {
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        putAllDepartInfo(param, cb);
    }
}

export const deleteDepartInfo = function (param = {}) {
    return (dispatch) => {
        function cb(res) {

            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DELETE_DEPART_INFO",
                    payload: {
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        deleteAllDepartInfo(param, cb);
    }
}

