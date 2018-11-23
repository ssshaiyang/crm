/*
 * @Author: lcj
 * @Date:   2017-08-15 08:58:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 13:32:38
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
import Sider from '../components/apps/Sider.jsx'
import AppsPanel from '../components/apps/AppsPanel.jsx'
let styles = {
	body: {
		padding: '0 35px'
	}
}

export class Apps extends React.Component {
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
							<Route path='/apps' exact render={()=><AppsPanel type={0} history={this.props.history}/>}   />
							<Route path='/apps/myApps' render={()=><AppsPanel type={0} history={this.props.history}/>}  />
							<Route path='/apps/companyApps' render={()=><AppsPanel type={1} history={this.props.history}/>}  />
							<Route path='/apps/allApps' render={()=><AppsPanel type={2} history={this.props.history}/>}  />
						</div>
					</Layout.Content>
				</div>
			</Layout>
		)
	}
}

export default Apps