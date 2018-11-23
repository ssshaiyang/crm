import {exportDate} from "../../../utils/common.js"
/*import {
    getCapitalBankList

} from "../../../../utils/interface.js"*/
/*export const bankAllList=function(params = {}){
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
}*/
export const checkOutActionCreater = function(val) {
    return {
        type: 'INVENTORY_CHECKOUT_MODAL',
        payload: {
            checkOutVisible:val
        }
    }
}
export const freezeActionCreater = function(val) {
    return {
        type: 'INVENTORY_FREEZE_VISIBLE_MODAL',
        payload: {
            freezeVisible:val
        }
    }
}
export const editModalActionCreater = function(val) {
    return {
        type: 'INVENTORY_EDIT_MODAL',
        payload: {
            editVisible:val
        }
    }
}
export const unfreezeActionCreater = function(val) {
    return {
        type: 'INVENTORY_UNFREEZE_MODAL',
        payload: {
            unfreezeVisible:val
        }
    }
}
export const initVisibleActionCreater = function(val) {
    return {
        type: 'INVENTORY_INIT_MODAL',
        payload: {
            initVisible:val
        }
    }
}
export const addAndEditActionCreater = function(val) {
    return {
        type: 'INVENTORY_ADD_AND_EDIT',
        payload: {
            addAndEdit:val.addAndEdit,
            addModalType:val.addModalType
        }
    }
}

/**
 * [向store的data的对应的key填入值]
 */
export const inventoryCompleteMemberInf = function(field) {
    let data = [];
    let name=''
    let val=""
    for (let i in field) {
        data.push(field[i])
    }
    data = typeof data[0] === "object" ? data[0] : field;
    // exportDate()
    if(data.name=="out_date"||data.name=="in_date"){
        name=data.name
        val=exportDate(data.value)
    }else{
        name=data.name
        val=data.value
    }
    return {
        type: 'INVENTORY_MODAL_COMPLETE_MEMBER_INF',
        payload: {
            key: name,
            value:val
        }
    }
}

export const inventoryGetDrugName = function(data) {
    return {
        type: 'INVENTORY_FORM_DATA_DRUG_NAME',
        payload: {
           data:data
        }
    }
}

export const initFormData = function(data) {
    return {
        type: 'INVENTORY_FORM_DATA_INIT',
    }
}







