import{getEmployeesEdit,deleteMember,addMemberList,getMemberSelectBranch,getMemberSelectPosition,getBankList,getRolesList} from "../../../../utils/interface.js"

export const frameWorkmodifyModalActionCreater = function(val) {
    return {
        type:"FRAME_WORK_MODIFY_MODAL",
        payload:{
            modifyModal:val
        }
    }

}
export const frameWorkClearModal = function(val) {
    return {
        type:"ADMIN_MODIFY_CLEAR_MODAL",
    }
}
//获取要删除的那条数据
export const frameWorkmemberListEdit=function(employeeId){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'FRAME_WORK_LIST_MODIFY_EMPLOYEE',
                    payload: {
                        data: res.data,
                        employeeId:employeeId
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();

        let selfParams = {
            employee_id:employeeId,
        }
        getEmployeesEdit(selfParams, cb)
    }
}
/**
 * [向store的data的对应的key填入值]
 */
export const frameWorkcompleteMemberInf = function(field) {
    let data = [];
    for (let i in field) {
        data.push(field[i])
    }
    data = typeof data[0] === "object" ? data[0] : field;
    return {
        type: 'FRAME_WORK_MODAL_COMPLETE_MEMBER_INF',
        payload: {
            key: data.name,
            value: data.value
        }
    }
}

// 获取银行
/*export const getBankListSelects= function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'ADMIN_MEMBER_GET_BANKLIST',
                    payload: {
                        branch: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBankList(null, cb);
    }
}*/


//所属部门
export const frameWorkgetBranchSelects= function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'FRAME_WORK_GET_DEVELOPMENT_OPTIONS',
                    payload: {
                        branch: res.data
                    }
                }
                dispatch(action);
            }
        }
        getMemberSelectBranch(null, cb);
    }
}
//职位
export const frameWorkgetPositionListSelects= function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'FRAME_WORK_GET_POSITION_OPTIONS',
                    payload: {
                        position: res.data
                    }
                }
                dispatch(action);
            }
        }
        getMemberSelectPosition(null, cb);
    }
}
//角色
export const frameWorkgetRolesListSelects= function() {
    return (dispatch) => {
        function cb(res) {
            console.log("res",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'FRAME_WORK_GET_ROLES_LIST',
                    payload: {
                        roles: res.data
                    }
                }
                dispatch(action);
            }
        }
        getRolesList(null, cb);
    }
}