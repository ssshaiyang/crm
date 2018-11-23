import {
    getDiffHospitalInfoList,addDiffHospitalInfoList,editDiffHispitalNameInfoList,deleteDiffHispitalInfoList
}
    from "../../../utils/interface.js"

//获取医院异名信息
export const getDiffHospitalInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DIFF_HOSPITAL_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getDiffHospitalInfoList(pramas, cb);
    }
}

//添加医院异名信息
export const addDiffHospitalInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DIFF_HOSPITAL_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        addDiffHospitalInfoList(pramas, cb);
    }
}

//编辑医院异名信息
export const editDiffHispitalNameInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "EDIT_DIFF_HOSPITAL_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        editDiffHispitalNameInfoList(pramas, cb);
    }
}

//删除医院异名信息
export const deleteDiffHispitalInfo = function (params) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DELETE_DIFF_HOSPITAL_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        deleteDiffHispitalInfoList(params, cb);
    }
}