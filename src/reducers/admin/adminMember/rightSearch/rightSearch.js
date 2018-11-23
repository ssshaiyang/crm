'use strict';

export default function adminSearchMember(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADMIN_SEARCH_MEMBER':
            newState.filter = action.payload.filter;
            break;
    }
    return newState;
}