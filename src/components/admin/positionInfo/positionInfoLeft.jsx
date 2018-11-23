import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Tree, Button, Modal, Select, Row, Col, Input } from 'antd';
import * as actionCreator from "../../../actions/admin/positionInf/positionInfLeft.js";
const TreeNode = Tree.TreeNode;
const Option = Select.Option;
export class LeftDepart extends React.Component {
    constructor() {
        super();
        this.state = {
            updateVisible: false,
            select_parent_id: 0
        }
    }

    componentWillMount() {
        this.props.getMenuList();
    }

    updatePositioninfo(e) {
        event.preventDefault();
        this.props.getPositionSelectList();
        this.setState({
            updateVisible: true
        })
    }

    handleOk(e) {
        this.setState({
            updateVisible: false,
        });
    }
    handleCancel(e) {
        this.setState({
            updateVisible: false,
        });
    }

    handleClick(e) {
        console.log('click ', e);
    }

    handleUpdateChange(value) {
        const parent_id = parseInt(value)
        this.setState({
            select_parent_id: parent_id
        })
    }

    onSelect(selectedKeys) {
        const parent_id = parseInt(selectedKeys[0])
        this.setState({
            select_parent_id: parent_id
        })
    }

    getPositionName() {

    }

    render() {
        let selectLists = [];
        let leftSelectLastPosition;
        for (let index in this.props.selectListDepart) {
            selectLists.push(this.props.selectListDepart[index]);
            leftSelectLastDepart = selectLists.map((selectList, key) => {
                if (this.state.select_parent_id == key + 1) {
                    return (
                        <Option value={key.toString()}>{selectList}</Option>
                    );
                }
            })
        }

        const loop = data => data.map((item) => {
            if (item.children.length > 0) {
                return (
                    <TreeNode key={item.position_id} title={<div><span style={{ marginRight: 60 }}>{item.position_name}</span>
                        <Button size='small' onClick={this.updateDepartinfo.bind(this)}>修改</Button></div>} >
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode key={item.position_id} title={<div><span style={{ marginRight: 60 }}>{item.position_name}</span>
                    <Button size='small' className='delDepartNode' onClick={this.updateDepartinfo.bind(this)}>修改</Button>
                    <Button size='small' className='delDepartNode'>删除</Button>
                </div>}>

                    <Modal
                        title="修改职称"
                        visible={this.state.updateVisible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <Row>
                            <Col span={4}></Col>
                            <Col span={16}>
                                <div style={{ marginBottom: 10 }}>
                                    <span style={{ width: 100 }}>上级职位:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <Select defaultValue="请选择部门" style={{ width: 240 }} onChange={this.handleUpdateChange.bind(this)}>
                                        {leftSelectLastDepart}
                                    </Select>
                                </div>
                                <div>
                                    <span style={{ width: 100 }}>职位名称:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <Input placeholder='请输入职位名称' style={{ width: 240 }} onBlur={this.getDepartName.bind(this)} />
                                </div>
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                    </Modal>
                </TreeNode>
            );
        });

        return (
            <Tree
                disableCheckbox
                onSelect={this.onSelect.bind(this)}
                autoExpandParent={this.state.autoExpandParent}
                checkedKeys={this.state.checkedKeys}
                selectedKeys={this.state.selectedKeys}
            >
                {loop(this.props.menuListInfo)}
            </Tree>
        );
    };
}


function mapStateToProps(state) {
    return {
        menuListInfo: state.getDepartSelectListsInfo.data,
        selectListDepart: state.getDepartSelectList.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDepartSelectList: () => dispatch(actionCreator.getDepartSelectList()),
        getMenuList: () => dispatch(actionCreator.getAllMenuList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDepart)