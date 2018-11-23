/*
 * @Author: lcj
 * @Date:   2017-08-09 18:37:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 20:51:22
 */

'use strict';

import {
	getArea,
	createCompany
} from '../../../utils/interface.js'

export const onModelSwitchActionCreator = function(visible) {
	return {
		type: 'COMPANY_LIST_SWITCH_MODEL',
		payload: {
			createCompanyModelVisible: visible
		}
	}
}

export const getAreaActionCreator = function() {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let area = res.data;
				let action = {
					type: 'COMPANY_LIST_UPDATE_AREA',
					payload: {
						area: area
					}
				}
				dispatch(action)
			}
		}
		getArea(null, cb)
	}
}

export const getProvinceActionCreator = function() {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let area = res.data;
				// console.log(area)
				let provinces = {};
				area.map(province => {
					provinces[province.id] = {
						key: province.id.toString(),
						value: province.name,
						city: province.city
					}
				});
				let action = {
					type: 'COMPANY_LIST_UPDATE_PROVINCE',
					payload: {
						province: provinces
					}
				}
				dispatch(action)
			}
		}
		getArea(null, cb)
	}
}

export const getCityActionCreator = function(province) {
	if (!province) return {};
	return (dispatch, getState) => {
		let citys = province.city.map((item) => ({
			key: item.id.toString(),
			value: item.name
		}));
		let action = {
			type: 'COMPANY_LIST_UPDATE_CITY',
			payload: {
				city: citys
			}
		}
		dispatch(action)
	}
}