export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_POWER_LIST_INFO':
            newState.powerList = action.payload.data;
            newState.code =0;
            break;
        case 'GET_HAS_POWER_LIST_INFO':
            newState.hasPowerList = action.payload.data;
            break;
        case 'GET_CLICK_ROLE_POWER':
            newState.clickPowerList = action.payload.data;
            newState.id = action.payload.id;
            newState.changeCode=action.payload.code
            newState.updateCode=0
            break;
        case 'UPDATE_CODE_INFO':
            newState.changeCode=action.payload.code
            break;
        case 'GET_POWER_CLASSIFICATION':
            newState.powerClassification = action.payload.data;
            break;
        case 'GET_CLICK_POWER_LIST':
            newState.clickPowerListInfo = action.payload.data;
            break;
        case 'GET_ROLE_MEMBER':
            newState.roleMemberList = action.payload.data;
            newState.roleId = action.payload.id;
            newState.roleCheckId = action.payload.checkId;
            newState.code =0;
            newState.member_error_code =-1;
            break;
        case 'ADD_MEMBER_LIST':
            newState.member_error_code = action.payload.error_code
            newState.code = action.payload.code
            break;
        case 'GET_ALL_MEMBER_LIST':
            newState.memberList = action.payload.data
            break;
        case 'GET_ALL_APPLY_INFO':
            newState.roleApply = action.payload.data
            break;
        case 'DEL_ALL_MEMBER_LIST':
            newState.code = action.payload.code
            break;
        case 'DEL_POWER_LIST_INFO':
            newState.code = action.payload.code
            newState.clickPowerList = [];
            newState.id = ''
            break;
        case 'POST_POWER_LIST_INFO':
            newState.code = action.payload.code
            break;
        case 'PUT_POWER_LIST_INFO':
            newState.updateCode = action.payload.code
            break;
    }
    return newState
}

