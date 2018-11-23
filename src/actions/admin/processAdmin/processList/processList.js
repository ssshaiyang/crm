'use strict';
import {
    getProcessListData
} from '../../../../utils/interface.js'

export const getProcessData = function(params = {}) {

    return (dispatch,getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                console.log(res)
                let ruleId = 0;
                var  dataText =[];
                var dataTotalCount = 0;
                if(res.data.total_count != undefined){
                    dataText =res.data.data;
                    dataTotalCount = res.data.total_count;
                    ruleId = res.data.data[0].rule_id;
                }
                let action = {
                    type: 'GET_PROCESS_ADMIN_LIST',
                    payload: {
                        ruleId:ruleId,
                        data: dataText,
                        totalCount:dataTotalCount
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        var applyTypeId = params
        if(params.length==undefined){
            applyTypeId =1
        }
        let selfParams = {
            apply_type_id:applyTypeId,
            page:params.page||state.getProcessAdminList.page,
            limit:params.limit||state.getProcessAdminList.limit,
        }
        getProcessListData(selfParams, cb)
    }
}


export const getProcessPage = function(page,size) {
    return {
        type: 'GET_PROCESS_LIST_PAGE',
        payload: {
            limit:size,
            page:page ,
        }
    }
}
