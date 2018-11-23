/*
 * @Author: lcj
 * @Date:   2017-08-31 08:52:19
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 14:16:27
 * @Descriptions: 折线图
 */

import React from 'react'
import echarts from 'echarts'
import {
	Select
} from 'antd'
const Option = Select.Option;
import {get
} from '../../../../utils/interfaces/setup.js'
import {
	exportDate
} from '../../../../utils/common.js'

const width = window.screen.availWidth > 1000 ? 750 : '90%';

export default class LineChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			refs: undefined,
			member: this.props.member,
			choosenMember: []
		}
		this.getData = this.getData.bind(this);
	}

	getData(cb, choosenMember) {
		let member = choosenMember || this.state.choosenMember;
		let params = {
			customer_stage_id: this.props.customerStage,
			start_time: exportDate(this.props.startTime),
			endTime: exportDate(this.props.endTime),
			employee_ids: member.join(',') || ""
		}
		get(this.props.url, params, cb.bind(this));
	}

	componentDidMount() {
		//打开默认没有用户,所以不进行请求
		// this.getData((res) => this.renderChart.call(this, res.data))
		this.renderChart.call(this, {})
	}

	makeXseries(data) {
		let series = [];
		if (Array.isArray(data)) {
			series = [{
				type: 'line',
				animation: false,
				lineStyle: {
					normal: {
						width: 1
					}
				},
				data: data.map(item => item.count)
			}]
		} else {
			for (let key in data) {
				series.push({
					name: key,
					type: 'line',
					animation: false,
					lineStyle: {
						normal: {
							width: 1
						}
					},
					data: data[key].map(item => item.count)
				})
			}
		}
		return series;
	}

	renderChart(data = {}) {
		let refs = undefined;
		if (this.state.refs)
			refs = this.state.refs;
		else {
			refs = echarts.init(this.refs.echarts);
			this.setState({
				refs
			})
		}
		// let refs = echarts.init(this.refs.echarts)
		const xData = data.x || [];
		const yData = data.y || [];
		let series = this.makeXseries(xData);
		let option = {
			grid: {
				bottom: 80
			},
			toolbox: {
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					animation: false,
					label: {
						backgroundColor: '#505765'
					}
				}
			},
			dataZoom: [{
				show: true,
				realtime: true,
				start: 0,
				end: 100
			}, {
				type: 'inside',
				realtime: true,
				start: 0,
				end: 100
			}],
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					onZero: false
				},
				data: Array.isArray(xData) ? xData.map(item => item.date) : xData[Object.keys(xData)[0]].map(item => item.date)
			}],
			yAxis: [{
				name: `累计值:${this.props.totalCount}`,
				type: 'category',
				data: yData
			}],
			series: series
		};

		refs.setOption(option);
	}
    //下拉框
	chooseMember(choosenMember) {
		console.log(choosenMember)
		if (!choosenMember)
			return false;
		this.getData((res) => this.renderChart.call(this, res.data), choosenMember);
		this.setState({
			choosenMember
		})
	}

	makeSelect() {

		if (!this.props.member)
			return false;
		let children = this.props.member.map(item => (
			<Option key={item.employee_id}>{item.employee_name}</Option>
		));
		return <Select
		    mode="multiple"
		    style={{ width: '100%' }}
		    placeholder="请选择用户"
		    defaultValue={[]}
		    onChange={this.chooseMember.bind(this)}>
		    {children}
		</Select>
	}

	render() {
		return (
			<div>
				{this.makeSelect.call(this)}
				<div ref="echarts" style={{width:'95%',height:350,margin:'0 auto'}}/>
			</div>
		)
	}
}

LineChart.defaultProps = {
	url: '',
	member: [],
	startTime: '',
	endTime: '',
	customerStage: 0,
	totalCount: 0,
}