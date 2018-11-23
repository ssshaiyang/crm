import React from 'react'
import {connect} from 'react-redux'
import {Card,Button} from 'antd'
import OperationModal from '../modal/operationModal.jsx'
import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class Operation extends React.Component {
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
        this.props.getPaymentTopList({
            pay_manage_id:this.props.data.pay_manage_id
        })
        this.props.openModalBox(true)

    }
    handleCheckClose(){
        this.props.openModalBox(false)

    }
    render(){
        return (
            <div style={{textAlign:"center"}}>
                {
                this.props.data.status==0?
                <div>
                    <div><span onClick={this.handleCheck.bind(this)}>打款</span></div>
                    {/*<OperationModal closeModal={this.props.handleCheckClose}/>*/}
                </div>
                :
                "_" }
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.operationActionCreater(val)),
        storePayManageId:(val)=>dispatch(actionCreater.inFountIdStorePaymentIdActionCreater(val)),
        getPaymentTopList:(val)=>dispatch(actionCreater.inFountListPaymentTop(val)),

    }
}
export default connect(null,mapDispatchToProps)(Operation)