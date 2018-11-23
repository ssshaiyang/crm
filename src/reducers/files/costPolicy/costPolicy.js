export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_POLICY_GET_HOSPITAL_INFO':
            newState.costPolicyInfo = action.payload.data;
            break;
        case 'ADD_POLICY_GET_HOSPTIAL':
            newState.costPolicyInfo = action.payload.data;
            break;
        case 'GET_POLICY_HOSPITAL':
            newState.hospitalInfo = action.payload.data;
            break;
        
        case 'ADD_POLICY_GET_POLICY':
            newState.policyInfo = action.payload.data;
            break;
        case'ADD_POLICY_ADD_HOSPTIAL':
            newState.addPolicyode = action.payload.data;
            break;
        case'ADD_POLICY_DEL_HOSPITAL':
            newState.delPolicyCode = action.payload.data;
            break;
        case'ADD_POLICY_EDIT_HOSPITAL':
            newState.editPolicyCode = action.payload.data;
            break;
        case'ADD_ALLOT_ADD_INFO':
            newState.addAllotCode = action.payload.data;
            break;
        case'ADD_ALLOT_DEL_INFO':
            newState.delAllotCode = action.payload.data;
            break;
        case'ADD_ALLOT_EDIT_INFO':
            newState.editAllotCode = action.payload.data;
            break;
    }
    return newState;
}