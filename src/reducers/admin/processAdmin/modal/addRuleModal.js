'use strict';

export default  function getProcessAdminModal(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_PROCESS_ADMIN_MODAL':
            newState.changeFormData = action.payload.data;
            break;
        case 'UPDATE_DATA':
            console.log(action.payload.data)
            newState.changeFormData = action.payload.data;
            break;
        case 'UPDATE_BRANCH_MODAL':
            newState.changeFormData = action.payload.data;
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
        case "SAVE_CHANGE_DATA":
            newState.changeData = action.payload.changeData;
            break;
        case 'CHANGE_FORM_DATA':
            newState.changeFormData = action.payload.data;
            newState.idList = action.payload.idList;
            break;
        case 'SAVE_ID_LIST':
            newState.idList = action.payload.idList;
            break;
        case 'PUT_CHANGE_LIST_DATA':
            newState.code = action.payload.code;
            break;
    }
    return newState;
}
