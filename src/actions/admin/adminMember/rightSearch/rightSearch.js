export const adminSearchActionCreater = function(val) {
    return {
        type:"ADMIN_SEARCH_MEMBER",
        payload:{
            filter:val
        }
    }

}