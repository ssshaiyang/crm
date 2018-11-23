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
import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"
import RecordList from "../accountCenter/bankRecordList.jsx"
import RecordListPage from "../accountCenter/bankRecordPage.jsx"
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
    closeModal(){
        this.props.closeModalBox(false)
    }
    handleSave(){
        this.props.closeModalBox(false)
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";

        return(
            <Modal
                visible={this.props.recordVisible}
                onCancel={this.closeModal.bind(this)}
                footer={null}
                title="收支记录"
                width={width}
            >
               <RecordList/>
               {/* <div style={{textAlign:"center"}}>
                    <RecordListPage/>
                </div>*/}
                <div style={{textAlign:"center",margin:"10px 0"}}>
                    <Button className="mainButton" onClick={this.handleSave.bind(this)}>关闭</Button>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        recordVisible:state.bankList.recordVisible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.recordActionCreater(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))