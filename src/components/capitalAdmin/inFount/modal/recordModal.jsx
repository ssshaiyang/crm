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
import RecordModalList from "../inFountCenter/RecordModalList.jsx"

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

    handleClose(){
        this.props.closeModalBox(false)
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return(
            <Modal
                title="打款记录"
                visible={this.props.recordVisible}
                footer={null}
                onCancel={this.handleClose.bind(this)}
                width={width}
            >
                <RecordModalList/>
                <div style={{textAlign:"center"}}>
                    <Button className="mainButton" onClick={this.handleClose.bind(this)}>关闭</Button>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        recordVisible:state.inFountData.recordVisible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.recordActionCreater(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))