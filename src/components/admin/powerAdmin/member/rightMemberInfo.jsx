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

let  listData=[];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
         listData=selectedRows;
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        console.log( 'selectedRows: ', selectedRows)
    },
    onSelect:function(){
        console.log(123)
    }
    // getCheckboxProps: record => ({
    //     disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    // }),
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
            data:[],
            checkListData:[],
            CheckId:''
        }
    }

    componentWillMount() {
        
    }

    componentDidMount() {
    }

    //复选框选中打钩
    onChange(checkedList) {
        console.log("点击了")
        console.log(checkedList)
        this.setState({
            checkListData:checkedList,
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
            checkListData:e.target.checked ? allCheckVal : [],
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
// 添加人员
    addMember() {
        console.log(this.props.roleMember)
        if(this.props.roleCheckId==""){
            message.info("请选择角色后再添加人员")
            return false
        }
        const memberList = {
            page: 1,
            limit: 60,
            department_id: -1,
            position_id: -1,
            filter: this.state.searchInfo
        }
        this.props.getMemberList(memberList);
        this.setState({
            addMemberVisible: true,
            CheckId:this.props.roleCheckId
        })
    }

    handleOkAddMember() {
        let checkId = this.props.roleCheckId;
        let listArr ='';
        if(listData.length >0){
            for(let i=1;i<=listData.length;i++){
                if(i>=2){
                    listArr =listArr+","+listData[i-1].key
                }else{
                    listArr =listArr +""+listData[i-1].key;
                }
            }
        }
        let params ={
            checkId:checkId,
            employee_ids:listArr
        }
        this.props.addMember(params);
        if (this.props.isAddSuc === GLOBALSUCCESS) {
            message.info('添加成功');
            this.setState({
                addMemberVisible: false
            })
        } else {
            message.info('添加失败');
            this.setState({
                addMemberVisible: false
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
    delMemberId(){
        if(this.props.roleCheckId==""){
            message.info("请选择角色后再删除人员")
            return false
        }
        let arrCheckData =this.state.checkListData;
        let arrRoleData =this.props.roleMemberList;
        let delArr ="";
        for(let i=0;i<arrCheckData.length;i++){
            for(let j=0;j<arrRoleData.length;j++){
                if(arrCheckData[i]==arrRoleData[j].employee_name){
                    if(delArr.length >1){
                        delArr+=","+arrRoleData[j].employee_id
                    }else{
                        delArr=""+arrRoleData[j].employee_id
                    }
                }
            }
        }
        let delData={
            role_id:this.props.roleCheckId,
            employee_id:delArr
        }
        this.props.delMemberList(delData)
        console.log("删除了"+delArr)
    }

    render() {
        console.log(this.props.roleCheckId)
        if(this.props.code ==GLOBALSUCCESS||this.props.isAddSuc ==GLOBALSUCCESS){
                let updateData ={
                    role_id:this.props.roleCheckId,
                    role_name:this.props.roleMember
                }
            this.props.getRoleMember(updateData)
        }
        var arrS =this.props.memberListInfo.data;
        let arrList =[];
        if(this.props.memberListInfo.total_count !=undefined){
                for(var key in arrS){
                    let arr ={
                        key:arrS[key].employee_id,
                        name: arrS[key].employee_name,
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    }
                    arrList.push(arr)
                 }
        }

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
                        <Button onClick={this.delMemberId.bind(this)}
                        >
                            删除
                        </Button>
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

                    <Table rowSelection={rowSelection} columns={columns} dataSource={arrList} />
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.getPowerList)
    return {
        roleMemberList: state.getPowerList.roleMemberList,
        roleMember: state.getPowerList.roleId,
        isAddSuc: state.getPowerList.member_error_code,
        //获取员工列表
        roleCheckId:state.getPowerList.roleCheckId,
        memberListInfo: state.getPowerList.memberList,
        code: state.getPowerList.code,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // 刷新后重新获取人员表
        getRoleMember: (val) => dispatch(actionCreator.getRoleMemberList(val)),
        //添加人员
        addMember: (id) => dispatch(actionCreator.addMemberList(id)),
        //获取员工列表
        getMemberList: (params) => dispatch(actionCreator.getMemberListInfo(params)),
        //删除员工列表
        delMemberList: (params) => dispatch(actionCreator.delMemberListInfo(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightMemberInfo)