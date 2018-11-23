export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_SELECT_DEPART_LIST':
            newState.data = action.payload.visible;
            newState.code = action.payload.code
            break;
        case 'ADD_DEPART_INFO':
            newState.code = action.payload.code
            break;
    }
    return newState
}