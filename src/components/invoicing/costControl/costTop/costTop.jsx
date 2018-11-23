import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,DatePicker,Select,Col,Row,Modal} from 'antd'
// import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
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
        this.setState({
            visible:true
        })
    }
    render(){
        return (
            <div  style={{borderBottom:"1px solid #d9d9d9",paddingBottom:"24px",overflow:"hidden"}}>
                <Row type="flex" justify="space-between">
                    <Col span={8}>
                        <Row>
                            <Col span={5} style={{lineHeight:"28px"}}>
                                业务日期
                            </Col>
                            <Col span={18}>
                                <RangePicker />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row>
                            {/*<Col span={3} style={{lineHeight:"28px"}}>审核类型</Col>*/}
                            <Col span={8}>
                                <span style={{marginRight:"10px"}}>审核类型</span>
                                <Select defaultValue="lucy" style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                            {/*<Col span={3} style={{lineHeight:"28px"}}>单据状态</Col>*/}
                            <Col span={8}>
                                <span style={{marginRight:"10px"}}>单据状态</span>
                                <Select defaultValue="lucy" style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                            {/*<Col span={3} style={{lineHeight:"28px"}}>审批状态</Col>*/}
                            <Col span={8}>
                                <span style={{marginRight:"10px"}}>审批状态</span>
                                <Select defaultValue="lucy" style={{ width: 120 }} >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                   {/* <Col span={2} style={{textAlign:"right"}}>
                        <Button className="mainButton" onClick={this.handleClick.bind(this)}><Icon type="add" /></Button>
                    </Col>*/}
                </Row>
             {/*   <Modal
                    title="添加库存调拔单"
                    visible={this.state.visible}
                    onCancel={this.closeModal.bind(this)}
                    footer={null}
                >
                    <AddModal closeModalProps={this.closeModal.bind(this)}/>

                </Modal>*/}
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

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransTop)