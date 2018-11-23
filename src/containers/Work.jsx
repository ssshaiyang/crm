/*
 * @Author: lcj
 * @Date:   2017-08-03 09:07:01
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 11:18:14
 */
'use strict';

import React from 'react';
import {
	Layout,
	Row,
	Col
} from 'antd'
import {
	Route
} from 'react-router-dom'
import Sider from '../components/work/Sider.jsx'
import RightSider from '../components/work/RightSider.jsx'
import CompanyList from '../components/work/CompanyList.jsx'
import Approval from '../components/work/Approval.jsx'
let styles = {
	body: {
		padding: '0 35px'
	}
}

export class Work extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout style={{flex:1}}>
				<div style={{display:'flex'}} className="bodyContainer">
					<Sider />
					<Layout.Content>
						<Row>
							<Col xs={{span:24}} sm={{span:24}} md={{span:18}}>
								<div style={styles.body}>
									<Route path='/' exact component={CompanyList}/>
									<Route path='/work' exact component={CompanyList}/>
									<Route path='/work/companylist' component={CompanyList}/>
									<Route path='/work/approval' component={Approval}/>
								</div>
							</Col>
							<Col xs={{span:0}} sm={{span:0}} md={{span:6}}>
								<RightSider/>
							</Col>
						</Row>
					</Layout.Content>
				</div>
			</Layout>
		)
	}
}

export default Work;