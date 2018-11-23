
export default function frameWorkRightBth(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADMIN_MODIFY_CLEAR_MODAL':
            newState= {
                modifyModal:false,
                employeeId:'',
                data:{
                    employee_id: "",
                    employee_name: "",
                    position: "" ,
                    department: "",
                    role: "",
                    telephone:"",
                    office_phone:"",
                    sex: "",
                    email: "",
                    webchat: "",
                    qq: "",
                    address: "",
                    enter_time:"",
                    birthday:"",
                    superior_name:"",
                    employee_account_name:"",
                    employee_account_user:""
                },
                developmentOptions: [],
                positionOptions: [],
                roles:[]
            }
            break;
        case 'FRAME_WORK_MODAL_COMPLETE_MEMBER_INF':
            newState.data[action.payload.key] = action.payload.value;
            break;
        case 'FRAME_WORK_MODIFY_MODAL':
            newState.modifyModal = action.payload.modifyModal;
            console.log('new',newState.modifyModal)
            break;
        case 'FRAME_WORK_LIST_MODIFY_EMPLOYEE':
            newState.employeeId=action.payload.employeeId;
            newState.data=action.payload.data;
            break;
        case 'FRAME_WORK_GET_DEVELOPMENT_OPTIONS':
            newState.developmentOptions=action.payload.branch;
            break;
        case 'FRAME_WORK_GET_POSITION_OPTIONS':
            newState.positionOptions=action.payload.position;
            break;
        /* case 'ADMIN_MEMBER_GET_BANKLIST':
             newState.bankType=action.payload.bankType;
             break;*/
        case "FRAME_WORK_GET_ROLES_LIST":
            newState.roles=action.payload.roles
            break;
    }
    return newState;
}


