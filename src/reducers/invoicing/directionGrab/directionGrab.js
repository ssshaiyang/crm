export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'DIRECTION_GRAB_CHECK_OUT':
            newState.checkBoxVisible = action.payload.checkBoxVisible;
            newState.monthVisible = action.payload.monthVisible;
            break;

    }
    return newState;
}

