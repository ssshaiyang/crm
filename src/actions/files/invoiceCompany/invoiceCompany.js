import {
    getBillingInfoLists, addBillingContactInfoList, getBillingContactInfoList, addBillingBankAccountInfoList, getBillingBankAccountInfoList,
    delBillingContactInfoList, delBankAccountInfoList, editBillingInfoList, delBillingInfoList, addBillingInfoList
}
    from "../../../utils/interface.js"

//获取开票公司信息
export const getBillingInfoList = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_BILLING_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBillingInfoLists(pramas, cb);
    }
}

//添加开票公司联系人
export const addBillingContactInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_BILLING_CONTACT",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addBillingContactInfoList(pramas, cb);
    }
}

//查询开票公司联系人
export const getBillingContactInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_BILLING_CONTACT",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBillingContactInfoList(pramas, cb);
    }
}

//添加开票公司银行账户
export const addBillingBankAccountInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_BILLING_BANK_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addBillingBankAccountInfoList(pramas, cb);
    }
}

//查询开票公司银行账户
export const getBillingBankAccountInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_BILLING_BANK_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBillingBankAccountInfoList(pramas, cb);
    }
}

//删除开票公司联系人信息
export const delBillingContactInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_BILLING_COONTACT",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delBillingContactInfoList(param, cb);
    }
}

//删除开票公司银行信息
export const delBankAccountInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_BANK_ACCOUNT",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delBankAccountInfoList(param, cb);
    }
}

//编辑开票公司信息
export const editBillingInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_BILLING_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editBillingInfoList(param, cb);
    }
}

//删除开票公司信息
export const delBillingInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_BILLING_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delBillingInfoList(param, cb);
    }
}

//添加开票公司信息
export const addBillingInfo = function (params) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_BILLING_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addBillingInfoList(params, cb);
    }
}
