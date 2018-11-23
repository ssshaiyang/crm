import {
    getDeliverAllListInfo, getAreaInfoLists, delClickedConstactInfoList, getDeliverContactInfosList, getDeliverBankInfosList,
    delBankInfoListInfo, addContactsInfosList, addContactInfosList, addDeliverBankInfosList, editClickedDeliverInfoList,
    addDeliverInfoList, delClickedDeliverInfoList,getEmployees
}
    from "../../../utils/interface.js"

//获取生产厂家信息
export const getDeliverListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DELIVER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDeliverAllListInfo(pramas, cb);
    }
}

//获取招商人员
export const getEmployeeInfo = function(pramas = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type:"GET_EMPLOYEE_INFO",
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action)
            }
        }
        getEmployees(pramas,cb)
    }
}

//获取区域信息
export const getAreaInfo = function () {
    return (dispatch) => {
        function cb(res) {
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
        getAreaInfoLists(null, cb);
    }
}

//删除联系人信息
export const delConstactInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_CONSTACT_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delClickedConstactInfoList(param, cb);
    }
}

//获取商业公司联系人信息
export const getDeliverConstactInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DELIVER_CONSTACT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDeliverContactInfosList(param, cb);
    }
}

//获取商业公司银行信息
export const getDeliverBankInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DELIVER_BANK_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDeliverBankInfosList(param, cb);
    }
}

//删除商业银行信息
export const delBankInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_BANK_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delBankInfoListInfo(param, cb);
    }
}

//添加联系人
export const addContactsInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
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
        addContactInfosList(param, cb);
    }
}

//添加银行账号
export const addDeliverBankInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_BANK_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addDeliverBankInfosList(param, cb);
    }
}

//编辑商业公司信息列表
export const editDeliverInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_DELIVER_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editClickedDeliverInfoList(param, cb);
    }
}

//添加商业公司信息
export const addDeliverInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DELIVER_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addDeliverInfoList(param, cb);
    }
}

//删除商业公司信息
export const delDeliverInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_DELIVER_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delClickedDeliverInfoList(param, cb);
    }
}