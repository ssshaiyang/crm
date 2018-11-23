export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_MANU_NAME_LIST':
            newState.data = action.payload.data;
            break;
        case 'ADD_MANUNAME_INFO':
            newState.addManuCode = action.payload.data;
            break;
        case 'SEARCH_MANUNAME_INFO':
            newState.searchManuList = action.payload.data;
            break;
        case 'EDIT_MANUNAME_INFO':
            newState.editManuNameCode = action.payload.data;
            break;
        case 'DEL_MANUNAME_INFO':
            newState.delManuNameCode = action.payload.data;
            break;
    }
    return newState;
}