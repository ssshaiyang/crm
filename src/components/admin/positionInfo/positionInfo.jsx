import React from 'react';
import { connect } from 'react-redux';
import { Card, Modal, Form, Select, Input, Button, Row, Col, message } from 'antd';
import * as actionCreator from "../../../actions/admin/positionInf/positionInfTop.js";
import LeftPosition from './positionInfoLeft.jsx'

const Option = Select.Option;
export class PositionInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            select_parent_id: 0
        }
    }
    componentWillMount() {

    }

    addPosition() {
        this.setState({
            visible: true
        })
        this.props.getSelectList();
    }

    handleOk() {
        let addPositionInfo = {};
        if (this.state.select_parent_id && this.state.position_name) {
            let select_parent_id = this.state.select_parent_id + 1;
            addPositionInfo = {
                parent_position_id: select_parent_id,
                position_name: this.state.position_name
            }
        }
        this.props.addDepartInfo(addDepartInfo);
        console.log('sssss',this.props.addDepartInfoCode);
        if (this.props.addDepartInfoCode == GLOBALSUCCESS) {
            message.info('添加职位成功!');
            this.setState({
                visible: false,
            });
        } else {
            message.info('添加职位失败!');
            this.setState({
                visible: true,
            });
        }
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
        const parent_id = parseInt(value)
        this.setState({
            select_parent_id: parent_id
        })
    }

    getPositionName(e) {
        this.setState({
            position_name: e.target.value
        })
    }

    render() {
        let selectLists = [];
        for (let index in this.props.selectData) {
            selectLists.push(this.props.selectData[index]);
        }
        let selectLastPosition = selectLists.map((selectList, key) => {
            return (
                <Option value={key.toString()}>{selectList}</Option>
            );
        })
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='职位信息' extra={<Button size='small' className='addPosition' onClick={this.addPosition.bind(this)}>添加职位</Button>}>
                    <Row>
                        <Col span={1}><LeftPosition /></Col>
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
        selectData: state.getPositionSelectList.data,
        addPositionInfoCode: state.getPositionSelectList.code
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSelectList: () => dispatch(actionCreator.getSelectList()),
        addPositionInfo: (val) => dispatch(actionCreator.addPositionInfo(val)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PositionInfo)