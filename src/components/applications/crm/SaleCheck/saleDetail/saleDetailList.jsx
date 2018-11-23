// 销售详情列表
import React from 'react'
import {connect}from 'react-redux'
import Grid from '../../../../common/Grid.jsx'
import {
	formatDateWithOutYears
} from '../../../../../utils/common.js'
export class SaleDetailList extends React.Component {
	  makeColumnDefs() {
		return {
			"drug_id":"序号",
			"drug_name":"产品名称",
			"specifications":{
				headerName:"产品规格",
				valueGetter:(params)=>{
					return params.data.specifications+"/"+params.data.dosage
				}
			},
			"dosage":"产品剂型",
			"sale_date":{
				headerName:"销售日期",
				valueGetter: (params) => formatDateWithOutYears(params.data.sale_date, '月', '日')
			},
			"hospital_name":"医院名称",
			"sale_amount":"销售数量",
		}
	}

     render(){
     	const containerStyle={
 			 minHeight: window.screen.availHeight - 650 + 'px',
 		}
     	return (
     		<div>
     			<Grid
                rowData={this.props.rowData}
				columnDefs={this.makeColumnDefs.call(this)}
				containerStyle={containerStyle}
     			/>
     		</div>
     	)
     }
}
function mapStateToProps(state) {

	return {
		 rowData: state.saleProductList.data
	}
}
export default connect(mapStateToProps)(SaleDetailList)