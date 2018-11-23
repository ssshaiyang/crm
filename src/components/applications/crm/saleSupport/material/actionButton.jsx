import React from 'React';
import {
	Button,
	message,
	Modal
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	pushMeeting,
	getMeetingDetail,
	putMeeting,
} from '../../../../../utils/interface.js'
import {
	Route,
    Link
   } from 'react-router-dom'

import {
    getSaleSupportDetail
} from '../../../../../actions/applications/crm/saleSupport/meeting.js'
import Approval from '../../../../work/approval.jsx'
export class SubmitModal extends React.Component{
	constructor(props){
		super(props);
	}
	


	edit(id) {
		console.log(this.props)
		this.props.getDetail(id);
		this.props.openModal(1);
		console.log('id')
	}

	see(){

	}

	push(sale_support_id){
		Modal.confirm({
			title: '提交',
			content: '确定要提交吗',
			onOk: () => {
				
				this.props.submit(sale_support_id,cb.bind(this))
			}
		})
		console.log(sale_support_id)
		let that = this;
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				console.log("push success")
				message.success("提交成功!")
				that.props.over();
				
			}
		}
		
		// const material_apply_status = this.props.data.material_apply_status;
		
	}
				

	render() {
		const material_apply_id = this.props.data.material_apply_id;
		const button = this.props.data.material_apply_status == 0 ?
					(<div><Button icon="edit" className="gridButton" onClick={this.edit.bind(this,material_apply_id)}/>
					<Button icon="to-top" className="gridButton"  onClick={this.push.bind(this,material_apply_id)}/></div> )
		: (	
				<Link to='/work/approval'><Button icon="select" className="gridButton" /></Link>)
			
		return (
			<div>
			{button}
			<Route path='/work/approval' component={Approval}/>
			</div>

		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getModalData: (id) => dispatch(getSaleSupportDetail(id))
	}
}

export default connect(null, mapDispatchToProps)(SubmitModal)