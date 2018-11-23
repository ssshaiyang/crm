export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_MEMBER_LOT_ADD':
            newState.visible = action.payload.visible;
            break;
    }
    return newState
}