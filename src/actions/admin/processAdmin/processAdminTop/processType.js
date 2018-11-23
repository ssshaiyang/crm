'use strict';
import {
    getProcessType
} from '../../../../utils/interface.js'
import {putAllDepartInfo} from "../../../../utils/interface";

export const getProcessTopType = function() {

    return (dispatch) => {

        function cb(res) {
            console.log("ac",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_PROCESS_TYPE',
                    payload: {
                        data: res.data
                    }
                }
                let actionId = {
                    type: 'TYPE_SELECTED_ID',
                    payload: {
                        firstId:res.data[0].apply_type_id
                    }
                }

                dispatch(actionId)
                dispatch(action)
            }
        }
        getProcessType(null, cb)
    }
}
/**
 * [向store的data的对应的key填入值]
 */
export const completeMemberInf = function(field) {
    let data = [];
    for (let i in field) {
        data.push(field[i])
    }
    data = typeof data[0] === "object" ? data[0] : field;
    return {
        type: 'GET_MODIFY_NOW',
        payload: {
            key: data.name,
            value: data.value
        }
    }
}
export const showModal = function(val) {
    return {
        type: 'ADD_RULES_MODAL',
        payload: {
            visible:val.visible,
            modalType:val.modalType
        }
    }
}


