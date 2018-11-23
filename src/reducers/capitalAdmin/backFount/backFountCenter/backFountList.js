export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'BACK_FOUNT_RECORD_MODAL':
            newState.recordRender = action.payload.recordRender;
            break;
        case 'BACK_FOUNT_DETAIL_MODAL':
            newState.detailRender = action.payload.detailRender;
            break;
        case 'BACK_FOUNT_OPERATION_MODAL':
            newState.operationRender = action.payload.operationRender;
            break;
        case 'BACK_FOUNT_CONDITION':
            newState.condition = action.payload.condition;
            break;
        case 'BACK_FOUNT_ALL_DATA_LIST':
            newState.data = action.payload.data;
            newState.totalCount = action.payload.totalCount;
            break;
        case 'BACK_FOUNT_FILTER':
            newState.filter = action.payload.filter;
            break;
        case 'BACK_FOUNT_PAGINATION':
            newState.limit = action.payload.limit;
            newState.page = action.payload.page;
            break;
        case"BACK_FOUNT_STORE_ID":
            newState.relate_form_id = action.payload.relate_form_id;
            newState.relate_detail_id = action.payload.relate_detail_id;
            break;
        case"BACK_FOUNT_CHECK_OUT_DETAIL":
            newState.billsDetail = action.payload.billsDetail;
            break;
        case"BACK_FOUNT_STORE_PAY_MANAGE_ID":
            newState.pay_manage_id = action.payload.pay_manage_id;
            break;
        case"BACK_FOUNT_PAYMENT_RECORD":
            newState.backRecord = action.payload.backRecord;
            break;

    }
    return newState;
}

