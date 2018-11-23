export const frameWorkMemberListPagination = function(page, size) {
    return {
        type: 'FRAME_WORK_MEMBER_LIST_PAGE',
        payload: {
            page: page,
            limit: size
        }
    }
}
export const frameWorkInitPage = function() {
    return {
        type: 'FRAME_WORK_INIT_MEMBER_LIST_PAGE',
        payload: {
            page: 1,
            limit:5
        }
    }
}