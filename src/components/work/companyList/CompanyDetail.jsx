/*
 * @Author: lcj
 * @Date:   2017-08-04 09:53:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 17:10:25
 */

'use strict';

import React from 'react'
import {
	Card,
	Row,
	Col,
	Icon
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	onLoginModelSwitchActionCreater
} from '../../../actions/work/companyList/companyLoginModel.js'
const CardGrid = Card.Grid;

let styles = {
	card: {
		marginTop: '20px',
		cursor: 'pointer',
		width: 150,
		height: '170px',
	},
	imgStyle: {
		height:100
	},
	companyName: {
		fontSize: '15px',
		color: '#7d7d7d',
		textAlign: 'center',
	},
	rightIcon: {
		fontSize: '45px',
		color: '#282828'
	}
}

export class CompanyDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	openModel(e) {
		this.props.openModel(this.props.company_id, this.props.company_name)
	}

	render() {
		return (
			<Card style={styles.card} onClick={this.openModel.bind(this)}>
				{/* <Row align="middle" type="flex" style={styles.row}>
					<Col span={6} style={Object.assign({}, styles.grid)}>
						<img src={this.props.company_logo} alt="company_logo" />
					</Col>
					<Col span={12} style={Object.assign({}, styles.grid, styles.companyName)}>
						{this.props.company_name}
					</Col>
					<Col span={6} style={Object.assign({}, styles.grid)}>
						<Icon type="right" style={styles.rightIcon} />
					</Col>
				</Row> */}
				<div style={styles.imgStyle}>
					<img src={this.props.company_logo} alt="company_logo" />
				</div>
				<div style={styles.companyName}>
					{this.props.company_name}
				</div>
			</Card>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		openModel: (company_id, name) => dispatch(onLoginModelSwitchActionCreater(true, company_id, name)),
	}
}

function mapStateToProps(state) {
	return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);