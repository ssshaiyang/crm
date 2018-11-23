export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'FRAME_WORK_ADD_BRANCH_LIST':
            newState.code = 0;
            newState.data = action.payload.data;
            break;
        case 'GET_DEPART_MEMBER':
            newState.formList = action.payload.data;
            break;
        case 'UPDATE_DEPART_MEMBER':
            newState.code = action.payload.code;
            break;
        case 'DEL_DEPART_MEMBER':
            newState.code = action.payload.code;
            break;
        case 'GET_DEPARTMENTS_DATA':
            newState.departData = action.payload.data;
            newState.departCode =action.payload.departCode;
            break;
        case 'UPDATE_DEPART_CODE':
            newState.departCode = action.payload.code;
            break;
    }
    return newState
}