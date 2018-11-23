import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../../common/Grid.jsx'
import GridRender from '../transCenter/gridRender.jsx'
export class OutFountList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "account_id": {
                headerName: "系统单号",
            },"account_user": {
                headerName: "审批状态",
            },"account_phone": {
                headerName: "审核类型",
            },"account_name": {
                headerName: "药品",
            },"bank_account": {
                headerName: "计量单位",
            },"account_type": {
                headerName: "剂型",
            },"account_detail": {
                headerName: "操作",
                cellRendererFramework:GridRender
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
            /*"account_detail":"查看",
            "record":"记录",
             "operation":"打款"*/
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
export default connect(mapStateToProps,mapDispatchToProps)(OutFountList)