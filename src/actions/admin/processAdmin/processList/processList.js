'use strict';
import {
    getProcessListData
} from '../../../../utils/interface.js'

export const getProcessData = function(params = {}) {

    return (dispatch,getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_PROCESS_ADMIN_LIST',
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
            page:params.page||state.getProcessAdminList.page,
            limit:params.limit||state.getProcessAdminList.limit,
        }
        console.log('selt',selfParams)
        getProcessListData(selfParams, cb)
    }
}


export const getProcessPage = function(page,size) {
    return {
        type: 'GET_PROCESS_LIST_PAGE',
        payload: {
            limit:size,
            page:page
        }
    }
}
