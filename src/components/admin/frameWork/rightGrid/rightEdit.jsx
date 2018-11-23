/*
 * @Author: lcj
 * @Date:   2017-08-23 20:12:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:32:29
 * @Descriptions: 客户管理-客户列表-操作render
 */

import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    DatePicker,
    Radio,
    message,
    Modal
} from 'antd'
import {
    connect
} from 'react-redux'
import ERROR from '../../../../utils/error-message.json'
import * as actionCreator from "../../../../actions/admin/frameWork/rightGrid/rightEdit.js"
const Option=Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import {addMemberList,editMemberList} from "../../../../utils/interface.js"
import * as actionCreatorList from "../../../../actions/admin/frameWork/rightGrid/rightList.js"
import * as initPageAction from "../../../../actions/admin/frameWork/rightGrid/rightPage.js"
let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
import moment from 'moment'
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        },
    },
};
const rowItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 4
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        },
    },
}

export class Render extends React.Component {
    constructor(props) {
        super(props);
    }
    makeOptions(options){
        if(options){
            let keys=Object.keys(options)
            return keys.map(key=>(
                <Option value={key} key={key}>
                    {options[key]}
                </Option>
            ))
        }
    }
    makeRoles(options){
        let index={}
        let a=[]
        let b=[]
        options.map(key=>{
            for(var ind in key){
                a.push(key[ind])
            }
            b.push(a)
            a=[]

        })
        let result = {}
        for (let i = 0; i < b.length; i++) {
            result[b[i][0]] = b[i][1]
        }
        return result
    }
    componentWillMount(){
        const modalType=this.props.modalType
        this.props.getPositionList()
        this.props.getBranchList()
        this.props.getRoleList()

    }
    backlast(){
        this.props.clearForm()
        this.props.closeModal(false)

    }
    handleSubmit(e) {
        e.preventDefault();
        let data = this.props.data;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.initToPage()
                this.editModal.call(this, data) ;
                this.props.refresh()
                this.props.clearForm()
            }
        });

    }

    editModal(data) {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                message.success("修改员工信息成功!")
                this.props.closeModal(false);
            }
        }
        editMemberList({dataAll:data,employee_id:this.props.employeeId}, cb.bind(this))

    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        const {
            getFieldDecorator
        } = this.props.form;
        return(
            <Modal
                visible={this.props.visible}
                title="修改员工信息"
                width={width}
                footer={null}
                onCancel={this.backlast.bind(this)}
            >
                <div style={styles.container}>
                    <div >
                        <div className="shadowCard" style={{overflow:'hidden',padding:'20px 10px',border:'none'}}>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="employee_name"
                                    row
                                    label="姓名"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="telephone"
                                    row
                                    label="手机号码"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="department"
                                    label="所属部门"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTMOER_TYPE_REQUIRED }]
                                    }>
                                    <Select>
                                        {this.makeOptions(this.props.BranchData)}
                                    </Select>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="position"
                                    label="职位"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTMOER_TYPE_REQUIRED }]
                                    }>
                                    <Select>
                                        {this.makeOptions(this.props.positionData)}
                                    </Select>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="role"
                                    label="角色"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTMOER_TYPE_REQUIRED }]
                                    }>
                                    <Select>
                                        {this.makeOptions(this.makeRoles(this.props.rolesData))}
                                    </Select>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="employee_account_user"
                                    row
                                    label="开户名"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="employee_account_name"
                                    row
                                    label="开户行"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="employee_bank_account"
                                    row
                                    label="银行账号"
                                    rules={
                                        [{ required: true, message:ERROR.BANK_USER  }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="email"
                                    row
                                    label="邮箱"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="sex"
                                    row
                                    label="性别"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <RadioGroup>

                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="enter_time"
                                    row
                                    label="入职时间"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <DatePicker />
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="update_time"
                                    row
                                    label="最后登录时间"
                                    rules={
                                        [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                    }>
                                    <DatePicker disabled/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="passWord"
                                    row
                                    label="密码"
                                    rules={
                                        [{ required: true,message: ERROR.PASSWORD_REQUIRED }]
                                    }>
                                    <Input type='password'/>
                                </FormItem>
                                <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <Button onClick={this.backlast.bind(this)}>返回</Button>
                                    <Button className="mainButton" htmlType="submit" style={{marginLeft:'30px'}} >保存</Button>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
            </Modal>
        )
    }
}
class FormItem extends React.Component {
    render() {
        const Layout = this.props.row ? rowItemLayout : formItemLayout;
        return (
            <Col span={this.props.col}>
                <Form.Item
                    {...Layout}
                    label={this.props.label}>
                    {this.props.getFieldDecorator(this.props.itemName, {
                        rules: this.props.rules,
                    })(
                        this.props.children
                    )}
                </Form.Item>
            </Col>
        )
    }
}

FormItem.defaultProps = {
    col: 24,
    itemName: 'itemName',
    rules: [],
    label: 'label'
}

const rightBtnModalForm =Form.create({
    onFieldsChange,
    mapPropsToFields
})(Render)

function mapPropsToFields(props) {
//映射到表单
    let fields={};
    let data=props.data;
    for (let key in props.data){
        if(key == "enter_time"|| key=="update_time") {
            if(props.data[key]) {
                fields[key]={
                    value:moment(new Date(parseInt(props.data[key])*1000).toLocaleDateString())
                }
            }else {
                fields[key]={
                    value:moment(new Date())
                }
            }
        }else {
            fields[key]={
                value:props.data[key]&&props.data[key].toString()
            }
        }
    }
    return fields
}

function onFieldsChange(props,changedFields){
//传到store
    props.completeInf(changedFields)
}

function mapStateToProps(state) {
    return {
        visible:state.frameWorkRightBth.modifyModal,
        data:state.frameWorkRightBth.data,
        BranchData:state.frameWorkRightBth.developmentOptions,
        rolesData:state.frameWorkRightBth.roles,
        positionData:state.frameWorkRightBth.positionOptions,
        employeeId:state.frameWorkRightBth.employeeId
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getBranchList: () => dispatch(actionCreator.frameWorkgetBranchSelects()),
        getRoleList: () => dispatch(actionCreator.frameWorkgetRolesListSelects()),
        getPositionList:()=>dispatch(actionCreator.frameWorkgetPositionListSelects()),
        completeInf:(fields)=>dispatch(actionCreator.frameWorkcompleteMemberInf(fields)),
        closeModal:(val)=>dispatch(actionCreator.frameWorkmodifyModalActionCreater(val)),
        clearForm:()=>dispatch(actionCreator.frameWorkClearModal()),
        refresh:()=>dispatch(actionCreatorList.getFrameWorkmemberList()),
        initToPage:()=>dispatch(initPageAction.frameWorkInitPage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rightBtnModalForm)