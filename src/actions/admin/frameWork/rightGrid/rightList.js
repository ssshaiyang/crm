import {
    getEmployees

} from "../../../../utils/interface.js"
export const getFrameWorkmemberList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'FRAME_WORK_MEMBER_LIST',
                    payload: {
                        data: res.data.data
                    }
                }
                let totalAction={
                    type:"FRAME_WORK_LIST_TOTALCOUNT",
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
            // filter:params.filter||state.rightSearch.filter,
            page:params.page||state.frameWorkPage.page,
            limit:params.limit||state.frameWorkPage.limit,
            /*department_id:params.development||state.centerSearch.branch,
            position_id:params.position||state.centerSearch.position,*/
            department_id :-1,
            position_id:-1
        }
        getEmployees(selfParams, cb)
    }
}
