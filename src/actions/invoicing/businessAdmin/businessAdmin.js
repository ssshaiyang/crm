/**
 * @Author: wanbing.shi
 * @CDate: 2017/10/16 17:21
 * @Desc:
 */


'use strict';
import editDrug from "../../../components/invoicing/inventory/inventoryList/modal/editDrug";

export const setEditDrugInfoActionCreator = function (editDrugInfo = {}) {
    return {
        type: 'SET_EDIT_DRUG_INFO',
        payload: {
            editDrugInfo : editDrugInfo
        }
    }
};