'use strict';

export default function memberListPage(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'MEMBER_LIST_PAGE':
            newState.page = action.payload.page;
            newState.limit=action.payload.limit
            break;
        case "ADMIN_MEMBER_LIST_TOTALCOUNT":
            newState.totalCount = action.payload.totalCount;
            break;
        case "INIT_MEMBER_LIST_PAGE":
            newState.page = action.payload.page;
            newState.limit=action.payload.limit
            break;
    }
    return newState;
}
