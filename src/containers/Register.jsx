/*
 * @Author: lcj
 * @Date:   2017-07-25 13:24:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 13:07:37
 */

'use strict';
import React from 'react'
import StepOne from '../components/register/StepOne.jsx'

let styles = {
	container: {
		width: '100%',
		height: '100%',
		background: 'rgb(68,159,178)',
		background: '-webkit-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: '-o-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: '-moz-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: 'linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		display: 'flex',
		alignItems: 'center'
	},
	formRow: {
		width: '80%',
		minHeight: '70%',
		margin: '0 auto',
		background: 'white',
		borderRadius: '10px',
		padding: '50px 0',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
	}
}

export default class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			Component: StepOne
		}
	}

	changeStep(Component) {
		this.setState({
			Component
		})
	}

	render() {
		let Component = this.state.Component;
		return (
			<div style={styles.container}>
				<div style={styles.formRow}>
					<Component changeStep={this.changeStep.bind(this)}/>
				</div>
			</div>
		)
	}
}