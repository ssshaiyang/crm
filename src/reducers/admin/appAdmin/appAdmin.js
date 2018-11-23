export default  function appAdminData(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'APP_ADMIN_BUY_DATA':
            newState.buyData = action.payload.buyData;
            break;
        case 'APP_ADMIN_APP_DATA':
            newState.appData = action.payload.appData;
            break;
        case "APP_ADMIN_SHOW_WHICH":
            newState.visible=action.payload.visible;
            break;
        case "APP_ADMIN_SHOW_BUY_MODAL":
            newState.buyModal=action.payload.buyModal;
            break;
        case "APP_ADMIN_SHOW_SQUARE_MODAL":
            newState.squareModal=action.payload.squareModal;
            break;
        case "APP_ADMIN_SQUARE_MODAL_DETAIL":
            newState.squareModalData=action.payload.squareModalData;
            break;
        case "APP_ADMIN_BUY_MODAL_DETAIL":
            newState.buyModalData=action.payload.buyModalData;
            break;
    }
    return newState;
}
