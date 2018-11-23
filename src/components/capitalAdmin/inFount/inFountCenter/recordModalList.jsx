import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import {formatDate,exportDate} from '../../../../utils/common.js'

export class OutFountList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "key": {
                headerName: "序号",
            },"create_time": {
                headerName: "打款日期",
                valueGetter: (params) =>{
                    return  formatDate(params.data.create_time,"年","月","日")
                }
            },"pay_account_name": {
                headerName: "打款账户",
            },"pay_bank_account": {
                headerName: "打款账号",
            },"receipt_account_name": {
                headerName: "收款账户",
            },"receipt_bank_account": {
                headerName: "收款账号",
            },"price": {
                headerName: "打款金额",
            },"voucher_number":{
                headerName:"凭证编号",
            },"voucher":{
                headerName:"凭证",

            }
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }
       let count=1;
        for(var i=0;i<this.props.rowData.length;i++){
            this.props.rowData[i]["key"]=count++
        }
        return(
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
        rowData: state.inFountData.inFountPaymentCheck,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OutFountList)