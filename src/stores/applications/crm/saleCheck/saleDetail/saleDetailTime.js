/*
* @Author: Administrator
* @Date:   2017-08-30 14:43:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 15:29:01
*/
//销量查看的列表数据根据时间
import moment from 'moment'

export default {
/*	startTime: moment(new Date() - 86400000),
	endTime: moment(new Date() - 86400000),*/
	startTime:moment(new Date()),
	endTime:moment(new Date()),
	filter: ''
}                