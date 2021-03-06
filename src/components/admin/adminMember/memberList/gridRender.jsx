/*
 * @Author: lcj
 * @Date:   2017-08-23 20:12:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:32:29
 * @Descriptions: 客户管理-客户列表-操作render
 */

import React from 'react'
import {
    Button,
    Modal,
    message,
    Form,
    Input
} from 'antd'
import {
    connect
} from 'react-redux'
import {
    deleteMember
} from '../../../../utils/interface.js'
import adminLogin from '../../adminLogin.jsx'
import * as actionCreater from  "../../../../actions/admin/adminLogin.js"
import * as ModifyactionCreater from  "../../../../actions/admin/adminMember/modal/modify.js"
import {
    adminlogin
} from '../../../../utils/interface.js'
import error from '../../../../utils/error-message.json'
const FormItem = Form.Item;
export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }

    deleteAMember() {
        Modal.confirm({
            content: "是否删除"+this.props.data.employee_name+"?",
            onOk: () => {
                     this.setState({
                         visible:true
                     })
            },
            iconType: null
        })
    }

    editCustom() {
        const customer_id = this.props.data.customer_id;
        this.props.getModalData(customer_id, this.props)
        this.props.openModal();
    }
    handleSubmit(e){
        e.preventDefault();
        function cb(res, error, params) {
            if (res.error_code === GLOBALSUCCESS) {
                deleteMember({
                    employee_id: this.props.data.employee_id
                }, (res) => {
                    console.log("duidui",res.error_code)
                    if (res.error_code === GLOBALSUCCESS) {
                        this.props.api.updateRowData({
                            remove: [this.props.data]
                        })
                        message.success("删除成功!")
                    }
                })
                // message.info('管理员登录成功!');
                this.setState({
                    visible:false
                })
            }else{
                message.info('密码有误!');
            }
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                adminlogin(values, cb.bind(this));
            }
        });
    }
    handleCancel(){
        this.setState({
            visible:false
        })
    }
    modify(){
        this.props.setId({
            modifyModal:true,
            modalType:"0"
        })
        this.props.modifyData(this.props.data.employee_id,this.props)
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form;
        return (
            <div style={{textAlign:"center"}}>
                <Button
                    icon="modify"
                    className="gridButton"
                    style={{marginRight:'10px'}}
                     onClick={this.modify.bind(this)}
                />
                <Button
                    icon="delete"
                    className="gridButton"
                     onClick={this.deleteAMember.bind(this)}
                />
                <Modal
                    visible={this.state.visible}
                    width="300px"
                    footer={null}
                >
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem style={{padding:"30px 15px 0px 15px"}}>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            { required: true, message: error.PASSWORD_REQUIRED },
                                        ],
                                    })(
                                        <Input size="large" type="password" placeholder="请输入管理员密码"/>
                                    )}
                                </FormItem>
                                <div style={{textAlign:"center",padding:"20px 0"}}>
                                    <Button className="cancelButton" onClick={this.handleCancel.bind(this)}>返回</Button>
                                    <Button htmlType="submit" className="mainButton" style={{marginLeft:"30px"}}>确定</Button>
                                </div>
                        </Form>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // ToVisibleAdminLogin:(val)=>dispatch(actionCreater.adminLoginActionCreater(val)),
        modifyData: (employeeId,api) => dispatch(ModifyactionCreater.memberListEdit(employeeId,api)),
        setId:(val)=>dispatch(ModifyactionCreater.modifyModalActionCreater(val)),
    }
}

export default connect(null, mapDispatchToProps)(Form.create()(Render))