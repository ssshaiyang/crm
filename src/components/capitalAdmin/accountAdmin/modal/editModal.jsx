import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal,
    message
} from 'antd'
import {
    connect
} from 'react-redux'
import {editCapitalBankList,addCapitalBankList} from "../../../../utils/interface.js"

import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"
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
let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
export class ModifyModal extends React.Component {
    constructor(props) {
        super(props);
    }
    closeModal(){
        this.props.clearPart()
        this.props.closeModalBox({
            editVisible:false,
            modalType:0
        })

    }
    handleCancle(){
        this.props.closeModalBox({
            editVisible:false,
            modalType:0
        })
        this.props.clearPart()
    }
    handleSubmit(e){
        e.preventDefault();
        let param = this.props.data;
        delete param.undefined
        let data=param
        console.log("data",data)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const modalType = this.props.modalType;
                String(modalType) == '0' ? this.editModal.call(this, data) : this.saveModal.call(this, data);
            }
        });
    }
    saveModal(data) {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                this.props.clearForm()
               this.props.initPage(1,5);
                this.props.getBankList({
                    page:1,
                    limit:5

                });
                this.props.closeModalBox({
                    editVisible:false,
                    modalType:0
                })
                message.success("添加员工成功!")
            }
        }
        addCapitalBankList(data, cb.bind(this))
        this.props.clearPart()
    }

    editModal(data) {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                message.success("修改员工信息成功!")
                // Object.assign(this.props.api.data, data);
                /*  this.props.api.api.updateRowData({
                      update: [this.props.api.data]
                  })*/
                this.props.clearForm()

                this.props.initPage(1,5);
                this.props.getBankList({
                    page:1,
                    limit:5,
                });
                this.props.closeModalBox({
                    editVisible:false,
                    modalType:0
                })

            }
        }
        editCapitalBankList({dataAll:data,account_id:this.props.account_id}, cb.bind(this))
        this.props.clearPart()
    }
        render(){
        // const width=window.screen.avaiWidth>700 ? 400:"70%";
        const {
            getFieldDecorator
        } = this.props.form;
        return(
            <Modal
                visible={this.props.editVisible}
                onCancel={this.closeModal.bind(this)}
                footer={null}
                title={this.props.modalType==0?"编辑账号":"添加账号"}
            >
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={24}
                        itemName="account_user"
                        row
                        label="开户名"
                        rules={
                            [{ required: true, message:"用戶名不能為空" }]
                        }>
                        <Input/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={24}
                        itemName="account_phone"
                        row
                        label="电话"
                        rules={
                            [{ required: true, message:"请输入格式正确的电话/并且不能为空",pattern:/^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$|^((\+?86)|(\(\+86\)))?1\d{10}$/ }]
                        }>
                        <Input/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={24}
                        itemName="account_name"
                        row
                        label="开户行"
                        rules={
                            [{ required: true, message:"开户行不能为空" }]
                        }>
                        <Input/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={24}
                        itemName="bank_account"
                        row
                        label="账号"
                        rules={
                            [{ required: true, message:"请输入格式正确的账号/并且不能为空",pattern:/^(\d{16}|\d{19})$/ }]
                        }>
                        <Input/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={24}
                        itemName="account_usage"
                        row
                        label="备注"
                        rules={
                            [{ required: true, message:"备注不能为空" }]
                        }>
                        <textArea style={{width:"100%"}}></textArea>
                    </FormItem>
                    <div style={{textAlign:"center",margin:"10px 0"}}>
                        <Button onClick={this.handleCancle.bind(this)} style={{marginRight:"40px"}}>取消</Button>
                        <Button className="mainButton" htmlType="submit">保存</Button>
                    </div>
                </Form>

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

const editModalForm =Form.create({
    onFieldsChange,
    mapPropsToFields
})(ModifyModal)

function mapPropsToFields(props) {
//映射到表单
    let fields={};
    let data=props.data;
    for (let key in props.data){
            fields[key]={
                value:props.data[key]&&props.data[key].toString()
            }
    }
    return fields
}

function onFieldsChange(props,changedFields){
//传到store
    props.completeInf(changedFields)
}

function mapStateToProps(state){
    return {
        data:state.bankList.formData,
        editVisible:state.bankList.editVisible,
        modalType:state.bankList.modalType,
        account_id:state.bankList.account_id
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreater.editActionCreater(val)),
        completeInf:(fields)=>dispatch(actionCreater.completeMemberInf(fields)),
        initPage:(page,size)=>dispatch(actionCreater.pageActionCreater(page,size)),
        clearForm:()=>dispatch(actionCreater.clearCapitalForm()),
        getBankList:(params)=>dispatch(actionCreater.bankAllList(params)),
        clearPart:()=>dispatch(actionCreater.clearPartCapitalForm()),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(editModalForm)