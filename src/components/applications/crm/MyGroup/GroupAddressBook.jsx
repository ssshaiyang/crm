/*
 * @Author: lcj
 * @Date:   2017-08-30 09:22:07
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:43:29
 * @Descriptions: 我的团队-团队通讯录
 */

import React from 'react'
import {
	Card,
	Button,
	Input
} from 'antd'
import {
	getTeamList
} from '../../../../utils/interface.js'
import Pagination from '../../../common/Pagination.jsx'
import MemberPanel from './MemberPanel.jsx'

export default class GroupAddressBook extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			filter: '',
			page: 1,
			limit: 5,
			totalCount: 0,
			data: []
		}
	}

	componentWillMount() {
		this.getMembers.call(this);
	}

	getMembers(params = {}) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					data: res.data.data || [],
					totalCount: res.data.total_count
				})
			}
		}
		let param = {
			filter: params.filter || this.state.filter,
			page: params.page || this.state.page,
			limit: params.limit || this.state.limit
		}
		getTeamList(param, cb.bind(this))
	}

	renderPanels() {
		const datas = this.state.data;
		return datas.map((item, i) => {
			return <MemberPanel data={item} key={i}/>
		})
	}

	onSearch() {
		this.setState({
			page: 1,
			limit: 5
		})
		this.getMembers({
			filter: this.state.filter
		})
	}

    handleChange(e){
		this.setState({
            filter:e.target.value
		})
   }
	renderExtra() {
		return (
			<div>
				<Input
					placeholder="输入姓名进行搜索"
					style={{width:'200px',marginRight:'20px'}}
					value={this.state.filter}
					onChange={this.handleChange.bind(this)}/>
				<Button icon="search" className="mainButton"
					onClick={this.onSearch.bind(this)}/>
			</div>
		)
	}

	render() {
		return (
			<Card
				className="shadowCard"
				title="团队通讯录"
				style={{marginTop:'10px'}}
				noHovering
				extra={this.renderExtra.call(this)}>
				<div style={{borderBottom:'1px #cdcdcd solid',marginBottom:'10px'}}>
					{this.renderPanels.call(this)}
				</div>
				<div style={{textAlign:'center'}}>
					<Pagination
						page={this.state.page}
						limit={this.state.limit}
						totalCount={this.state.totalCount}
						onChange={(page,limit)=>this.setState({page,limit})}
						onRefrsh={this.getMembers.bind(this)}/>
				</div>
			</Card>
		)
	}
}