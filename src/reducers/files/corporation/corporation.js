export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DELIVER_INFO':
            newState.data = action.payload.data;
            break;
        case 'GET_AREA_INFO':
            newState.areaInfo = action.payload.data;
            break;
        case 'DEL_CONSTACT_INFO':
            newState.delConstactCode = action.payload.data;
            break;
        case 'GET_DELIVER_CONSTACT_INFO':
            newState.deliverConstactInfo = action.payload.data;
            break;
        case 'GET_DELIVER_BANK_INFO':
            newState.deliverBankInfo = action.payload.data;
            break;
        case 'DEL_BANK_INFO':
            newState.delBankCode = action.payload.data;
            break;
        case 'ADD_CONTACT_INFO':
            newState.addContactCode = action.payload.data;
            break;
        case 'ADD_BANK_INFO':
            newState.addBankCode = action.payload.data;
            break;
        case 'EDIT_DELIVER_INFO':
            newState.editDeliverInfoCode = action.payload.data;
            break;
        case 'ADD_DELIVER_INFO':
            newState.addDeliverInfoCode = action.payload.data;
            break;
        case 'DEL_DELIVER_INFO':
            newState.delDeliverInfoCode = action.payload.data;
            break;
    }
    return newState;
}