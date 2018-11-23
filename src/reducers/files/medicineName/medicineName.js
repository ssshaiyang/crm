export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_MEDICINENAME_INFO':
            newState.data = action.payload.data;
            break;
        case 'EDIT_DRUGNAME_INFO':
            newState.editDrugNameCode = action.payload.data;
            break;
        case 'DEL_DRUGNAME_INFO':
            newState.delDrugNameCode = action.payload.data;
            break;
        case 'SEARCH_MEDICINENAME_INFO':
            newState.data = action.payload.data;
            break;
        case 'ADD_DRUGNAME_INFO':
            newState.addDrugNameCode = action.payload.data;
            break;
        case 'GET_USER_INFO':
            newState.userInfo = action.payload.data;
            break;

    }
    return newState;
}