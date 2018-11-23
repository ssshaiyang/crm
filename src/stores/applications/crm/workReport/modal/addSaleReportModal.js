/*
 * @Author: lcj
 * @Date:   2017-08-29 10:57:46
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:28:07
 * @Descriptions: 
 */

import moment from 'moment'

export default {
	visible: false,
	sale_report_id: undefined,
	//0为添加销售日报,1为修改销售日报
	modalType: 0,
	//1为日报,2为自定义
	reportType: 1,
	startTime: moment(),
	endTime: moment(),
	salePlanData: {},
	visitData: [],
	filter: '',
	reportName: '',
	reportNote: '',
}