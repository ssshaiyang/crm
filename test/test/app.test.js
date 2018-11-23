/*
 * @Author: lcj
 * @Date:   2017-07-24 10:39:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-07-24 12:25:25
 */
import React from 'react';
import {
	expect
} from 'chai';
import {
	shallow
} from 'enzyme'
import request from 'superagent'
import App from '../../src/app.jsx'

function add(x, y) {
	return x + y;
}

describe('测试单元测试脚本的测试', function() {
	it('1 加 1 应该等于 2', function() {
		expect(add(1, 1)).to.be.equal(2);
	});

	it('测试异步请求', function(done) {
		request
			.get('https://api.github.com')
			.end(function(err, res) {
				expect(res).to.be.an('object');
				done();
			})
	})
});

describe('测试测试文件标题是否正确', function() {
	it('html的title应该为crm', function() {
		let app = shallow(<App/>);
		expect(app.find('#h1').text()).to.be.equal('Todos');
	});
})