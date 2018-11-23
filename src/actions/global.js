/*
 * @Author: lcj
 * @Date:   2017-08-10 20:33:42
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-16 13:50:44
 */
import {
    companieslogout
}
from "../utils/interface.js"
'use strict';

export const globalChangeCompanyLogined = function(companyLogined, name) {
    return {
        type: 'GLOBAL_CHANGE_COMPANY_LOGINED',
        payload: {
            companyLogined: companyLogined,
            companyLoginedName: name,

        }
    }
    companieslogout()
}