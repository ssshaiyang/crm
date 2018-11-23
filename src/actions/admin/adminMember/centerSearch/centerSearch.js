
import {getMemberSelect} from "../../../../utils/interface.js"
/*
export const memberList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'ADMIN_MEMBER_SELECTS',
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            // 'drug_name': params.filter || state.productAllFilter.filterValue,
            filter:params.filter||state.rightSearch.filter,
            page:params.page||state.memberListPage.page,
            limit:params.limit||state.memberListPage.limit,
            total_count:params.totalCount||state.memberListPage.totalCount,
        }
        console.log('params',selfParams)
        getMemberSelect(selfParams, cb)
    }
}
*/



/*
 * @Author: lcj
 * @Date:   2017-08-22 08:35:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 10:30:04
 * @Descriptions:
 */
import {
    getMemberSelectBranch,
    getMemberSelectPosition
} from '../../../../utils/interface.js'

export const initSelects = function() {
    return {
        type: 'INIT_MEMBER_LIST_SELECTS'
    }
}

export const changeBranchSelectValue = function(value) {
    return {
        type: 'CHANGE_BRANCH_SELECT_VALUE',
        payload: {
            branch: value
        }
    }
}

export const changePositionSelectValue = function(value) {
    return {
        type: 'CHANGE_POSITION_SELECT_VALUE',
        payload: {
            position: value
        }
    }
}

export const getMemberBranch = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_MEMBER_LIST_BRANCH',
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

export const getMemberPosition = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_MEMBER_LIST_POSITION',
                    payload: {
                        position: res.data
                    }
                }
                dispatch(action);

            }
        }
        getMemberSelectPosition(null, cb);
    }
}
