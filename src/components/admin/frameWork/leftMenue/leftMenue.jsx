import React from 'react';
import { connect } from 'react-redux';
import { Tree, Card, Row, Col, Button, Modal, Select, Input } from 'antd';
import * as LeftActionCreator from '../../../../actions/admin/frameWork/leftMenue/leftMenue.js'
const TreeNode = Tree.TreeNode;
const Option = Select.Option;
export class LeftMenue extends React.Component {
    constructor() {
        super();
        this.state = {
            munueData: [],
            expandedKeys: ['0-0-0', '0-0-1'],
            autoExpandParent: true,
            checkedKeys: ['0-0-0'],
            selectedKeys: [],
            visibleUpdate: false,
            visibleDel:false,
            member:0,
            depart:0,
            parentId:'',
            updateDepartInfo:{},
            department_id:0
        }
    }

    componentWillMount() {

    }

    showModalUpdate(parentId) {
        for(let index in this.props.Branch){
            if(parentId==index){
                this.setState({
                    parentId:this.props.Branch[parentId]
                })
            }
        }
        this.setState({
            visibleUpdate: true,
        });
    }

    showModalDel(departmentId){
        this.setState({
            department_id:departmentId,
            visibleDel: true,
        });
    }

    handleOk(e) {
        if(this.state.member && this.state.depart && this.state.parentId){
            let memberInfo={
                department_name:this.state.depart,
                parent_department_id:this.state.parentId,
                department_leader_id:this.state.member
            }
            this.props.updateDepartInfo(memberInfo)
        }
        this.setState({
            visibleUpdate: false,
        });
    }
    handleCancel(e) {
        this.setState({
            visibleUpdate: false,
        });
    }

    handleOkDel(){
        this.props.delDepartInfo(this.state.department_id)
        this.setState({
            visibleDel: false,
        });
    }

    handleCancelDel(){
        this.setState({
            visibleDel: false,
        });
    }

    handleChange(parentId) {
        // this.setState({
        //     parentId:parentId 
        // })
    }

    updateMember(e){
        this.setState({
            member:e.target.value
        })
    }

    updateDepart(e){
        this.setState({
            depart:e.target.value
        })
    }

    //点击箭头获取当前节点到和它所有父节点的id值
    onExpand(expandedKeys) {
        this.setState({
            expandedKeys,
            autoExpandParent: false
        });
    }

    onSelect(selectedKeys, info) {
        this.setState({ selectedKeys });
    }

    render() {
        /**
         * 递归部门职称
         */
        const loop = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.department_id} title={item.department_name} >
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode key={item.department_id} title={item.department_name} />
            );
        });

        /**
         * 递归领导架构
         * @param {*} data 
         */
        const leader = data => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.department_id} title={item.department_leader}>
                        {leader(item.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode key={item.department_id} title={item.department_leader}>
                    <Button size='small' className='leftMenueBut' onClick={this.showModalUpdate.bind(this,item.parent_department_id)}>修改</Button>
                    <Button size='small' onClick={this.showModalDel.bind(this,item.department_id)}>删除</Button>
                    <Modal
                        title="修改部门"
                        visible={this.state.visibleUpdate}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <Row>
                            <Col span={4}></Col>
                            <Col span={16}>
                                <div>
                                    上级部门： <Select defaultValue="first" style={{ width: 240 }} onChange={this.handleChange.bind(this, item.parent_department_id)}>
                                        <Option value="first"></Option>
                                        <Option value="item.parent_department_id">{this.state.parentId}</Option>
                                    </Select>
                                </div>
                                <div>
                                    部门职称： <Input style={{ width: 240, marginTop: 10 }} placeholder="请输入部门职称" onChange={this.updateDepart.bind(this)}/>
                                </div>
                                <div>
                                    负责人：&nbsp;&nbsp;&nbsp;&nbsp; <Input style={{ width: 240, marginTop: 10 }} placeholder="请输入负责人" onChange={this.updateMember.bind(this)}/>
                                </div>
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                    </Modal>
                    <Modal
                        title="删除部门"
                        visible={this.state.visibleDel}
                        onOk={this.handleOkDel.bind(this)}
                        onCancel={this.handleCancelDel.bind(this)}
                    >
                    <div>你确定要删除这个职位吗？</div>
                    </Modal>
                </TreeNode>
            );
        });



        return (
            <Card>
                <div className='leftMenueCon'>
                    <div className='leftMenueTip1'>部门职称</div>
                    <div>负责人</div>
                </div>
                <Row>
                    <Col span={8}>
                        <Tree
                            disableCheckbox
                            onExpand={this.onExpand.bind(this)}
                            expandedKeys={this.state.expandedKeys}
                            autoExpandParent={this.state.autoExpandParent}
                            checkedKeys={this.state.checkedKeys}
                            selectedKeys={this.state.selectedKeys}
                        >
                            {loop(this.props.munueData)}
                        </Tree>
                    </Col>
                    <Col span={8} style={{ marginLeft: 10 }}>
                        <Tree
                            disableCheckbox
                            onExpand={this.onExpand.bind(this)}
                            expandedKeys={this.state.expandedKeys}
                            autoExpandParent={this.state.autoExpandParent}
                            onSelect={this.onSelect.bind(this)}
                            selectedKeys={this.state.selectedKeys}
                        >
                            {leader(this.props.munueData)}
                        </Tree>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </Card>
        )
    }
}


function mapStateToProps(state) {
    return {
        munueData: state.frameWorkMenue.data,
        visible:state.addBranchModal.visible,
        Branch:state.addBranchModal.branch
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateDepartInfo:(updateDepartInfo)=>dispatch(LeftActionCreator.updateDepartInfo(updateDepartInfo)),
        delDepartInfo:(department_id)=>dispatch(LeftActionCreator.delDepartInfo(department_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenue)
