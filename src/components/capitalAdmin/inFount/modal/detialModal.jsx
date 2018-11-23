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
import DetailModalList from "../inFountCenter/detailModalList.jsx"
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
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return(
            <Modal
                title="单据详情"
                visible={this.props.detailVisible}
                footer={null}
                onCancel={this.closeModal.bind(this)}
                width={width}
            >
                  <DetailModalList/>
                <div style={{textAlign:"center",marginTop:"20px"}}>
                        <Button className="mainButton" onClick={this.closeModal.bind(this)}>关闭</Button>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        detailVisible:state.inFountData.detailVisible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.detailActionCreater(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))