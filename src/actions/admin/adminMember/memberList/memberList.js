import {
    getEmployees

} from "../../../../utils/interface.js"
export const memberList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            console.log('resres',res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'ADMIN_MEMBER_LIST',
                    payload: {
                        data: res.data.data
                    }
                }
                let totalAction={
                    type:"ADMIN_MEMBER_LIST_TOTALCOUNT",
                    payload:{
                        totalCount:res.data.total_count
                    }
                }
                dispatch(totalAction)
                dispatch(action)
            }
        }
        const state = getState();

        let selfParams = {
            // 'drug_name': params.filter || state.productAllFilter.filterValue,
            filter:params.filter||state.rightSearch.filter,
            page:params.page||state.memberListPage.page,
            limit:params.limit||state.memberListPage.limit,
            department_id:params.development||state.centerSearch.branch,
            position_id:params.position||state.centerSearch.position,
        }
        console.log('params',selfParams)
        getEmployees(selfParams, cb)
    }
}
