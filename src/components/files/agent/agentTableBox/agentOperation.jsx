import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Button, Icon, Menu, Dropdown, Popconfirm, Checkbox, Input, Row, Col, Modal, Form, Table, Cascader, Tree  ,Radio} from 'antd'
import * as actionCreator from "../../../../actions/files/corporation/corporation.js"
import * as actionCreater from "../../../../actions/files/agent/agent.js"

// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const CheckboxGroup = Checkbox.Group;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const FormItem = Form.Item;
const TreeNode = Tree.TreeNode;
const RadioGroup = Radio.Group;

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

export class AgentOperation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAgentVisible: false,
            addBankInfoVisible: false,
            delAgentVisible: false,
            name:this.props.data.employee_name,
            employee_id:this.props.data.employee_id,
            areaProvinceCode: this.props.data.agent_province,
            areaCityCode: this.props.data.agent_city,
            areaDistrictCode: this.props.data.agent_district,
            addContactors:this.props.agentContactInfo,
            addBankAccount:this.props.agentBankInfo

        }
    }

    componentWillMount() {
        console.log(this.props.data)
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.agentContactInfo !== this.props.agentContactInfo) {
            this.setState({
                addContactors: nextProps.agentContactInfo,
                addBankAccount: nextProps.agentBankInfo
            })
        }
        if (nextProps.editCode == 1000 && this.props.editCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getAgent(params)
            console.log("自动刷新")
        }
        if (nextProps.delCode == 1000 && this.props.delCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getAgent(params)
            console.log("自动刷新")
        }
    }



    /**
     * 添加代理商信息方法组
     */
    addAgent() {
        let id = this.props.data.agent_id
        this.props.getArea();
        this.props.getContact(id);
        this.props.getBank(id);
        this.setState({
            addAgentVisible: true
        })
    }

    handleOkAddAgent() {
        this.setState({
            addAgentVisible: false,
        });
    }
    handleCancelAddAgent() {
        this.setState({
            addAgentVisible: false,
        });
    }

    //点击搜索获取生产厂家输入信息
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    rowEmployeesClick(record, index) {
        //console.log('sssssss',record)
        this.setState({
            name: record.employee_name,
            employee_id: record.employee_id,
            rowclicked: index
        })
        console.log(this.state.employee_id)
        
    }


     delContactInfo(record) {
        const addContactors = [...this.state.addContactors];
        console.log(record.agent_contact_id)
        if (record.agent_contact_id) {
            this.setState({
            addContactors: addContactors.filter(item => 
                //if (record.manufacturer_contact_id) {
                    item.agent_contact_id !== record.agent_contact_id
                   
                //} else {
                   // item.key !== record.key;
                   // console.log("else")
               // }
            )
        });
        }else{
            this.setState({
                addContactors:addContactors.filter(item => item.addkey !== record.addkey)
            })
        }
    
    }

    onAreaChange(value) {
        console.log(value)
        this.setState({
            areaProvinceCode:value[0],
            areaCityCode:value[1],
            areaDistrictCode:value[2]
        })
    }

    showContactsModel() {
        this.setState({
            ContactsModelVisible: true
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



    addContactSex(e) {
        this.setState({
            addContactSex: e.target.value
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

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(err)
            if (!err) {
                let addAgent = {
                    agent_name: fieldsValue.agent_name,
                    employee_id: this.state.employee_id,
                    agent_province: this.state.areaProvinceCode,
                    agent_city: this.state.areaCityCode,
                    agent_district: this.state.areaDistrictCode,
                    agent_address: fieldsValue.agent_address,
                    agent_remark: fieldsValue.agent_remark,
                    agent_account: this.state.addBankAccount,
                    agent_contact:this.state.addContactors,
                    agent_address:fieldsValue.agent_address
                }
                let params = {
                    id:this.props.data.agent_id,
                    values:addAgent
                }
                this.props.editAgent(params);
                console.log(addAgent)
            }
            else{
                    console.log('********请填写地区**********')
                }
            let params = {
                page : -1,
                limit : 10
            }
            this.props.getAgent(params);
        });
    }

    /**
     * 展示招商人员对话框
     */

    showAgentModel() {
        this.setState({
            agentModelVisible: true
        })
         let data = {
            page: -1,
            limit: 10,
            department_id:-1,
            position_id:-1
        }
        this.props.getEmployee(data);
        
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

     handleSubmitAddBankInfo(e) {
        e.preventDefault();
        console.log("qweewqeqw")
        let addBankAccountList = this.state.addBankAccount;
        this.props.form.validateFields((err, values) => {
            if (1==1) {
                let data = {
                    addkey: this.state.addConpamyCount,
                    agent_account_name: values.agent_account_name,
                    agent_account_user: values.agent_account_user,
                    agent_bank_account: values.agent_bank_account
                }
                addBankAccountList.push(data);
                this.setState({
                    addBankAccount: addBankAccountList,
                    addConpamyCount:this.state.addConpamyCount + 1
                })
                console.log("qweewqeqw")
            }
        });
    }
    delBankInfo(record){
        console.log(record)
        const addBankAccount = [...this.state.addBankAccount];
       
        if (record.agent_account_id) {
            this.setState({
            addBankAccount: addBankAccount.filter(item => 
                    item.agent_account_id !== record.agent_account_id
          )
        });
        }else{
            this.setState({
                addBankAccount:addBankAccount.filter(item => item.addkey !== record.addkey)
            })
        }
        // t
    }

    updateBankInfo(record){
        console.log(record);
        this.setState({
            editBankVisible: true
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
        let id = this.props.data.agent_id;
        this.props.delAgent(id);
        this.setState({
            delAgentVisible: false
        })
        let params = {
            page : -1,
            limit : 10
        }
        this.props.getAgent(params);
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

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

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

    rowClickContactInfo(record) {
        console.log(record)
        this.setState({
            contactClickedInfo: record
        })
        // this.props.form.setFieldsValue({
        //     edit_agent_contact_name:record.agent_contact_name
        // })
    }

    rowClickBankInfo(record) {
        this.setState({
            bankClickedInfo: record
        })
    }

        //点击确认修改联系人信息
    handleSubmitUpdateInfo(e) {
       
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(this.state.contactClickedInfo)
            console.log(values)
            if (1) {
                let editBankInfo = {
                    addkey: this.state.contactClickedInfo.addkey || this.state.contactClickedInfo.agent_contact_id,
                    agent_contact_name: values.edit_agent_contact_name,
                    agent_contact_telephone: values.edit_agent_contact_telephone,
                    agent_contact_phone: values.edit_agent_contact_phone,
                    agent_contact_card: values.edit_agent_contact_card,
                    agent_contact_fax: values.edit_agent_contact_fax,
                    agent_contact_webchat: values.edit_agent_contact_webchat,
                    agent_contact_qq: values.edit_agent_contact_qq,
                    agent_contact_email: values.edit_agent_contact_email
                }
                console.log(editBankInfo.addkey)
                let contactInfo = this.state.addContactors;

                for (let i = 0; i < contactInfo.length; i++) {
                    if (contactInfo[i].agent_contact_id == editBankInfo.addkey) {
                        contactInfo[i] = editBankInfo;
                        console.log("manufacturer_contact_id")
                    }else if(contactInfo[i].addkey == editBankInfo.addkey){
                        contactInfo[i] = editBankInfo;
                        console.log("addkey")
                    }
                }
                this.setState({
                    addContactors: contactInfo,
                })
            }
        });
    }

    //点击确认修改银行信息
    handleBankSubmitUpdateInfo(e) {
       
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(this.state.bankClickedInfo)
            console.log(values)
            if (1) {
                let editBankInfo = {
                    addkey: this.state.bankClickedInfo.addkey || this.state.bankClickedInfo.agent_account_id,
                    agent_account_name: values.edit_agent_account_name,
                    agent_account_user: values.edit_agent_account_user,
                    agent_bank_account: values.edit_agent_bank_account,
                   
                }
                console.log(editBankInfo.addkey)
                let bankInfo = this.state.addBankAccount;
                for (let i = 0; i < bankInfo.length; i++) {
                    if (bankInfo[i].agent_account_id == editBankInfo.addkey) {
                        bankInfo[i] = editBankInfo;
                        console.log("manufacturer_account_id")
                    }else if(bankInfo[i].addkey == editBankInfo.addkey){
                        bankInfo[i] = editBankInfo;
                        console.log("addkey")
                    }
                }
                this.setState({
                    addBankAccount: bankInfo,
                })
            }
        });
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
        }]

        return (
            <div>
                <span onClick={this.addAgent.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="search" /></span>
                <Modal
                    title="编辑代理商"
                    width='720px'
                    visible={this.state.addAgentVisible}
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
                                            required: true
                                        }],
                                        initialValue:this.props.data.agent_name
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.agent_name} style={{width: 200 }} />
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
                                        
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                placeholder={this.state.name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showAgentModel.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={24}>
                            <FormItem
                                {...formItemLayout1}
                                label="所属地区"
                            >
                                {getFieldDecorator('region', {

                                })(
                                    <div>
                                        <Cascader defaultValue={[this.state.areaProvinceCode,this.state.areaCityCode,this.state.areaDistrictCode]} options={this.props.areaInfo} onChange={this.onAreaChange.bind(this)} placeholder="请选择所属地区" style={{ width: 300 }} />
                                    </div>
                                    )}
                            </FormItem>
                            </Col>
                            <Col span={24}>
                            <FormItem
                                {...formItemLayout1}
                                label="公司地址"
                            >
                                {getFieldDecorator('agent_address', {
                                    initialValue:this.props.data.agent_address
                                })(
                                    <div>
                                        <Input defaultValue={this.props.data.agent_address} placeholder="请输入公司地址" />
                                    </div>
                                    )}
                            </FormItem>
                            </Col>
                        </Row>
                        <br />
                        {/* 第二层 */}
                        <Row className='botLine'>
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
                             <Table dataSource={this.state.addContactors} onRowClick={this.rowClickContactInfo.bind(this)} bordered={true} >
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
                                            <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delContactInfo(record)}>
                                               <Icon type="file-excel" />
                                            </Popconfirm>   
                                            
                                        </div>
                                    )}
                                />
                            </Table>
                        </Row>
                        <br />
                        {/* 第三层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="公司银行账户"
                            >
                                {getFieldDecorator('corporate_bank_account', {

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

                                    <Table dataSource={this.state.addBankAccount}  onRowClick={this.rowClickBankInfo.bind(this)} border={true}>
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
                                            render={(text, record ,index ) => (
                                                <div>
                                                    <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                        onClick={() =>this.updateBankInfo(record)}><Icon type="edit" /></span>
                                                    <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delBankInfo(record)}>
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
                                        {getFieldDecorator('creater', {

                                        })(
                                            <div>
                                                <p>{this.props.data.creator_name}</p>
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
                                                <p>{moment(this.props.data.create_time*1000).format('YYYY-MM-DD')}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('remark', {

                                    })(
                                        <div>
                                            <input type='textarea' className='my_textarea_style' />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                                onClick={this.handleOkAddAgent.bind(this)}>
                                确定
                            </Button>
                            <Button type="primary" className="login-form-button" onClick={this.handleCancelAddAgent.bind(this)}>
                                退出
                            </Button>
                        </div>
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
                                {getFieldDecorator('agent_bank_account', {
                                    
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
                                {getFieldDecorator('agent_account_name  ', {
                                    
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
                                {getFieldDecorator('edit_agent_contact_name', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_name : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_name : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="手机"
                            >
                                {getFieldDecorator('edit_agent_contact_telephone', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_telephone : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_telephone : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        {/* 第二层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="电话"
                            >
                                {getFieldDecorator('edit_agent_contact_phone', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_phone : ''
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
                                {getFieldDecorator('edit_agent_contact_card', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_card : ''
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
                                {getFieldDecorator('edit_agent_contact_fax', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_fax : ''
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
                                {getFieldDecorator('edit_agent_contact_webchat', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_webchat : ''
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
                                {getFieldDecorator('edit_agent_contact_qq', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_qq : ''
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
                                {getFieldDecorator('edit_agent_contact_email', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.agent_contact_email : ''
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
                    title='编辑银行信息'
                    visible={this.state.editBankVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleBankSubmitUpdateInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('edit_agent_bank_account', {
                                      initialValue:this.state.bankClickedInfo ? this.state.bankClickedInfo.agent_bank_account : ''                                   
                                })(
                                    <div>
                                        <Input defaultValue={this.state.bankClickedInfo ? this.state.bankClickedInfo.agent_bank_account : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户行"
                            >
                                {getFieldDecorator('edit_agent_account_name', {
                                    initialValue:this.state.bankClickedInfo ? this.state.bankClickedInfo.agent_account_name : ''
                                })(
                                    <div>
                                        <Input  defaultValue={this.state.bankClickedInfo ? this.state.bankClickedInfo.agent_account_name : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户名"
                            >
                                {getFieldDecorator('edit_agent_account_user', {
                                    initialValue:this.state.bankClickedInfo ? this.state.bankClickedInfo.agent_account_user : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.bankClickedInfo ? this.state.bankClickedInfo.agent_account_user : ''} style={{ width: 200 }} />
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
                    title={"删除信息"}
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此人的信息吗?</span>
                </Modal>
                <Modal
                    title="员工列表"
                    visible={this.state.agentModelVisible}
                    onOk={this.handleOkAgentModel.bind(this)}
                    onCancel={this.handleCancelAgentModel.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMedicineNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table columns={employeecolumns} dataSource={this.props.employeeInfo} 
                    onRowClick={this.rowEmployeesClick.bind(this)}
                     rowKey
                            rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''} />
                </Modal>
            </div>
        )
    }


}
function mapStateToProps(state) {
    return {
        //visible: state.inventory.checkOutVisible
         //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        areaInfo:state.corporationInfo.areaInfo,
        employeeInfo:state.agentInfo.employeeInfo.data,
        agentContactInfo:state.agentInfo.contactInfo,
        agentBankInfo:state.agentInfo.bankInfo,
        editCode:state.agentInfo.editAgentCode,
        delCode:state.agentInfo.delAgentCode
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
        getContact: (params) => dispatch(actionCreater.getAgentContact(params)),
        getBank: (params) => dispatch(actionCreater.getAgentBank(params)),
        delAgent:(params) => dispatch(actionCreater.delAgentInfo(params)),
        editAgent:(params) => dispatch(actionCreater.editAgentInfo(params))
        //openModalBox: (val) => dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AgentOperation))