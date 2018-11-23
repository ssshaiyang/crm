/*
 * @Author: lcj
 * @Date:   2017-08-01 13:25:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 11:01:32
 */

'use strict';

//格式化日期,timestamp为时间戳
export const formatDate = function(timestamp, connectorYear = '-', connectorMonth = '-', connectorDay = '', withTime = false) {
	if (!timestamp)
		return false;
	try {
		let fillZero = new Array(13 - timestamp.toString().length).fill(0).join('');
		let date = new Date(Number.parseInt('' + timestamp + fillZero))
		const returnDate = date.getFullYear() + connectorYear + (date.getMonth() + 1) + connectorMonth + date.getDate() + connectorDay;
		const returnTime = date.getHours() + ':' + date.getMinutes()
		if (withTime)
			return returnDate + ' ' + returnTime;
		else
			return returnDate;
	} catch (e) {
		console.error('时间戳转化时间错误！', e, timestamp)
	}
}

export const exportDate = function(moment) {
	if (!moment)
		return undefined;
	return Math.floor(moment.valueOf() / 1000);

}

//格式化日期,timestamp为时间戳
export const formatDateWithOutYears = function(timestamp, connectorMonth = '-', connectorDay = '') {
	if (!timestamp)
		return false;
	try {
		let fillZero = new Array(13 - timestamp.toString().length).fill(0).join('');
		let date = new Date(Number.parseInt('' + timestamp + fillZero))
		return (date.getMonth() + 1) + connectorMonth + date.getDate() + connectorDay;
	} catch (e) {
		console.error('时间戳转化时间错误！', e, timestamp)
	}
}