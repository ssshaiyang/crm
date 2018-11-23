'use strict';

export default  function getProcessType(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_PROCESS_TYPE':
            console.log('list',action.payload.data)
            newState.data = action.payload.data;
            break;
        case 'TYPE_SELECTED_ID':
            newState.selected.apply_type_id = action.payload.firstId;
            break;
        case 'GET_MODIFY_NOW':
            newState.selected[action.payload.key] = action.payload.value;
            break;
        case 'ADD_RULES_MODAL':
            newState.visible=action.payload.visible;
            newState.modalType=action.payload.modalType;
            break;
    }
    return newState;
}
