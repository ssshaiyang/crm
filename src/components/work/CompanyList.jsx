/*
 * @Author: lcj
 * @Date:   2017-08-03 11:12:42
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 20:36:03
 */

'use strict';

import React from 'react'
import {
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import CreateCompanyModel from './companyList/CreateCompanyModel.jsx'
import CompanyDetail from './companyList/CompanyDetail.jsx'
import CompanyLoginModel from './companyList/CompanyLoginModel.jsx'
import {
	updateCompanyListActionCreator
} from '../../actions/work/companyList.js'
import {
	onModelSwitchActionCreator
} from '../../actions/work/companyList/createCompanyModel.js'

let styles = {
	container: {
		paddingTop: '10px'
	},
	createCompanyButton: {
		background: '#01d9b8',
		color: 'white',
		height: '48px',
		fontSize: '15px',
		letterSpacing: '2px',
		width: '130px'
	},
}

export class CompanyList extends React.Component {
	constructor(props) {
		super(props)
	}

	getCompanyList() {
		return this.props.companies.map(company =>
			<CompanyDetail style={styles.Companylogo} key={company.company_id} {...company} />
		)
	}

	componentWillMount() {
		this.props.updateCompanyList();
	}

	render() {
		return (
			<div style={styles.container}>
				<ul>
					<li style={{ display: 'inline-block', marginRight: 10 }}>{this.getCompanyList.call(this)}</li>
					<li style={{ display: 'inline-block', marginRight: 10 }}>
						<Button
							style={styles.createCompanyButton}
							onClick={this.props.openModel}>
							创建企业
                        </Button>
					</li>
				</ul>
				{/* {this.getCompanyList.call(this)} */}
				<CreateCompanyModel updateCompanyList={this.props.updateCompanyList} />
				<CompanyLoginModel />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state.companyList;
}

function mapDispatchToProps(dispatch) {
	return {
		openModel: () => dispatch(onModelSwitchActionCreator(true)),
		updateCompanyList: () => dispatch(updateCompanyListActionCreator())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);