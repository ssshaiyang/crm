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
import ERROR from '../../../../utils/error-message.json'
import * as actionCreator from "../../../../actions/admin/adminMember/modal/modify.js"
import ModalFrom from "./modalForm.jsx"
import * as actionCreatorAll from "../../../../actions/admin/adminMember/modal/modify.js"
const FormItem = Form.Item;
let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
export class modifyModalContent extends React.Component {
    constructor(props) {
        super(props);
    }
    backlast(){
        this.props.closeModal({
            modalType:0,
            modifyModal:false
        })

    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return(
            <Modal
                visible={this.props.modifyModal}
                key={this.props.modifyModal}
                title={this.props.modalType==1?"添加员工":"修改员工信息"}
                width={width}
                footer={null}
                closable={false}
            >
                <div style={styles.container}>
                       <ModalFrom/>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
            modalData:state.modify.data,
            modifyModal:state.modify.modifyModal,
            modalType:state.modify.modalType,
    }
}
function mapDispatchToProps(dispatch) {
    return {

        closeModal:(val)=>dispatch(actionCreatorAll.modifyModalActionCreater(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(modifyModalContent))