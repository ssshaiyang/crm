import {
    getBillingNameListInfos,editBillingNameInfoList,delDiffBillingInfoList,addDiffBillingNameList
}
    from "../../../utils/interface.js"

//获取开票公司异名信息
export const getBillingNameListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DIFF_BILLING_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBillingNameListInfos(pramas, cb);
    }
}

//编辑开票公司信息
export const editBillingNameInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_DIFF_BILLING_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editBillingNameInfoList(pramas, cb);
    }
}

//删除开票公司信息
export const delDiffBillingInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_DIFF_BILLING_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delDiffBillingInfoList(pramas, cb);
    }
}

//添加开票公司异名
export const addDiffBillingNameInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DIFF_BILLING_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addDiffBillingNameList(pramas, cb);
    }
}