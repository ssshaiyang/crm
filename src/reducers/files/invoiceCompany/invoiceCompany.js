export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_BILLING_INFO':
            newState.data = action.payload.data;
            break;
        case 'ADD_BILLING_CONTACT':
            newState.addBillingContactCode = action.payload.data;
            break;
        case 'GET_BILLING_CONTACT':
            newState.billingContactInfo = action.payload.data;
            break;
        case 'ADD_BILLING_BANK_INFO':
            newState.addBillingBankCode = action.payload.data;
            break;
        case 'GET_BILLING_BANK_INFO':
            newState.billingBankAccountInfo = action.payload.data;
            break;
        case 'DEL_BILLING_COONTACT':
            newState.delBillingContactCode = action.payload.data;
            break;
        case 'DEL_BANK_ACCOUNT':
            newState.delBillingBankCode = action.payload.data;
            break;
        case 'EDIT_BILLING_INFO':
            newState.editBillingCode = action.payload.data;
            break;
        case 'DEL_BILLING_INFO':
            newState.delBillingCode = action.payload.data;
            break;
        case 'ADD_BILLING_INFO':
            newState.addBillingCode = action.payload.data;
            break;
    }
    return newState;
}