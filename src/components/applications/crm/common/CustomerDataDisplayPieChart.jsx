/*
 * @Author: lcj
 * @Date:   2017-08-21 12:01:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 09:03:17
 * @Descriptions: 客情数据显示的饼图
 */

import React from 'react'
import echarts from 'echarts'
import {
	Col
} from 'antd'
/**
 * 通过value来生成饼图的data的item,value小于0时,value为0
 * @param  {[number]} value [data的数据]
 */
let dataItem = (value = 0, color = "#dcdcdc") => ({
	value: value < 0 ? 0 : value,
	itemStyle: {
		normal: {
			color: value <= 0 ? "#dcdcdc" : color,
		},
		emphasis: {
			color: value <= 0 ? "#dcdcdc" : color,
		}
	}
})

export default class CustomerDataDisplayPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			refs: undefined
		}
		this.renderChart = this.renderChart.bind(this);
	}

	componentWillReceiveProps(props) {
		this.renderChart(props);
	}

	componentDidMount() {
		this.renderChart();
	}

	renderChart(props) {
		const prop = props || this.props;
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
		const willFinishedNumber = prop.willFinishedNumber;
		let finishedNumber = prop.finishedNumber;
		//超额完成数量
		const overFinishedNumber = finishedNumber - willFinishedNumber;
		const remainFilishedNumber = -overFinishedNumber;
		var option = {
			// tooltip: {
			// 	trigger: 'item',
			// },
			series: [{
				type: 'pie',
				radius: ['60%', '70%'],
				avoidLabelOverlap: false,
				legendHoverLink: false,
				hoverAnimation: false,
				cursor: 'default',
				label: {
					normal: {
						show: true,
						position: 'center',
						formatter: finishedNumber.toString(),
						textStyle: {
							color: 'black',
							fontWeight: 'lighter',
							fontSize: 24
						}

					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [
					// dataItem(overFinishedNumber, prop.overFinishedColor),
					dataItem(finishedNumber, prop.finishedColor),
					dataItem(remainFilishedNumber, prop.remainFilishedColor)
				]
			}]
		};
		refs.setOption(option);
	}


	render() {
		const className = this.props.className;
		return (
			<div style={{display:'flex',alignItems:'center',fontSize:'16px',color:'#5c6270'}}>
				<div ref="echarts" style={{width:80,height:80}}/>
				{this.props.label}
			</div>
		)
	}
}

CustomerDataDisplayPieChart.defaultProps = {
	className: 'echarts' + Math.floor(Math.random() * 100),
	finishedNumber: 0, //完成数量
	willFinishedNumber: 0, //计划完成数量
	finishedColor: 'red',
	overFinishedColor: 'blue',
	remainFilishedColor: '#dcdcdc',
	label: 'label'
}