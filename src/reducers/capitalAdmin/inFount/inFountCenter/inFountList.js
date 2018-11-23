export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'IN_FOUNT_RECORD_MODAL':
            newState.recordVisible = action.payload.recordVisible;
            break;
        case 'IN_FOUNT_DETAIL_MODAL':
            newState.detailVisible = action.payload.detailVisible;
            break;
        case 'IN_FOUNT_OPERATION_MODAL':
            newState.operationVisible = action.payload.operationVisible;
            break;
        case 'IN_FOUNT_ALL_DATA_LIST':
            newState.data = action.payload.data;
            newState.totalCount = action.payload.totalCount;
            break;
        case 'IN_FOUNT_CHANGE_CONDITION':
            newState.condition = action.payload.condition;
            break;
        case 'IN_FOUNT_CHANGE_PAGE':
            newState.page = action.payload.page;
            newState.limit = action.payload.limit;
            break;
        case 'IN_FOUNT_CHANGE_FILTER':
            newState.filter = action.payload.filter;
            break;
        case "IN_FOUNT_CHECK_OUT_LIST":
            newState.checkOutDetail = action.payload.checkOutDetail;
            break;
        case "IN_FOUNT_USEFUL_ID":
            newState.relate_form_id=action.payload.relate_form_id
            newState.relate_detail_id=action.payload.relate_detail_id
            break;
        case "IN_FOUNT_PAY_PAYMENT_ID":
            newState.pay_manage_id=action.payload.pay_manage_id
            break;
        case "IN_FOUNT_PAY_PAYMENT_CHECK_OUT_LIST":
            newState.inFountPaymentCheck=action.payload.inFountPaymentCheck
            break;

        case "IN_FOUNT_PAYMENT_PAYMENT_TOP":
            newState.inFountPaymentTop=action.payload.inFountPaymentTop
            newState.pay_id=action.payload.pay_id
            break;
        case "IN_FOUNT_PAYMENT_PAYMENT_CENTER":
            newState.inFountPaymentCenter=action.payload.inFountPaymentCenter
            break;
        case "IN_FOUNT_PAYMENT_ACCOUNTS_USER_LIST":
            newState.accountList=action.payload.accountList
            break;




    }
    return newState;
}

