'use strict';
import {
    getProcessListData,getEmployees,putChangeList
} from '../../../../utils/interface.js'
export const memberList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_PROCESS_MEMBER_LIST',
                    payload: {
                        data: res.data.data,
                        totalCount:res.data.total_count
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();

        let selfParams = {
            filter:params.filter||state.addRulesModal.filter,
            page:params.page||state.addRulesModal.page,
            limit:params.limit||state.addRulesModal.limit,
            department_id:params.development||state.addRulesModal.branch,
            position_id:params.position||state.addRulesModal.position,
        }
        console.log('params',selfParams)
        getEmployees(selfParams, cb)
    }
}


export const getAddBranchModal = function(val) {
    console.log(val)
    let formData =val.employee_steps_name
    return {
        type: 'GET_PROCESS_ADMIN_MODAL',
        payload: {
           data:formData

        }
    }
}
// 刷新页面数据
export const updateBranchModal = function(val) {
    console.log(val)
    return {
        type: 'UPDATE_BRANCH_MODAL',
        payload: {
            data:val

        }
    }
}

// 清空修改遗留数据
export const updateData = function() {
    return {
        type: 'UPDATE_DATA',
        payload: {
            data:[]

        }
    }
}
// 存储流程人员id
export const saveIdList = function(val) {
    console.log(val)
    return {
        type: 'SAVE_ID_LIST',
        payload: {
            idList:val
        }
    }
}
export const getAddBranchModalPage = function(page, limit) {
    return {
        type: 'GET_PROCESS_ADMIN_MODAL_PAGE',
        payload: {
            page:page,
            limit:limit,
        }
    }
}
/*export const getGridApiActionCreater = function(GridApi) {
    console.log('ap',GridApi)
    return {
        type: 'ADD_SELECTED_API',
        payload: {
           api: GridApi
        }
    }
}*/


export const putChangeListData = function (param = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "PUT_CHANGE_LIST_DATA",
                    payload: {
                        code: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        putChangeList(param, cb);
    }
}
export const getGridSelected = function(val) {
    console.log("12",val)
    return {
        type: 'GET_GRID_SELECTED',
        payload: {
            api: val
        }
    }
}
// 保存选择的内容
export const saveChangeData = function(val) {
    console.log("保存的内容",val)
    return {
        type: 'SAVE_CHANGE_DATA',
        payload: {
            changeData: val
        }
    }
}
export const getValue = function(val) {
    return {
        type: 'GET_MEMBER_INPUT_FILTER',
        payload: {
            filter:val
        }
    }
}
export const changeDataList = function(params) {
    console.log(params)
    let jsonObj =params.changeFormData;
    let jsonForm =null;
    let IdList =null;
    let jsonId =params.idList;
    let checkId=params.checkId+1;
    if(jsonObj!=undefined){
        jsonObj = JSON.parse(jsonObj)
        if(jsonId.length>0){
            jsonId= JSON.parse(jsonId)
        }else{
            console.log("空的")
        }
    }
    if(params.changeData[0].employee_name!=undefined){
        jsonObj[checkId]= params.changeData[0].employee_name;
        jsonId[checkId]= params.changeData[0].employee_id;
        jsonForm  =JSON.stringify(jsonObj);
        IdList =JSON.stringify(jsonId)
    }
    if(jsonForm ==null){
        jsonForm=params.changeFormData;
        IdList=params.idList;
    }
    return {
        type: 'CHANGE_FORM_DATA',
        payload: {
            data:jsonForm,
            idList:IdList
        }
    }
}
