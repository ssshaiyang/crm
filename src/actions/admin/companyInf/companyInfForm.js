import{getCompanies} from "../../../utils/interface.js"


export const ClearModal = function(val) {
    return {
        type:"COMPANY_INFO_MODIFY_CLEAR_MODAL",
    }
}
//获取表单
export const companyInfoCompanyEdit=function(){
    return (dispatch, getState) => {
        function cb(res) {
            console.log("333333",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'COMPANY_INFO_TABLE',
                    payload: {
                        data: res.data,
                        company_logo:res.data.company_logo
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        getCompanies(null, cb)
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
        type: 'COMPANY_INFO_MODAL_COMPLETE_MEMBER_INF',
        payload: {
            key: data.name,
            value: data.value
        }
    }
}
export const getUrlImg = function(val) {
    return {
        type:"COMPANY_INFO_IMG",
        payload: {
            urlImg:val,
        }
    }
}
export const getUrlImgModal = function(val) {
    return {
        type:"COMPANY_INFO_IMG_MODAL",
        payload: {
            visible:val,
        }
    }
}

