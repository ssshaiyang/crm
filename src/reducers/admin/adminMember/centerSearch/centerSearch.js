/*
 * @Author: lcj
 * @Date:   2017-08-22 08:22:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 10:48:07
 * @Descriptions:
 */

export default function customerListPagination(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'INIT_MEMBER_LIST_SELECTS':
            newState.branch = "-1";
            newState.position = "-1";
            break;
        case 'GET_MEMBER_LIST_BRANCH':
            console.log('branch3',action.payload.branch)
            newState.developmentOptions = action.payload.branch;
            break;
        case 'GET_MEMBER_LIST_POSITION':
            newState.positionOptions = action.payload.position;
            break;
        case 'CHANGE_BRANCH_SELECT_VALUE':
            newState.branch = action.payload.branch;
            break;
        case 'CHANGE_POSITION_SELECT_VALUE':
            newState.position = action.payload.position;
            break;
    }
    return newState;
}