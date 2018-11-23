import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import CheckOut from './modal/checkOut.jsx'
import Operation from './operation.jsx'
export class ListBox extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "account_id": {
                headerName: "月份",
            },"account_user": {
                headerName: "商业公司",
            },"account_name": {
                headerName: "药品名称",
            },"account_name": {
                headerName: "药品规格",
            },"bank_account": {
                headerName: "批号",
                cellRendererFramework:CheckOut
            },"account_type": {
                headerName: "本月期初数量",
            },"account_detail": {
                headerName: "操作",
                cellRendererFramework:Operation
            },
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        const allData=[{
            "account_id":1,
            "account_user":"孙浪",
            "account_phone":'市场部',
            "account_name":"联系方式",
            "bank_account":"为付款",
            "account_type":"付款单",
            "account_detail":"查看",
            "record":"记录",
            "operation":"打款"
        }]
        return(
            <div>
                <Grid
                    // rowData={this.props.rowData}
                    rowData={allData}
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
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListBox)