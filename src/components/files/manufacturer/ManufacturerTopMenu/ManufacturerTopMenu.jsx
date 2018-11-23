import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Cascader, DatePicker, Radio  } from 'antd'
// import * as actionCreator from "../../../../actions/files/manufacturer/manufacturer.js";
import * as actionCreater from "../../../../actions/files/medicineName/medicineName.js";
const CheckboxGroup = Checkbox.Group;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
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

const options = [{
    key:'11',
    value: '00',
    label: '浙江省',
    children: [{
        key:'00',
        value: '00',
        label: '杭州市',
        children: [{
            key:'00',
            value: '00',
            label: '西湖区',
        }],
    }],
}, {
    key:'01',
    value: '01',
    label: '江苏省',
    children: [{
        key:'01',
        value: '01',
        label: '南京市',
        children: [{
            key:'01',
            value: '01',
            label: '玄武区',
        }],
    }],
}];

function onChange(e) {
    console.log(e);
    
}

//生产厂家列表
const data = [{
    keyId: 1,
    key: '100001',
    name: '胞磷胆碱钠胶囊',
    format: '0.1g*6袋'
}, {
    keyId: 2,
    key: '100002',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    keyId: 3,
    key: '100003',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    keyId: 4,
    key: '100004',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}];

//联系人table列表
const data_manufacturer = [{
    key: '100001',
    name: '张三',
    sex: '男',
    Department: '技术',
    duty: '技术人员',
    Iphone: '123445566',
    other_tel: '12313123',
    email: '12345@qq.com',
}]

//开户行信息
const data_manufacturer_bankInfo = [{
    key: 1,
    deposit_bank: '中国银行杭州支行',
    deposit_name: '张三',
    bank_type: '国企',
    account_number: '6666666666',
},
{
    key: 2,
    deposit_bank: '中国农业杭州支行',
    deposit_name: '李四',
    bank_type: '国企',
    account_number: '7777777777',
},]

export class ManufacturerTopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addMechInfoVisible: false,
            data: data,
            ContactsModelVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            addBankInfoVisible: false,
            addContactors:[],
            addBankAccount:[],
            data_manufacturer,
            manufacturer_province:'11',
            manufacturer_city:'00',
            manufacturer_district:'00',
            sexValue:1
        }
    }

    componentWillMount() {
        this.props.getUserInfo(1);//获取创建人
        console.log(this.props.userInfo)
        // if (this.props.userInfo.length==0) {
        //     userInfo = []
        // }
    }

    componentDidMount() {
         console.log(this.props.userInfo)
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    /**
     * 添加药品信息对话框
     */
    addMechInfo() {
        let localDate = new Date().toLocaleDateString();
        this.setState({
            addMechInfoVisible: true,
            localDate:localDate
        });
        console.log(this.state.addMechInfoVisible)
    }
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

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name
        })
    }
    addressOnChange(e) {
        console.log(e);
        console.log((e[0]+e[1]+e[2]))
        this.setState({
            manufacturer_province:e[0],
            manufacturer_city:e[1],
            manufacturer_district:e[2]
        })    
    }
    //选择性别
    sexOnChange(e){
        this.setState({
            sexValue: e.target.value,
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
        console.log("aaaaa")
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(err)
            if (1==1) {
                let params = {
                    "manufacturer_contact":[{
                        "manufacturer_contact_qq":fieldsValue.manufacturer_contact_qq,
                        "manufacturer_contact_department":fieldsValue.manufacturer_contact_department,
                        "manufacturer_contact_position":fieldsValue.manufacturer_contact_position,
                        "manufacturer_contact_email":fieldsValue.manufacturer_contact_email,
                        "manufacturer_contact_name":fieldsValue.manufacturer_contact_name,
                        "manufacturer_contact_sex":fieldsValue.manufacturer_contact_sex,
                        "manufacturer_contact_phone":fieldsValue.manufacturer_contact_phone,
                        "manufacturer_contact_webchat":fieldsValue.manufacturer_contact_webchat,
                        }],
                    "manufacturer_account":[{
                        "manufacturer_bank_account":fieldsValue.manufacturer_bank_account,
                        "manufacturer_account_name":fieldsValue.manufacturer_account_name,
                        "manufacturer_account_user":fieldsValue.manufacturer_account_user
                        }],
                    "business_license_code":fieldsValue.business_license_code,
                    "business_license_expire_time":fieldsValue.business_license_expire_time,
                    "contact_information":fieldsValue.contact_information,
                    "corporate_bank_account":fieldsValue.corporate_bank_account,
                    "creator_name":this.props.userInfo,
                    "create_time":fieldsValue.create_time,
                    "gmp_code":fieldsValue.gmp_code,
                    "gmp_expire_time":fieldsValue.gmp_expire_time,
                    "manufacturerId":fieldsValue.manufacturerId,
                    "manufacturer_address":fieldsValue.manufacturer_address,
                    "manufacturer_province":this.state.manufacturer_province,
                    "manufacturer_city":this.state.manufacturer_city,
                    "manufacturer_district":this.state.manufacturer_district,
                    "manufacturer_name":fieldsValue.manufacturer_name,
                    "manufacturer_remark":fieldsValue.manufacturer_remark,
                    "production_expire_time":fieldsValue.production_expire_time,
                    "production_license":fieldsValue.production_license,
                    "protocol_region":fieldsValue.protocol_region,
                    "proxy":fieldsValue.proxy,
                    "proxy_expire_time":fieldsValue.proxy_expire_time,

                };
                this.props.addManufacturerInfo(params);
                console.log(params);    
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

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    //添加联系人
    handleSubmitAddContactsInfo(e) {
        e.preventDefault();
        let addContactList = this.state.addContactors;
        this.props.form.validateFields((err, values) => {
            console.log(values);
            console.log(err);
            if (1==1) {
                let addContactors = {
                    key: values.deliver_contact_phone,
                    manufacturer_contact_name: values.manufacturer_contact_name,
                    manufacturer_contact_phone: values.manufacturer_contact_phone,
                    manufacturer_contact_sex: this.state.sexValue,
                    manufacturer_contact_department: values.manufacturer_contact_department,
                    manufacturer_contact_position: values.manufacturer_contact_position,
                    manufacturer_contact_qq: values.manufacturer_contact_qq,
                    manufacturer_contact_webchat: values.manufacturer_contact_webchat,
                    manufacturer_contact_email: values.manufacturer_contact_email,
                }
                addContactList.push(addContactors);
                this.setState({
                    addContactors: addContactList
                })
                console.log("执行练添加联系人");
            }
        });
        console.log(this.state.addContactors)
    }


    /**
     * 修改联系人信息
     */
    updateManufacturerInfo() {
        this.setState({
            updateManuVisible: true,
        })
    }

    rowClickContactInfo(record) {
        this.setState({
            contactClickedInfo: record
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
        this.setState({
            delManufacturerVisible: false
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

     handleSubmitAddBankInfo(e) {
        e.preventDefault();
        console.log("qweewqeqw")
        let addBankAccountList = this.state.addBankAccount;
        this.props.form.validateFields((err, values) => {
            if (1==1) {
                let data = {
                    manufacturer_account_name: values.manufacturer_account_name,
                    manufacturer_account_user: values.manufacturer_account_user,
                    manufacturer_bank_account: values.manufacturer_bank_account
                }
                addBankAccountList.push(data);
                this.setState({
                    addBankAccount: addBankAccountList
                })
                console.log("qweewqeqw")
            }
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

        const formItemLayout2 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const formItemLayout3 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        //标准药品名称列表
        const columns = [{
            title: '编号',
            dataIndex: 'key',
            key: 'key',
            // filterDropdown: (
            //     <div className="custom-filter-dropdown" >
            //         <h3>说明</h3>
            //         <p>系统内产生的唯一代码</p>
            //     </div>
            // ),
            // filterIcon: <Icon type="bars" style={{ fontSize: 18, color: '#01d9b8' }} />,
            // filterDropdownVisible: this.state.filterDropdownVisible,
            // onFilterDropdownVisibleChange: (visible) => {
            //     this.setState({
            //         filterDropdownVisible: visible,
            //     });
            // },
        }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '规格',
            dataIndex: 'format',
            key: 'format',
        }];

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
                    title="添加生产厂家"
                    width='720px'
                    visible={this.state.addMechInfoVisible}
                    footer={null}
                    closable={false}
                    // onOk={this.handleOkAddMechInfo.bind(this)}
                    // onCancel={this.handleCancelAddMechInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout2}
                                    label="生产公司名称"
                                >
                                    {getFieldDecorator('manufacturer_name', {
                                        rules: [{
                                            required: true
                                        }],
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
                                    {getFieldDecorator('manufacturer_address', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('manufacturer_district', {

                                    })(
                                        <div>
                                            <Cascader options={options} onChange={this.addressOnChange.bind(this)} placeholder="请选择所属地区" style={{ width: 300 }} />
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
                                    dataIndex="manufacturer_contact_name"
                                    key="manufacturer_contact_name"
                                />
                                <Column
                                    title="性别"
                                    dataIndex="manufacturer_contact_sex"
                                    key="manufacturer_contact_sex"
                                />
                                <Column
                                    title="部门"
                                    dataIndex="manufacturer_contact_department"
                                    key="manufacturer_contact_department"
                                />
                                <Column
                                    title="职务"
                                    dataIndex="manufacturer_contact_position"
                                    key="manufacturer_contact_position"
                                />
                                <Column
                                    title="电话"
                                    dataIndex="manufacturer_contact_phone"
                                    key="manufacturer_contact_phone"
                                />
                                <Column
                                    title="QQ"
                                    dataIndex="manufacturer_contact_qq"
                                    key="manufacturer_contact_qq"
                                />
                                <Column
                                    title="微信号"
                                    dataIndex="manufacturer_contact_webchat"
                                    key="manufacturer_contact_webchat"
                                />
                                <Column
                                    title="邮箱"
                                    dataIndex="manufacturer_contact_email"
                                    key="manufacturer_contact_email"
                                />
                                <Column
                                    title="操作"
                                    key="operation"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                onClick={this.updateManufacturerInfo.bind(this)}><Icon type="edit" /></span>
                                            <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delManufacturerInfo.bind(this)}><Icon type="file-excel" /></span>
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
                                {getFieldDecorator('corporate_bank_account ', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showCompBankModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.state.addBankAccount ? this.state.addBankAccount : []} rowKey={record => record.keyId}>
                                <Column
                                    title="开户行"
                                    dataIndex="manufacturer_account_name"
                                    key="manufacturer_account_name"
                                />
                                <Column
                                    title="开户名"
                                    dataIndex="manufacturer_account_user"
                                    key="manufacturer_account_user"
                                />
                                <Column
                                    title="账号"
                                    dataIndex="manufacturer_bank_account"
                                    key="manufacturer_bank_account"
                                />
                                <Column
                                    title="操作"
                                    key="operation"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}><Icon type="edit" /></span>
                                            <span style={{ fontSize: 16, cursor: 'pointer' }}><Icon type="file-excel" /></span>
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
                                        {...formItemLayout3}
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
                                        {...formItemLayout3}
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
                                        {...formItemLayout3}
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
                                        {...formItemLayout3}
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
                                               <p>{this.props.userInfo}</p>
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
                                                <p>{this.state.localDate}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('manufacturer_remark', {

                                    })(
                                        <div>
                                            <input type='textarea' className='my_textarea_style' />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
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
                    onCancel={this.handleCancelAddContactsInfo.bind(this)}
                    onOk={this.handleOkAddContactsInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getContactsInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Form onSubmit={this.handleSubmitAddContactsInfo.bind(this)}>
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
                                        <Input style={{ width: 200 }} />
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
                                {getFieldDecorator('manufacturer_contact_sex', {
                                })(
                                     <RadioGroup onChange={this.sexOnChange.bind(this)} value={this.state.sexValue}>
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
                                        <Input style={{ width: 200 }} />
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
                                        <Input style={{ width: 200 }} />
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
                                        <Input style={{ width: 200 }} />
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
                                        <Input style={{ width: 200 }} />
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
                    onOk={this.handleOkManufacturerInfo.bind(this)}
                    onCancel={this.handleCancelManufacturerInfo.bind(this)}
                    okText='保存'
                >
                    {/* <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getContactsInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    /> */}
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
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
                                        <Input style={{ width: 200 }} />
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
                                {getFieldDecorator('manufacturer_contact_sex', {
                                })(
                                    <div>
                                        <label><input type="radio" name='radio1' value="1" checked />男 </label>
                                        <label><input type="radio" name='radio1' value="2" />女 </label>
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="部门"
                            >
                                {getFieldDecorator('manufacturer_contact_department', {
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
                                {getFieldDecorator('manufacturer_contact_position', {
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
                                {getFieldDecorator('manufacturer_contact_webchat', {
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
                                {getFieldDecorator('manufacturer_contact_qq', {
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
                                {getFieldDecorator('manufacturer_contact_email', {
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
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
                    okText='保存'
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
                                {getFieldDecorator('manufacturer_bank_account', {
                                    rules: [{
                                        required: true
                                    }],
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
                                {getFieldDecorator('manufacturer_account_name', {
                                    rules: [{
                                        required: true
                                    }],
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
                                {getFieldDecorator('manufacturer_account_user', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                           
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkCompBankInfo.bind(this)}>
                                确定
                            </Button>
                            <Button type="primary" className="login-form-button" onClick={this.handleCancelCompBankInfo.bind(this)}>
                                退出
                            </Button>
                        </div>
                    </Form>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.drugNameListInfo.userInfo.nickname);
    return {
        userInfo: state.drugNameListInfo.userInfo.nickname
    }
    console.log("userInfo")
}

function mapDispatchToProps(dispatch) {
    return {
        //获取用户信息123
        getUserInfo: (param) => dispatch(actionCreater.getUser(param)),
        //添加生产厂家
        addManufacturerInfo: (params) => dispatch(actionCreater.addManufacturerFormInfo(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ManufacturerTopMenu))