export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'CAPITAL_ADMIN_BANK_LIST':
            newState.data = action.payload.data;
            newState.totalCount = action.payload.totalCount;
            break;
        case 'CAPITAL_ADMIN_BANK_LIST_PAGE':
            newState.page = action.payload.page;
            newState.limit = action.payload.limit;
            break;
        case 'CAPITAL_ADMIN_BANK_LIST_FILTER':
            newState.filter = action.payload.filter;
            break;
        case 'CAPITAL_ADMIN_BANK_LIST_RECORD_MODAL':
            newState.recordVisible = action.payload.recordVisible;
            break;
        case 'CAPITAL_ADMIN_BANK_LIST_EDIT_MODAL':
            newState.editVisible = action.payload.editVisible;
            newState.modalType = action.payload.modalType;
            break;
      /*  case "ACCOUNT_USER":
            newState.formData.account_user=action.payload.account_user
            break;
        case "ACCOUNT_PHONE":
            newState.formData.account_phone=action.payload.account_phone
            break;
        case "ACCOUNT_NAME":
            newState.formData.account_name=action.payload.account_name
            break;
        case "ACCOUNT_ACCOUNT":
            newState.formData.bank_account=action.payload.bank_account
            break;*/
        case "CAPITAL_ADMIN_SAVE_API":
            newState.formData=action.payload.api
            break;
        case 'CAPITAL_ADMIN_MODAL_COMPLETE_MEMBER_INF':
            newState.formData[action.payload.key] = action.payload.value;
            break;
        case 'CAPITAL_ADMIN_SAVE_ACCOUNT_ID':
            newState.account_id = action.payload.account_id;
            break;
        case "CLEAR_CAPITAL_FORM":

            newState={
            data:[],
                limit:5,
                page:1,
                totalCount:0,
                filter:'',
                editVisible:false,
                recordVisible:false,
                modalType:0,
                account_id:"",
                api:"",
                formData:{
                    account_user:"",
                    account_phone:"",
                    account_name:"",
                    bank_account:"",
                    account_usage:"",
               },
                record:[],
                totalCountRecord:0
              }
            break;
        case "CLEAR_CAPITAL_PART_FORM":
            newState.formData={
                    account_user:"",
                    account_phone:"",
                    account_name:"",
                    bank_account:"",
                    account_usage:"",
            }
            break;
        case "GET_RECORD_BUTTON_RECORD":
             newState.record=action.payload.data
             // newState.totalCountRecord=action.payload.totalCountRecord
            break;

    }
    return newState;
}

