export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_ALL_MANUFACTURER_INFO':
            newState.data = action.payload.data;
            break;
        case 'GET_CONTACT_INFO':
            newState.contactInfo = action.payload.data;
            break;
        case 'ADD_CONTACT_INFO':
            newState.addContactInfoCode = action.payload.data;
            break;
        case 'ADD_BANK_ACCOUNT_INFO':
            newState.addBankInfoCode = action.payload.data;
            break;
        case 'GET_BANK_ACCOUNT_INFO':
            newState.bankInfoList = action.payload.data;
            break;
        case 'GET_AREA_INFO':
            newState.areaInfo = action.payload.data;
            break;
        case 'DEL_MANU_INFO':
            newState.delManuCode = action.payload.data;
            break;
    }
    return newState;
}