import {
    getHospitalInfoList,getHospitalSelectInfoList,editHospitalInfoList,delHospitalInfoList,addHospitalInfoList
}
    from "../../../utils/interface.js"

//获取医院信息
export const getHospitalInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_HOSPITAL_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getHospitalInfoList(pramas, cb);
    }
}

//获取医院下拉列表
export const getHospitalSelectInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_HOSPITAL_SELECT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getHospitalSelectInfoList(pramas, cb);
    }
}

//编辑医院信息
export const editHospitalInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_HOSPITAL_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editHospitalInfoList(pramas, cb);
    }
}

//删除医院信息
export const delHospitalInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_HOSPITAL_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delHospitalInfoList(pramas, cb);
    }
}

//添加医院信息
export const addHospitalInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_HOSPITAL_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addHospitalInfoList(pramas, cb);
    }
}

