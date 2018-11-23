import {
    getManufacturerListInfos, manufacturerContactListInfos, addContactInfoListInfo, addBankAccountInfoList,
    getBankAccountInfoList,getAreaInfoList,delManuInfoLists
}
    from "../../../utils/interface.js"

//获取生产厂家信息
export const getManufacturerListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_ALL_MANUFACTURER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getManufacturerListInfos(pramas, cb);
    }
}

//查询联系人列表
export const manufacturerContactListInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CONTACT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        manufacturerContactListInfos(param, cb);
    }
}

//添加联系人
export const addContactInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_CONTACT_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addContactInfoListInfo(param, cb);
    }
}

//添加银行信息
export const addBankAccountInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_BANK_ACCOUNT_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addBankAccountInfoList(param, cb);
    }
}

//查看银行账户信息
export const getBankAccountInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_BANK_ACCOUNT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBankAccountInfoList(param, cb);
    }
}

//获取地区信息
export const getAreaInfo = function () {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_AREA_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAreaInfoList(null, cb);
    }
}

//删除生产厂家信息
export const delManuInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_MANU_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delManuInfoLists(param, cb);
    }
}

