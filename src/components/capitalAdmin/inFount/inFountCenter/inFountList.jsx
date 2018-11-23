import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
// import bankListRender from "./bankListRender.jsx"
import DataDetail from "./dataDetail.jsx"
import DataRecord from "./dataRecord.jsx"
import Operation from './operation.jsx'
import OperationModal from '../modal/operationModal.jsx'
import DetailModal from '../modal/detialModal.jsx'
import RecordModal from '../modal/recordModal.jsx'
export class InFountList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "key": {
                headerName: "序号",
            },"employee_name": {
                headerName: "申请人",
            },"department_name": {
                headerName: "申请部门",
            },"phone": {
                headerName: "联系方式",
            },"status": {
                headerName: "状态",
                valueGetter: (params) =>{
                    return params.data.status==0?"未付款":"已付款"
                }
            },"bill_type": {
                headerName: "单据类型",
            },"account_detail": {
                headerName: "单据详情",
                cellRendererFramework:DataDetail
            },"record":{
                headerName:"打款记录",
                cellRendererFramework:DataRecord
            },"operation":{
                headerName:"操作",
                cellRendererFramework:Operation
            }
        }
    }

    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        let count=1
        for(let i=0;i<this.props.rowData.length;i++){
            this.props.rowData[i].key=count++
        }
        return(
            <div>
                <Grid
                     rowData={this.props.rowData}
                    columnDefs={this.makeColumnDefs.call(this)}
                    containerStyle={containerStyle}
                />
                <DetailModal/>
                <RecordModal/>
                <OperationModal/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rowData: state.inFountData.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InFountList)