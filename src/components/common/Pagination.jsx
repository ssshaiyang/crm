/*
 * @Author: lcj
 * @Date:   2017-08-08 10:24:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 16:04:15
 */

'use strict';

import React from 'react';
import {
	Pagination
} from 'antd'

export default class SelfPagination extends React.Component {
	constructor(props) {
		super(props);
	}

	onChange(page, size) {
		let params = {
			page: page,
			limit: size
		}
		this.props.onChange(page, size);
		this.props.refresh(params);
	}

	render() {
		return (
			<Pagination
				total={this.props.totalCount}
				pageSize={this.props.limit}
				current={this.props.page}
				showSizeChanger
				pageSizeOptions={this.props.pageSizeOptions}
				onShowSizeChange={this.onChange.bind(this)}
				onChange={this.onChange.bind(this)}
				showTotal={(total,range)=>'共'+total+'项'}
				showQuickJumper/>
		)
	}
}

SelfPagination.defaultProps = {
	totalCount: 0,
	limit: 5,
	page: 1,
	pageSizeOptions: ['5', '10','20', '50', '100'],
	onChange: () => false,
	refresh: () => false
}