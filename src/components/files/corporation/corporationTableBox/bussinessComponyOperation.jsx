import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, DatePicker, Radio } from 'antd'
import * as actionCreater from "../../../../actions/files/corporation/corporation.js"
import * as actionCreator from "../../../../actions/files/medicineName/medicineName.js";

const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const RadioGroup = Radio.Group;
const Search = Input.Search;

export class BussinessComponyOperation extends React.Component {

    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            ContactsModelVisible: false,
            delAgentVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            deliver_contact_sex: 1,
            editBankInfoVisible: false,
            delBankInfoVisible: false
        }
    }

    componentWillMount() {
        this.setState({
            is_used: this.props.data.if_used == '是' ? 0 : 1,
            if_grab: this.props.data.if_grab == '是' ? 1 : 0
        })
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
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

    //点击搜索获取生产厂家输入信息
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }

    //添加药品信息对话框
    addMechInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getArea();
        this.props.getDeliverConstactInfo(this.props.data.deliver_id);
        this.props.getDeliverBankInfo(this.props.data.deliver_id);
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
                let params = {
                    //当form表单没有修改时，运用validateFields返回的用undefined表示
                    deliver_name: values.deliver_name ? values.deliver_name : undefined,
                    if_used: this.state.is_used_new ? this.state.is_used_new : undefined,
                    if_grab: this.state.if_grab_new ? this.state.if_grab_new : undefined,
                    deliver_province: this.state.area ? this.state.area[0] : undefined,
                    deliver_city: this.state.area ? this.state.area[1] : undefined,
                    deliver_district: this.state.area ? this.state.area[2] : undefined,
                    deliver_url: values.deliver_url ? values.deliver_url : undefined,
                    deliver_contact: this.props.deliverConstactInfo ? this.props.deliverConstactInfo : undefined,
                    deliver_accounts: this.props.deliverBankInfo ? this.props.deliverBankInfo : undefined,
                    deliver_account: values.deliver_account ? values.deliver_account : undefined,
                    deliver_password: values.deliver_password ? values.deliver_password : undefined,
                    business_license_code: values.business_license_code ? values.business_license_code : undefined,
                    business_license_expire_time: Date.parse(values['business_license_expire_time'].format('YYYY-MM-DD')) / 1000 ? Date.parse(values['business_license_expire_time'].format('YYYY-MM-DD')) / 1000 : undefined,
                    gmp_code: values.gmp_code ? values.gmp_code : undefined,
                    gmp_expire_time: Date.parse(values['gmp_expire_time'].format('YYYY-MM-DD')) / 1000 ? Date.parse(values['gmp_expire_time'].format('YYYY-MM-DD')) / 1000 : undefined,
                    production_license: values.production_license ? values.production_license : '',
                    production_expire_time: Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000 ? Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000 : undefined,
                    proxy: values.proxy ? values.proxy : undefined,
                    proxy_expire_time: Date.parse(values['proxy_expire_time'].format('YYYY-MM-DD')) / 1000 ? Date.parse(values['proxy_expire_time'].format('YYYY-MM-DD')) / 1000 : undefined,
                    protocol_region: values.protocol_region ? values.protocol_region : undefined,
                    deliver_remark: values.deliver_remark ? values.deliver_remark : undefined
                }
                let editParams = {
                    id: this.props.data.deliver_id,
                    value: {
                        deliver_name: params.deliver_name == undefined ? this.props.data.deliver_name : params.deliver_name,
                        if_used: params.if_used == undefined ? this.state.is_used : params.if_used,
                        if_grab: params.if_grab == undefined ? this.state.if_grab : params.if_used,
                        deliver_province: params.deliver_province,
                        deliver_city: params.deliver_city,
                        deliver_district: params.deliver_district,
                        deliver_url: params.deliver_url == undefined ? this.props.data.deliver_url : params.deliver_url,
                        deliver_contact: params.deliver_contact == undefined ? this.props.deliverConstactInfo : params.deliver_contact,
                        deliver_accounts: params.deliver_accounts == undefined ? this.props.deliverBankInfo : params.deliver_accounts,
                        deliver_account: params.deliver_account == undefined ? this.props.data.deliver_account : params.deliver_account,
                        deliver_password: params.deliver_password == undefined ? this.props.data.deliver_password : params.deliver_password,
                        business_license_code: params.business_license_code == undefined ? this.props.data.business_license_code : params.business_license_code,
                        business_license_expire_time: params.business_license_expire_time == undefined ? Date.parse(this.props.data.business_license_expire_time.format('YYYY-MM-DD')) / 1000 : params.business_license_expire_time,
                        gmp_code: params.gmp_code == undefined ? this.props.data.gmp_code : params.gmp_code,
                        gmp_expire_time: params.gmp_expire_time == undefined ? Date.parse(this.props.data.gmp_expire_time.format('YYYY-MM-DD')) / 1000 : params.gmp_expire_time,
                        production_license: params.production_license == undefined ? this.props.data.production_license : params.production_license,
                        production_expire_time: params.production_expire_time == undefined ? Date.parse(this.props.data.production_expire_time.format('YYYY-MM-DD')) / 1000 : params.production_expire_time,
                        proxy: params.proxy == undefined ? this.props.data.proxy : params.proxy,
                        proxy_expire_time: params.proxy_expire_time == undefined ? Date.parse(this.props.data.proxy_expire_time.format('YYYY-MM-DD')) / 1000 : params.proxy_expire_time,
                        protocol_region: params.protocol_region == undefined ? this.props.data.protocol_region : params.protocol_region,
                        deliver_remark: params.deliver_remark == undefined ? this.props.data.deliver_remark : params.deliver_remark,
                        creator_name: this.props.userInfo.username
                    }
                }
                this.props.editDeliverInfo(editParams);
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
        this.props.delConstactInfo(this.state.contactClickedInfo.deliver_contact_id);
        this.setState({
            delManufacturerVisible: false
        }, () => {
            this.props.getDeliverConstactInfo(this.props.data.deliver_id);
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
    addBankInfo() {
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
     * 展示编辑商业公司信息
     */

    showDel() {
        this.setState({
            delAgentVisible: true
        })
    }

    handleOkDelAgent() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.delDeliverInfo(this.props.data.deliver_id);
        this.setState({
            delAgentVisible: false
        }, () => {
            this.props.getDeliverList(param);
        })
    }

    handleCancelDelAgent() {
        this.setState({
            agentModelVisible: false
        })
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let editContactInfo = {
                    deliver_contact_name: values.deliver_contact_name !== undefined ? values.deliver_contact_name : '',
                    deliver_contact_sex: values.deliver_contact_sex !== undefined ? values.deliver_contact_sex : '',
                    deliver_contact_department: values.deliver_contact_department !== undefined ? values.deliver_contact_department : '',
                    deliver_contact_phone: values.deliver_contact_phone !== undefined ? values.deliver_contact_phone : '',
                    deliver_contact_position: values.deliver_contact_position !== undefined ? values.deliver_contact_position : '',
                    deliver_contact_webchat: values.deliver_contact_webchat !== undefined ? values.deliver_contact_webchat : '',
                    deliver_contact_qq: values.deliver_contact_qq !== undefined ? values.deliver_contact_qq : '',
                    deliver_contact_email: values.deliver_contact_email !== undefined ? values.deliver_contact_email : ''
                }
                editContactInfo.deliver_contact_name !== this.state.contactClickedInfo.deliver_contact_name ? editContactInfo.deliver_contact_name : this.state.contactClickedInfo.deliver_contact_name;
                editContactInfo.deliver_contact_sex !== this.state.contactClickedInfo.deliver_contact_sex ? editContactInfo.deliver_contact_sex : this.state.contactClickedInfo.deliver_contact_sex;
                editContactInfo.deliver_contact_department !== this.state.contactClickedInfo.deliver_contact_department ? editContactInfo.deliver_contact_department : this.state.contactClickedInfo.deliver_contact_department;
                editContactInfo.deliver_contact_phone !== this.state.contactClickedInfo.deliver_contact_phone ? editContactInfo.deliver_contact_phone : this.state.contactClickedInfo.deliver_contact_phone;
                editContactInfo.deliver_contact_position !== this.state.contactClickedInfo.deliver_contact_position ? editContactInfo.deliver_contact_position : this.state.contactClickedInfo.deliver_contact_position;
                editContactInfo.deliver_contact_webchat !== this.state.contactClickedInfo.deliver_contact_webchat ? editContactInfo.deliver_contact_webchat : this.state.contactClickedInfo.deliver_contact_webchat;
                editContactInfo.deliver_contact_qq !== this.state.contactClickedInfo.deliver_contact_qq ? editContactInfo.deliver_contact_qq : this.state.contactClickedInfo.deliver_contact_qq;
                editContactInfo.deliver_contact_email !== this.state.contactClickedInfo.deliver_contact_email ? editContactInfo.deliver_contact_email : this.state.contactClickedInfo.deliver_contact_email;
                for (let i = 0; i < this.props.deliverConstactInfo.length; i++) {
                    if (this.props.deliverConstactInfo[i].deliver_contact_id == this.state.contactClickedInfo.deliver_contact_id) {
                        this.props.deliverConstactInfo[i] = editContactInfo;
                    }
                }
            }
        });
    }

    handleSubmitAddContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    value: {
                        deliver_contact_name: values.deliver_contact_name,
                        deliver_contact_phone: values.deliver_contact_phone,
                        deliver_contact_sex: this.state.addContactSex,
                        deliver_contact_department: values.deliver_contact_department,
                        deliver_contact_position: values.deliver_contact_position,
                        deliver_contact_qq: values.deliver_contact_qq,
                        deliver_contact_webchat: values.deliver_contact_webchat,
                        deliver_contact_email: values.deliver_contact_email,
                    },
                    id: this.props.data.deliver_id
                }
                this.props.addContactsInfo(data);
                if (values) {
                    this.props.deliverConstactInfo.push(data.value)
                }
            }
        });
    }

    handleSubmitAddBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    value: {
                        deliver_account_user: values.deliver_account_user,
                        deliver_account_name: values.deliver_account_name,
                        deliver_bank_account: values.deliver_bank_account
                    },
                    id: this.props.data.deliver_id
                }
                this.props.addDeliverBankInfo(data);
                if (values) {
                    this.props.deliverBankInfo.push(data.value)
                }
            }
        });
    }

    //编辑银行账户
    handleSubmitEditBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let editbankInfo = {
                    deliver_bank_account: values.deliver_bank_account ? values.deliver_bank_account : '',
                    deliver_account_name: values.deliver_account_name ? values.deliver_account_name : '',
                    deliver_account_user: values.deliver_account_user ? values.deliver_account_user : ''
                }
                editbankInfo.deliver_bank_account ? editbankInfo.deliver_bank_account : this.state.clickedBankInfo.deliver_bank_account;
                editbankInfo.deliver_account_name ? editbankInfo.deliver_bank_account : this.state.clickedBankInfo.deliver_account_name;
                editbankInfo.deliver_account_user ? editbankInfo.deliver_bank_account : this.state.clickedBankInfo.deliver_account_user;
                for (let i = 0; i < this.props.deliverBankInfo.length; i++) {
                    if (this.props.deliverBankInfo[i].deliver_account_id == this.state.clickedBankInfo.deliver_account_id) {
                        this.props.deliverBankInfo[i] = editbankInfo;
                    }
                }
            }
        });
    }

    //是否可用单选按钮选中值
    onChange(e) {
        this.setState({
            is_used_new: e.target.value,
        })
    }

    //时候抓取流向单选按钮
    onChangeFlow(e) {
        this.setState({
            if_grab_new: e.target.value,
        })
    }

    //添加联系人性别radio按钮
    addContactSex(e) {
        this.setState({
            addContactSex: e.target.value
        })
    }

    //联系人性别radio
    constactorSex(e) {
        this.setState({
            deliver_contact_sex: e.target.value
        })
    }

    //级联选择框选择的值
    selectArea(value) {
        this.setState({
            area: value
        })
    }

    //获取编辑联系人选中的值
    rowClickContactInfo(record) {
        this.setState({
            contactClickedInfo: record
        })
    }

    //获取选中银行账号信息
    rowClickBankInfo(record) {
        this.setState({
            clickedBankInfo: record
        })
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

    /**
     * 删除银行信息方法组
     */
    delBankInfo() {
        this.setState({
            delBankInfoVisible: true
        })
    }

    handleOkDelBankInfo() {
        this.props.delClickBankInfo(this.state.clickedBankInfo.deliver_account_id)
        this.setState({
            delBankInfoVisible: false
        }, () => {
            this.props.getDeliverConstactInfo(this.props.data.deliver_id);
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
                sm: { span: 12 },
            },
        };
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }
        const formItemLayout2 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }
        const formItemLayout3 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }

        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon style={{ fontSize: 18 }} type="edit" /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon style={{ fontSize: 18 }} type="delete" /></span>

                <Modal
                    title="编辑商业公司"
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
                                    label="商业公司名称"
                                >
                                    {getFieldDecorator('deliver_name', {

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.deliver_name} style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11} style={{ marginTop: 10, marginBottom: 30 }}>
                                <span>是否启用：</span>
                                <RadioGroup onChange={this.onChange.bind(this)} defaultValue={this.state.is_used}>
                                    <Radio value={0}>是</Radio>
                                    <Radio value={1}>否</Radio>
                                </RadioGroup>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout2}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('deliver_area', {

                                    })(
                                        <div>
                                            <Cascader options={this.props.areaInfo} onChange={this.selectArea.bind(this)} placeholder="请选择所属地区" />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                            <Col span={24}>
                                <FormItem
                                    label="公司地址"
                                    {...formItemLayout3}
                                >
                                    {getFieldDecorator('deliver_address', {
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.deliver_address} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        {/* 第二层 */}
                        <Row className='botLine'>
                            <div style={{ marginBottom: 10 }}>
                                <span style={{ marginLeft: 20 }}>是否抓取流向：</span>
                                <RadioGroup defaultValue={this.state.if_grab} onChange={this.onChangeFlow.bind(this)} style={{ marginBottom: 20, marginLeft: 40 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={0}>否</Radio>
                                </RadioGroup>
                            </div>
                            <FormItem
                                {...formItemLayout1}
                                label="商业公司链接"
                            >
                                {getFieldDecorator('deliver_url', {

                                })(
                                    <div>
                                        <Input defaultValue={this.props.data.deliver_url} />
                                    </div>
                                    )}
                            </FormItem>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="登录账号"
                                >
                                    {getFieldDecorator('deliver_account', {

                                    })(
                                        <div>
                                            <Input placeholder='请输入你的登录账号' />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="登录密码"
                                >
                                    {getFieldDecorator('deliver_password', {

                                    })(
                                        <div>
                                            <Input placeholder='请输入登录密码' />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                        </Row>
                        <br />
                        {/* 第三层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="联系人信息"
                            >
                                {getFieldDecorator('deliver_contact', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showContactsModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.props.deliverConstactInfo} bordered={true} onRowClick={this.rowClickContactInfo.bind(this)}>
                                <Column
                                    title="姓名"
                                    dataIndex="deliver_contact_name"
                                    key="deliver_contact_name"
                                />
                                <Column
                                    title="性别"
                                    dataIndex="deliver_contact_sex"
                                    key="deliver_contact_sex"
                                />
                                <Column
                                    title="部门"
                                    dataIndex="deliver_contact_department"
                                    key="deliver_contact_department"
                                />
                                <Column
                                    title="职务"
                                    dataIndex="deliver_contact_position"
                                    key="deliver_contact_position"
                                />
                                <Column
                                    title="电话"
                                    dataIndex="deliver_contact_phone"
                                    key="deliver_contact_phone"
                                />
                                <Column
                                    title="QQ"
                                    dataIndex="deliver_contact_qq"
                                    key="deliver_contact_qq"
                                />
                                <Column
                                    title="微信"
                                    dataIndex="deliver_contact_webchat"
                                    key="deliver_contact_webchat"
                                />
                                <Column
                                    title="邮箱"
                                    dataIndex="deliver_contact_email"
                                    key="deliver_contact_email"
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
                                {getFieldDecorator('deliver_account', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.addBankInfo.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.props.deliverBankInfo} bordered={true} onRowClick={this.rowClickBankInfo.bind(this)}>
                                <Column
                                    title="开户行"
                                    dataIndex="deliver_account_name"
                                    key="deliver_account_name"
                                />
                                <Column
                                    title="开户名"
                                    dataIndex="deliver_account_user"
                                    key="deliver_account_user"
                                />
                                <Column
                                    title="账号"
                                    dataIndex="deliver_bank_account"
                                    key="deliver_bank_account"
                                />
                                <Column
                                    title="操作"
                                    key="operation"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }} onClick={this.editBankInfo.bind(this)}><Icon type="edit" /></span>
                                            <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delBankInfo.bind(this)}><Icon type="delete" /></span>
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
                                    {getFieldDecorator('deliver_remark', {

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
                    {/* <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getContactsInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    /> */}
                    <Form onSubmit={this.handleSubmitAddContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('deliver_contact_name', {

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
                                {getFieldDecorator('deliver_contact_phone', {

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
                            <div style={{ marginBottom: 20 }}>
                                <span style={{ marginLeft: 120 }}>性别:</span>
                                <RadioGroup onChange={this.addContactSex.bind(this)} style={{ marginBottom: 20, marginLeft: 40 }}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={0}>否</Radio>
                                </RadioGroup>
                            </div>
                            <FormItem
                                {...formItemLayout}
                                label="部门"
                            >
                                {getFieldDecorator('deliver_contact_department', {
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
                                {getFieldDecorator('deliver_contact_position', {
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
                                {getFieldDecorator('deliver_contact_webchat', {
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
                                {getFieldDecorator('deliver_contact_qq', {
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
                                {getFieldDecorator('deliver_contact_email', {
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
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('deliver_contact_name', {

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
                                {getFieldDecorator('deliver_contact_phone', {

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
                            <div style={{ marginBottom: 20 }}>
                                <span style={{ marginLeft: 120 }}>性别：</span>
                                <RadioGroup defaultValue={this.state.deliver_contact_sex} onChange={this.constactorSex.bind(this)}>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGroup>
                            </div>
                            <FormItem
                                {...formItemLayout}
                                label="部门"
                            >
                                {getFieldDecorator('deliver_contact_department', {
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
                                {getFieldDecorator('deliver_contact_position', {
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
                                {getFieldDecorator('deliver_contact_webchat', {
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
                                {getFieldDecorator('deliver_contact_qq', {
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
                                {getFieldDecorator('deliver_contact_email', {
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
                    <div>你确定要删除此联系人信息吗？</div>
                </Modal>

                <Modal
                    title='删除银行账户信息'
                    visible={this.state.delBankInfoVisible}
                    onOk={this.handleOkDelBankInfo.bind(this)}
                    onCancel={this.handleCancelDelBankInfo.bind(this)}
                >
                    <div>你确定要删除银行账户信息？</div>
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
                                {getFieldDecorator('deliver_bank_account', {

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
                                {getFieldDecorator('deliver_account_name', {

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
                                {getFieldDecorator('deliver_account_user', {

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
                                {getFieldDecorator('deliver_bank_account', {

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
                                {getFieldDecorator('deliver_account_name', {

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
                                {getFieldDecorator('deliver_account_user', {

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
                    title="删除商业公司信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此人的信息吗?</span>
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
        //商业公司联系人信息
        deliverConstactInfo: state.corporationInfo.deliverConstactInfo,
        //获取商业公司银行信息
        deliverBankInfo: state.corporationInfo.deliverBankInfo,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        //添加联系人成功code
        addContactCode: state.corporationInfo.addContactCode
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取所属地区
        getArea: () => dispatch(actionCreater.getAreaInfo()),
        //商业公司联系人信息
        getDeliverConstactInfo: (param) => dispatch(actionCreater.getDeliverConstactInfoList(param)),
        //删除联系人信息
        delConstactInfo: (param) => dispatch(actionCreater.delConstactInfoList(param)),
        //获取商业公司银行信息
        getDeliverBankInfo: (param) => dispatch(actionCreater.getDeliverBankInfoList(param)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),
        //删除商业银行信息
        delClickBankInfo: (param) => dispatch(actionCreater.delBankInfoList(param)),
        //添加商业联系人
        addContactsInfo: (param) => dispatch(actionCreater.addContactsInfoList(param)),
        //添加银行信息
        addDeliverBankInfo: (params) => dispatch(actionCreater.addDeliverBankInfoList(params)),
        //编辑商业公司信息
        editDeliverInfo: (params) => dispatch(actionCreater.editDeliverInfoList(params)),
        //删除商业公司信息
        delDeliverInfo: (id) => dispatch(actionCreater.delDeliverInfoList(id)),
        //获取商业公司列表
        getDeliverList: (params) => dispatch(actionCreater.getDeliverListInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BussinessComponyOperation))