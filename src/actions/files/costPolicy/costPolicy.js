//获取医院下拉列表
import {
    getHospitalOptionInfoList,
    addPolicyHospitalInfoList,
    getPolicyHospitalInfoList,
    getAllDrugListInfo,
    getUserInfos,
    delHospitalInfos,
    editHospitalInfos,
    getExpensesPolicyListInfos, getEmployees,addAllotHospitalInfos,delAllotInfos,editAllotInfos

} from "../../../utils/interface";

export const getHospitalSelectInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            console.log("aasdsadas")
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_POLICY_GET_HOSPITAL_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getHospitalOptionInfoList(pramas, cb);
    }
}

export const addHospitalInfo = function (parmas) {
    return (dispatch) => {
        function cb(res){
            console.log("addHospitalInfo");
            if(res.error_code ===GLOBALSUCCESS){
                let action = {
                    type:'ADD_POLICY_ADD_HOSPTIAL',
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action);
            }
        }
        addPolicyHospitalInfoList(parmas,cb)
    }
}

export const getHospitalInfo = function (parmas) {
    return (dispatch) => {
        function cb(res){
            console.log(res)
            if(res.error_code ===GLOBALSUCCESS){
                let action = {
                    type:'ADD_POLICY_GET_HOSPTIAL',
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action);
                console.log("addHospitalInfo");
            }
        }
        getPolicyHospitalInfoList(parmas,cb)
    }
}

export const getDrugListInfo = function (parmas) {
    return (dispatch) => {
        function cb(res){
            console.log(res)
            if(res.error_code ===GLOBALSUCCESS){
                let action = {
                    type:'GET_ALL_DRUG_LIST',
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action);
                console.log("addHospitalInfo");
            }
        }
        getAllDrugListInfo(parmas,cb)
    }
}

export const getPolicyHospitalInfo = function (parmas) {
    return (dispatch) => {
        function cb(res){
            console.log(res)
            if(res.error_code ===GLOBALSUCCESS){
                let action = {
                    type:'GET_POLICY_HOSPITAL',
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action);
                console.log("addHospitalInfo");
            }
        }
        getPolicyHospitalInfoList(parmas,cb)
    }
}

//获取用户信息
export const getUser = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_USER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getUserInfos(pramas, cb);
    }
}


export const delHospitalInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_POLICY_DEL_HOSPITAL",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        delHospitalInfos(pramas, cb);
    }
}

export const editHospitalInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_POLICY_EDIT_HOSPITAL",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        editHospitalInfos(pramas, cb);
    }
}

export const getExpensesPolicyListInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_POLICY_GET_POLICY",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getExpensesPolicyListInfos(pramas, cb);
    }
}

//获取招商人员
export const getEmployeeInfo = function(pramas = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type:"GET_EMPLOYEE_INFO",
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action)
            }
        }
        getEmployees(pramas,cb)
    }
}

export const addAllotHospitalInfo = function(pramas = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type:"ADD_ALLOT_ADD_INFO",
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action)
            }
        }
        addAllotHospitalInfos(pramas,cb)
    }
}

export const delAllotInfo = function(pramas = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type:"ADD_ALLOT_DEL_INFO",
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action)
            }
        }
        delAllotInfos(pramas,cb)
    }
}

export const editAllotInfo = function(pramas = {}){
    return(dispatch) => {
        function cb(res){
            if(res.error_code === GLOBALSUCCESS){
                let action = {
                    type:"ADD_ALLOT_EDIT_INFO",
                    payload:{
                        data:res.data
                    }
                }
                dispatch(action)
            }
        }
        editAllotInfos(pramas,cb)
    }
}