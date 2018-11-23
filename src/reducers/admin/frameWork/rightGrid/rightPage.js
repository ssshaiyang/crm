'use strict';

export default function frameWorkPage(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'FRAME_WORK_MEMBER_LIST_PAGE':
            newState.page = action.payload.page;
            newState.limit=action.payload.limit
            break;
        case "FRAME_WORK_LIST_TOTALCOUNT":
            newState.totalCount = action.payload.totalCount;
            break;
        case "FRAME_WORK_INIT_MEMBER_LIST_PAGE":
            newState.page = action.payload.page;
            newState.limit=action.payload.limit
            break;
    }
    return newState;
}
