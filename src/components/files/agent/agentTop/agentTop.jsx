import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Button, Icon, Menu, Dropdown, Popconfirm, Checkbox, Input, Row, Col, Modal, Form, Table, Cascader, Tree  ,Radio} from 'antd'

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
            employeeName:[],
            addBankCount:0
        }
    }

    componentWillMount() {
        // this.props.getArea();
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addCode == 1000 && this.props.addCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getAgent(params)
            console.log("自动刷新")
        }
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        let params = {
            filter:value,
            page:-1,
            limit:10
        }
        this.props.getAgent(params)
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
    rowClick(record, index) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name,
            rowclicked: index
        })
    }
    rowClickBankInfo(record) {
        this.setState({
            clickedBankInfo: record
        })
    }
    rowClickContactInfo(record) {
        this.setState({
            contactClickedInfo: record
        })
    }

        handleSubmitEditContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (1) {
                let editContactInfo = {
                    key: this.state.contactClickedInfo.key,
                    agent_contact_name:values.agent_contact_name,
                    agent_contact_telephone:values.agent_contact_telephone,
                    agent_contact_phone:values.agent_contact_phone,
                    agent_contact_card:values.agent_contact_card,
                    agent_contact_fax:values.agent_contact_fax,
                    agent_contact_webchat:values.agent_contact_webchat,
                    agent_contact_qq:values.agent_contact_qq,
                    agent_contact_email:values.agent_contact_email,
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
    // handleSubmit(e) {
    //     e.preventDefault();

    //     this.props.form.validateFields((err, fieldsValue) => {
    //         if (err) {
    //             return;
    //         }
    //     });
    // }
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

    onChange(e) {
        this.setState({
            value: e.target.value,
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

    addContactSex(e) {
        this.setState({
            addContactSex: e.target.value
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
                    key: this.state.addBankCount,
                    agent_account_user: values.agent_account_user,
                    agent_account_name: values.agent_account_name,
                    agent_bank_account: values.agent_bank_account
                }
                addBankAccountList.push(data);
                
                this.setState({
                    addBankCount:this.state.addBankCount + 1,
                    addBankAccount: addBankAccountList
                })
                console.log(this.state.addBankAccount)
            }
        });
    }

        //编辑银行账户确定按钮
    handleSubmitEditBankInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if (1) {
                let editBankInfo = {
                    key: this.state.clickedBankInfo.key,
                    agent_bank_account: values.agent_bank_account,
                    agent_account_name: values.agent_account_name,
                    agent_account_user: values.agent_account_user
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

    delBankInfo(key) {
        const addBankAccount = [...this.state.addBankAccount];
        this.setState({ 
            addBankAccount: addBankAccount.filter(item => item.key !== key) 
        });
        // this.setState({
        //     delManufacturerVisible: true
        // })
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
                    key: this.state.addContactCount,
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
                    addContactCount:this.state.addContactCount +1,
                    addContactors: addContactList
                })
            }
        });
    }

    updateBankInfo(){
        this.setState({
            editBankInfoVisible:true
        })
    }

    handleOkEditCompBankInfo(){
        this.setState({
            editBankInfoVisible:false
        })
    }
    handleCancelEditCompBankInfo(){
        this.setState({
            editBankInfoVisible:false
        })
    }

    delContactInfo(key) {
        const addContactors = [...this.state.addContactors];
        this.setState({ 
            addContactors: addContactors.filter(item => item.key !== key) 
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
                    agent_contact:this.state.addContactors,
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
                             <Col span={15}>
                                <FormItem
                                    {...formItemLayout1}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('agent_area', {

                                    })(
                                        <div>
                                            <Cascader options={this.props.areaInfo} onChange={this.selectArea.bind(this)} placeholder="请选择所属地区" style={{ width: 250 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={7}></Col>
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
                                    render={(text, record, index) => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                onClick={() =>this.updateManufacturerInfo(record)}><Icon type="edit" /></span>
                                            <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delContactInfo(record.key)}>
                                               <Icon type="file-excel" />
                                            </Popconfirm>   
                                            
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
                                            render={(text, record, index) => (
                                                <div>
                                                    <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                        onClick={() =>this.updateBankInfo(record)}><Icon type="edit" /></span>
                                                    <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delBankInfo(record.key)}>
                                                       <Icon type="file-excel" />
                                                    </Popconfirm>   
                                                    
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
                                                <p>{new Date().toLocaleDateString()}</p>
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_name : ''} style={{width:200}}/>
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_telephone : ''} style={{width:200}}/>
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_phone : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_card : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_fax : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_webchat : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_qq : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_email : ''} style={{ width: 200 }} />
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
                                        <Input  style={{ width: 200 }} />
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
                    title='修改银行账户'
                    visible={this.state.editBankInfoVisible}
                    footer={null}
                    closable={true}
                >
                    <Form onSubmit={this.handleSubmitEditBankInfo.bind(this)}>
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
                                        <Input defaultValue={this.state.clickedBankInfo ? this.state.clickedBankInfo.agent_bank_account : ''}  style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.clickedBankInfo ? this.state.clickedBankInfo.agent_account_name : ''} style={{ width: 200 }} />
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
                                        <Input defaultValue={this.state.clickedBankInfo ? this.state.clickedBankInfo.agent_account_user : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkEditCompBankInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelEditCompBankInfo.bind(this)}>
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
                            <Table columns={columns} dataSource={this.state.data} onRowClick={this.rowClick.bind(this)} 
                            rowKey
                            rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''}/>
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
         //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        areaInfo:state.corporationInfo.areaInfo,
        employeeInfo:state.agentInfo.employeeInfo.data,
        addCode:state.agentInfo.addAgentCode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取招商人员列表
        getEmployee:(params) => dispatch(actionCreator.getEmployeeInfo(params)),
        getArea: (params) => dispatch(actionCreator.getAreaInfo(params)),
        
        // //获取所属地区
        // getArea: () => dispatch(actionCreater.getAreaInfo()),
        //添加代理商
        addAgent:(params) => dispatch(actionCreater.addAgentInfo(params)),
        //获取代理商
        getAgent:(params) => dispatch(actionCreater.getAgentInfo(params)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AgentTop))