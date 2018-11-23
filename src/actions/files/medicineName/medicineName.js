import { getDrugNameListsInfo, getUserInfos, editClickedDrugNameInfo, delClickedDrugNameInfo, searchDrugNameInfos,
    addDrugNameInfoLists, addManufacturerFormInfoLists
} from "../../../utils/interface.js"

//添加生产厂家
export const addManufacturerFormInfo = function(params){
    return(dispatch)=>{
        function cb(res){
            console.log("sssss")
            if (res.error_code===GLOBALSUCCESS) {
                let action = {
                    type:"ADD_MANUFACTURER_INFO",
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action)
            }
        }
        addManufacturerFormInfoLists(params,cb);
    }
}

//获取药品异名列表信息
export const getDrugNameListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_MEDICINENAME_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDrugNameListsInfo(pramas, cb);
    }
}

//获取用户信息
export const getUser = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_USER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getUserInfos(pramas, cb);
    }
}

//编辑药品异名信息
export const editClickDrugNameInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_DRUGNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editClickedDrugNameInfo(pramas, cb);
    }
}

//删除异名药品信息
export const delClickDrugNameInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_DRUGNAME_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delClickedDrugNameInfo(pramas, cb);
    }
}

//搜索药品异名
export const searchDrugNameInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "SEARCH_MEDICINENAME_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        searchDrugNameInfos(pramas, cb);
    }
}

//添加药品异名信息
export const addDrugNameInfoList = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DRUGNAME_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        addDrugNameInfoLists(pramas, cb);
    }
}