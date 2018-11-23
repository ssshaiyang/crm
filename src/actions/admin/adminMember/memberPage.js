export const memberListPagination = function(page, size) {
    return {
        type: 'MEMBER_LIST_PAGE',
        payload: {
            page: page,
            limit: size
        }
    }
}
export const initPage = function() {
    return {
        type: 'INIT_MEMBER_LIST_PAGE',
        payload: {
            page: 1,
            limit:5
        }
    }
}
