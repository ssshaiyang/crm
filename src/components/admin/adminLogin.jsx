/*
 * @Author: lcj
 * @Date:   2017-08-03 15:51:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-04 14:20:55
 */


import React from 'react'
import {
    connect
} from 'react-redux'
import { Modal, Button ,Input,Form,message,Icon} from 'antd'

import * as actionCreater from  "../../actions/admin/adminLogin.js"
import {
    adminlogin
} from '../../utils/interface.js'
import error from '../../utils/error-message.json'
const FormItem = Form.Item;

class AdminLogin extends React.Component {
    componentWillMount(){
        if(sessionStorage.getItem('adminLogedPass')){
            this.props.toShow(false)
            this.props.unVisible(false)
        }else{
            this.props.toShow(true)
            this.props.unVisible(true)
        }
    }

    handleSubmit(e){
        e.preventDefault();
        function cb(res, error, params) {
            if (res.error_code === GLOBALSUCCESS) {
                message.info('管理员登录成功!');
                this.props.unVisible(false)
                this.props.toShow(false)
                sessionStorage.setItem('adminLogedPass',"1")
                this.props.form.resetFields();
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
     backTo(){
         this.props.unVisible(false)
     }
    render() {
        const {
            getFieldDecorator
        } = this.props.form;


        return (
            <Modal
                visible={this.props.visible&&this.props.show? true:false}
                width="350px"
                footer={null}
            >
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem style={{padding:"30px 15px 20px 15px"}}>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: error.PASSWORD_REQUIRED },
                            ],
                        })(
                            <Input size="large" type="password" placeholder="请输入管理员密码"/>
                        )}
                    </FormItem>
                    <FormItem style={{textAlign:'left'}}>
                        <div style={{textAlign:"center",padding:"20px 0"}}>
                            <Button className="cancelButton" onClick={this.backTo.bind(this)}>返回</Button>
                            <Button htmlType="submit" className="mainButton" style={{marginLeft:"30px"}}>确定</Button>
                        </div>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    return {
        visible: state.toAdminLogin.visible,
        company_id:state.companyLoginModel.company_id,
        show:state.toAdminLogin.show
    }
}

function mapDispatchToProps(dispatch) {
    return {
        unVisible:(val)=>dispatch(actionCreater.adminLoginActionCreater(val)),
        toShow:(val)=>dispatch(actionCreater.adminLoginShow(val)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(AdminLogin))
