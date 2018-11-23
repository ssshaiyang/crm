import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Tree, Button, Modal, Select, Row, Col, Input,message } from 'antd';
import * as actionCreator from "../../../actions/admin/positionInf/positionInfLeft.js";
const TreeNode = Tree.TreeNode;
const Option = Select.Option;
export class LeftDepart extends React.Component {
    constructor() {
        super();
        this.state = {
            updateVisible: false,
            select_parent_id: 0,
            position_name:"",
            select_parent_position_id:0,
            parentFirstName:"请选择职位",
            positionName:"请选择职位名称",
        }
    }

    componentWillMount() {
        this.props.getMenuList();
    }
    componentDidMount() {
        console.log(111111)
    }
    updateDepartinfo(parentId,idName,name,event) {
        event.preventDefault();
        const parent_id = event.target.id;
        this.props.getDepartSelectList();
        this.setState({
            select_parent_position_id:parentId,
            position_name:idName,
            select_parent_id:parent_id,
            updateVisible: true,
            parentFirstName:name,
            positionName:idName,
        })
    }

    handleOk(e) {
        let addDepartInfo= {};
        if (this.state.select_parent_id && this.state.position_name) {
            let select_parent_id = this.state.select_parent_id;
            addDepartInfo = {
                position_id: select_parent_id,
                position_name: this.state.position_name,
                parent_position_id:this.state.select_parent_position_id,
            }

        }
        console.log(addDepartInfo)
        this.props.putDepartInfo(addDepartInfo);
        if (this.props.addPositionInfoCode == GLOBALSUCCESS) {
            message.info('修改职位成功!');
            this.setState({
                visible: false,
            });
        } else {
            console.log(this.props.addPositionInfoCode)
            message.info('修改职位成功!');
            this.setState({
                visible: true,
            });
        }
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

    handleUpdateChange(value){
        const parent_id = parseInt(value)
        console.log(parent_id)
        this.setState({
            select_parent_position_id: parent_id
        })
    }

    onSelect(selectedKeys) {
    }
    deleteDepartinfo(e) {
        const parent_id = e.target.id;
        this.props.deleteDepartInfo(parent_id)
        console.log(parent_id)
    }
    getDepartName(e) {
        this.setState({
            position_name: e.target.value
        })
    }
    makeListOptions(options) {
        if (options) {
            if(options.position == undefined){
            }else{
                let keys = Object.keys(options.position)
                return keys.map(key => (
                    <Option value={options.parent_id[key]} key={key}>
                        {options.position[key]}
                    </Option>
                ))
            }
        }
    }

    render() {
        if(this.props.code==GLOBALSUCCESS){
            this.props.getMenuList();
            this.props.cancel(0)
        }
        if(this.props.addPositionInfoCode==GLOBALSUCCESS){
            this.props.getMenuList();
        }
        let arr =1;
        console.log(this.state)
        const loop = data => data.map((item) => {
                if (item.children.length > 0) {
                    return (
                        <TreeNode key={item.position_id} title={<div><span style={{ marginRight: 60 }}>{item.position_name}</span>
                            <Button id={item.position_id}   size='small' onClick={this.updateDepartinfo.bind(this,item.parent_position_id,item.position_name,item.parent_position_name)}>修改</Button> <Modal
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
                                            <Select defaultValue={this.state.parentFirstName} style={{ width: 240 }} onChange={this.handleUpdateChange.bind(this)}>
                                                {this.makeListOptions(this.props.selectListDepart)}
                                            </Select>
                                        </div>
                                        <div>
                                            <span style={{ width: 100 }}>职位名称:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            <Input defaultValue={this.state.positionName} placeholder='请输入职位名称' style={{ width: 240 }} onBlur={this.getDepartName.bind(this)} />
                                        </div>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </Modal></div>} >
                            {loop(item.children)}

                        </TreeNode>
                    );
                }
                return (
                    <TreeNode key={item.position_id} title={<div><span style={{ marginRight: 60 }}>{item.position_name}</span>
                        <Button id={item.position_id} size='small' className='delDepartNode' onClick={this.updateDepartinfo.bind(this,item.parent_position_id,item.position_name,item.parent_position_name)}>修改</Button>
                        <Button id={item.position_id} size='small' className='delDepartNode' onClick={this.deleteDepartinfo.bind(this)}>删除</Button>
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
                                        <Select defaultValue={this.state.parentFirstName} style={{ width: 240 }} onChange={this.handleUpdateChange.bind(this)}>
                                            {this.makeListOptions(this.props.selectListDepart)}
                                        </Select>
                                    </div>
                                    <div>
                                        <span style={{ width: 100 }}>职位名称:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <Input  placeholder={this.state.positionName} style={{ width: 240 }} onBlur={this.getDepartName.bind(this)} />
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
        positionCode:state.getDepartSelectListsInfo.positionCode,
        positionData:state.getDepartSelectListsInfo.positionData,
        menuListInfo: state.getDepartSelectListsInfo.data,
        selectListDepart: state.getDepartSelectListsInfo.getDepartSelectLists,
        addPositionInfoCode:state.getDepartSelectListsInfo.code
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDepartSelectList: () => dispatch(actionCreator.getDepartSelectList()),
        getMenuList: () => dispatch(actionCreator.getAllMenuList()),
        putDepartInfo: (val) => dispatch(actionCreator.putDepartInfo(val)),
        deleteDepartInfo: (val) => dispatch(actionCreator.deleteDepartInfo(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDepart)