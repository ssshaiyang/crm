import React from 'react'
import {connect} from 'react-redux'
import {Card,Button} from 'antd'
// import RecordModal from '../modal/recordModal.jsx'
import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class DataRecord extends React.Component {
    componentWillMount(){

    }
    handleCheck(){
        /*this.props.toStoreFormId(
            {
                relate_form_id:this.props.data.relate_form_id,
                relate_detail_id:this.props.data.relate_detail_id,
            }
        )*/
        this.props.storePayManageId({
            pay_manage_id:this.props.data.pay_manage_id
        })
        this.props.getPaymentList({
            pay_manage_id:this.props.data.pay_manage_id
        })
       this.props.openModalBox(true)
    }
    render(){
        return (
            <div>
                <div style={{textAlign:"center"}}>
                    {
                        this.props.data.status==0?
                            "暂无"
                            :
                            <span onClick={this.handleCheck.bind(this)} style={{cursor:"pointer"}}>查看</span>
                    }
                    <RecordModal/>
                </div>
               {/* <div><Button onClick={this.handleCheck.bind(this)}>查看1</Button></div>
                <RecordModal/>*/}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.recordActionCreater(val)),
        storePayManageId:(val)=>dispatch(actionCreater.inFountIdStorePaymentIdActionCreater(val)),
        toStoreFormId:(val)=>dispatch(actionCreater.inFountIdActionCreater(val)),
        getPaymentList:(val)=>dispatch(actionCreater.inFountListPaymentRecord(val)),

    }
}
export default connect(null,mapDispatchToProps)(DataRecord)