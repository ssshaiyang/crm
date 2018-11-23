import {
    getCapitalBankList,
    getCapitalBankListDetail

} from "../../../../utils/interface.js"
export const bankAllList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'CAPITAL_ADMIN_BANK_LIST',
                    payload: {
                        data: res.data.data,
                        totalCount:res.data.total_count
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();

        let selfParams = {
            filter:params.filter||state.bankList.filter,
            page:params.page||state.bankList.page,
            limit:params.limit||state.bankList.limit,
        }
        console.log('params',selfParams)
        getCapitalBankList(selfParams, cb)
    }
}

export const getbankAllListRecord=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            console.log("ssssssmmmm",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_RECORD_BUTTON_RECORD',
                    payload: {
                        data: res.data,
                        // totalCountRecord:res.data.total_count
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();

        let selfParams = {
            account_id:params.account_id||state.bankList.account_id,
        }

        getCapitalBankListDetail(selfParams, cb)
    }
}
//store中对应
export const completeMemberInf = function(field) {
    let data = [];
    for (let i in field) {
        data.push(field[i])
    }
    data = typeof data[0] === "object" ? data[0] : field;
    return {
        type: 'CAPITAL_ADMIN_MODAL_COMPLETE_MEMBER_INF',
        payload: {
            key: data.name,
            value: data.value
        }
    }
}
export const filterActionCreater = function(val) {
    return {
        type: 'CAPITAL_ADMIN_BANK_LIST_FILTER',
        payload: {
            filter:val
        }
    }
}
export const pageActionCreater = function(page,limit) {
    return {
        type: 'CAPITAL_ADMIN_BANK_LIST_PAGE',
        payload: {
            page:page,
            limit:limit
        }
    }
}
export const recordActionCreater = function(val) {
    return {
        type: 'CAPITAL_ADMIN_BANK_LIST_RECORD_MODAL',
        payload: {
            recordVisible:val
        }
    }
}
export const editActionCreater = function(val) {
    return {
        type: 'CAPITAL_ADMIN_BANK_LIST_EDIT_MODAL',
        payload: {
            editVisible:val.editVisible,
            modalType:val.modalType
        }
    }
}
export const setApiActionCreater = function(val) {
    return {
        type: 'CAPITAL_ADMIN_SAVE_API',
        payload: {
           api:val
        }
    }
}
export const setAccountIdApiActionCreater = function(val) {
    return {
        type: 'CAPITAL_ADMIN_SAVE_ACCOUNT_ID',
        payload: {
            account_id:val
        }
    }
}

/*export const phoneActionCreater = function(val) {
    return {
        type: 'ACCOUNT_PHONE',
        payload: {
            account_phone:val
        }
    }
}
export const userActionCreater = function(val) {
    return {
        type: 'ACCOUNT_USER',
        payload: {
            account_user:val
        }
    }
}
export const nameActionCreater = function(val) {
    return {
        type: 'ACCOUNT_NAME',
        payload: {
            account_name:val
        }
    }
}
export const accountActionCreater = function(val) {
    return {
        type: 'ACCOUNT_ACCOUNT',
        payload: {
            bank_account:val
        }
    }
}*/
export const usageActionCreater = function(val) {
    return {
        type: 'ACCOUNT_USAGE',
        payload: {
            account_usage:val
        }
    }
}
export const clearCapitalForm = function() {
    return {
        type: 'CLEAR_CAPITAL_FORM',
    }
}
export const clearPartCapitalForm = function() {
    return {
        type: 'CLEAR_CAPITAL_PART_FORM',
    }
}


