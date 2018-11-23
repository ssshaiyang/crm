'use strict';

export default  function toAdminLogin(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADMIN_LOGIN_VISIBLE':
            newState.visible = action.payload.visible;
            break;
        case 'ADMIN_LOGIN_SHOW':
            newState.show = action.payload.show;
            break;
    }
    return newState;
}
