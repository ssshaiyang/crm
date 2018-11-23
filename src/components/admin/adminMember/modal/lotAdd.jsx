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
import * as actionCreator from "../../../../actions/admin/adminMember/modal/lotAdd.js"

/*import ERROR from '../../../../utils/error-message.json'
import * as actionCreator from "../../../../actions/admin/adminMember/modal/modify.js"
import ModalFrom from "./modalForm.jsx"*/
const FormItem = Form.Item;
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
    closeModal(){
        this.props.closeModalBox(false)
    }
    render(){
        // const width=window.screen.avaiWidth>700 ? 400:"70%";
        return(
            <Modal
                visible={this.props.visible}
                onCancel={this.closeModal.bind(this)}
                footer={null}
            >
                123
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
       visible:state.lotAddModal.visible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
       closeModalBox:(val)=>dispatch(actionCreator.lotAddModal(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))