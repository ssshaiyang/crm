import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal
} from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import OperationModalList from "../inFountCenter/operationModalList.jsx"

let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
export class LotAddModal extends React.Component {
    constructor(props) {
        super(props);
    }
   componentWillMount(){
       this.props.getCenterPaymentList()
   }
    handleSave(){
        this.props.closeModalBox(false)
    }
    closeModal(){
        this.props.closeModalBox(false)
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return(
            <Modal
                title="操作"
                visible={this.props.operationVisible}
                onCancel={this.closeModal.bind(this)}
                footer={null}
                width={width}
            >
               <OperationModalList closeModalHandle={this.closeModal.bind(this)}/>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        operationVisible:state.inFountData.operationVisible,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.operationActionCreater(val)),
        getCenterPaymentList:()=>dispatch(actionCreater.inFountListPaymentCenter()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))