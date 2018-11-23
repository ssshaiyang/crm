export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'COST_CONTROL_ADD_MODAL':
            newState.addVisible = action.payload.addVisible;
            newState.modalType = action.payload.modalType;
            break;


    }
    return newState;
}