import React from 'react'
import { connect } from 'react-redux'
import { Card, Tree, Button, Checkbox, Modal, message, Input, Table, Avatar } from 'antd'
import * as actionCreator from "../../../../actions/admin/power/leftPowerInfo.js";
const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;

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
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};

export class RightApplyInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            addApplyVisible: false,
            expandedKeys: [],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
            isClick: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    addApply() {
        this.props.getRoleApply();
        this.setState({
            addApplyVisible: true
        })
    }

    handleOkAddApply() {
        this.setState({
            addApplyVisible: false
        })
    }

    handleCancelAddApply() {
        this.setState({
            addApplyVisible: false
        })
    }

    //渲染当前角色应用信息
    showApplyList(data) {
        if (data.length > 0) {
            return data.map((item) => {
                return (
                    <div className='applyInfo'>
                        <div className='applyImg'>
                            <Avatar shape="square" size="large" src={item.application_logo}><span>{item.application_name}</span></Avatar>
                        </div>
                        <div className='applyName'>{item.application_name}</div>
                    </div>
                );
            })
        }
    }

    //点击应用后把标记质为true
    addRoleApply() {
        this.setState({
            isClick: true
        })
    }

    clickToShow(flag) {
        if (!flag) {
            return (
                <div className='applyModalName' style={{cursor:'pointer'}}>[安装]</div>
            );
        } else {
            return (
                <div className='applyModalName_next'>[已安装]</div>
            );
        }
    }
    //渲染所有应用信息
    showAllApplyInfo(data) {
        if (data.length > 0) {
            return data.map((item) => {
                return (
                    <div className='applyInfo' onClick={this.addRoleApply.bind(this)}>
                        <div>
                            <Avatar shape="square" size="large" src={item.application_logo}><span>{item.application_name}</span></Avatar>
                        </div>
                        {this.clickToShow(this.state.isClick)}
                    </div>
                );
            })
        }
    }

    render() {
        return (
            <div>
                <Card id='leftPowerCard' title={"角色" + '[' + this.props.roleMember + ']应用列表'} extra={<Button size='small' className='mainButton'
                    onClick={this.addApply.bind(this)}>添加应用</Button>}>
                    {this.showApplyList(this.props.roleApplyInfo)}
                </Card>
                <Modal
                    visible={this.state.addApplyVisible}
                    title="添加应用"
                    onOk={this.handleOkAddApply.bind(this)}
                    onCancel={this.handleCancelAddApply.bind(this)}
                >
                    {this.showAllApplyInfo(this.props.roleApplyInfo)}
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        roleMemberList: state.getPowerList.roleMemberList,
        roleMember: state.getPowerList.roleId,
        //获取全部应用信息
        roleApplyInfo: state.getPowerList.roleApply
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //添加人员
        addMember: (val) => dispatch(actionCreator.addMemberList(val)),
        //获取所有应用信息
        getRoleApply: () => dispatch(actionCreator.getRoleApplyList()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightApplyInfo)