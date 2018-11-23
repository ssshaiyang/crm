import {
    getManufacturerNameListInfos,addManuNameInfosList,searchManufacturerNameInfoList,editManufacturerInfoLists,
    delClickedManufacturerNameInfoList
}
    from "../../../utils/interface.js"

//获取药品列表信息
export const getManufacturerNameListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_MANU_NAME_LIST",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getManufacturerNameListInfos(pramas, cb);
    }
}

//添加异名生产厂家
export const addManuNameInfoList = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_MANUNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addManuNameInfosList(pramas, cb);
    }
}

//搜索生产厂家异名
export const searchManufacturerNameInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "SEARCH_MANUNAME_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        searchManufacturerNameInfoList(pramas, cb);
    }
}

//编辑生产厂家异名
export const editManufacturerInfoList = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_MANUNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editManufacturerInfoLists(pramas, cb);
    }
}

//删除异名厂家信息
export const delManufacturerNameInfoList = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_MANUNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delClickedManufacturerNameInfoList(pramas, cb);
    }
}