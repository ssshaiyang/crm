import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Cascader, Tree  ,Radio} from 'antd'

import * as actionCreator from "../../../../actions/files/corporation/corporation.js"
import * as actionCreater from "../../../../actions/files/agent/agent.js"

const CheckboxGroup = Checkbox.Group;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const FormItem = Form.Item;
const TreeNode = Tree.TreeNode;
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
    value: 'zhejiang',
    label: '浙江省',
    children: [{
        value: 'huangzhou',
        label: '黄州市',
        children: [{
            value: 'xihu',
            label: '西湖区',
        }],
    }],
}, {
    value: 'jiangsu',
    label: '江苏省',
    children: [{
        value: 'nanjing',
        label: '南京市',
        children: [{
            value: 'zhonghuamen',
            label: '中华门区',
        }],
    }],
}];

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

//生产厂家列表
const data = [{
    key: '100001',
    name: '胞磷胆碱钠胶囊',
    format: '0.1g*6袋'
}, {
    key: '100002',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    key: '100003',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
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
},
{
    key: '100002',
    name: '李四',
    sex: '女',
    Department: '技术',
    duty: '技术人员',
    Iphone: '123445566',
    other_tel: '12313123',
    email: '12345@qq.com',
},]

//开户行信息
const data_manufacturer_bankInfo = [{
    deposit_bank: '中国银行杭州支行',
    deposit_name: '张三',
    bank_type: '国企',
    account_number: '6666666666',
},
{
    deposit_bank: '中国农业杭州支行',
    deposit_name: '李四',
    bank_type: '国企',
    account_number: '7777777777',
}]

export class AgentTop extends React.Component {
    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            data: data,
            ContactsModelVisible: false,
            agentModelVisible: false,
            addBankInfoVisible: false,
            showEmployeesNameVisible:false,
            addContactors: [],
            addBankAccount: [],
            clickedBankInfo:[],
            employeeName:[]
        }
    }

    componentWillMount() {
        // this.props.getArea();
    }

    componentDidMount() {

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
        this.props.getArea();
        this.setState({
            addMechInfoVisible: true
        });
    }

    获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name
        })
    }
    rowClickBankInfo(record) {
        this.setState({
            clickedBankInfo: record
        })
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

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }
    //招商人员
    //
    showEmployeeInfo() {
        let data = {
            page: -1,
            limit: 10,
            department_id:-1,
            position_id:-1
        }
        this.props.getEmployee(data);
        this.setState({
            showEmployeesNameVisible: true
        })
        console.log(this.props)
    }
    handleOkEmployeesInfo(){
        this.setState({
            showEmployeesNameVisible:false
        })
    }
    handleCancelEmployeesInfo(){
        this.setState({
            showEmployeesNameVisible:false
        })
    }
        //获取表格的行元素
    rowEmployeesClick(record) {
        //console.log('sssssss',record)
        this.setState({
            employee_name: record.employee_name,
            employee_id: record.employee_id
        })
        console.log(this.state.employee_id)
        
    }
    getEmployeeSearchValue(){

    }


    /**
     * 展开联系人弹框
     */
    showContactsModel() {
        this.setState({
            ContactsModelVisible: true
        })
    }

    addContactSex(e) {
        this.setState({
            addContactSex: e.target.value
        })
    }

    updateManufacturerInfo() {
        this.setState({
            updateManuVisible: true,
        })
    }

    delManufacturerInfo() {
        this.setState({
            delManufacturerVisible: true
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

    handleSubmitContactsInfo(e){

    }
    //添加银行账户确认按钮
    handleSubmitAddBankInfo(e) {
        e.preventDefault();
        let addBankAccountList = this.state.addBankAccount;
        this.props.form.validateFields((err, values) => {
            if (1==1) {
                console.log(values)
                let data = {
                    agent_account_user: values.agent_account_user,
                    agent_account_name: values.agent_account_name,
                    agent_bank_account: values.agent_bank_account
                }
                addBankAccountList.push(data);
                
                this.setState({
                    addBankAccount: addBankAccountList
                })
                console.log(this.state.addBankAccount)
            }
        });
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
                    agent_contact_name: values.agent_contact_name,
                    agent_contact_telephone: values.agent_contact_telephone,
                    agent_contact_sex: this.state.addContactSex,
                    agent_contact_card:values.agent_contact_card,
                    agent_contact_department: values.agent_contact_department,
                    agent_contact_phone: values.agent_contact_phone,
                    agent_contact_fax:values.agent_contact_fax,
                    agent_contact_qq: values.agent_contact_qq,
                    agent_contact_webchat: values.agent_contact_webchat,
                    agent_contact_email: values.agent_contact_email,
                }
                addContactList.push(addContactors);
                this.setState({
                    addContactors: addContactList
                })
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (this.state.area) {
                let addAgent = {
                    agent_name: fieldsValue.agent_name,
                    employee_id: this.state.employee_id,
                    agent_province: this.state.area[0],
                    agent_city: this.state.area[1],
                    agent_district: this.state.area[2],
                    agent_address: fieldsValue.agent_address,
                    agent_remark: fieldsValue.agent_remark,
                    agent_account: this.state.addBankAccount,
                    agent_contact:this.state.addContactors  
                }
                this.props.addAgent(addAgent);
                console.log(addAgent)
            }
            else{
                    console.log('********请填写地区**********')
                }
            // this.props.getAgent();
        });
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

    //获取树型控件显示信息
    onSelect(selectedKeys, info) {
        //console.log('selected', selectedKeys, info);
    }

    //级联选择框选择的值
    selectArea(value) {
        console.log(value)
        this.setState({
            area: value
        })
    }


    render() {
        const employeecolumns = [
            {
            title: '编号',
            dataIndex: 'employee_id',
            key: '<employee_id></employee_id>',
            },
            {
            title: '姓名',
            dataIndex: 'employee_name',
            key: 'employee_name',
            },
            {
            title: '职位',
            dataIndex: 'role',
            key: 'role',
            }
        ]
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
                    title="添加代理商"
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
                                    label="代理商"
                                >
                                    {getFieldDecorator('agent_name', {
                                        rules: [{
                                            required: true,message: '请输入代理商'
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
                                    label="招商人员"
                                >
                                    {getFieldDecorator('employee_id', {
                                        rules: [{
                                            required: true, message: '请输入招商人员',
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                value={this.state.employee_name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showEmployeeInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                       
                                        )}
                                </FormItem>
                            </Col>
                             <Col span={11}>
                                <FormItem
                                    {...formItemLayout1}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('agent_', {

                                    })(
                                        <div>
                                            <Cascader options={this.props.areaInfo} onChange={this.selectArea.bind(this)} placeholder="请选择所属地区" style={{ width: 300 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                            <Col span={24}>
                                <FormItem
                                    {...formItemLayout1}
                                    label="公司地址"
                                >
                                    {getFieldDecorator('agent_address', {

                                    })(
                                        <div>
                                            <Input placeholder="请输入公司地址" />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        {/* 第二层 */}
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
                            <Table dataSource={this.state.addContactors ? this.state.addContactors : []} bordered={true} onRowClick={this.rowClick.bind(this)}>
                                <Column
                                    title="姓名"
                                    dataIndex="agent_contact_name"
                                    key="agent_contact_name"
                                />
                                <Column
                                    title="性别"
                                    dataIndex="agent_contact_sex"
                                    key="agent_contact_sex"
                                />
                                <Column
                                    title="手机"
                                    dataIndex="agent_contact_telephone"
                                    key="agent_contact_telephone"
                                />
                                <Column
                                    title="身份证号"
                                    dataIndex="agent_contact_card"
                                    key="agent_contact_card"
                                />
                                <Column
                                    title="电话"
                                    dataIndex="agent_contact_phone"
                                    key="agent_contact_phone"
                                />
                                <Column
                                    title="QQ"
                                    dataIndex="agent_contact_qq"
                                    key="agent_contact_qq"
                                />
                                <Column
                                    title="传真"
                                    dataIndex="agent_contact_fax"
                                    key="agent_contact_fax"
                                />
                                <Column
                                    title="微信"
                                    dataIndex="agent_contact_webchat"
                                    key="agent_contact_webchat"
                                />
                                <Column
                                    title="邮箱"
                                    dataIndex="agent_contact_email"
                                    key="agent_contact_email"
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
                        

                        <br />
                        {/* 第三层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="公司银行账户"
                            >
                                {getFieldDecorator('medichine_name', {

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showCompBankModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('medichine_name', {

                                })(
                                    <Table dataSource={this.state.addBankAccount ? this.state.addBankAccount : []} bordered={true} onRowClick={this.rowClickBankInfo.bind(this)}>
                                        <Column
                                            title="开户行"
                                            dataIndex="agent_account_name"
                                            key="agent_account_name"
                                        />
                                        <Column
                                            title="开户名"
                                            dataIndex="agent_account_user"
                                            key="agent_account_user"
                                        />  
                                        <Column
                                            title="账号"
                                            dataIndex="agent_bank_account"
                                            key="agent_bank_account"
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
                                    )}
                            </FormItem>
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
                                        {getFieldDecorator('medichine_name', {

                                        })(
                                            <div>
                                                <p>2017-05-25</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('agent_remark', {

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
                    title="添加联系人"
                    visible={this.state.ContactsModelVisible}
                    footer={null}
                    closable={true}
                >
                    <Form onSubmit={this.handleSubmitAddContactsInfo.bind(this)}>
                        {/*第一层*/}
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
                            onClick={this.handleOkAddContactsInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddContactsInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>


                <Modal
                    title='添加银行账户'
                    visible={this.state.addBankInfoVisible}
                    footer={null}
                    closable={true}
                >
                    <Form onSubmit={this.handleSubmitAddBankInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('agent_bank_account', {
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
                                {getFieldDecorator('agent_account_name', {
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
                                {getFieldDecorator('agent_account_user', {
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
                    title="员工列表"
                    visible={this.state.showEmployeesNameVisible}
                    onOk={this.handleOkEmployeesInfo.bind(this)}
                    onCancel={this.handleCancelEmployeesInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMedicineNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table columns={employeecolumns} dataSource={this.props.employeeInfo} onRowClick={this.rowEmployeesClick.bind(this)} />
                </Modal>

                <Modal
                    title="员工列表"
                    width='700px'
                    visible={this.state.agentModelVisible}
                    onOk={this.handleOkAgentModel.bind(this)}
                    onCancel={this.handleCancelAgentModel.bind(this)}
                >
                    <Row>
                        <Col span={11}>
                            <Search
                                placeholder="输入部门名"
                                onSearch={this.getMedicineNameSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Tree
                                showLine
                                defaultExpandedKeys={['zhaoshang']}
                                onSelect={this.onSelect.bind(this)}
                            >
                                <TreeNode title="招商部" key="zhaoshang">
                                    <TreeNode title="招商一部" key="zhaoshang1" />
                                    <TreeNode title="招商二部" key="zhaoshang2" />
                                    <TreeNode title="招商三部" key="zhaoshang3" />
                                </TreeNode>
                                <TreeNode title="总经理" key="zongjingli">
                                    <TreeNode title="总经理助理" key="zongjingli1" />
                                </TreeNode>
                                <TreeNode title="财务部" key="caiwubu">
                                    <TreeNode title="财务部一部" key="caiwubu1" />
                                    <TreeNode title="财务部二部" key="caiwubu2" />
                                </TreeNode>
                            </Tree>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={12}>
                            <Search
                                placeholder="输入客户ID/姓名/联系方式"
                                onSearch={this.getEmployeeSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Table columns={columns} dataSource={this.state.data} onRowClick={this.rowClick.bind(this)} />
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
         //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        areaInfo:state.corporationInfo.areaInfo,
        employeeInfo:state.agentInfo.employeeInfo.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取招商人员列表
        getEmployee:(params) => dispatch(actionCreator.getEmployeeInfo(params)),
        getArea: (params) => dispatch(actionCreator.getAreaInfo(params)),
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),
        // //获取所属地区
        // getArea: () => dispatch(actionCreater.getAreaInfo()),
        //添加代理商
        addAgent:(params) => dispatch(actionCreater.addAgentInfo(params)),
        //获取代理商
        getAgent:(params) => dispatch(actionCreater.getAgentInfo(params)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AgentTop))