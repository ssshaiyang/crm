/*
 * @Author: lcj
 * @Date:   2017-08-29 19:51:42
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-06 18:10:57
 * @Descriptions: crm-销售支持
 */

import React from 'react'
import {
	Card,
	Menu
} from 'antd'
import {
	Link,
	Route
} from 'react-router-dom'
import Material from './saleSupport/material/Material.jsx'
import Meeting from './saleSupport/meeting/Meeting.jsx'
import Apply from './saleSupport/apply/Apply.jsx'

export default class SaleSupport extends React.Component {
	render() {
		const defaultSelectedKeys = window.location.pathname.split('/')[3] || 'material'
		return (
			<Card
				title="销售支持"
				noHovering>
				<Menu
					defaultSelectedKeys={[defaultSelectedKeys]}
			        mode="horizontal">
			        <Menu.Item key="material">
			          	<Link to='/crm/saleSupport/material'>物料申请</Link>
			        </Menu.Item>
			        <Menu.Item key="meeting">
			          	<Link to='/crm/saleSupport/meeting'>会议申请</Link>
			        </Menu.Item>
			        <Menu.Item key="apply">
			          	<Link to='/crm/saleSupport/apply'>报销申请</Link>
			        </Menu.Item>
			    </Menu>
			    <Route path='/crm/saleSupport' exact component={Material}/>
			    <Route path='/crm/saleSupport/material' component={Material}/>
			    <Route path='/crm/saleSupport/meeting' component={Meeting}/>
			    <Route path='/crm/saleSupport/apply' component={Apply}/>
			</Card>
		)
	}
}