/*
 * @Author: lcj
 * @Date:   2017-08-21 11:06:29
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 16:00:37
 * @Descriptions: 
 */

'use strict';
import React from 'react'
import {
	Layout,
	Row,
	Col
} from 'antd'
import {
	Route
} from 'react-router-dom'
import Sider from '../../components/applications/crm/Sider.jsx'
import CustomerManage from '../../components/applications/crm/CustomerManage.jsx'
import SalePlan from '../../components/applications/crm/SalePlan.jsx'
import WorkReport from '../../components/applications/crm/WorkReport.jsx'
import SaleCheck from '../../components/applications/crm/SaleCheck.jsx'
import PolicyApply from '../../components/applications/crm/PolicyApply.jsx'
import MyGroup from '../../components/applications/crm/MyGroup.jsx'
import SaleSupport from '../../components/applications/crm/SaleSupport.jsx'
import DataDownload from '../../components/applications/crm/DataDownload.jsx'

let styles = {
	body: {
		padding: '35px 35px 0px'
	}
}
export class Crm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout style={{flex:1}}>
				<div style={{display:'flex'}} className="bodyContainer">
					<Sider/>
					<Layout.Content>
						<div style={styles.body}>
							<Route path="/crm" exact component={CustomerManage} />
							<Route path="/crm/customerManage" exact component={CustomerManage} />
							<Route path="/crm/salePlan" exact component={SalePlan} />
							<Route path="/crm/workReport" component={WorkReport}/>
							<Route path="/crm/saleCheck" component={SaleCheck}/>
							<Route path="/crm/policyApply" component={PolicyApply}/>
							<Route path="/crm/myGroup" component={MyGroup}/>
							<Route path="/crm/saleSupport" component={SaleSupport}/>
							<Route path='/crm/dataDownload' component={DataDownload}/>
						</div>
					</Layout.Content>
				</div>
			</Layout>
		)
	}
}

export default Crm;