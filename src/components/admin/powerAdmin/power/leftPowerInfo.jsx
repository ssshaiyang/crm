import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Table, Modal, Input, Row, Col, Form, Icon, Checkbox, Transfer } from 'antd'
import * as actionCreator from "../../../../actions/admin/power/leftPowerInfo.js";
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};


export class LeftPowerInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            upateVisible: false,
            addRoleVisible: false,
            addPowerVisible: false,
            indeterminate: true,
            checkAll: false,
            mockData: [],
            targetKeys: [],
        }
    }

    componentWillMount() {
        this.props.getPowerList();
    }

    componentDidMount() {
        this.props.form.validateFields();
        //this.getMock();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    updateShowModal(key) {
        this.setState({
            upateVisible: true,
        });
    }
    handleOkUpdate(e) {
        this.setState({
            upateVisible: false,
        });
    }
    handleCancelUpdate(e) {
        this.setState({
            upateVisible: false,
        });
    }

    addRole() {
        this.props.hasPowerList();
        this.setState({
            addRoleVisible: true
        })
    }

    addPower() {
        this.props.getPowerClassification();
        this.setState({
            addPowerVisible: true,
            addRoleVisible: false
        })
    }

    handleOkAdd() {
        this.setState({
            addRoleVisible: false
        })
    }

    handleCancelAdd() {
        this.setState({
            addRoleVisible: false
        })
    }

    showRoleInfo(id, name) {
        const role_info = {
            role_name: name,
            role_id: id
        }
        this.props.getRolePower(role_info);
    }

    handleOkAddPower() {
        this.setState({
            addPowerVisible: false
        })
    }

    handleCancelAddPower() {
        this.setState({
            addPowerVisible: false
        })
    }

    //遍历渲染权限分类
    powerClassification(data) {
        if (data.length > 0) {
            return data.map((item,key) => {
                return (
                    <div key={key} id={item.permission_id} className='power_classification_info'><a onClick={this.clickPower.bind(this, item.permission_id)}>{item.permission_name}</a></div>
                );
            })
        }
    }

    //复选框选中打钩
    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.props.clickedPower.length),
            checkAll: checkedList.length === this.props.clickedPower.length,
        });
    }
    //点击全选
    onCheckAllChange(e) {
        let allCheckVal = [];
        if (this.props.clickedPower.length) {
            for (let i = 0; i < this.props.clickedPower.length; i++) {
                allCheckVal.push(this.props.clickedPower[i].permission_name);
            }
        }
        this.setState({
            checkedList: e.target.checked ? allCheckVal : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    //点击权限分类获取对应权限
    clickPower(power_id) {
        this.props.getClickPower();
    }

    //渲染显示点击选中的权限列表
    showClickPower(data) {
        let power_names = [];
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                power_names.push(data[i].permission_name);
            }
            return (
                <CheckboxGroup options={power_names} value={this.state.checkedList} onChange={this.onChange.bind(this)} />
            );
        }
    }

    /**
     * 穿梭框方法
     */
    // getMock(){
    //     const targetKeys = [];
    //     const mockData = [];
    //     let power_names = [];
    //     if (this.props.clickedPower.length > 0) {
    //         for (let i = 0; i < this.props.clickedPower.length; i++) {
    //             power_names.push(this.props.clickedPower[i].permission_name);
    //         }
    //     }
    //     for (let i = 0; i < 20; i++) {
    //         const data = {
    //             key: i.toString(),
    //             title: `content${i + 1}`,
    //             description: `description of content${i + 1}`,
    //             chosen: Math.random() * 2 > 1,
    //         };
    //         if (data.chosen) {
    //             targetKeys.push(data.key);
    //         }
    //         mockData.push(data);
    //     }
    //     for(let i=0;i<power_names;i++){
    //         const data={
    //             key:i.toString(),
    //             title:power_names
    //         }
    //         mockData.push(data);
    //     }
    //     this.setState({ mockData});
    // }

    // handleChange(targetKeys, direction, moveKeys){
    //     console.log('sssss',targetKeys, direction, moveKeys);
    //     this.setState({ targetKeys });
    // }

    // renderItem(item){
    //     const customLabel = (
    //         <span className="custom-item">
    //             {item.title}
    //         </span>
    //     );

    //     return {
    //         label: customLabel,  // for displayed item
    //         value: item.title,   // for title and filter matching
    //     };
    // }

    addPowerInfo() {

    }

    render() {
        let rolesList;
        const { getFieldDecorator } = this.props.form;
        if (this.props.powerListMenu.length > 0) {
            rolesList = this.props.powerListMenu.map((item,key) => {
                return (
                    <div key={key}>
                        <span id={item.role_id}>
                            <table>
                                <tr>
                                    <td style={{ width: 160 }}><a onClick={this.showRoleInfo.bind(this, item.role_id, item.role_name)}>{item.role_name}</a></td>
                                    <td>
                                        <Button size='small' className='mainButton' style={{ marginBottom: 5, marginRight: 5 }} onClick={this.updateShowModal.bind(this, item.role_id)}>修改</Button>
                                        <Button size='small' className='mainButton'>删除</Button>
                                    </td>
                                </tr>
                            </table>
                        </span>
                        <Modal
                            visible={this.state.upateVisible}
                            title="Title"
                            onOk={this.handleOkUpdate.bind(this)}
                            onCancel={this.handleCancelUpdate.bind(this)}
                        >
                        </Modal>
                    </div>
                );
            })
        }

        return (
            <div>
                <Card title="角色名称"
                    id='leftPowerCard'
                    extra={<Button size='small' className='mainButton' onClick={this.addRole.bind(this)}>添加角色</Button>}>
                    {rolesList}
                </Card>
                <Modal
                    visible={this.state.addRoleVisible}
                    width='780'
                    onOk={this.handleOkAdd.bind(this)}
                    onCancel={this.handleCancelAdd.bind(this)}
                >

                    <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                        <Row>
                            <Col span={11}>
                                <Card title='添加角色' id='addRoleCard'>
                                    <FormItem label='角色名称' style={{ marginBottom: 5, marginRight: 5 }}>
                                        {getFieldDecorator('role_name', {})
                                            (
                                            <Input style={{ width: 228 }} />
                                            )}
                                    </FormItem>
                                    <FormItem label='角色描述'>
                                        {getFieldDecorator('role_detail', {})
                                            (
                                            <textarea rows="8" cols="35" className='addRoleTextarea' />
                                            )}
                                    </FormItem>
                                </Card>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={12}>
                                <Card title='角色权限' id='addRoleCard' extra={<Button size='small' style={{ marginRight: 40 }} className='mainButton'
                                    onClick={this.addPower.bind(this)}>添加权限</Button>}>
                                    <div className='addPowerContainer'>
                                        <div className='power_name'>权限名称</div>
                                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                </Modal>

                <Modal
                    visible={this.state.addPowerVisible}
                    width='780'
                    onOk={this.handleOkAddPower.bind(this)}
                    onCancel={this.handleCancelAddPower.bind(this)}
                >
                    <Row>
                        <Col span={7}>
                            <Card title='权限分类' id='addRoleCard'>
                                {this.powerClassification(this.props.powerClassification)}
                            </Card>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={8}>
                            <Card id='addRoleCard'>
                                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                    <Checkbox
                                        indeterminate={this.state.indeterminate}
                                        onChange={this.onCheckAllChange.bind(this)}
                                        checked={this.state.checkAll}
                                        className='allCheckBot'
                                    >
                                        全选
                                    </Checkbox>
                                </div>
                                <br />
                                {this.showClickPower(this.props.clickedPower)}
                            </Card>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Card title='已选择的权限' id='addRoleCard'>
                                <div>{this.state.checkedList}</div>
                            </Card>
                        </Col>
                        {/* <Col span={16}>
                            <Transfer
                                dataSource={this.state.mockData}
                                
                                targetKeys={this.state.targetKeys}
                                onChange={this.handleChange.bind(this)}
                                render={this.renderItem.bind(this)}
                            />
                        </Col> */}
                    </Row>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        //获取角色的列表值
        powerListMenu: state.getPowerList.powerList,
        //获取已有角色的权限列表值
        powerNameList: state.getPowerList.hasPowerList,
        //获取权限分类信息
        powerClassification: state.getPowerList.powerClassification,
        //获取选中的权限信息
        clickedPower: state.getPowerList.clickPowerListInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取角色的列表
        getPowerList: () => dispatch(actionCreator.getPowerListInfo()),
        //获取已有角色的权限列表
        hasPowerList: () => dispatch(actionCreator.getHasPowerList()),
        //获取选中的角色权限
        getRolePower: (val) => dispatch(actionCreator.getClickRolePower(val)),
        //获取权限分类
        getPowerClassification: () => dispatch(actionCreator.getAllPowerClassification()),
        //获取选中的权限列表
        getClickPower: (id) => dispatch(actionCreator.getClickPowerList(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LeftPowerInfo))