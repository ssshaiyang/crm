export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DELIVERNAME_INFO':
            newState.data = action.payload.data;
            break;
        case 'EDIT_DELIVERNAME_INFO':
            newState.editDeliverNameCode = action.payload.data;
            break;
        case 'DEL_DELIVERNAME_INFO':
            newState.delDeliverNameCode = action.payload.data;
            break;
        case 'ADD_DELIVERNAME_INFO':
            newState.addDeliverNameCode = action.payload.data;
            break;
    }
    return newState;
    console.log('redeceName')
}