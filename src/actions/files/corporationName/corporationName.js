import {
    getDeliverNameListInfos, editDeliverNameInfosList, delClickedDeliverNameInfo,addDeliverNameInfoList
}
    from "../../../utils/interface.js"

//获取生产厂家信息
export const getDeliverNameListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DELIVERNAME_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDeliverNameListInfos(pramas, cb);
    }
}

//编辑商业公司异名
export const editDeliverNameInfoList = function (params = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_DELIVERNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editDeliverNameInfosList(params, cb);
    }
}

//删除异名商业公司信息
export const delDeliverNameInfoList = function (params) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_DELIVERNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delClickedDeliverNameInfo(params, cb);
    }
}

//添加商业公司异名
export const addDeliverNameInfo = function (params) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DELIVERNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addDeliverNameInfoList(params, cb);
    }
}