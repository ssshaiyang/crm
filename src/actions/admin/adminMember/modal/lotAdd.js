/*
export const getBranchSelects= function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'ADMIN_MEMBER_GET_DEVELOPMENT_OPTIONS',
                    payload: {
                        branch: res.data
                    }
                }
                dispatch(action);
            }
        }
        getMemberSelectBranch(null, cb);
    }
}*/
export const lotAddModal = function(val) {
    return {
        type:"ADD_MEMBER_LOT_ADD",
        payload:{
            visible:val,
        }
    }
}