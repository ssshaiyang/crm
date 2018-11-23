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
		console.log(props)
	}
	


	edit(id) {
		console.log(this.props)
		this.props.getDetail(id);
		this.props.openModal(1);
		}

	see(){

	}

	push(sale_support_id){
		console.log(sale_support_id)
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.initPagination();
				this.props.refreshList({
					page: 1,
					limit: 5
				});
				message.success("提交成功!")
			}
		}
		this.props.submit(sale_support_id)
		// const material_apply_status = this.props.data.material_apply_status;
		// Modal.confirm({
		// 	title: '提交',
		// 	content: '确定要提交吗',
		// 	onOk: () => {
		// 		let params = {
		// 			material_apply_status
		// 		}
		// 		pushMeeting(params, cb.bind(this))
		// 	}
		// })
	}
				

	render() {
		
		const meeting_apply_id = this.props.data.meeting_apply_id;
		const button = this.props.data.meeting_apply_status == 0 ?
					(<div><Button icon="edit" className="gridButton" onClick={this.edit.bind(this,meeting_apply_id)}/>
					<Button icon="to-top" className="gridButton"  onClick={this.push.bind(this,meeting_apply_id)}/></div> )
		: (<Button icon="select" className="gridButton" >
			<Link to={'/work/approval'}></Link>
			</Button>)
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