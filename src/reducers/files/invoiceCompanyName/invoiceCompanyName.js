export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DIFF_BILLING_INFO':
            newState.data = action.payload.data;
            break;
        case 'EDIT_DIFF_BILLING_INFO':
            newState.editDiffBillingCode = action.payload.data;
            break;
        case 'DEL_DIFF_BILLING_INFO':
            newState.delDiffBillingCode = action.payload.data;
            break;
        case 'ADD_DIFF_BILLING_INFO':
            newState.addDiffBillingCode = action.payload.data;
            break;
    }
    return newState;
}