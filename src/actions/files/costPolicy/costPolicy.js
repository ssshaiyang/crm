//获取医院下拉列表
import {getHospitalOptionInfoList,addPolicyHospitalInfoList,getPolicyHospitalInfoList} from "../../../utils/interface";

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