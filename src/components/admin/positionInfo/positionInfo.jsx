import React from 'react';
import { connect } from 'react-redux';
import { Card, Modal, Form, Select, Input, Button, Row, Col, message } from 'antd';
import * as actionCreator from "../../../actions/admin/positionInf/positionInfTop.js";
import LeftPosition from './positionInfoLeft.jsx'
import * as actionCreaterModal from "../../../actions/admin/processAdmin/modal/addRuleModal";

const Option = Select.Option;
export class PositionInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            select_parent_id: 0,
            checkCode:0,
        }
    }
    componentWillMount() {
    }

    addPosition() {
        this.props.getSelectList();
        this.setState({
            visible: true
        })
    }

    handleOk() {
        let addDepartInfo= {};
        let selectbollan = 0;
        if(this.state.select_parent_id ==0){
            selectbollan =1;
        }else{
            selectbollan =this.state.select_parent_id
        }
        if (selectbollan && this.state.position_name) {
            let select_parent_id = this.state.select_parent_id;
            addDepartInfo = {
                parent_position_id: select_parent_id,
                position_name: this.state.position_name
            }
        }
        console.log(addDepartInfo)
        this.props.addDepartInfo(addDepartInfo);
    }

    handleCancel() {
        this.setState({
            visible: false,
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleChange(value) {
        const parent_id = value;
        this.setState({
            select_parent_id: parent_id
        })
    }

    getPositionName(e) {
        this.setState({
            position_name: e.target.value
        })
    }

    cancel(mode){
        this.setState({
            checkCode:mode
        })
    }
    render() {
        let selectLists = [];
        let selectListId =this.props.selectData;
        if(this.props.addPositionInfoCode ==GLOBALSUCCESS){
            message.info('添加职位成功!');
            this.setState({
                checkCode:1000,
                visible: false,
            })
            this.props.checkCodeData();
        }
        for (let index in this.props.selectData.position) {
            selectLists.push(this.props.selectData.position[index]);
        }
        let selectLastDepart = selectLists.map((selectList, key) => {
                return (
                    <Option value={selectListId.parent_id[key]}>{selectList}</Option>
                );

        })
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='职位信息' extra={<Button size='small' className='addPosition' onClick={this.addPosition.bind(this)}>添加职位</Button>}>
                    <Row>
                        <Col span={1}><LeftPosition code={this.state.checkCode} cancel={mode=>this.cancel(mode)} /></Col>
                        <Col span={2}>
                            {/* <RigthPosition /> */}
                        </Col>
                    </Row>
                </Card>
                <Modal
                    title="添加职位"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div style={{ marginBottom: 10 }}>
                                <span style={{ width: 100 }}>上级职位:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <Select defaultValue="请选择职位" style={{ width: 240 }} onChange={this.handleChange.bind(this)}>
                                    {selectLastDepart}
                                </Select>
                            </div>
                            <div>
                                <span style={{ width: 100 }}>职位名称:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <Input placeholder='请输入职位名称' style={{ width: 240 }} onBlur={this.getPositionName.bind(this)} />
                            </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectData: state.getDepartSelectList.data,
        addPositionInfoCode: state.getDepartSelectList.code
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSelectList: () => dispatch(actionCreator.getSelectList()),
        addDepartInfo: (val) => dispatch(actionCreator.addDepartInfo(val)),
        checkCodeData: () => dispatch(actionCreator.checkCode()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PositionInfo)