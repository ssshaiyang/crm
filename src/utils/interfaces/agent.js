/*
 * @Author: lcj
 * @Date:   2017-08-22 17:15:29
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:52:49
 * @Descriptions: 
 */

import {get,
	post,
	put,
	del
} from './setup.js'

export const getAgentInfoLists = function(params, cb) {
	get('/agent', params, cb)
}

export const addAgentInfoLists = function(params, cb) {
	post('/agent', params, cb)
}