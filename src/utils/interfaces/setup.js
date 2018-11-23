/*
 * @Author: lcj
 * @Date:   2017-08-06 09:52:32
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 20:25:56
 */

'use strict';

import request from 'superagent'
import {
	Modal,
	Button
} from 'antd'
import errorMessage from '../error-message.json'

//pop model if error is true or res.error_code is not GLOBALSUCCESS(1000)
function dealResult(error, res, cb, params) {
	if (error) {
		console.error('interface is error!', res)
		Modal.error({
			title: '失败！',
			content: (res && res.body && res.body.message) || '网络错误',
			onOk() { },
			okText: '确认'
		})
	} else {
		try {
			let body = JSON.parse(res.body || res.text||'');
			if (body.error_code !== GLOBALSUCCESS) {
				console.error('error_code is not ' + GLOBALSUCCESS, body)
				Modal.error({
					title: '错误！错误码:' + (body.error_code || '0000'),
					content: (body.message) || (errorMessage[body.error_code]) || '网络错误',
					onOk() { },
					okText: '确认'
				})
			}
			if (cb)
				cb(body, error, params)
		} catch (e) {
			console.error(e, res);
		}
	}
}

export function get(url, params = {}, cb = () => false) {
	let token = localStorage.getItem(TOKENNAME) || sessionStorage.getItem(TOKENNAME);
	request
		.get(GLOBALURL + url)
		.set('Content-Type', 'application/json')
		.set('Accept', 'application/json')
		.set('Authorization', token)
		.query(params)
		.end(function (error, res) {
			dealResult(error, res, cb, params);
		})
}

export function post(url, params = {}, cb = () => false) {
	let token = localStorage.getItem(TOKENNAME) || sessionStorage.getItem(TOKENNAME);
	request
		.post(GLOBALURL + url)
		.set('Content-Type', 'application/json')
		.set('Accept', 'application/json')
		.set('Authorization', token)
		.withCredentials(true)
		.send(params)
		.end(function (error, res) {
			dealResult(error, res, cb, params);
		})
}

export function del(url, params = {}, cb = () => false) {
	let token = localStorage.getItem(TOKENNAME) || sessionStorage.getItem(TOKENNAME);
	request
		.del(GLOBALURL + url)
		.set('Content-Type', 'application/json')
		.set('Accept', 'application/json')
		.set('Authorization', token)
		.send(params)
		.end(function (error, res) {
			dealResult(error, res, cb, params);
		})
}

export function put(url, params = {}, cb = () => false) {
	let token = localStorage.getItem(TOKENNAME) || sessionStorage.getItem(TOKENNAME);
	request
		.put(GLOBALURL + url)
		.set('Content-Type', 'application/json')
		.set('Accept', 'application/json')
		.set('Authorization', token)
		.withCredentials(true)
		.send(params)
		.end(function (error, res) {
			dealResult(error, res, cb, params);
		})
}

export function uploadFile(url, name, file, cb = () => false) {
	let token = localStorage.getItem(TOKENNAME) || sessionStorage.getItem(TOKENNAME);
	const formData = new FormData();
	formData.append(name, file);
	request
		.post(GLOBALURL + url)
		.set('Authorization', token)
		.set('Accept', 'application/json')
		// .type('form')
		.send(formData)
		.end((error, res) => {
			dealResult(error, res, cb, file);
		})
}