/*
 * @Author: lcj
 * @Date:   2017-07-25 13:24:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-07 08:39:22
 */

'use strict';
import React from 'react'
import {
	Row,
	Icon
} from 'antd'
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import StepOne from '../components/changePsw/StepOne.jsx'
import StepTwo from '../components/changePsw/StepTwo.jsx'

let styles = {
	container: {
		width: '100%',
		height: '100%',
		background: 'rgb(68,159,178)',
		background: '-webkit-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: '-o-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: '-moz-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: 'linear-gradient(rgb(34,189,181),rgb(105,122,173))',
	},
	logoRow: {
		padding: '20px',
		height: '20%'
	},
	logo: {
		height: '100%'
	},
	formRow: {
		width: '80%',
		minHeight: '70%',
		margin: '0 auto',
		background: 'white',
		borderRadius: '10px',
		padding: '50px 0 0',
		display: 'flex',
		alignItems: 'center'
	},
	caption: {
		width: '50%'
	},
	title: {
		fontSize: '24px',
		letterSpacing: '2px',
		marginBottom: '5%',
		textAlign: 'center'
	},
	col: {
		textAlign: 'center',
	},
	form: {
		padding: '0 20% 0 20%',
		textAlign: 'left',
		width: '100%'
	},
	submitButton: {
		background: '#00b8ae',
		color: 'white',
		fontSize: '18px',
		width: '100%',
		height: '40px',
		margin: '2% 0'
	},
	codeButton: {
		background: '#00b8ae',
		color: 'white',
		width: '100%'
	}
}

class ForgetPsw extends React.Component {

	constructor(props) {
		super(props);
		this.changeStep = this.changeStep.bind(this);
	}

	changeStep(Component) {
		this.setState({
			Component: Form.create()(Component)
		})
	}

	render() {
		let Component = [StepOne, StepTwo, connect(mapStateToProps, mapDispatchProps)(StepThree)][this.props.step || 0]
		return (
			<div style={styles.container}>
				<Row type="flex" align="center" style={styles.logoRow}>
					<img src={this.props.img.logo} alt="logo-white-with-letter" style={styles.logo}/>
				</Row>
				<Row style={styles.formRow} type="flex">
					<Component changeStep={this.changeStep.bind(this)} styles={styles}/>
				</Row>
			</div>
		)
	}
}


class StepThree extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.resetStep();
	}

	render() {
		return (
			<div style={{width:'100%',textAlign:'center'}}>
				<Icon type="check-circle-o" style={{fontSize:'72px',color:'#00b8ac',marginBottom:'3%'}}/>
				<p style={{fontSize:'32px',marginBottom:'5%',letterSpacing:'2px'}}>重置成功</p>
				<Link to='/login' style={{fontSize:'25px',color:'#00b8ac'}}>&lt; 返回登录</Link>
			</div>
		)
	}
}


function mapDispatchProps(dispatch) {
	let action = {
		type: 'CHANGE_STEP',
		payload: {
			step: 0
		}
	}
	return {
		resetStep: () => dispatch(action)
	}
}

function mapStateToProps(state) {
	return state.changePsw;
}

export default connect(mapStateToProps)(ForgetPsw)