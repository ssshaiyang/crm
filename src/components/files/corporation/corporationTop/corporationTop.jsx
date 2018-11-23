 import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Cascader, DatePicker, Radio,Popconfirm } from 'antd'
import * as actionCreater from "../../../../actions/files/corporation/corporation.js"
import * as actionCreator from "../../../../actions/files/medicineName/medicineName.js";

const CheckboxGroup = Checkbox.Group;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

export class CorportionTop extends React.Component {
    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            ContactsModelVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            addBankInfoVisible: false,
            addContactors: [],
            addBankAccount: [],
            editBankInfoVisible: false,
            delBankInfoVisible: false,
            areaOptions:[],
            is_used:1,
            if_grab:1
        }
    }

    componentWillMount() {

    }

     componentWillReceiveProps(nextProps){
        if (nextProps.addContactCode == 1000 && this.props.addContactCode !== 1000) {
            let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getDeliverList(params)
                console.log("自动刷新")
        }
     }

    componentDidMount() {
        console.log(this.props.areaInfo);
        // var areaInfo = this.props.areaInfo;
        // areaInfo.map((item)=>{console.log(item)})
        // var areaOption = 
        // const areaOptions = [{

        // }]
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        let param = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.getDeliverList(param);
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
        this.props.getArea();
        this.props.getUserInfo(1);
        this.setState({
            addMechInfoVisible: true
        });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('aaaaaaa',values)
                let params = {
                    deliver_name: values.deliver_name,
                    if_used: this.state.is_used,
                    if_grab: this.state.if_grab,
                    deliver_province: this.state.area[0],
                    deliver_city: this.state.area[1],
                    deliver_district: this.state.area[2],
                    'deliver_address':values.deliver_address,
                    deliver_url: values.deliver_url,
                    deliver_contact: this.state.addContactors,
                    deliver_accounts: this.state.addBankAccount,
                    deliver_account: values.deliver_account,
                    deliver_password: values.deliver_password,
                    business_license_code: values.business_license_code,
                    business_license_expire_time: values['business_license_expire_time'] ? Date.parse(values['business_license_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    gmp_code: values.gmp_code,
                    gmp_expire_time: values['gmp_expire_time'] ? Date.parse(values['gmp_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    production_license: values.production_license,
                    production_expire_time: values['production_expire_time'] ? Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    proxy: values.proxy,
                    proxy_expire_time: values['proxy_expire_time'] ? Date.parse(values['proxy_expire_time'].format('YYYY-MM-DD')) / 1000 : '',
                    protocol_region: values.protocol_region,
                    deliver_remark: values.deliver_remark,
                    creator_name: this.props.userInfo.nickname
                }
                this.props.addDeliverInfo(params)
            }
            if (this.props.addContactCode == 1000) {
                let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getDeliverList(params)
             }
             let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getDeliverList(params)
            
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

    //编辑联系人
    handleSubmitEditContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            console.log(err)
            if (1) {
                let editContactInfo = {
                    key: this.state.contactClickedInfo.key,
                    deliver_contact_mobilephone:values.deliver_contact_mobilephone,
                    deliver_contact_name: values.deliver_contact_name,
                    deliver_contact_sex: values.deliver_contact_sex,
                    deliver_contact_department: values.deliver_contact_department,
                    deliver_contact_phone: values.deliver_contact_phone,
                    deliver_contact_position: values.deliver_contact_position,
                    deliver_contact_webchat: values.deliver_contact_webchat,
                    deliver_contact_qq: values.deliver_contact_qq,
                    deliver_contact_email: values.deliver_contact_email,
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
    updateManufacturerInfo(record) {
        console.log(record)
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

    delManufacturerInfo(key) {
        const addContactors = [...this.state.addContactors];
        this.setState({ 
            addContactors: addContactors.filter(item => item.key !== key) 
        });
        // this.setState({
        //     delManufacturerVisible: true
        // })
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

    //是否可用单选按钮选中值
    onChange(e) {
        this.setState({
            is_used: e.target.value,
        })
        console.log(this.state.is_used)
    }

    //时候抓取流向单选按钮
    onChangeFlow(e) {
        this.setState({
            if_grab: e.target.value,
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

    //联系人性别radio
    constactorSex(e) {
        this.setState({
            deliver_contact_sex: e.target.value
        })
    }

    //添加联系人确定按钮
    handleSubmitAddContactsInfo(e) {
        e.preventDefault();
        let addContactList = this.state.addContactors;
        this.props.form.validateFields((err, values) => {
            console.log(values);
            console.log(err);
            if (1==1) {
                let addContactors = {
                    key: values.deliver_contact_phone,
                    deliver_contact_telephone:values.deliver_contact_telephone,
                    deliver_contact_name: values.deliver_contact_name,
                    deliver_contact_phone: values.deliver_contact_phone,
                    deliver_contact_sex: this.state.addContactSex,
                    deliver_contact_department: values.deliver_contact_department,
                    deliver_contact_position: values.deliver_contact_position,
                    deliver_contact_qq: values.deliver_contact_qq,
                    deliver_contact_webchat: values.deliver_contact_webchat,
                    deliver_contact_email: values.deliver_contact_email,
                }
                addContactList.push(addContactors);
                this.setState({
                    addContactors: addContactList
                })
                console.log("添加了联系人")
            }
        });
    }

    //添加银行账户确认按钮
    handleSubmitAddBankInfo(e) {
        e.preventDefault();
        let addBankAccountList = this.state.addBankAccount;
        this.props.form.validateFields((err, values) => {
            if (1==1) {
                let data = {
                    key: values.deliver_bank_account,
                    deliver_account_user: values.deliver_account_user,
                    deliver_account_name: values.deliver_account_name,
                    deliver_bank_account: values.deliver_bank_account
                }
                addBankAccountList.push(data);
                this.setState({
                    addBankAccount: addBankAccountList
                })
            }
        });
    }

    //添加联系人性别radio按钮
    addContactSex(e) {
        this.setState({
            addContactSex: e.target.value
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

    //编辑银行账户
    handleSubmitEditBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (1) {
                let editBankInfo = {
                    key: this.state.clickedBankInfo.key,
                    deliver_bank_account: values.deliver_bank_account,
                    deliver_account_name: values.deliver_account_name,
                    deliver_account_user: values.deliver_account_user
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
    delBankInfo() {
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

        const formItemLayout4 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }

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

        return (
            <div>
                <Row>
                    <Col span={3}>
                        {/*<Dropdown overlay={menu} trigger={['click']}>
                            <Button className='mainButton'><Icon type="menu-unfold" /></Button>
                        </Dropdown>*/}
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
                    title="添加商业公司"
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
                                    {...formItemLayout2}
                                    label="商业公司名称"
                                >
                                    {getFieldDecorator('deliver_name', {
                                        rules:[{
                                            required:true
                                        }]
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11} style={{ marginTop: 10, marginBottom: 30 }}>
                                <span>是否启用：</span>
                                <RadioGroup onChange={this.onChange.bind(this)} defaultValue={this.state.is_used}>
                                    <Radio value={0} >是</Radio>
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
                                            <Input placeholder='请输入公司地址' />
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
                                        rules:[{
                                            required:true
                                        }]
                                })(
                                    <div>
                                        <Input placeholder='请输入公司链接' />
                                    </div>
                                    )}
                            </FormItem>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout4}
                                    label="登录账号"
                                >
                                    {getFieldDecorator('deliver_account', {
                                        rules:[{
                                            required:true
                                        }]
                                    })(
                                        <div>
                                            <Input placeholder="请输入你的登录账号" />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout4}
                                    label="登录密码"
                                >
                                    {getFieldDecorator('deliver_password', {
                                        rules:[{
                                            required:true
                                        }]
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
                                {getFieldDecorator('contact_information', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showContactsModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.state.addContactors ? this.state.addContactors : []} bordered={true} onRowClick={this.rowClickContactInfo.bind(this)}>
                                <Column
                                    title="姓名"
                                    dataIndex="deliver_contact_name"
                                    key="deliver_contact_name"
                                />
                                <Column
                                    title="手机"
                                    dataIndex="deliver_contact_telephone"
                                    key="deliver_contact_telephone"
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
                                    render={(text,record,index) => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                onClick={() =>this.updateManufacturerInfo(record)}><Icon type="edit" /></span>
                                            <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delManufacturerInfo(record.key)}>
                                               <Icon type="file-excel" />
                                            </Popconfirm>   
                                            
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
                                {getFieldDecorator('corporation_bank_id', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showCompBankModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('table_corporation', {

                                })(
                                    <Table dataSource={this.state.addBankAccount ? this.state.addBankAccount : []} bordered={true} onRowClick={this.rowClickBankInfo.bind(this)}>
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
                                    )}
                            </FormItem>
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
                                            rules:[{
                                                required:true
                                            }]
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
                                        {...formItemLayout2}
                                        label="营业执照过期日期"
                                    >
                                        {getFieldDecorator('business_license_expire_time', {
                                            rules:[{
                                                required:true
                                            }]
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
                                            rules:[{
                                                required:true
                                            }]
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
                                        {...formItemLayout2}
                                        label="GMP过期日期"
                                    >
                                        {getFieldDecorator('gmp_expire_time', {
                                            rules:[{
                                                required:true
                                            }]
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
                                            rules:[{
                                                required:true
                                            }]
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
                                        {...formItemLayout2}
                                        label="生产许可证有效期"
                                    >
                                        {getFieldDecorator('production_expire_time', {
                                            rules:[{
                                                required:true
                                            }]
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
                                            rules:[{
                                                required:true
                                            }]
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
                                        {...formItemLayout2}
                                        label="委托书有效期"
                                    >
                                        {getFieldDecorator('proxy_expire_time', {
                                            rules:[{
                                                required:true
                                            }]
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
                                            rules:[{
                                                required:true
                                            }]
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
                                    {getFieldDecorator('deliver_remark', {
                                        rules:[{
                                            required:true
                                        }]
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
                    <Form onSubmit={this.handleSubmitAddContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>

                        
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('deliver_contact_name', {
                                    rules:[{
                                            required:true
                                    }]
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="手机"
                            >
                                {getFieldDecorator('deliver_contact_telephone', {
                                    rules:[{
                                            required:true
                                    }]
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
                                    <Radio value={1}>男</Radio>
                                    <Radio value={0}>女</Radio>
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
                    <Form onSubmit={this.handleSubmitEditContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('deliver_contact_name', {

                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_name : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_phone : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        {/* 第二层 */}
                        <div className='botLine'>
                            <div style={{ marginBottom: 20 }}>
                                <span style={{ marginLeft: 120 }}>性别：</span>
                                <RadioGroup onChange={this.constactorSex.bind(this)}>
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_department : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_position : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_webchat : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_qq : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.deliver_contact_email : ''} style={{ width: 200 }} />
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
                    <Form onSubmit={this.handleSubmitAddBankInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('deliver_bank_account', {
                                    rules:[{
                                        required:true
                                    }]
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
                                    rules:[{
                                        required:true
                                    }]
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
                                    rules:[{
                                        required:true
                                    }]
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
                                        <Input defaultValue={this.state.clickedBankInfo ? this.state.clickedBankInfo.deliver_bank_account : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.clickedBankInfo ? this.state.clickedBankInfo.deliver_account_name : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.clickedBankInfo ? this.state.clickedBankInfo.deliver_account_user : ''} style={{ width: 200 }} />
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
    };
    console.log(state.corporationInfo.addDeliverInfoCode)
    // var areaInfo = areaList[0];
    //     areaInfo.map((item)=>{})
    return {
        //获取区域信息
        areaInfo: areaList[0],
        //商业公司联系人信息
        deliverConstactInfo: state.corporationInfo.deliverConstactInfo,
        //获取商业公司银行信息
        deliverBankInfo: state.corporationInfo.deliverBankInfo,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        //添加联系人成功code
        addContactCode: state.corporationInfo.addDeliverInfoCode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取所属地区
        getArea: () => dispatch(actionCreater.getAreaInfo()),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),
        //添加商业公司信息
        addDeliverInfo: (params) => dispatch(actionCreater.addDeliverInfo(params)),
        //获取商业公司列表
        getDeliverList: (params) => dispatch(actionCreater.getDeliverListInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CorportionTop))