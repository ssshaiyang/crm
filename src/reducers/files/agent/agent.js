export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_AGENT_INFO':
            newState.data = action.payload.data;
            break;
        case 'ADD_AGENT_INFO':
        	newState.addAgentCode = action.payload.data;
        	break;
        case 'GET_EMPLOYEE_INFO':
            newState.employeeInfo = action.payload.data;
            break;
        case 'GET_AGENT_BANK_INFO':
            newState.bankInfo = action.payload.data;
            break;
        case 'GET_AGENT_CONTACT_INFO':
            newState.contactInfo = action.payload.data;
            break;
        case 'ADD_AGENT_BANK_INFO':
            newState.bankInfo.addCode = action.payload.data;
            break;
        case 'ADD_AGENT_CONTACT_INFO':
            // newState.contactInfo.addCode = action.payload.data;
            break;
        case 'DEL_AGENT_INFO':
            newState.delAgentCode = action.payload.data;
            break;
        case 'EDIT_AGENT_INFO':
        newState.editAgentCode = action.payload.data;
        break;
            
    }
    return newState;
}