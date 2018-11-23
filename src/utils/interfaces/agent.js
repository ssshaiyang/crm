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

export const getAgentContactInfo = function(params, cb) {
	get('/agent/contact/'+params, null, cb)
}

export const getAgentBankInfo = function(params, cb) {
	get('/agent/account/'+params, null, cb)
}

export const addAgentBankInfo = function(params, cb) {
	post('/agent/account/'+params.id, params.values, cb)
}

export const addAgentContactInfo = function(params, cb) {
	post('/agent/contact/'+params.id, params.values, cb)
}


export const delAgent = function(params, cb){
    del('/agent/'+params,null,null)
}

export const editAgent = function(params, cb){
    put('/agent/'+params.id,params.values,null)
}
