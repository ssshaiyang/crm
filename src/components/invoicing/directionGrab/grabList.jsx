import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../common/Grid.jsx'
import GrabRender from './grabRender.jsx'
export class ListBox extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "xuhao": {
                headerName: "序号",
            },"account_user": {
                headerName: "商业公司名称",
            },"account": {
                headerName: "抓取日期",
            },"account_name": {
                headerName: "抓取状态",
            },"bank_account": {
                headerName: "药品品种数量",
            },"account_type": {
                headerName: "条目数量",
            },"operation": {
                headerName: "操作",
                cellRendererFramework:GrabRender
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