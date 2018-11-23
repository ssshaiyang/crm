export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_AGENT_INFO':
            newState.data = action.payload.data;
            break;
        case 'ADD_AGENT_INFO':
        	newState.data = action.payload.data;
        	break;
        case 'GET_EMPLOYEE_INFO':
        	newState.employeeInfo = action.payload.data;
        	break;
    }
    return newState;
}