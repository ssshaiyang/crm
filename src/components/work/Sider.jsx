/*
 * @Author: lcj
 * @Date:   2017-08-01 16:13:53
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-18 12:19:36
 */

'use strict';

import React from 'react';
import {
	Layout,
	Menu,
	Icon
} from 'antd';
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../actions/work/workSider.js'
import {
	getDepartmentListActionCreater
} from '../../actions/work/department.js'
import SiderCompanyName from '../common/SiderCompanyName.jsx'

let styles = {
	sider: {
		color: 'white',
		fontSize: '14px',
		paddingBottom: '48px',
		height: '100%',
		minHeight: document.body.clientHeight - 64 + 'px',
	}
}

export class Sider extends React.Component {
	constructor(props) {
		super(props);
	}

	//获取部门
	makeCompany() {
		return this.props.department.map((item, i) =>
			(<Menu.Item key={'department'+item.companyId}>{item.name}</Menu.Item>)
		)
	}

	componentWillMount() {
		// if (this.props.companyLogined)
		// this.props.getDepartment();
	}

	render() {
		const content = this.props.sideContent;
		const defaultSelected = window.location.pathname.split('/')[2] || 'companylist';
		return (
			<Layout.Sider style={styles.sider} breakpoint='sm' collapsible collapsed={this.props.collapsed} onCollapse={this.props.onCollapse}>
				<SiderCompanyName/>
				<Menu
					defaultSelectedKeys={[defaultSelected]}
					theme="dark"
					mode="inline"
					inlineCollapsed={this.props.collapsed}>
					{content.map(data=>Item(data))}
				{/*<Menu.Divider/>*/}
				{/*	<Menu.SubMenu title={<span><Icon type="home" /><span>部门</span></span>}>
						{this.makeCompany.call(this)}
					</Menu.SubMenu>*/}
			    </Menu>
			</Layout.Sider>
		)
	}
}

function Item(data) {
	return (
		<Menu.Item key={data.key}>
			<Link to={data.url}>
				<Icon type={data.icon} className="siderIcon"/>
				<span>{data.type}</span>
			</Link>
		</Menu.Item>
	)
}

function mapStateToProps(state) {
	return {
		collapsed: state.workSider.collapsed,
		sideContent: state.workSider.sideContent,
		department: state.department.departments,
		companyLogined: state.global.companyLogined,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onCollapse: (collapsed) => dispatch(actionCreater.onCollapsedActionCreater(collapsed)),
		getDepartment: () => dispatch(getDepartmentListActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider);