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
import {getFlowsData} from "../../../utils/interface";

export const CheckBoxAction = function(val) {
    return {

        type: 'DIRECTION_GRAB_CHECK_OUT',
        payload: {
            checkBoxVisible:val.checkBoxVisible,
            monthVisible:val.monthVisible
        }
    }
}

export const getFlowDataList = function(param = {}) {
    return (dispatch) => {
        function cb(res) {
            console.log(res)
            console.log(res.error_code)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "INVENTORY_FORM_DATA_INIT",
                    payload: {
                        checkBoxVisible: res.data
                    }
                }
                dispatch(action);
            }
        }
        getFlowsData(param, cb);
    }
}