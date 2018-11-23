import {getMemberSelectBranch,getChargeMemberSelect} from "../../../../utils/interface.js"
export const addBranchModal = function(val) {
    return {
        type:"FRAME_WORK_ADD_BRANCH",
        payload:{
            visible:val
        }
    }

}

export const getAllBranch = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_All_LIST_BRANCH',
                    payload: {
                        branch: res.data
                    }
                }
                dispatch(action);
            }
        }
        getMemberSelectBranch(null, cb);
    }
}
//下拉框的负责人
export const getAllChargeMan = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_All_LIST_CHARGE_MAN',
                    payload: {
                        employee_select: res.data
                    }
                }
                dispatch(action);
            }
        }
        getChargeMemberSelect(null, cb);
    }
}

export const completeMemberInf = function(field) {
    let data = [];
    for (let i in field) {
        data.push(field[i])
    }
    data = typeof data[0] === "object" ? data[0] : field;
    return {
        type: 'ADD_BRANCH_SINGLE',
        payload: {
            key: data.name,
            value: data.value
        }
    }
}