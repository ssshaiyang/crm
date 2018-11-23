export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_HOSPITAL_INFO':
            newState.data = action.payload.data;
            break;
        case 'GET_HOSPITAL_SELECT_INFO':
            newState.hospitalSelect = action.payload.data;
            break;
        case 'EDIT_HOSPITAL_INFO':
            newState.editHospitalCode = action.payload.data;
            break;
        case 'DEL_HOSPITAL_INFO':
            newState.delHospitalCode = action.payload.data;
            break;
        case 'ADD_HOSPITAL_INFO':
            newState.addHospitalCode = action.payload.data;
            break;
        case 'ADD_POLICY_GET_HOSPITAL_INFO':
            newState.costPolicyInfo = action.payload.data;
            break;
        case 'ADD_POLICY_GET_HOSPTIAL':
            newState.getPolicyHospital = action.payload.data;
            break;
    }
    return newState;
}