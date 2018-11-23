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
import DetailModalList from "../outFountCenter/detailModalList.jsx"
import {
    getOutFountCheck
} from "../../../../utils/interface.js"
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
                    <Button onClick={this.closeModal.bind(this)} className="mainButton">关闭</Button>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        detailVisible:state.outFountData.detailVisible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.detailActionCreater(val)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LotAddModal))