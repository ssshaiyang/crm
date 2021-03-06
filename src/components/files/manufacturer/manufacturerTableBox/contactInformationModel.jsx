import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, Radio } from 'antd'
import * as actionCreater from "../../../../actions/files/manufacturer/manufacturer.js";
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const RadioGroup = Radio.Group;

export class ContactInformationModel extends React.Component {

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

    }

    /**
     * 展开联系人弹框
     */
    showContactsModel() {
        this.setState({
            ContactsModelVisible: true
        })
    }

    handleOkAddContactsInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getManufacturerInfo(param)
        this.setState({
            ContactsModelVisible: false
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
        let id = this.props.data.manufacturer_id;
        this.props.form.validateFields((err, values) => {
            values.manufacturer_contact_sex = this.state.value
            if (!err) {
                let params = {
                    manufacturer_id: id,
                    values: values
                }
                this.props.addContactInfo(params)
            }
        });
    }

    /**
     * 查看银行信息方法组
     */

    showDetail() {
        let id = this.props.data.manufacturer_id;
        this.props.manufacturerContactInfo(id);
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
                dataIndex: 'manufacturer_contact_name',
                key: 'manufacturer_contact_name'
            },
            {
                title: '性别',
                dataIndex: 'manufacturer_contact_sex',
                key: 'manufacturer_contact_sex',
            },
            {
                title: '部门',
                dataIndex: 'manufacturer_contact_department',
                key: 'manufacturer_contact_department',
            },
            {
                title: '职务',
                dataIndex: 'manufacturer_contact_position',
                key: 'manufacturer_contact_position'
            },
            {
                title: '电话',
                dataIndex: 'manufacturer_contact_phone',
                key: 'manufacturer_contact_phone'
            },
            {
                title: '微信',
                dataIndex: 'manufacturer_contact_webchat',
                key: 'manufacturer_contact_webchat'
            },
            {
                title: 'QQ号',
                dataIndex: 'manufacturer_contact_qq',
                key: 'manufacturer_contact_qq'
            },
            {
                title: '邮箱',
                dataIndex: 'manufacturer_contact_email',
                key: 'manufacturer_contact_email'
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
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('manufacturer_contact_name', {
                                    rules: [{
                                        required: true, message: '请输入你的姓名',
                                    }],
                                })(
                                    <div>
                                        <Input defaultValue={this.props.contactInfo.manufacturer_contact_name} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="电话"
                            >
                                {getFieldDecorator('manufacturer_contact_phone', {
                                    rules: [{
                                        required: true, message: '请输入你的电话',
                                    }],
                                })(
                                    <div>
                                        <Input defaultValue={this.props.contactInfo.manufacturer_contact_phone} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        {/* 第二层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="性别"
                            >
                                {getFieldDecorator('manufacturer_contact_sex', {
                                })(
                                    <RadioGroup onChange={this.onChange.bind(this)} initialValue={1}>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </RadioGroup>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="部门"
                            >
                                {getFieldDecorator('manufacturer_contact_department', {
                                })(
                                    <div>
                                        <Input defaultValue={this.props.data.manufacturer_contact_department} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="职务"
                            >
                                {getFieldDecorator('manufacturer_contact_position', {
                                })(
                                    <div>
                                        <Input defaultValue={this.props.contactInfo.manufacturer_contact_position} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="微信"
                            >
                                {getFieldDecorator('manufacturer_contact_webchat', {
                                })(
                                    <div>
                                        <Input defaultValue={this.props.contactInfo.manufacturer_contact_webchat} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="QQ"
                            >
                                {getFieldDecorator('manufacturer_contact_qq', {
                                })(
                                    <div>
                                        <Input defaultValue={this.props.contactInfo.manufacturer_contact_qq} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="邮箱"
                            >
                                {getFieldDecorator('manufacturer_contact_email', {
                                })(
                                    <div>
                                        <Input defaultValue={this.props.contactInfo.manufacturer_contact_email} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkAddContactsInfo.bind(this)}>
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
    //console.log('aaaaa', state.manufacturerInfo.contactInfo)
    return {
        contactInfo: state.manufacturerInfo.contactInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //查询厂家联系人信息
        manufacturerContactInfo: (param) => dispatch(actionCreater.manufacturerContactListInfo(param)),
        //添加联系人信息
        addContactInfo: (params) => dispatch(actionCreater.addContactInfoList(params)),
        //生产厂家信息
        getManufacturerInfo: (param) => dispatch(actionCreater.getManufacturerListInfo(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ContactInformationModel))