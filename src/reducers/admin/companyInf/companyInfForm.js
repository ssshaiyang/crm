export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'COMPANY_INFO_MODIFY_CLEAR_MODAL':
            newState={
                company_logo:'',
                company_name:'',
                company_phone:'',
                company_fax:'',
                company_address:'',
                company_zip_code:'',
                company_website:'',
        }
            break;
        case 'COMPANY_INFO_MODAL_COMPLETE_MEMBER_INF':
            newState.data[action.payload.key] = action.payload.value;
            break;
        case 'COMPANY_INFO_TABLE':
            newState.data= action.payload.data;
            newState.urlImg=action.payload.company_logo
            break;
         case 'COMPANY_INFO_IMG':
             newState.urlImg= action.payload.urlImg;
             break;
        case "COMPANY_INFO_IMG_MODAL" :
            newState.visible= action.payload.visible;
            break;
    }
    return newState;
}


