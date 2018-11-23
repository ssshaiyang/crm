export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DIFF_HOSPITAL_INFO':
            newState.data = action.payload.data;
            break;
        case 'ADD_DIFF_HOSPITAL_INFO':
            newState.addDiffHispitalCode = action.payload.data;
            break;
        case 'EDIT_DIFF_HOSPITAL_INFO':
            newState.editDiffHispitalCode = action.payload.data;
            break;
        case 'DELETE_DIFF_HOSPITAL_INFO':
            newState.delDiffHispitalCode = action.payload.data;
            break;
    }
    return newState;
}