export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DEPART_SELECT_LIST_INFO':
            newState.data = action.payload.data;
            break;
        case 'GET_ALL_MENU_LIST':
            newState.data = action.payload.data
            break;
    }
    return newState
}