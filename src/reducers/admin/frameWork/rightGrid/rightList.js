export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'FRAME_WORK_MEMBER_LIST':
            newState.data = action.payload.data;
            break;
    }
    return newState
}