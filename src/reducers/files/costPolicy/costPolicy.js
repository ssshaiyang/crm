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
       
    }
    console.log(newState)
    return newState;
}