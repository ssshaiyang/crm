import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import {formatDate,exportDate} from '../../../../utils/common.js'
import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"

export class OutFountList extends React.Component {
    componentWillMount(){

    }
    makeColumnDefs() {
        return {
            "order_no": {
                headerName: "系统单号",
            },"pay_status": {
                headerName: "付款状态",
            },"billing_name": {
                headerName: "开票公司",
            },"drug_name": {
                headerName: "药品",
            },"dosage": {
                headerName: "剂型",
            },"specification": {
                headerName: "规格",
                valueGetter: (params) =>{
                    return params.data.specification+"/"+params.data.unit
                }
            },"unit": {
                headerName: "计量单位",
            },"manufacturer_name":{
                headerName:"生产厂家",
            },"purchase_date":{
                headerName:"采购日期",
                valueGetter: (params) =>{
                    return  formatDate(params.data.purchase_date,"月","日")
                }
            },"pay_account_user":{
                headerName:"开户名",
            },"pay_account_name":{
                headerName:"开户行",
            },"pay_bank_account":{
                headerName:"账号",
            },"pay_price":{
                headerName:"打款金额",
            },"create_time":{
                headerName:"创建时间",
                valueGetter: (params) =>{
                    return  formatDate(params.data.create_time,"月","日")
                }
            },"creator_name":{
                headerName:"创建人",
            },"pay_remark":{
                headerName:"备注",
            }
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }

        return(
            <div>
                <Grid
                    // rowData={this.props.rowData}
                    rowData={this.props.checkOut}
                    columnDefs={this.makeColumnDefs.call(this)}
                    containerStyle={containerStyle}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // rowData: state.bankList.data,
        checkOut:state.outFountData.checkOut,

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OutFountList)