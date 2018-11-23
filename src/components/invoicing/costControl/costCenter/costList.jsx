import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
// import bankListRender from "./bankListRender.jsx"
import CostRender from './costRender.jsx'
import DetailRender from './detailRender.jsx'
export class OutFountList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "account_id": {
                headerName: "商业公司",
            },"account_user": {
                headerName: "产品",
            },"account_phone": {
                headerName: "规格",
            },"account_name": {
                headerName: "批号",
                cellRendererFramework:""
            },"checkOut": {
                headerName: "详情",
                cellRendererFramework:DetailRender
            },"account_type": {
                headerName: "入",
            },"operation": {
                headerName: "操作",
                cellRendererFramework:CostRender
            }
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