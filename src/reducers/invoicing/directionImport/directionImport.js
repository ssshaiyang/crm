export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'DIRECTION_IMPORT_CHECK_OUT':
            newState.importVisible = action.payload.importVisible;
            newState.seeVisible = action.payload.seeVisible;
            break;
        case 'DIRECTION_IMPORT_ADD_BUY':
            newState.addBuy = action.payload.addBuy;
            break;

    }
    return newState;
}


