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
    message
} from 'antd'
import {
    connect
} from 'react-redux'
import ERROR from '../../../../utils/error-message.json'
import {formatDate,exportDate} from '../../../../utils/common.js'
const Option=Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import * as actionCreator from "../../../../actions/admin/adminMember/modal/modify.js"
import * as initPageAction from "../../../../actions/admin/adminMember/memberPage.js"
import {addMemberList,editMemberList} from "../../../../utils/interface.js"
import * as memberListActionCreator from '../../../../actions/admin/adminMember/memberList/memberList.js'

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

export class ModalFormContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeCheck:false,
        }
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


    makeListOptions(options){
        if(options){
            let keys=Object.keys(options)
            return keys.map(key=>(
                <Option value={this.check(key)} key={key}>
                    {options[key]}
                </Option>
            ))
        }
    }

    check(key) {
        if(key == 0){
            return 0
        }else{
           return String(this.props.positionDataList[key])
        }
    }
    makeListsOptions(options){
        if(options){
            let keys=Object.keys(options)
            return keys.map(key=>(
                <Option value={this.checkLists(key)} key={key}>
                    {options[key]}
                </Option>
            ))
        }
    }
    checkLists(key) {
        if(key == 0){
            return 0
        }else{
            return String(this.props.BranchDataList[key])
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
        this.props.closeModal({
            modalType:0,
            modifyModal:false
        })
        this.props.form.resetFields();
    }
    handleSubmit(e) {
        e.preventDefault();
        let allData=this.props.data;
        if(this.state.timeCheck){
            allData.enter_time=exportDate(allData.enter_time)
        }else{
            allData.enter_time=Math.floor(allData.enter_time.valueOf())
        }
        let opations = this.makeRoles(this.props.rolesData)
        let keys=Object.keys(opations)
        keys.map(key=>{
                if(opations[key]==allData.role_id){
                    allData.role_id =key
                }
            }
        )
        delete allData.undefined
        let data = allData;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const modalType = this.props.modalType;
                delete data.undefined
                String(modalType) == '0' ? this.editModal.call(this, data) : this.saveModal.call(this, data);
            }
        });


    }
    saveModal(data) {
        let dataList = data;
        dataList.department_id =Number(dataList.department_id)
        dataList.position_id=Number(dataList.position_id)
        dataList.role_id=Number(dataList.role_id)
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                this.setState({
                    timeCheck:false,
                })
                message.success("添加员工成功!")
                this.props.clearForm()
                this.props.initToPage();
                this.props.memberData({
                    page:1,
                    limit:5

                });
                this.props.closeModal({
                    modalType:0,
                    modifyModal:false
                });
                this.props.form.resetFields();

            }
        }
        addMemberList(dataList, cb.bind(this))

    }
    changeTime(){
        this.setState({
            timeCheck:true,
        })
    }
    editModal(data) {
        console.log(data)
        let dataList = data;
        dataList.department_id =Number(dataList.department_id)
        dataList.position_id=Number(dataList.position_id)
        dataList.role_id=Number(dataList.role_id)
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                this.setState({
                    timeCheck:false,
                })
                message.success("修改员工信息成功!")
                this.props.clearForm()
                this.props.initToPage();
                this.props.memberData({
                    page:1,
                    limit:5

                });
                this.props.closeModal({
                    modalType:0,
                    modifyModal:false
                });
                this.props.form.resetFields();
            }
        }
        console.log(dataList)
        editMemberList({dataAll:dataList,employee_id:this.props.employeeId}, cb.bind(this))
    }
    render(){
        const {
            getFieldDecorator
        } = this.props.form;
        return(
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
                                    [{ required: true, message:"请输入姓名"  }]
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
                                    [{ required: true, message:"请输入格式正确的手机号码/并且不能为空" ,pattern:/^1[3|4|5|7|8][0-9]{9}$/}]
                                }>
                                <Input/>
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="department_id"
                                label="所属部门"
                                rules={
                                    [{ required: true, message:  "请选择所属部门" }]
                                }>
                                <Select>
                                    {this.makeListsOptions(this.props.BranchData)}
                                </Select>
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="position_id"
                                label="职位"
                                rules={
                                    [{ required: true, message: "请选择职位" }]
                                }>
                                <Select>
                                    {this.makeListOptions(this.props.positionData)}
                                </Select>
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="role_id"
                                label="角色"
                                rules={
                                    [{ required: true, message:"请选择角色"  }]
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
                                    [{ required: true, message: "请输入开户名" }]
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
                                    [{ required: true, message: "请输入开户行", }]
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
                                    [{ required: true, message: "请输入格式正确的银行账号/并且不能为空" ,pattern:/^(\d{16}|\d{19})$/}]
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
                                    [{ required: true, message:"请输入格式正确的邮箱/并且不能为空",pattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/}]
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
                                    [{ required: true, message:"请选择性别"}]
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
                                    [{ required: true, message:"请选择入职时间" }]
                                }>
                                <DatePicker onChange={this.changeTime.bind(this)} />
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="password"
                                row
                                label="密码"
                                rules={
                                    [{ required: false, message:"请输入密码"}]
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

const ModalForm =Form.create({
    onFieldsChange,
    mapPropsToFields
})(ModalFormContent)

function mapPropsToFields(props) {
//映射到表单
    let fields={};
    let data=props.data;
    for (let key in props.data){
        if(key == "enter_time"||key=="update_time") {
            if(props.data[key]) {
                fields[key]={
                    value:moment(new Date(parseInt(props.data[key])*1000).toLocaleDateString())
                }
            }else {
                fields[key]={
                    value:props.data[key]&&props.data[key].toString()
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

function mapStateToProps(state){
    console.log(state.modify.data)
    return {
        data:state.modify.data,
        modalType:state.modify.modalType,
        BranchData:state.modify.developmentOptions.department,
        BranchDataList:state.modify.developmentOptions.parent_id,
        rolesData:state.modify.roles,
        positionData:state.modify.positionOptions.position,
        positionDataList:state.modify.positionOptions.parent_id,
        api:state.modify.api,
        employeeId:state.modify.employeeId
        // bankData:state.bankType
    }
}

function mapDispatchToProps(dispatch) {

    return {
        // getBankList:()=>dispatch(actionCreator.getBankListSelects()),
        getBranchList: () => dispatch(actionCreator.getBranchSelects()),
        getRoleList: () => dispatch(actionCreator.getRolesListSelects()),
        getPositionList:()=>dispatch(actionCreator.getPositionListSelects()),
        completeInf:(fields)=>dispatch(actionCreator.completeMemberInf(fields)),
        closeModal:(val)=>dispatch(actionCreator.modifyModalActionCreater(val)),
        clearForm:()=>dispatch(actionCreator.ClearModal()),
        initToPage:()=>dispatch(initPageAction.initPage()),
        memberData:()=>dispatch(memberListActionCreator.memberList())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalForm)


