export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'FRAME_WORK_ADD_BRANCH':
            newState.visible = action.payload.visible;
            break;
        case "GET_All_LIST_BRANCH" :
            newState.branch = action.payload.branch;
            break;
        case 'ADD_BRANCH_SINGLE':
            newState.data[action.payload.key] = action.payload.value;
            break;
        case "GET_All_LIST_CHARGE_MAN":
            newState.employee_select = action.payload.employee_select;
            break;
     }
    return newState
}