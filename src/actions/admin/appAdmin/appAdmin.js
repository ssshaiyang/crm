import {
    hadBuyApp,
    appSquare,
    buyModalData,
    appSquareModalData
} from "../../../utils/interface.js"
export const hasBuyList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'APP_ADMIN_BUY_DATA',
                    payload: {
                        buyData: res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        hadBuyApp(params, cb)
    }
}
export const appSquareList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                console.log("square",res)
                let action = {
                    type: 'APP_ADMIN_APP_DATA',
                    payload: {
                        appData: res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        appSquare(null, cb)
    }
}
export const toShowBox = function(val) {
    return {
        type: 'APP_ADMIN_SHOW_WHICH',
        payload: {
            visible:val
        }
    }
}
//buymodalDetail
export const buyModalDetail=function(id, status = 0){
    return (dispatch) => {
        function cb(res) {
            console.log("xijie",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'APP_ADMIN_BUY_MODAL_DETAIL',
                    payload: {
                        buyModalData: res.data
                    }
                }
                dispatch(action)
            }
        }
        const params = {
            application_id: id,
            status: status
        }
        buyModalData(params, cb)
    }
}

//buymodal
export const toShowBuyModal = function(val) {
    console.log("valClose",val)
    return {
        type: 'APP_ADMIN_SHOW_BUY_MODAL',
        payload: {
            buyModal:val
        }
    }
}

//squareModalDetail
export const squareModalDetail=function(id, status = 0){
    console.log('dataparams',id)
    return (dispatch) => {
        function cb(res) {
            console.log("reeeeeee",res)

            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'APP_ADMIN_SQUARE_MODAL_DETAIL',
                    payload: {
                        squareModalData: res.data
                    }
                }
                dispatch(action)
            }
        }
        const params = {
            application_id: id,
            status: status
        }
        appSquareModalData(params, cb)
    }
}
//squareModal
export const toShowSquareModal = function(val) {
    console.log('squareModalval',val)
    return {
        type: 'APP_ADMIN_SHOW_SQUARE_MODAL',
        payload: {
            squareModal:val
        }
    }
}