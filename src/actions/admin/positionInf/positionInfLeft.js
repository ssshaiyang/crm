import { getDepartSelectListInfo,getAllMenuListInfo } from "../../../utils/interface.js"
export const getDepartSelectList = function () {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DEPART_SELECT_LIST_INFO",
                    payload: {
                        data: res.data
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