'use strict';

export default  function getProcessAdminList(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_PROCESS_ADMIN_LIST':
            newState.data = action.payload.data;
            newState.totalCount=action.payload.totalCount;
            newState.ruleId=action.payload.ruleId
            break;
        case 'GET_PROCESS_LIST_PAGE':
            newState.page = action.payload.page;
            newState.limit=action.payload.limit
            break;
    }
    return newState;
}
