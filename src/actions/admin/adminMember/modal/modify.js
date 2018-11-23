 import{getEmployeesEdit,deleteMember,addMemberList,getMemberSelectBranch,getMemberSelectPosition,getBankList,getRolesList} from "../../../../utils/interface.js"

export const modifyModalActionCreater = function(val) {
    return {
        type:"ADMIN_MODIFY_MODAL",
        payload:{
            modifyModal:val.modifyModal,
            modalType:val.modalType
        }
    }

}
 export const ClearModal = function(val) {
     return {
         type:"ADMIN_MODIFY_CLEAR_MODAL_ADMIN",
     }
 }
//获取要修改的那条数据
export const memberListEdit=function(employeeId , api ){
    return (dispatch, getState) => {
        function cb(res) {
            console.log("resresss",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'ADMIN_MEMBER_LIST_MODIFY_EMPLOYEE',
                    payload: {
                        data: res.data,
                        api:api,
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
 export const completeMemberInf = function(field) {
     let data = [];
     for (let i in field) {
         data.push(field[i])
     }
     data = typeof data[0] === "object" ? data[0] : field;
     return {
         type: 'ADD_MEMBER_MODAL_COMPLETE_MEMBER_INF',
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
 }
 //职位
 export const getPositionListSelects= function() {
     return (dispatch) => {
         function cb(res) {
             if (res.error_code === GLOBALSUCCESS) {
                 let action = {
                     type: 'ADMIN_MEMBER_GET_POSITION_OPTIONS',
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
 export const getRolesListSelects= function() {
     return (dispatch) => {
         function cb(res) {
             if (res.error_code === GLOBALSUCCESS) {

                 let action = {
                     type: 'ADMIN_MEMBER_GET_ROLES_LIST',
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