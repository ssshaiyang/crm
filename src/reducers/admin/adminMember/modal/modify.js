export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADMIN_MODIFY_CLEAR_MODAL_ADMIN':
            newState.data={
                 employee_id: "",
                employee_name: "",
                position_id: "" ,
                department_id: "",
                role_id: "",
                telephone:"",
                office_phone:"",
                sex: "",
                email: "",
                webchat: "",
                qq: "",
                address: "",
                enter_time:undefined,
                birthday:"",
                superior_name:"",
                employee_account_name:"",
                employee_account_user:"",
                update_time:"",
                password:""
        }
            break;
        case 'ADD_MEMBER_MODAL_COMPLETE_MEMBER_INF':
            console.log("action",action.payload.key,action.payload.value)
            newState.data[action.payload.key] = action.payload.value;
            break;
        case 'ADMIN_MODIFY_MODAL':
            newState.modalType=action.payload.modalType;
            newState.modifyModal = action.payload.modifyModal;
            break;
        case 'ADMIN_MEMBER_LIST_MODIFY_EMPLOYEE':
            newState.employeeId=action.payload.employeeId;
            newState.data=action.payload.data;
            newState.api = action.payload.api;
            break;
        case 'ADMIN_MEMBER_GET_DEVELOPMENT_OPTIONS':
            newState.developmentOptions=action.payload.branch;
            break;
        case 'ADMIN_MEMBER_GET_POSITION_OPTIONS':
            newState.positionOptions=action.payload.position;
            break;
       /* case 'ADMIN_MEMBER_GET_BANKLIST':
            newState.bankType=action.payload.bankType;
            break;*/
        case "ADMIN_MEMBER_GET_ROLES_LIST":
            newState.roles=action.payload.roles
            break;
    }
    return newState;
}


