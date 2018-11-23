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
import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"
import OperationModalList from "../outFountCenter/operationModalList.jsx"

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
                title="打款"
                visible={this.props.operationVisible}
                onCancel={this.closeModal.bind(this)}
                footer={null}
                width={width}
            >
               <OperationModalList closeModalHandle={this.handleSave.bind(this)}/>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        operationVisible:state.outFountData.operationVisible,
        pay_id:state.outFountData.pay_id
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.operationActionCreater(val)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))