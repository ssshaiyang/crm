import {
    getAllDrugListInfo, getClickedAgentInfo, getClickedBillingInfo, getClickedDeliverInfo,
    editClickedDrugInfo, getManufacturerListsInfo, getBillingComponyListsInfo, getBusinessComListsinfo,
    searchDrugListsInfo,addDrugFormInfoList,delClickedDrugInfoList,searchManufacturerInfoLists,
    searchBilingComponyInfoLists,searchBusinessComInfoLists,getAgentListsinfo, getDrugListSelector,getUserInfos
   
}
    from "../../../utils/interface.js"
// import {getUserInfos} from "../../../utils/interface";

//获取药品列表简单信息
export const getDrugListSelectorActionCreator = function(params = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_DRUG_LIST_SELECTOR",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        console.log(params);
        getDrugListSelector(params, cb);
    }
}

//获取药品列表信息
export const getDrugListInfo = function (params = {}) {
    return (dispatch, getState) => {
        let state = getState();
        let stateParams = {
           
            page: state.drugListInfo.page,
            limit: state.drugListInfo.limit,
        }
        Object.assign(stateParams, params)
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_ALL_DRUG_LIST",
                    payload: {
                        data: res.data
                    }
                }
                let setToTalCountAction = {
                    type: 'MEDICINE_PAGINATION_SET_TOTALCOUNT',
                    payload: {
                        totalCount: res.data.total_count
                    }
                }
                dispatch(action);
                dispatch(setToTalCountAction)
            }
        }
        getAllDrugListInfo(params, cb);
    }
}

//查看代理商信息
export const getClickAgentInfo = function (prama) {
    return (dispatch) => {
        function cb(res) {
            // console.log('sssssssssss',res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CLICKED_ROW_AGENT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getClickedAgentInfo(prama, cb);
    }
}

//查看开票公司信息
export const getClickBillingInfo = function (prama) {
    return (dispatch) => {
        function cb(res) {
            // console.log('sssssssssss',res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CLICKED_BILING_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getClickedBillingInfo(prama, cb);
    }
}

//查看商业公司信息
export const getClickDeliverInfo = function (prama) {
    return (dispatch) => {
        function cb(res) {
            // console.log('sssssssssss',res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CLICK_DELIVER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getClickedDeliverInfo(prama, cb);
    }
}

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

//编辑药品信息
export const editClickDrugInfo = function (pramas) {
    return (dispatch) => {
        function cb(res) {
            // console.log('sssssssssss',res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_CLICK_DELIVER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        editClickedDrugInfo(pramas, cb);
    }
}

//获取生产厂家信息
export const getManufacturerListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssssssss',res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_MANUFACTURER_LIST_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getManufacturerListsInfo(pramas, cb);
    }
}

//获取开票公司信息
export const getBillingComponyListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_BILING_COMPPONY_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBillingComponyListsInfo(pramas, cb);
    }
}

//获取商业公司信息
export const getBusinessComListinfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "GET_BUSINESS_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getBusinessComListsinfo(pramas, cb);
    }
}



//搜索药品信息
export const searchDrugListInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "SEARCH_DRUG_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        searchDrugListsInfo(pramas, cb);
    }
}

//添加药品信息
export const addDrugFormInfo = function (pramas = {}) {
    return (dispatch) => {
        function cb(res) {
            console.log("sssss")
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "ADD_DRUG_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        // console.log(params);
        addDrugFormInfoList(pramas, cb);
    }
}

//删除药品信息
export const delDrugInfoList = function (prama) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "DEL_DRUG_INFO",
                    payload: {
                        data: res.error_code
                    }
                }
                dispatch(action);
            }
        }
        delClickedDrugInfoList(prama, cb);
    }
}



//搜索生产厂家
export const searchManufacturerInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "SEARCH_MANUFACTURER_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        searchManufacturerInfoLists(param, cb);
    }
}

//搜索开票公司
export const searchBilingComponyInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "SEARCH_BILING_COMPONY_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        searchBilingComponyInfoLists(param, cb);
    }
}

//搜索商业公司
export const searchBusinessComInfoList = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "SEARCH_BUSINESS_COMPONY_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        searchBusinessComInfoLists(param, cb);
    }
}

//获取代理商信息
export const getAgentInfo = function (param) {
    return (dispatch) => {
        function cb(res) {
            //console.log('sssssss', res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: "MEDICINE_GET_AGENT_INFO",
                    payload: {
                        data: res.data
                    }
                }
                dispatch(action);
            }
        }
        getAgentListsinfo(param, cb);
    }
}
export const pageChange = function(page, limit) {

   return {
        type: 'MEDICINE_PAGINATION_CHANGE_PAGE',
        payload: {
            page: page,
            limit: limit
        }
    }
}

export const initPagination = function() {
    return {
        type: 'MEDICINE_PAGINATION_INIT'
    }
}

export const setToTalCount = function(totalCount) {
    console.log(totalCount)
    return {
        type: 'MEDICINE_PAGINATION_SET_TOTALCOUNT',
        payload: {
            totalCount: totalCount
        }
    }
}