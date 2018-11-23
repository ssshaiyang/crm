/*
 * @Author: lcj
 * @Email : luchenjiemail@gmail.com
 * @Description : 侧边栏通用UI组件
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

export default class Sider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		}
	}

	render() {
		const content = this.props.sideContent;
		let defaultSelectedKeys = window.location.pathname.split('/')[2];
		defaultSelectedKeys = defaultSelectedKeys || this.props.defaultSelectedKeys;
		return (
			<Layout.Sider style={styles.sider} breakpoint='sm' collapsible collapsed={this.state.collapsed} onCollapse={(collapsed)=>this.setState({collapsed})}>
				<SiderCompanyName/>
				<Menu
					defaultSelectedKeys={[defaultSelectedKeys]}
					theme="dark"
					mode="inline"
					inlineCollapsed={this.state.collapsed}>
					{content.map(data=>Item(data,this.props.companyLogined))}
			    </Menu>
			</Layout.Sider>
		)
	}
}

Sider.defaultProps = {
	sideContent: [],
	defaultSelectedKeys: "",
}

/**
 * 用来生成左侧导航栏的Item
 * @param {[json]} data           [生成Item所需要的数据]
 * @param {[bool]} companyLogined [用户是否已经登录系统]
 */
function Item(data, companyLogined) {
	const display = data.needCompanyLogined && !companyLogined ? 'none' : 'block';
	return (
		<Menu.Item key={data.key} style={{display:display}}>
			<Link to={data.url}>
				<Icon type={data.icon} className="siderIcon"/>
				<span>{data.type}</span>
			</Link>
		</Menu.Item>
	)
}