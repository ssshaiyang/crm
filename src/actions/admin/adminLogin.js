export const adminLoginActionCreater = function(val) {
     return {
         type:"ADMIN_LOGIN_VISIBLE",
         payload:{
             visible:val
         }
     }

}
export const adminLoginShow = function(val) {
    return {
        type:"ADMIN_LOGIN_SHOW",
        payload:{
            show:val
        }
    }

}
