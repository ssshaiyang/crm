import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon ,Modal} from 'antd'
import Grid from '../../../common/Grid.jsx'
import DetailRender from "./detailRender.jsx"
import OperationRender from "./operationRender.jsx"
import RecordRender from "./recordRender.jsx"
import DetailModal from '../modal/detailModal.jsx'
import * as actionCreater from "../../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"
import RecordModal from '../modal/recordModal.jsx'

export class BackFountList extends React.Component {

    componentWillMount(){
        // this.props.refreshLisT()
    }
    closeModal(){
        this.props.openModalBox(false)
    }
    closeRecordModal(){
        this.props.openRecordModalBox(false)
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
                cellRendererFramework:DetailRender
            },"record":{
                headerName:"回款记录",
                cellRendererFramework:RecordRender
            },"operation":{
                headerName:"操作",
                cellRendererFramework:OperationRender
            }
        }
    }


    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
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
                <Modal
                    title="单据详情"
                    visible={this.props.visible}
                    footer={null}
                    onCancel={this.closeModal.bind(this)}
                    width={width}
                >
                    <DetailModal closeModalDetail={this.closeModal.bind(this)}/>
                </Modal>
                <Modal
                    title="打款记录"
                    visible={this.props.recordVisible}
                    footer={null}
                    onCancel={this.closeRecordModal.bind(this)}
                    width={width}
                >
                    <RecordModal closeRecord={this.closeRecordModal.bind(this)}/>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        visible:state.backFountList.detailRender,
        rowData: state.backFountList.data,
        recordVisible:state.backFountList.recordRender
    }
}
function mapDispatchToProps(dispatch) {
    return {
        openModalBox:(val)=>dispatch(actionCreater.detailRenderActionCreater(val)),
        openRecordModalBox:(val)=>dispatch(actionCreater.recordRenderActionCreater(val)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BackFountList)