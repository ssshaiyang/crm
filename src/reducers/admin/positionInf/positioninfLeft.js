export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DEPART_SELECT_LIST_INFO':
            newState.getDepartSelectLists= action.payload.data;
            break;
        case 'GET_ALL_MENU_LIST':
            newState.data = action.payload.data
            newState.code=0
            break;
        case 'PUT_ALL_DEPART_INFO':
            newState.code= action.payload.code
            break;
        case 'DELETE_DEPART_INFO':
            newState.code= action.payload.code
            break;
    }
    return newState
}