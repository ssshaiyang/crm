import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Table, Modal, Input, Row, Col, Form, Icon, Checkbox } from 'antd'
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


// const plainOptions = ['Apple', 'Pear', 'Orange'];

export class LeftMemberInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            upateVisible: false,
            addRoleVisible: false,
            addPowerVisible: false,
            indeterminate: true,
            checkAll: false,
        }
    }

    componentWillMount() {
        this.props.getPowerList();
    }

    componentDidMount() {
        this.props.form.validateFields();
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
            addPowerVisible: true
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
        this.props.getRoleMember(role_info)
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
            return data.map((item) => {
                return (
                    <div id={item.permission_id} className='power_classification_info'><a onClick={this.clickPower.bind(this, item.permission_id)}>{item.permission_name}</a></div>
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

    addPowerInfo() {

    }

    render() {
        let rolesList;
        const { getFieldDecorator } = this.props.form;
        if (this.props.powerListMenu.length > 0) {
            rolesList = this.props.powerListMenu.map((item) => {
                return (
                    <div>
                        <span id={item.role_id}>
                            <table>
                                <tr>
                                    <td style={{ width: 160,padding:'5px 0'}}><a onClick={this.showRoleInfo.bind(this, item.role_id, item.role_name)}>{item.role_name}</a></td>
                                </tr>
                            </table>
                        </span>
                    </div>
                );
            })
        }

        return (
            <div>
                <Card title="角色名称" id='leftPowerCard'>
                    {rolesList}
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        //获取角色的列表值
        powerListMenu: state.getPowerList.powerList,
        //获取已有角色的权限列表值
        powerNameList: state.getPowerList.hasPowerList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取角色的列表
        getPowerList: () => dispatch(actionCreator.getPowerListInfo()),
        //获取已有角色的权限列表
        hasPowerList: () => dispatch(actionCreator.getHasPowerList()),
        //获取选中的角色权限
        getRoleMember: (val) => dispatch(actionCreator.getRoleMemberList(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LeftMemberInfo))