/**
 * @Author: wanbing.shi
 * @CDate: 2017/10/18 14:10
 * @Desc:
 */

'use strict';

export default function setEditDrugInfoReducer(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'SET_EDIT_DRUG_INFO' :
            newState = Object.assign({}, action.payload.editDrugInfo);
            break;
    }
    return newState;
}