export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_POWER_LIST_INFO':
            newState.powerList = action.payload.data;
            break;
        case 'GET_HAS_POWER_LIST_INFO':
            newState.hasPowerList = action.payload.data;
            break;
        case 'GET_CLICK_ROLE_POWER':
            newState.clickPowerList = action.payload.data;
            newState.id = action.payload.id
            break;
        case 'GET_POWER_CLASSIFICATION':
            newState.powerClassification = action.payload.data;
            break;
        case 'GET_CLICK_POWER_LIST':
            newState.clickPowerListInfo = action.payload.data;
            break;
        case 'GET_ROLE_MEMBER':
            newState.roleMemberList = action.payload.data;
            newState.roleId = action.payload.id
            break;
        case 'ADD_MEMBER_LIST':
            newState.member_error_code = action.payload.error_code
            break;
        case 'GET_ALL_MEMBER_LIST':
            newState.memberList = action.payload.data
            break;
        case 'GET_ALL_APPLY_INFO':
            newState.roleApply = action.payload.data
            break;
    }
    return newState
}

