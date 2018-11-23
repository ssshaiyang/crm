import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Table, Modal, Input, Row, Col, Form, Icon, Checkbox, Transfer} from 'antd'
import * as actionCreator from "../../../../actions/admin/power/leftPowerInfo.js";
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const columns = [ {
    title: '权限ID',
    dataIndex: 'key',
}, {
    title: '权限名称',
    dataIndex: 'name',
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
            updateVisible: false,
            addRoleVisible: false,
            addPowerVisible: false,
            indeterminate: true,
            checkAll: false,
            mockData: [],
            targetKeys: [],
            data:[],
            power_id:-1,
            power_ids:[],
            power_list:[],
            power_arr:[],
            power_children:[],
            changeData:[]
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
        this.setState({
            addRoleVisible: false,
            updateVisible:false
        })
        let dataRoleList =[];
        this.props.form.validateFields((err, values) => {
            if (!err) {
                dataRoleList =values;
                console.log('Received values of form: ', values);
            }
        });
        let idsList =this.state.power_children;
        let idLists ="";
        for(let j=0;j<this.state.power_list.length;j++){
            if(j==0){
                idLists=""+this.state.power_list[j];
            }else{
                idLists=idLists+","+this.state.power_list[j];
            }
        }
        for(let i =0;i<idsList.length;i++){
            idLists= idLists+","+idsList[i]
        }

        let formroledata={
            role_name:dataRoleList.role_name,
            role_description:dataRoleList.role_detail,
            permission_ids:idLists
        }
        // this.props.postPowerList(formroledata)
    }



    updateShowModal(keyId,name,parentName) {
        this.setState({
            changeData: {
                keyId : keyId,
                role_name : name,
                parentName : parentName
            }
        })
        const role_id = {
            role_id: keyId,
            role_name: name,
        }
        this.props.getRolePower(role_id);
        this.setState({
            updateData:params,
            updateVisible: true,
        });
    }
    handleOkUpdate(e) {
        console.log(this.state)
        this.setState({
            updateVisible: false,
        });
    }
    handleCancelUpdate(e) {
        this.setState({
            updateVisible: false,
        });
    }

    addRole() {
        // this.props.hasPowerList();
        this.setState({
            checkCode:0,
            data:[],
            change_data:[],
            checkedList:[],
            addRoleVisible: true
        })
    }

    addPower() {
        console.log(this.state.power_children)
        this.props.getPowerClassification();
        this.setState({
            addPowerVisible: true,
            // addRoleVisible: false
        })
    }

    handleOkAdd(e) {
        console.log(this.state)
        console.log("测试")
        this.setState({
            addRoleVisible: false
        })
    }

    handleCancelAdd() {
        this.setState({
            addRoleVisible: false,
            upateVisible:false
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
        let arr =this.state.power_children;
        let checkList =this.state.checkedList;
        let ars =[]
        for(let i =0;i<arr.length;i++){
                let pushData ={
                    key:""+arr[i],
                    name:''+checkList[i]
                }
                ars.push(pushData)
        }
        this.setState({
            data:ars,
            addPowerVisible: false
        })
    }

    handleCancelAddPower() {
        this.setState({
            addPowerVisible: false
        })
    }
    delData(e){
        console.log(e)
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
        let clickPower =this.props.clickedPower;
        let arrS=[];
        let parent_id=this.state.power_id;
        let powerList = this.state.power_list;
        let powerChildren =this.state.power_children;
        let checkCode=0;
        if(checkedList.length>0){
            if(powerList.indexOf(parent_id) ==-1){
                console.log("没有这个值")
                powerList.push(parent_id)
            }
            for(let i =0;i<checkedList.length;i++){
                for(let j =0;j<clickPower.length;j++){
                    if(checkedList[i]==clickPower[j].permission_name){
                        if(this.state.power_children.indexOf(clickPower[j].permission_id) ==-1){
                            powerChildren.push(clickPower[j].permission_id)
                            checkCode=1;
                        }
                        arrS.push(j)
                    }
                }
            }
        }
        if(checkCode==0){
            if(powerList.indexOf(parent_id) !=-1){
                powerList.splice(powerList.indexOf(parent_id),1)
            }
        }
        let arrList =[]
        for(let i =0;i<clickPower.length;i++){
            arrList.push(i)
        }
        for(let i =0;i<arrS.length;i++){
            for(let j=0;j<arrList.length;j++){
                if(arrS[i]==arrList[j]){
                    arrList.splice(arrList.indexOf(arrS[i]),1)
                }
            }
        }
        for(let i =0;i<arrList.length;i++){
            if(powerChildren.indexOf(clickPower[arrList[i]].permission_id) !=-1){
                powerChildren.splice(powerChildren.indexOf(clickPower[arrList[i]].permission_id),1)
            }
        }
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.props.clickedPower.length),
            checkAll: checkedList.length === this.props.clickedPower.length,
            power_list:powerList,
            power_children:powerChildren
        });
        console.log(powerList)
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
        this.setState({
            power_id:power_id,
        })
        this.props.getClickPower(power_id);
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
    offBtn(){
        this.setState({
            updateVisible: false,
            addRoleVisible:false
        });
    }
    delShowModal(val){
        this.props.delPowerList(val)
    }

    makeListData(data){
        console.log(data)
        let arrS=[]
        for(let i=0;i<data.length;i++){
            if(data[i].children.length>0){
                for(let j=0;j<data[i].children.length;j++){
                    const arr={
                        key:""+data[i].children[j].permission_id,
                        name:''+data[i].children[j].permission_name
                    }
                    arrS.push(arr)
                }
            }
        }
        this.setState({
            data:arrS,
        })
        console.log(arrs)
    }

    render() {
        if(this.props.code==GLOBALSUCCESS){
            this.props.getPowerList();
        }
        if(this.props.updateCodeData == 1000){
            this.props.getRolePower(this.state.updateData)
        }
        if(this.props.clickRoleCode==GLOBALSUCCESS){
            let arrS =[];
            let arrText=[];
            let parentIds=[];
            let powerChildren=[];
            console.log(this.props.clickRolePower)
            for(let i =0;i<this.props.clickRolePower.length;i++){
                parentIds.push(this.props.clickRolePower[i].permission_id)
                if(this.props.clickRolePower[i].children.length>0){
                    for(let j=0;j<this.props.clickRolePower[i].children.length;j++){
                        let arr ={
                            key:""+this.props.clickRolePower[i].children[j].permission_id,
                            name:''+this.props.clickRolePower[i].children[j].permission_name
                        }
                        powerChildren.push(this.props.clickRolePower[i].children[j].permission_id)
                        arrText.push(this.props.clickRolePower[i].children[j].permission_name)
                        arrS.push(arr)
                    }
                }
            }
            this.setState({
                power_list:parentIds,
                data:arrS,
                checkedList:arrText,
                power_children:powerChildren
            })
            this.props.updateCode()
        }
        let rolesList;
        // if(this.props.clickRolePower.length>0){
        //     this.makeListData(this.props.clickRolePower)
        // }
        const { getFieldDecorator } = this.props.form;
        if (this.props.powerListMenu.length > 0) {
            rolesList = this.props.powerListMenu.map((item,key) => {
                return (
                    <div key={key}>
                        <span id={item.role_id}>
                            <table>
                                <tr>
                                    <td style={{ width: 560 }}><a onClick={this.showRoleInfo.bind(this, item.role_id, item.role_name)}>{item.role_name}</a></td>
                                    <td>
                                        <Button size='small' className='mainButton' style={{ marginBottom: 5, marginRight: 5 }} onClick={this.updateShowModal.bind(this, item.role_id,item.role_name,item.role_description)}>修改</Button>
                                        <Button size='small' onClick={this.delShowModal.bind(this, item.role_id)} className='mainButton'>删除</Button>
                                    </td>
                                </tr>
                            </table>
                        </span>
                        <Modal
                            visible={this.state.upateVisible}
                            width='780'
                            footer={null}
                            onOk={this.handleOkUpdate.bind(this)}
                            onCancel={this.handleCancelUpdate.bind(this)}
                        >
                            <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                                <Row>
                                    <Col span={11}>
                                        <Card title='修改角色' id='addRoleCard'>
                                            <FormItem label='角色名称' style={{ marginBottom: 5, marginRight: 5 }}>
                                                    <Input placeholder={this.state.changeData!=null?this.state.changeData.role_name:""}  style={{ width: 228 }} />
                                            </FormItem>
                                            <FormItem label='角色描述'>
                                                {getFieldDecorator('role_detail', {})
                                                (
                                                    <textarea placeholder={this.state.changeData!=null?this.state.changeData.parentName:""} rows="8" cols="35" className='addRoleTextarea' />
                                                )}
                                            </FormItem>
                                        </Card>
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={12}>
                                        <Card title='角色权限' id='addRoleCard' extra={<Button size='small' style={{ marginRight: 40 }} className='mainButton' onClick={this.addPower.bind(this)}>{this.state.data.length<1?"添加权限":"修改权限"}</Button>}>
                                            <div className='addPowerContainer'>
                                                <div className='power_name'>权限名称</div>
                                                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                                <div style={{textAlign:"center"}}>
                                    <Button onClick={this.offBtn.bind(this)} >取消</Button>
                                    <Button htmlType="submit"  className="mainButton" style={{marginLeft:"20px"}}>确定</Button>
                                </div>
                            </Form>
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
                    footer={null}
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
                                            <Input  style={{ width: 228 }} />
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
                                    onClick={this.addPower.bind(this)}>{this.state.data.length<1?"添加权限":"修改权限"}</Button>}>
                                    <div className='addPowerContainer'>
                                        <div className='power_name'>权限名称</div>
                                        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <div style={{textAlign:"center",marginTop:"20px"}}>
                            <Button onClick={this.offBtn.bind(this)} >取消</Button>
                            <Button htmlType="submit"  className="mainButton" style={{marginLeft:"20px"}}>确定</Button>
                        </div>
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

                    </Row>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.getPowerList.clickPowerList)
    return {
        //判断是否成功
        code:state.getPowerList.code,
        //获取角色的列表值
        powerListMenu: state.getPowerList.powerList,
        //获取已有角色的权限列表值
        powerNameList: state.getPowerList.hasPowerList,
        //获取权限分类信息
        powerClassification: state.getPowerList.powerClassification,
        //获取选中的权限信息
        clickedPower: state.getPowerList.clickPowerListInfo,
        // 获取选择角色的权限信息
        clickRolePower: state.getPowerList.clickPowerList,
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
        //添加角色权限
        postPowerList:(val) => dispatch(actionCreator.postPowerListInfo(val)),
        //修改角色权限
        putPowerList:(val) => dispatch(actionCreator.putPowerListInfo(val)),
        // 删除角色
        delPowerList: (val) => dispatch(actionCreator.delPowerListInfo(val)),
        // 消除获取后数据bug
        updateCode: () => dispatch(actionCreator.updateCodeInfo()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LeftPowerInfo))