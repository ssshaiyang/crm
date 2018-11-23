'use strict';
import {
    getProcessListData,getEmployees
} from '../../../../utils/interface.js'
export const memberList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_PROCESS_MEMBER_LIST',
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
            filter:params.filter||state.addRulesModal.filter,
            page:params.page||state.addRulesModal.page,
            limit:params.limit||state.addRulesModal.limit,
            department_id:params.development||state.addRulesModal.branch,
            position_id:params.position||state.addRulesModal.position,
        }
        console.log('params',selfParams)
        getEmployees(selfParams, cb)
    }
}


export const getAddBranchModal = function(val) {
    return {
        type: 'GET_PROCESS_ADMIN_MODAL',
        payload: {
           data:val
        }
    }
}
export const getAddBranchModalPage = function(page, limit) {
    return {
        type: 'GET_PROCESS_ADMIN_MODAL_PAGE',
        payload: {
            page:page,
            limit:limit,
        }
    }
}
/*export const getGridApiActionCreater = function(GridApi) {
    console.log('ap',GridApi)
    return {
        type: 'ADD_SELECTED_API',
        payload: {
           api: GridApi
        }
    }
}*/
export const getGridSelected = function(val) {
    console.log("12",val)
    return {
        type: 'GET_GRID_SELECTED',
        payload: {
            api: GridApi
        }
    }
}
export const getValue = function(val) {
    return {
        type: 'GET_MEMBER_INPUT_FILTER',
        payload: {
            filter:val
        }
    }
}
