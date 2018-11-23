import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table ,Radio} from 'antd'
import * as actionCreator from "../../../../actions/files/agent/agent.js"
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const RadioGroup = Radio.Group;

export class ContactModel extends React.Component {

    constructor() {
        super();
        this.state = {
            addAgentVisible: false,
            addBankInfoVisible: false,
            detailInfoVisible: false,
            value: 1,
        }
    }

    componentWillMount() {
        console.log(this.props.data)
    }

    /**
     * 展开联系人弹框
     */
    showContactsModel() {
        this.setState({
            ContactsModelVisible: true
        })
    }

   

    handleCancelAddContactsInfo() {
        this.setState({
            ContactsModelVisible: false
        })
    }

    getContactsInfoSearchValue(value) {
        //console.log('ssssss',value)
    }

    handleSubmit(e) {
        e.preventDefault();
        let id = this.props.data.agent_id;
        this.props.form.validateFields((err, values) => {
            values.agent_contact_sex = this.state.value
            if (!err) {
                let params = {
                    id: id,
                    values: values
                }
                this.props.addContact(params)
            }
        });
    }

    /**
     * 查看银行信息方法组
     */

    showDetail() {
        let id = this.props.data.agent_id;
         this.props.getContact(id);
        this.setState({
            detailInfoVisible: true
        })
    }

    handleOkDetailInfo() {
        this.setState({
            detailInfoVisible: false
        })
    }

    handleCancelDetailInfo() {
        this.setState({
            detailInfoVisible: false
        })
    }

    onChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    addContactSex(e) {
        this.setState({
            addContactSex: e.target.value
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }
        const data = [
            {
                key: '1',
                account_number: '',
                deposit_bank: '',
                deposit_name: '',
                bank_type: ''
            },
        ];
        const columns = [
            {
                title: '姓名',
                dataIndex: 'agent_contact_name',
                key: 'agent_contact_name'
            },
            {
                title: '性别',
                dataIndex: 'agent_contact_sex',
                key: 'agent_contact_sex',
            },
            {
                title: '手机',
                dataIndex: 'agent_contact_telephone',
                key: 'agent_contact_telephone',
            },
            {
                title: '身份证号',
                dataIndex: 'agent_contact_card',
                key: 'agent_contact_card'
            },
            {
                title: '电话',
                dataIndex: 'agent_contact_phone',
                key: 'agent_contact_phone'
            },
            {
                title: '微信',
                dataIndex: 'agent_contact_webchat',
                key: 'agent_contact_webchat'
            },
            {
                title: 'QQ号',
                dataIndex: 'agent_contact_qq',
                key: 'agent_contact_qq'
            },
            {
                title: '邮箱',
                dataIndex: 'agent_contact_email',
                key: 'agent_contact_email'
            },
        ];
        return (
            <div>
                <a onClick={this.showContactsModel.bind(this)}>添加</a>|<a onClick={this.showDetail.bind(this)}>查看详情</a>
                <Modal
                    title='添加联系人'
                    visible={this.state.ContactsModelVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        {/* 第一层 */}
                        <div className="botLine">
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('agent_contact_name',{
                                    rules:[{
                                        required:true
                                    }]
                                })(
                                    <div>
                                        <Input style={{width:200}}/>
                                    </div>  
                                )}
                            </FormItem> 
                            <FormItem
                                {...formItemLayout}
                                label="手机"
                            >
                                {getFieldDecorator('agent_contact_telephone',{
                                    rules:[{
                                        required:true
                                    }]
                                })(
                                    <div>
                                        <Input style={{width:200}}/>
                                    </div>  
                                )}
                            </FormItem> 
                            <div style={{ marginBottom: 20 }}>
                                <span style={{ marginLeft: 120 }}>性别:</span>
                                <RadioGroup onChange={this.addContactSex.bind(this)} style={{ marginBottom: 20, marginLeft: 40 }}>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={0}>女</Radio>
                                </RadioGroup>
                            </div>      
                        </div>
                        <br/>
                            <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="固定电话"
                            >
                                {getFieldDecorator('agent_contact_phone', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="身份证号"
                            >
                                {getFieldDecorator('agent_contact_card', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="传真"
                            >
                                {getFieldDecorator('agent_contact_fax', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="微信"
                            >
                                {getFieldDecorator('agent_contact_webchat', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="QQ"
                            >
                                {getFieldDecorator('agent_contact_qq', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="邮箱"
                            >
                                {getFieldDecorator('agent_contact_email', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        
                        <br />
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleCancelAddContactsInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddContactsInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title="联系人列表"
                    visible={this.state.detailInfoVisible}
                    onOk={this.handleOkDetailInfo.bind(this)}
                    onCancel={this.handleCancelDetailInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={this.props.contactInfo} bordered={true} />
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
  
    return {
        //visible: state.inventory.checkOutVisible
        contactInfo:  state.agentInfo.contactInfo

    }
    console.log(bankdata)
}
function mapDispatchToProps(dispatch) {
    return {
         //获取代理商列表
        getContact: (params) => dispatch(actionCreator.getAgentContact(params)),
        //openModalBox: (val) => dispatch(actionCreater.checkOutActionCreater(val))
        addContact: (params) => dispatch(actionCreator.addAgentContact(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ContactModel))