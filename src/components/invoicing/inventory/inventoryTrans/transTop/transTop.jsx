import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,DatePicker,Select,Col,Row,Modal} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
// import AddModal from '../modal/addModal.jsx'
import ModalEdit from "../modal/modalEdit.jsx"
export class TransTop extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           visible:false
        }
    }
    componentWillMount(){

    }
    closeModal(){
        this.setState({
            visible:false
        })
    }
    handleClick(){
        this.props.openModifyModalBox({
            addAndEdit:true,
            addModalType:1
        })
    }
    render(){
        return (
            <div  style={{borderBottom:"1px solid #d9d9d9",paddingBottom:"24px",overflow:"hidden"}}>
                <Row type="flex" justify="space-between">
                    <Col span={11}>
                        <RangePicker />
                    </Col>
                    <Col span={11} style={{lineHeight:"28px",height:"28px",}}>
                        <Row>
                            <Col span={4} style={{textAlign:"center"}}>审批状态</Col>
                            <Col span={7}>
                                <Select defaultValue="lucy" style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                            <Col span={4} style={{textAlign:"center"}}>审批类型</Col>
                            <Col span={7}>
                                <Select defaultValue="lucy" style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={2} style={{textAlign:"right"}}>
                        <Button className="mainButton" onClick={this.handleClick.bind(this)}><Icon type="add" /></Button>
                    </Col>
                </Row>
                   <ModalEdit/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModifyModalBox:(val)=>dispatch(actionCreater.addAndEditActionCreater(val))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransTop)