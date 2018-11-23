import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, DatePicker, Radio, message } from 'antd'
import * as actionCreator from "../../../../actions/files/medicineName/medicineName.js"
import * as actionCreat from "../../../../actions/files/corporation/corporation.js"
import * as actionBilling from "../../../../actions/files/invoiceCompany/invoiceCompany.js";
import Grid from '../../../common/Grid.jsx'

const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const RadioGroup = Radio.Group;

export class BillingOperationModel extends React.Component {

    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            ContactsModelVisible: false,
            delAgentVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            editBankVisible: false,
            delBankVisible: false
        }
    }

    componentWillMount() {
        this.props.getUserInfo(1);
    }

    componentDidMount() {

    }

    addMechInfo() {
        let id = this.props.data.billing_id;
        this.props.getArea();
        this.props.getBillingContact(id);
        this.props.getBillingBankAccount(id)
        this.setState({
            addMechInfoVisible: true,
            billing_id: id
        });
    }

    handleOkAddMechInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getBillingInfo(param);
        this.setState({
            addMechInfoVisible: false,
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        let billingInfo = this.props.data
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let params = {
                    value: {
                        billing_name: values.billing_name !== billingInfo.billing_name ? values.billing_name : billingInfo.billing_name,
                        billing_province: this.state.areaValue[0],
                        billing_city: this.state.areaValue[1],
                        billing_district: this.state.areaValue[2],
                        billing_address: values.billing_address !== billingInfo.billing_address ? values.billing_address : billingInfo.billing_address,
                        business_license_code: values.business_license_code !== billingInfo.business_license_code ? values.business_license_code : billingInfo.business_license_code,
                        business_license_expire_time: Date.parse(values['business_license_expire_time'].format('YYYY-MM-DD')) / 1000,
                        gmp_code: values.gmp_code !== billingInfo.gmp_code ? values.gmp_code : billingInfo.gmp_code,
                        gmp_expire_time: Date.parse(values['gmp_expire_time'].format('YYYY-MM-DD')) / 1000,
                        production_license: values.production_license !== billingInfo.production_license ? values.production_license : billingInfo.production_license,
                        production_expire_time: Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000,
                        proxy: values.proxy !== billingInfo.proxy ? values.proxy : billingInfo.proxy,
                        proxy_expire_time: Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000,
                        protocol_region: values.protocol_region !== billingInfo.protocol_region ? values.protocol_region : billingInfo.protocol_region,
                        billing_remark: values.billing_remark !== billingInfo.billing_remark ? values.billing_remark : billingInfo.billing_remark,
                        billing_contact: this.props.billingContactInfo,
                        billing_account: this.props.billingBankAccountInfo,
                        creator_name: this.props.userInfo.username
                    },
                    id: this.props.data.billing_id
                }
                this.props.editBilling(params);
            }
        });
    }

    //点击确认修改联系人信息
    handleSubmitUpdateInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let editValue = {
                    billing_contact_name: values.billing_contact_name !== this.state.rowClickContactInfo.billing_contact_name ? values.billing_contact_name : this.state.rowClickContactInfo.billing_contact_name,
                    billing_contact_sex: values.billing_contact_sex !== this.state.rowClickContactInfo.billing_contact_sex ? values.billing_contact_sex : this.state.rowClickContactInfo.billing_contact_sex,
                    billing_contact_department: values.billing_contact_department !== this.state.rowClickContactInfo.billing_contact_department ? values.billing_contact_department : this.state.rowClickContactInfo.billing_contact_department,
                    billing_contact_position: values.billing_contact_position !== this.state.rowClickContactInfo.billing_contact_position ? values.billing_contact_position : this.state.rowClickContactInfo.billing_contact_position,
                    billing_contact_phone: values.billing_contact_phone !== this.state.rowClickContactInfo.billing_contact_phone ? values.billing_contact_phone : this.state.rowClickContactInfo.billing_contact_phone,
                    billing_contact_qq: values.billing_contact_qq !== this.state.rowClickContactInfo.billing_contact_qq ? values.billing_contact_qq : this.state.rowClickContactInfo.billing_contact_qq,
                    billing_contact_webchat: values.billing_contact_webchat !== this.state.rowClickContactInfo.billing_contact_webchat ? values.billing_contact_webchat : this.state.rowClickContactInfo.billing_contact_webchat,
                    billing_contact_email: values.billing_contact_email !== this.state.rowClickContactInfo.billing_contact_email ? values.billing_contact_email : this.state.rowClickContactInfo.billing_contact_email,
                }
                let contactInfoList = this.props.billingContactInfo;
                for (let i = 0; i < contactInfoList.length; i++) {
                    if (contactInfoList[i].billing_contact_id == this.state.rowClickContactInfo.billing_contact_id) {
                        contactInfoList[i] = editValue;
                    }
                }
                this.props.billingContactInfo = contactInfoList
            }
        });
    }

    /**
     * 展开联系人弹框
     */
    showContactsModel() {
        //this.props.addContactInfo();
        this.setState({
            ContactsModelVisible: true
        })
    }

    handleOkAddContactsInfo() {
        this.setState({
            ContactsModelVisible: false
        })
    }

    handleCancelAddContactsInfo() {
        this.setState({
            ContactsModelVisible: false
        })
    }

    /**
     * 展示招商人员对话框
     */

    showAgentModel() {
        this.setState({
            agentModelVisible: true
        })
    }

    handleOkAgentModel() {
        this.setState({
            agentModelVisible: false
        })
    }

    handleCancelAgentModel() {
        this.setState({
            agentModelVisible: false
        })
    }


    /**
     * 添加公司银行账户
     */
    showCompBankModel() {
        this.setState({
            addBankInfoVisible: true
        })
    }

    handleOkCompBankInfo() {
        this.setState({
            addBankInfoVisible: false
        })
    }

    handleCancelCompBankInfo() {
        this.setState({
            addBankInfoVisible: false
        })
    }

    /**
     * 删除代理人信息方法组
     */

    showDel() {
        this.setState({
            delAgentVisible: true
        })
    }

    handleOkDelAgent() {
        this.props.delBilling(this.props.data.billing_id);
        this.setState({
            delAgentVisible: false
        }, () => {
            let param = {
                page: -1,
                limit: 10
            }
            this.props.getBillingInfo(param)
        })
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('aaaaa', values);
                let addValue = {
                    values: {
                        billing_contact_name: values.billing_contact_name,
                        billing_contact_sex: values.billing_contact_sex,
                        billing_contact_department: values.billing_contact_department,
                        billing_contact_position: values.billing_contact_position,
                        billing_contact_phone: values.billing_contact_phone,
                        billing_contact_qq: values.billing_contact_qq,
                        billing_contact_webchat: values.billing_contact_webchat,
                        billing_contact_email: values.billing_contact_email,
                    },
                    billing_id: this.props.data.billing_id
                }
                this.props.addBillingContact(addValue);
                if (values) {
                    addValue.values.billing_contact_sex == 1 ? '男' : '女'
                    this.props.billingContactInfo.push(addValue.values)
                }
            }
        });
    }

    /**
     * 修改联系人信息
     */
    updateManufacturerInfo() {
        this.setState({
            updateManuVisible: true,
        })
    }

    handleOkManufacturerInfo() {
        this.setState({
            updateManuVisible: false
        })
    }

    handleCancelManufacturerInfo() {
        this.setState({
            updateManuVisible: false
        })
    }

    /**
     * 删除联系人信息
     */

    delManufacturerInfo() {
        this.setState({
            delManufacturerVisible: true
        })
    }

    handleOkDelManufacturerInfo() {
        this.props.delBillingContact(this.state.rowClickContactInfo.billing_contact_id);
        this.setState({
            delManufacturerVisible: false
        })
    }

    handleCancelDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
        })
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('ssssss', record);
        this.setState({
            rowClickRecord: record
        })
    }

    //获取修改联系人表单选中项
    rowClickContactInfo(record) {
        this.setState({
            rowClickContactInfo: record
        })
    }

    //获取单选按钮信息
    onChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    //编辑银行方法组
    editBankInfo() {
        this.setState({
            editBankVisible: true
        })
    }

    handleOkEditBankInfo() {
        this.setState({
            editBankVisible: false
        })
    }

    handleCancelEditBankInfo() {
        this.setState({
            editBankVisible: false
        })
    }

    //删除银行信息
    delBankAccountInfo() {
        this.setState({
            delBankVisible: true
        })
    }

    handleOkDelBankInfo() {
        this.props.delBankAccount(this.state.rowClickBankInfo.billing_account_id);
        this.setState({
            delBankVisible: false
        })
    }

    handleCancelDelBankInfo() {
        this.setState({
            delBankVisible: false
        })
    }

    //获取级联地区的值
    getAreaValue(value) {
        this.setState({
            areaValue: value
        })
    }

    //添加银行信息确定取表单值
    handleSubmitAddBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('aaaaa', values);
                let addValue = {
                    values: {
                        billing_bank_account: values.billing_bank_account,
                        billing_account_name: values.billing_account_name,
                        billing_account_user: values.billing_account_user,
                    },
                    billing_id: this.props.data.billing_id
                }
                this.props.addBillingBankAccount(addValue);
                if (values) {
                    this.props.billingBankAccountInfo.push(addValue.values)
                }
            }
        });
    }

    //添加联系人单选按钮点击值
    addContactSex(e) {
        addContactSexValue: e.target.value
    }

    //编辑银行信息
    handleSubmitEditBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let editValue = {
                    billing_bank_account: values.billing_bank_account !== this.state.rowClickBankInfo.billing_bank_account ? values.billing_bank_account : this.state.rowClickBankInfo.billing_bank_account,
                    billing_account_name: values.billing_account_name !== this.state.rowClickBankInfo.billing_account_name ? values.billing_account_name : this.state.rowClickBankInfo.billing_account_name,
                    billing_account_user: values.billing_account_user !== this.state.rowClickBankInfo.billing_account_user ? values.billing_account_user : this.state.rowClickBankInfo.billing_account_user
                }
                let billingBankAccountList = this.props.billingBankAccountInfo;
                for (let i = 0; i < billingBankAccountList.length; i++) {
                    if (billingBankAccountList[i].billing_account_id == this.state.rowClickBankInfo.billing_account_id) {
                        billingBankAccountList[i] = editValue;
                    }
                }
                this.props.billingBankAccountInfo = billingBankAccountList
            }
        });
    }

    //编辑银行选中table值
    rowClickBankInfo(record) {
        this.setState({
            rowClickBankInfo: record
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="编辑开票公司"
                    width='720px'
                    visible={this.state.addMechInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开票公司名称"
                                >
                                    {getFieldDecorator('billing_name', {

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.billing_name} style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开票公司地址"
                                >
                                    {getFieldDecorator('billing_address', {

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.billing_address} style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('billing_area', {

                                    })(
                                        <div>
                                            <Cascader options={this.props.areaInfo} onChange={this.getAreaValue.bind(this)} placeholder="请选择所属地区" style={{ width: 300 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                        </Row>
                        <br />
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="联系人信息"
                            >
                                {getFieldDecorator('billing_contact', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showContactsModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.props.billingContactInfo} onRowClick={this.rowClickContactInfo.bind(this)} bordered={true}>
                                <Column
                                    title="姓名"
                                    dataIndex="billing_contact_name"
                                    key="billing_contact_name"
                                />
                                <Column
                                    title="性别"
                                    dataIndex="billing_contact_sex"
                                    key="billing_contact_sex"
                                />
                                <Column
                                    title="部门"
                                    dataIndex="billing_contact_department"
                                    key="billing_contact_department"
                                />
                                <Column
                                    title="职务"
                                    dataIndex="billing_contact_position"
                                    key="billing_contact_position"
                                />
                                <Column
                                    title="电话"
                                    dataIndex="billing_contact_phone"
                                    key="billing_contact_phone"
                                />
                                <Column
                                    title="QQ"
                                    dataIndex="billing_contact_qq"
                                    key="billing_contact_qq"
                                />
                                <Column
                                    title="微信"
                                    dataIndex="manufacturer_contact_webchat"
                                    key="manufacturer_contact_webchat"
                                />
                                <Column
                                    title="邮箱"
                                    dataIndex="billing_contact_email"
                                    key="billing_contact_email"
                                />
                                <Column
                                    title="操作"
                                    key="operation"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                onClick={this.updateManufacturerInfo.bind(this)}><Icon type="edit" /></span>
                                            <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delManufacturerInfo.bind(this)}><Icon type="delete" /></span>
                                        </div>
                                    )}
                                />
                            </Table>
                        </div>
                        <br />
                        {/* 第三层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="公司银行账户"
                            >
                                {getFieldDecorator('billing_account', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showCompBankModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.props.billingBankAccountInfo} bordered={true} onRowClick={this.rowClickBankInfo.bind(this)}>
                                <Column
                                    title="开户行"
                                    dataIndex="billing_account_name"
                                    key="billing_account_name"
                                />
                                <Column
                                    title="开户人名"
                                    dataIndex="billing_account_user"
                                    key="billing_account_user"
                                />
                                <Column
                                    title="账号"
                                    dataIndex="billing_bank_account"
                                    key="billing_bank_account"
                                />
                                <Column
                                    title="操作"
                                    key="operation_bankInfo"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }} onClick={this.editBankInfo.bind(this)}><Icon type="edit" /></span>
                                            <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delBankAccountInfo.bind(this)}><Icon type="delete" /></span>
                                        </div>
                                    )}
                                />
                            </Table>
                        </div>
                        <br />
                        {/* 第四层 */}
                        <div>
                            <Row className='botLine'>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="营业执照代码"
                                    >
                                        {getFieldDecorator('business_license_code', {

                                        })(
                                            <div>
                                                <Input defaultValue={this.props.data.business_license_code} style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="营业执照过期日期"
                                    >
                                        {getFieldDecorator('business_license_expire_time', {
                                        })(
                                            <DatePicker style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="GMP代码"
                                    >
                                        {getFieldDecorator('gmp_code', {

                                        })(
                                            <div>
                                                <Input defaultValue={this.props.data.business_license_code} style={{ width: 200 }} placeholder='' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="GMP过期日期"
                                    >
                                        {getFieldDecorator('gmp_expire_time', {
                                        })(
                                            <DatePicker style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="生产许可证"
                                    >
                                        {getFieldDecorator('production_license', {

                                        })(
                                            <div>
                                                <Input defaultValue={this.props.data.production_license} style={{ width: 200 }} placeholder='' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="生产许可证有效期"
                                    >
                                        {getFieldDecorator('production_expire_time', {
                                        })(
                                            <DatePicker style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="委托书"
                                    >
                                        {getFieldDecorator('proxy', {

                                        })(
                                            <div>
                                                <Input defaultValue={this.props.data.proxy} style={{ width: 200 }} placeholder='' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="委托书有效期"
                                    >
                                        {getFieldDecorator('proxy_expire_time', {
                                        })(
                                            <DatePicker style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="协议区域"
                                    >
                                        {getFieldDecorator('protocol_region', {

                                        })(
                                            <div>
                                                <Input defaultValue={this.props.data.protocol_region} style={{ width: 200 }} placeholder='' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}></Col>
                            </Row>
                        </div>
                        <br />
                        {/* 第五层 */}
                        <div>
                            <Row className='botLine'>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="创建人"
                                    >
                                        {getFieldDecorator('creator_name', {

                                        })(
                                            <div>
                                                <p>{this.props.userInfo.username}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="创建时间"
                                    >
                                        {getFieldDecorator('create_time', {

                                        })(
                                            <div>
                                                <p>{new Date().toLocaleDateString()}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('billing_remark', {

                                    })(
                                        <div>
                                            <input type='textarea' className='my_textarea_style' />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.handleOkAddMechInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddMechInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title='添加银行账户'
                    visible={this.state.addBankInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmitAddBankInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('billing_bank_account', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户行"
                            >
                                {getFieldDecorator('billing_account_name', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户名"
                            >
                                {getFieldDecorator('billing_account_user', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkCompBankInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelCompBankInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title='添加联系人'
                    visible={this.state.ContactsModelVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('billing_contact_name', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="电话"
                            >
                                {getFieldDecorator('billing_contact_phone', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
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
                                {getFieldDecorator('billing_contact_sex', {
                                })(
                                    <RadioGroup onChange={this.addContactSex.bind(this)} initialValue={1}>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </RadioGroup>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="部门"
                            >
                                {getFieldDecorator('billing_contact_department', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="职务"
                            >
                                {getFieldDecorator('billing_contact_position', {
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
                                {getFieldDecorator('billing_contact_webchat', {
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
                                {getFieldDecorator('billing_contact_qq', {
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
                                {getFieldDecorator('billing_contact_email', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
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
                    title='修改联系人信息'
                    visible={this.state.updateManuVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmitUpdateInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('billing_contact_name', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="电话"
                            >
                                {getFieldDecorator('billing_contact_phone', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
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
                                {getFieldDecorator('billing_contact_sex', {
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
                                {getFieldDecorator('billing_contact_department', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="职务"
                            >
                                {getFieldDecorator('billing_contact_position', {
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
                                {getFieldDecorator('billing_contact_webchat', {
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
                                {getFieldDecorator('billing_contact_qq', {
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
                                {getFieldDecorator('billing_contact_email', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkManufacturerInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelManufacturerInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title='编辑银行信息'
                    visible={this.state.editBankVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmitEditBankInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('billing_bank_account', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户行"
                            >
                                {getFieldDecorator('billing_account_name', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户名"
                            >
                                {getFieldDecorator('billing_account_user', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkEditBankInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelEditBankInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title="删除银行信息"
                    visible={this.state.delBankVisible}
                    onOk={this.handleOkDelBankInfo.bind(this)}
                    onCancel={this.handleCancelDelBankInfo.bind(this)}
                >
                    <span>确定要删除此银行信息吗?</span>
                </Modal>

                <Modal
                    title="删除联系人信息"
                    visible={this.state.delManufacturerVisible}
                    onOk={this.handleOkDelManufacturerInfo.bind(this)}
                    onCancel={this.handleCancelDelManufacturerInfo.bind(this)}
                >
                    <span>确定删除此联系人信息吗?</span>
                </Modal>

                <Modal
                    title="删除开票公司信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定删除此开票公司信息?</span>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    let areaList = [];
    if (state.corporationInfo.areaInfo) {
        areaList.push(state.corporationInfo.areaInfo);
    }
    return {
        //获取区域信息
        areaInfo: areaList,
        //查询开票公司联系人信息
        billingContactInfo: state.billingInfo.billingContactInfo,
        //开票公司银行账户信息
        billingBankAccountInfo: state.billingInfo.billingBankAccountInfo,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取所属地区
        getArea: () => dispatch(actionCreat.getAreaInfo()),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),
        //开票公司联系人信息
        getBillingContact: (param) => dispatch(actionBilling.getBillingContactInfo(param)),
        //查看开票公司银行账户
        getBillingBankAccount: (params) => dispatch(actionBilling.getBillingBankAccountInfo(params)),
        //删除开票公司联系人信息
        delBillingContact: (param) => dispatch(actionBilling.delBillingContactInfo(param)),
        //添加开票公司联系人
        addBillingContact: (param) => dispatch(actionBilling.addBillingContactInfo(param)),
        //删除开票公司银行信息
        delBankAccount: (param) => dispatch(actionBilling.delBankAccountInfo(param)),
        //添加开票公司银行账户
        addBillingBankAccount: (params) => dispatch(actionBilling.addBillingBankAccountInfo(params)),
        //编辑开票公司信息
        editBilling: (params) => dispatch(actionBilling.editBillingInfo(params)),
        //删除开票公司信息
        delBilling: (param) => dispatch(actionBilling.delBillingInfo(param)),
        //获取开票公司列表
        getBillingInfo: (params) => dispatch(actionBilling.getBillingInfoList(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BillingOperationModel))