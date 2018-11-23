import React from 'react'
import { connect } from 'react-redux'
import { Card, Tree, Button, Checkbox, Modal, message, Input, Table } from 'antd'
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

export class RightMemberInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            addMemberVisible: false,
            expandedKeys: [],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    //复选框选中打钩
    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.props.roleMemberList.length),
            checkAll: checkedList.length === this.props.roleMemberList.length,
        });
    }
    //点击全选
    onCheckAllChange(e) {
        let allCheckVal = [];
        if (this.props.roleMemberList.length) {
            for (let i = 0; i < this.props.roleMemberList.length; i++) {
                allCheckVal.push(this.props.roleMemberList[i].employee_name);
            }
        }
        this.setState({
            checkedList: e.target.checked ? allCheckVal : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    //渲染显示点击选中的权限列表
    showClickPower(data) {
        let power_names = [];
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                power_names.push(data[i].employee_name);
            }
            return (
                <CheckboxGroup options={power_names} value={this.state.checkedList} onChange={this.onChange.bind(this)} />
            );
        }
    }

    renderTreeNodes(data) {
        if (data.length <= 0) {
            return (<div></div>);
        } else {
            return data.map((item) => {
                if (item.children) {
                    return (
                        <TreeNode title={item.permission_name} key={item.permission_id}>
                            {this.renderTreeNodes(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode title={item.permission_name} key={item.permission_id} />;
            });
        }
    }

    addMember() {
        const memberList = {
            page: 20,
            limit: 10,
            department_id: -1,
            position_id: -1,
            filter: this.state.searchInfo
        }
        this.props.getMemberList(memberList);
        this.setState({
            addMemberVisible: true
        })
    }

    handleOkAddMember() {
        let checkId = '';
        this.props.addMember(checkId);
        if (this.props.isAddSuc === GLOBALSUCCESS) {
            message.info('添加成功');
            this.setState({
                addMemberVisible: false
            })
        } else {
            message.info('添加失败');
            this.setState({
                addMemberVisible: true
            })
        }
    }

    handleCancelAddMember() {
        this.setState({
            addMemberVisible: false
        })
    }

    //获取搜索的输入信息
    getSearchinfo(value) {
        this.setState({
            searchInfo: value
        })
    }

    render() {
        return (
            <div>
                <Card
                    id='leftPowerCard'
                    title={"角色" + '[' + this.props.roleMember + ']人员列表'} extra={<Button size='small'
                        className='mainButton'
                        onClick={this.addMember.bind(this)}>添加人员</Button>}>
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
                    {this.showClickPower(this.props.roleMemberList)}
                </Card>
                <Modal
                    visible={this.state.addMemberVisible}
                    title="添加人员"
                    onOk={this.handleOkAddMember.bind(this)}
                    onCancel={this.handleCancelAddMember.bind(this)}
                >
                    <Search
                        placeholder="搜索姓名/手机号码"
                        style={{ width: 240, marginBottom: 10 }}
                        onSearch={this.getSearchinfo.bind(this)}
                    />

                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        roleMemberList: state.getPowerList.roleMemberList,
        roleMember: state.getPowerList.roleId,
        isAddSuc: state.getPowerList.member_error_code,
        //获取员工列表
        memberListInfo: state.getPowerList.memberList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //添加人员
        addMember: (id) => dispatch(actionCreator.addMemberList(id)),
        //获取员工列表
        getMemberList: (params) => dispatch(actionCreator.getMemberListInfo(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightMemberInfo)