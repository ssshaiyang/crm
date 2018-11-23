export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'OUT_FOUNT_RECORD_MODAL':
            newState.recordVisible = action.payload.recordVisible;
            break;
        case 'OUT_FOUNT_DETAIL_MODAL':
            newState.detailVisible = action.payload.detailVisible;
            break;
        case 'OUT_FOUNT_OPERATION_MODAL':
            newState.operationVisible = action.payload.operationVisible;
            break;
        case 'OUT_FOUNT_CONDITION_SELECTED':
            newState.condition = action.payload.condition;
            break;
        //id
        case 'OUT_FOUNT_USEFUL_ID':
            console.log('payId',action.payload)
            newState.relate_form_id = action.payload.relate_form_id;
            newState.relate_detail_id = action.payload.relate_detail_id;
            break;
        case "OUT_FOUNT_SEARCH_FILTER":
            newState.filter = action.payload.filter;
            break;
        case "GET_OUT_FONT_LIST":
            newState.data = action.payload.data;
            newState.totalCount=action.payload.totalCount;
            break;
        case "OUT_FOUNT_CHANGE_LIMIT":
            newState.page = action.payload.page;
            newState.limit=action.payload.limit;
            break;
        case "OUT_FOUNT_PAYMENT_CHECK_OUT":
            newState.checkOut = action.payload.checkOut;
            break;
        case "OUT_FOUNT_PAYMENT_PAYMENT_CHECK_OUT":
            newState.paymentCheckOut = action.payload.paymentCheckOut;
            break;
        case "OUT_FOUNT_PAYMENT_PAYMENT_TOP":
            newState.paymentTop = action.payload.paymentTop;
            newState.pay_id = action.payload.pay_id;
            break;
        case "OUT_FOUNT_PAYMENT_PAYMENT_CENTER":
            newState.paymentCenter = action.payload.paymentCenter;
            break;
        case "OUT_FOUNT_PAYMENT_ID":
            newState.pay_manage_id = action.payload.pay_manage_id;
            break;
        case "OUT_FOUNT_PAYMENT_ACCOUNTS_USER_LIST":
            newState.accountList = action.payload.accountList;
            break;
    }
    return newState;
}
/*checkOut:[],
    paymentCheckOut:[],
    paymentTop:[],
    paymentCenter:[]*/
