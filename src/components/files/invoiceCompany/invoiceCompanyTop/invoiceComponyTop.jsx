import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Cascader, DatePicker, Radio } from 'antd'
import * as actionCreator from "../../../../actions/files/corporation/corporation.js"
import * as actionCreater from "../../../../actions/files/invoiceCompany/invoiceCompany.js"
import * as actionCreat from "../../../../actions/files/medicineName/medicineName.js"

const CheckboxGroup = Checkbox.Group;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="3">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
    </Menu>
);

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

//联系人table列表
const data_manufacturer = [{
    keyManu: 1,
    key: '100001',
    name: '张三',
    sex: '男',
    Department: '技术',
    duty: '技术人员',
    Iphone: '123445566',
    other_tel: '12313123',
    email: '12345@qq.com',
},
{
    keyManu: 2,
    key: '100002',
    name: '李四',
    sex: '女',
    Department: '技术',
    duty: '技术人员',
    Iphone: '123445566',
    other_tel: '12313123',
    email: '12345@qq.com',
},]

export class InvoiceComponyTop extends React.Component {
    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            ContactsModelVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            addBankInfoVisible: false,
            editBankInfoVisible: false,
            addContactors: [],
            addBankAccount: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
        let params={
            filter:value,
            page:-1,
            limit:10
        }
        this.props.getBillingInfo(params);
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }

    //添加药品信息对话框
    addMechInfo() {
        this.props.getArea();
        this.props.getUserInfo(1);
        this.setState({
            addMechInfoVisible: true
        });
    }

    /**
     * 计量单位select方法
     */
    handleChangeMedicineName(value) {
        //console.log(`selected ${value}`);
    }

    //中标类型方法，其中value为select选中的值
    handleChangeType(value) {
        //console.log(`selected ${value}`);
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('aaaaaaa',values)
                let params = {
                    billing_name: values.billing_name,
                    billing_province: this.state.areaValue[0],
                    billing_city: this.state.areaValue[1],
                    billing_district: this.state.areaValue[2],
                    billing_contact: this.state.addContactors,
                    billing_account: this.state.addBankAccount,
                    business_license_code: values.business_license_code,
                    business_license_expire_time: values['business_license_expire_time'] ? Date.parse(values['business_license_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    gmp_code: values.gmp_code,
                    gmp_expire_time: values['gmp_expire_time'] ? Date.parse(values['gmp_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    production_license: values.production_license,
                    production_expire_time: values['production_expire_time'] ? Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    proxy: values.proxy,
                    proxy_expire_time: values['proxy_expire_time'] ? Date.parse(values['proxy_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    protocol_region: values.protocol_region,
                    billing_remark: values.billing_remark
                }
                this.props.addBilling(params)
                console.log(params)
            }
        });
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

    //获取编辑联系人选中的值
    rowClickContactInfo(record) {
        this.setState({
            contactClickedInfo: record
        })
    }

    handleSubmitEditContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let editContactInfo = {
                    key: this.state.contactClickedInfo.key,
                    billing_contact_name: values.billing_contact_name,
                    billing_contact_sex: values.billing_contact_sex,
                    billing_contact_department: values.billing_contact_department,
                    billing_contact_phone: values.billing_contact_phone,
                    billing_contact_position: values.billing_contact_position,
                    billing_contact_webchat: values.billing_contact_webchat,
                    billing_contact_qq: values.billing_contact_qq,
                    billing_contact_email: values.billing_contact_email,
                }
                let contactorInfo = this.state.addContactors;
                for (let i = 0; i < contactorInfo.length; i++) {
                    if (contactorInfo[i].key == editContactInfo.key) {
                        contactorInfo[i] = editContactInfo
                    }
                }
                this.setState({
                    addContactors: contactorInfo,
                })
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
     * 删除用户信息
     */

    delManufacturerInfo() {
        this.setState({
            delManufacturerVisible: true
        })
    }

    handleOkDelManufacturerInfo() {
        let newContactorList = this.state.addContactors;
        for (let i = 0; i < newContactorList.length; i++) {
            if (newContactorList[i].key == this.state.contactClickedInfo.key) {
                newContactorList.splice(i, 1);
            }
        }
        this.setState({
            delManufacturerVisible: false,
            addContactors: newContactorList
        })
    }

    handleCancelDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
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

    //获取级联区域数据
    getAreaValue(value) {
        this.setState({
            areaValue: value
        })
    }

    //添加联系人性别radio值
    addContactSex(e) {
        contactSexInfo: e.target.value
    }

    //添加联系人点击确定值
    handleSubmitContactsInfo(e) {
        e.preventDefault();
        let addContactList = this.state.addContactors;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let addContactors = {
                    key: values.deliver_contact_phone,
                    billing_contact_name: values.billing_contact_name,
                    billing_contact_phone: values.billing_contact_phone,
                    billing_contact_sex: values.billing_contact_sex,
                    billing_contact_department: values.billing_contact_department,
                    billing_contact_position: values.billing_contact_position,
                    billing_contact_qq: values.billing_contact_qq,
                    billing_contact_webchat: values.billing_contact_webchat,
                    billing_contact_email: values.billing_contact_email,
                }
                addContactList.push(addContactors);
                this.setState({
                    addContactors: addContactList
                })
            }
        });
    }

    //获取选中银行账号信息
    rowClickBankInfo(record) {
        this.setState({
            clickedBankInfo: record
        })
    }

    //点击添加银行账户确定按钮
    handleSubmitAddBankAccount(e) {
        e.preventDefault();
        let addBankAccountList = this.state.addBankAccount;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    key: values.deliver_bank_account,
                    billing_account_user: values.billing_account_user,
                    billing_account_name: values.billing_account_name,
                    billing_bank_account: values.billing_bank_account
                }
                addBankAccountList.push(data);
                this.setState({
                    addBankAccount: addBankAccountList
                })
            }
        });
    }

    /**
     * 编辑银行信息
     */
    editBankInfo() {
        this.setState({
            editBankInfoVisible: true
        })
    }

    handleOkEditBankInfo() {
        this.setState({
            editBankInfoVisible: false
        })
    }

    handleCancelEditBankInfo() {
        this.setState({
            editBankInfoVisible: false
        })
    }

    //编辑银行账户确定按钮
    handleSubmitEditBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let editBankInfo = {
                    key: this.state.clickedBankInfo.key,
                    billing_bank_account: values.billing_bank_account,
                    billing_account_name: values.billing_account_name,
                    billing_account_user: values.billing_account_user
                }
                let bankAccountInfo = this.state.addBankAccount;
                for (let i = 0; i < bankAccountInfo.length; i++) {
                    if (bankAccountInfo[i].key == editBankInfo.key) {
                        bankAccountInfo[i] = editBankInfo
                    }
                }
                this.setState({
                    addBankAccount: bankAccountInfo,
                })
            }
        });
    }

    /**
     * 删除银行信息方法组
     */
    delBankAccount() {
        this.setState({
            delBankInfoVisible: true
        })
    }

    handleOkDelBankInfo() {
        let newBankInfoList = this.state.addBankAccount;
        for (let i = 0; i < newBankInfoList.length; i++) {
            if (newBankInfoList[i].key == this.state.clickedBankInfo.key) {
                newBankInfoList.splice(i, 1);
            }
        }
        this.setState({
            delBankInfoVisible: false,
            addBankAccount: newBankInfoList
        })
    }

    handleCancelDelBankInfo() {
        this.setState({
            delBankInfoVisible: false
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
                sm: { span: 10 },
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

        const formItemLayout2 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }

        return (
            <div>
                <Row>
                    <Col span={3}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button className='mainButton'><Icon type="menu-unfold" /></Button>
                        </Dropdown>
                    </Col>
                    <Col span={9}></Col>
                    <Col span={8}>
                        <Search
                            placeholder="输入客户ID/姓名/联系方式"
                            onSearch={this.getSearchValue.bind(this)}
                        />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <Button className='mainButton' onClick={this.addMechInfo.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 16 }} /></Button>
                    </Col>
                </Row>
                <Modal
                    title="添加公司信息"
                    width='720px'
                    visible={this.state.addMechInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        {/* 第一层 */}
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开票公司名称"
                                >
                                    {getFieldDecorator('billing_name', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="公司地址"
                                >
                                    {getFieldDecorator('billing_address', {

                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout2}
                                    label="所属地区"
                                >
                                    <div>
                                        <Cascader options={this.props.areaInfo[0]} onChange={this.getAreaValue.bind(this)} placeholder="请选择所属地区" style={{ width: 300 }} />
                                    </div>
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                        </Row>
                        <br />
                        {/* 第二层 */}
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
                            <Table dataSource={this.state.addContactors} bordered={true} onRowClick={this.rowClickContactInfo.bind(this)}>
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
                                    dataIndex="billing_contact_webchat"
                                    key="billing_contact_webchat"
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
                            <Table dataSource={this.state.addBankAccount} bordered={true} onRowClick={this.rowClickBankInfo.bind(this)}>
                                <Column
                                    title="开户行"
                                    dataIndex="billing_account_name"
                                    key="billing_account_name"
                                />
                                <Column
                                    title="开户名"
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
                                    key="operation"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }} onClick={this.editBankInfo.bind(this)}><Icon type="edit" /></span>
                                            <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delBankAccount.bind(this)}><Icon type="delete" /></span>
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
                                                <Input style={{ width: 200 }} placeholder='' />
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
                                                <Input style={{ width: 200 }} placeholder='' />
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
                                                <Input style={{ width: 200 }} placeholder='' />
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
                                                <Input style={{ width: 200 }} placeholder='' />
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
                                                <Input style={{ width: 200 }} placeholder='' />
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
                                                <p>{this.props.userInfo.nickname}</p>
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
                    {/* <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getContactsInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    /> */}
                    <Form onSubmit={this.handleSubmitEditContactsInfo.bind(this)}>
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
                            onClick={this.handleOkManufacturerInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelManufacturerInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>
                <Modal
                    title='删除联系人信息'
                    visible={this.state.delManufacturerVisible}
                    onOk={this.handleOkDelManufacturerInfo.bind(this)}
                    onCancel={this.handleCancelDelManufacturerInfo.bind(this)}
                >
                    <div style={{ marginLeft: 150 }}>你确定要删除此联系人信息吗？</div>
                </Modal>
                <Modal
                    title='添加银行账户'
                    visible={this.state.addBankInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmitAddBankAccount.bind(this)}>
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
                    title='修改银行账户'
                    visible={this.state.editBankInfoVisible}
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
                    title='删除银行账户信息'
                    visible={this.state.delBankInfoVisible}
                    onOk={this.handleOkDelBankInfo.bind(this)}
                    onCancel={this.handleCancelDelBankInfo.bind(this)}
                >
                    <div>你确定要删除银行账户信息？</div>
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
        getArea: () => dispatch(actionCreator.getAreaInfo()),
        //添加开票公司信息
        addBilling: (params) => dispatch(actionCreater.addBillingInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreat.getUser(param)),
        //获取开票公司列表
        getBillingInfo: (params) => dispatch(actionCreater.getBillingInfoList(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(InvoiceComponyTop))