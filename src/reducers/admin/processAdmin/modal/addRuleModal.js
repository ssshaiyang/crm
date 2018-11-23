'use strict';

export default  function getProcessAdminModal(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_PROCESS_ADMIN_MODAL':
            newState.data = action.payload.data;
            break;
        case "GET_PROCESS_MEMBER_LIST":
            newState.memberList = action.payload.data;
            newState.totalCount=action.payload.totalCount;
            break;
        case "GET_PROCESS_ADMIN_MODAL_PAGE":
            newState.page = action.payload.page;
            newState.limit=action.payload.limit;
            break;
        case "ADD_SELECTED_API":
            newState.api = action.payload.api;
            break;
        case "GET_MEMBER_INPUT_FILTER":
            newState.filter = action.payload.filter;
            break;
    }
    return newState;
}
