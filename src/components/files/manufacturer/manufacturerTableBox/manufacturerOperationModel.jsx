import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader,Popconfirm, Table, DatePicker, Radio, message } from 'antd'
import * as actionCreater from "../../../../actions/files/manufacturer/manufacturer.js";
import * as actionCreator from "../../../../actions/files/medicineName/medicineName.js";
import Grid from '../../../common/Grid.jsx'
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;
const RadioGroup = Radio.Group;

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

export class ManufacturerOperationModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addMechInfoVisible: false,
            ContactsModelVisible: false,
            delAgentVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            editBankVisible: false,
            delBankVisible: false,
            areaProvinceCode: this.props.data.manufacturer_province,
            areaCityCode: this.props.data.manufacturer_city,
            areaDistrictCode: this.props.data.manufacturer_district,
            addContactors:this.props.addContactors,
            addBankAccount:this.props.addBankAccount,
            addContactorCount:0,
            addBankCount:0
        }
    }

    componentWillMount() {
        this.props.getUserInfo(1);
        console.log(this.props.data)
       
        
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.addContactors !== this.props.addContactors){
            this.setState({
                addContactors:nextProps.addContactors,
                addBankAccount:nextProps.addBankAccount
            })
        }
         if (nextProps.delCode == 1000 && this.props.delCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getManufacturerInfo(params)
            console.log("自动刷新")
        }
        if (nextProps.editCode == 1000 && this.props.editCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getManufacturerInfo(params)
            console.log("自动刷新")
        }
        console.log("执行了componentWillReceiveProps")
    }
    
    addMechInfo() {
        let id = this.props.data.manufacturer_id;
        this.props.manufacturerContactInfo(id);
        this.props.getBankAccount(id);
        this.setState({
            addMechInfoVisible: true,
            manufacturer_id: id
        });
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

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (1) {
                let values = {
                    "manufacturer_contact": this.state.addContactors,
                    "manufacturer_account": this.state.addBankAccount,
                    "business_license_code": fieldsValue.business_license_code,
                    "business_license_expire_time": Date.parse(fieldsValue['business_license_expire_time'].format('YYYY-MM-DD')) / 1000,
                    "contact_information": fieldsValue.contact_information,
                    "corporate_bank_account": fieldsValue.corporate_bank_account,
                    "creator_name": this.props.userInfo,
                    "create_time": fieldsValue.create_time,
                    "gmp_code": fieldsValue.gmp_code,
                    "gmp_expire_time": Date.parse(fieldsValue['gmp_expire_time'].format('YYYY-MM-DD')) / 1000,
                    "manufacturerId": fieldsValue.manufacturerId,
                    "manufacturer_address": fieldsValue.manufacturer_address,
                    "manufacturer_province": this.state.areaProvinceCode,
                    "manufacturer_city": this.state.areaCityCode,
                    "manufacturer_district": this.state.areaDistrictCode,
                    "manufacturer_name": fieldsValue.manufacturer_name,
                    "manufacturer_remark": fieldsValue.manufacturer_remark,
                    "production_expire_time": Date.parse(fieldsValue['production_expire_time'].format('YYYY-MM-DD')) / 1000,
                    "production_license": fieldsValue.production_license,
                    "protocol_region": fieldsValue.protocol_region,
                    "proxy": fieldsValue.proxy,
                    "proxy_expire_time": Date.parse(fieldsValue['proxy_expire_time'].format('YYYY-MM-DD')) / 1000,
                }
                let params = {
                    id: this.props.data.manufacturer_id,
                    values: values
                }
                console.log(this.props)
                console.log(this.state.addContactors)
                console.log(params)
                this.props.editManufacturerInfo(params);
                let data = {
                    page: -1,
                    limit: 10
                }
                setTimeout(this.props.getManufacturerInfo(data),"5000")
                
            }
            
        });
    }

    //点击确认修改联系人信息
    handleSubmitUpdateInfo(e) {
       
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(this.state.contactClickedInfo)
            console.log(values)
            if (1) {
                let editBankInfo = {
                    addkey: this.state.contactClickedInfo.addkey || this.state.contactClickedInfo.manufacturer_contact_id,
                    manufacturer_contact_name: values.edit_manufacturer_contact_name,
                    manufacturer_contact_sex: values.edit_manufacturer_contact_sex,
                    manufacturer_contact_department: values.edit_manufacturer_contact_department,
                    manufacturer_contact_position: values.edit_manufacturer_contact_position,
                    manufacturer_contact_phone: values.edit_manufacturer_contact_phone,
                    manufacturer_contact_qq: values.edit_manufacturer_contact_qq,
                    manufacturer_contact_webchat: values.edit_manufacturer_contact_webchat,
                    manufacturer_contact_email: values.edit_manufacturer_contact_email
                }
                console.log(editBankInfo.addkey)
                let contactInfo = this.state.addContactors;
                for (let i = 0; i < contactInfo.length; i++) {
                    if (contactInfo[i].manufacturer_contact_id == editBankInfo.addkey) {
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
                    addkey: this.state.bankClickedInfo.addkey || this.state.bankClickedInfo.manufacturer_account_id,
                    manufacturer_account_name: values.edit_manufacturer_account_name,
                    manufacturer_account_user: values.edit_manufacturer_account_user,
                    manufacturer_bank_account: values.edit_manufacturer_bank_account,
                   
                }
                console.log(editBankInfo.addkey)
                let bankInfo = this.state.addBankAccount;
                for (let i = 0; i < bankInfo.length; i++) {
                    if (bankInfo[i].manufacturer_account_id == editBankInfo.addkey) {
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
        this.props.delManuInfo(this.props.data.manufacturer_id);
        this.setState({
            delAgentVisible: false
        },()=>{
            let data={
                page:-1,
                limit:10
            }
            this.props.getManufacturerInfo(data);
        })
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        let addContactList = this.state.addContactors;
        this.props.form.validateFields((err, values) => {
            console.log(values);
            console.log(err);
            if (1==1) {
                let addContactors = {
                    addkey: this.state.addContactorCount++,
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
                    addContactors: addContactList,
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
        let id = this.state.rowClickRecord;
        //console.log('ssssss', id);
        // editInfoValue = {

        // }
        this.setState({
            updateManuVisible: true,
        })
    }

    rowClickContactInfo(record) {
        this.setState({
            contactClickedInfo: record
        })
    }

    rowClickBankInfo(record) {
        this.setState({
            bankClickedInfo: record
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

        this.props.delConstactInfo();
        this.setState({
            delManufacturerVisible: false
        })
    }

    handleCancelDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
        })
    }

    delContactInfo(record) {
        const addContactors = [...this.state.addContactors];
        console.log(record.manufacturer_contact_id)
        if (record.manufacturer_contact_id) {
            this.setState({
            addContactors: addContactors.filter(item => 
                //if (record.manufacturer_contact_id) {
                    item.manufacturer_contact_id !== record.manufacturer_contact_id
                   
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
    updateContactInfo(record){
        console.log(record)
         this.setState({
            updateManuVisible: true,
        })
    }

    delBankInfo(record){
        console.log(record)
        const addBankAccount = [...this.state.addBankAccount];
       
        if (record.manufacturer_account_id) {
            this.setState({
            addBankAccount: addBankAccount.filter(item => 
                    item.manufacturer_account_id !== record.manufacturer_account_id
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

    //获取表格的行元素
    rowClick(record) {
        //console.log('ssssss', record);
        this.setState({
            rowClickRecord: record
        })
    }

    //获取单选按钮信息
    onChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmitBankInfo(e){
        e.preventDefault();
        console.log("qweewqeqw")
        let addBankAccountList = this.state.addBankAccount;
        this.props.form.validateFields((err, values) => {
            if (1) {
                let data = {
                    addkey: this.state.addBankCount,
                    manufacturer_account_name: values.manufacturer_account_name,
                    manufacturer_account_user: values.manufacturer_account_user,
                    manufacturer_bank_account: values.manufacturer_bank_account
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
    sexOnChange(){

    }


    //删除银行信息
    // delBankInfo() {
    //     this.setState({
    //         delBankVisible: true
    //     })
    // }

    handleOkDelBankInfo() {
        this.setState({
            delBankVisible: false
        })
    }

    handleCancelDelBankInfo() {
        this.setState({
            delBankVisible: false
        })
    }

    selectArea(value) {
        this.setState({
            areaProvinceCode: value[0],
            areaCityCode:value[1],
            areaDistrictCode:value[2]

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
        }];

        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="编辑生产厂家"
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
                                    label="生产公司名称"
                                >
                                    {getFieldDecorator('manufacturer_name', {
                                        initialValue:this.props.manufacturer_name
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.manufacturer_name} style={{ width: 200 }} />
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
                                        initialValue:this.props.manufacturer_address
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.manufacturer_address} style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('manufacturer_area', {
                                    })(
                                        <div>
                                            <Cascader defaultValue={[this.state.areaProvinceCode,this.state.areaCityCode,this.state.areaDistrictCode]} options={this.props.areaInfo} onChange={this.selectArea.bind(this)} placeholder="请选择所属地区" style={{ width: 300 }} />
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
                                {getFieldDecorator('manufacturer_contact', {
                                    initialValue:this.props.manufacturer_contact
                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showContactsModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.state.addContactors} onRowClick={this.rowClickContactInfo.bind(this)} bordered={true}>
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
                                    title="微信"
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
                                    render={(text, record ,index ) => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                onClick={() =>this.updateContactInfo(record)}><Icon type="edit" /></span>
                                            <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delContactInfo(record)}>
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
                                {getFieldDecorator('manufacturer_account', {
                                    initialValue:this.props.manufacturer_account
                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showCompBankModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('table_info', {
                                    
                                })(
                                    <Table dataSource={this.state.addBankAccount} onRowClick={this.rowClickBankInfo.bind(this)} bordered={true}>
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
                                            key="operation_bankInfo"
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
                        {/* 第四层 */}
                        <div>
                            <Row className='botLine'>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="营业执照代码"
                                    >
                                        {getFieldDecorator('business_license_code', {
                                            initialValue:this.props.business_license_code
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
                                            initialValue:moment(this.props.data.business_license_expire_time*1000)
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
                                            initialValue:this.props.gmp_code
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
                                            initialValue:moment(this.props.data.gmp_expire_time*1000)
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
                                            initialValue:this.props.production_license
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
                                            initialValue:moment(this.props.data.production_expire_time*1000)
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
                                            initialValue:this.props.proxy
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
                                            initialValue:moment(this.props.data.proxy_expire_time*1000)
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
                                            initialValue:this.props.protocol_region
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
                                                <p>{this.props.data.create_time}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('manufacturer_remark', {
                                        initialValue:this.props.manufacturer_remark
                                    })(
                                        <div>
                                            <input defaultValue={this.props.data.manufacturer_remark} type='textarea' className='my_textarea_style' />
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
                    okText='保存'
                    visible={this.state.addBankInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmitBankInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('manufacturer_account_user', {

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
                                {getFieldDecorator('manufacturer_bank_account', {
                                    // rules: [{
                                    //     required: true
                                    // }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            
                        </div>
                        <div>
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
                                {getFieldDecorator('manufacturer_contact_name', {

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
                        <div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkAddContactsInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddContactsInfo.bind(this)}>
                            退出
                        </Button>
                        </div>
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
                                {getFieldDecorator('edit_manufacturer_contact_name', {
                                    rules: [{
                                        required: true, message: '请输入你的姓名',
                                    }],
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_name : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_name : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="电话"
                            >
                                {getFieldDecorator('edit_manufacturer_contact_phone', {
                                    rules: [{
                                        required: true, message: '请输入你的电话',
                                    }],
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_phone : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_phone : ''} style={{ width: 200 }} />
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
                                {getFieldDecorator('edit_manufacturer_contact_sex', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_sex : ''
                                })(
                                    <RadioGroup  onChange={this.sexOnChange.bind(this)} >
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </RadioGroup>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="部门"
                            >
                                {getFieldDecorator('edit_manufacturer_contact_department', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_department : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_department : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="职务"
                            >
                                {getFieldDecorator('edit_manufacturer_contact_position', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_position : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_position : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="微信"
                            >
                                {getFieldDecorator('edit_manufacturer_contact_webchat', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_webchat : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_webchat : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="QQ"
                            >
                                {getFieldDecorator('edit_manufacturer_contact_qq', {
                                    initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_qq : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_qq : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="邮箱"
                            >
                                {getFieldDecorator('edit_manufacturer_contact_email', {
                                   initialValue:this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_email : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.contactClickedInfo ? this.state.contactClickedInfo.manufacturer_contact_email : ''} style={{ width: 200 }} />
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
                    title='修改银行信息'
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
                                {getFieldDecorator('edit_manufacturer_account_user', {
                                     initialValue:this.state.bankClickedInfo ? this.state.bankClickedInfo.manufacturer_account_user : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.bankClickedInfo ? this.state.bankClickedInfo.manufacturer_account_user : ''} style={{ width: 200 }} />
                                    </div>
                                    )}


                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户行"
                            >
                                {getFieldDecorator('edit_manufacturer_account_name', {
                                    initialValue:this.state.bankClickedInfo ? this.state.bankClickedInfo.manufacturer_account_name : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.bankClickedInfo ? this.state.bankClickedInfo.manufacturer_account_name : ''} style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户名"
                            >
                                {getFieldDecorator('edit_manufacturer_bank_account', {
                                    initialValue:this.state.bankClickedInfo ? this.state.bankClickedInfo.manufacturer_bank_account : ''
                                })(
                                    <div>
                                        <Input defaultValue={this.state.bankClickedInfo ? this.state.bankClickedInfo.manufacturer_bank_account : ''}  style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkEditBankInfo.bind(this)}>
                            确定
                            </Button>
                            <Button type="primary" className="login-form-button" onClick={this.handleCancelEditBankInfo.bind(this)}>
                                退出
                            </Button>
                        </div>
                    </Form>
                </Modal>

                <Modal
                    title={"删除银行信息"}
                    visible={this.state.delBankVisible}
                    onOk={this.handleOkDelBankInfo.bind(this)}
                    onCancel={this.handleCancelDelBankInfo.bind(this)}
                >
                    <span>确定要删除此银行信息吗?</span>
                </Modal>

                <Modal
                    title="删除生产厂家信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此银行信息吗?</span>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    //console.log('ssssssss', state.manufacturerInfo.bankInfoList)
   
    return {
        rowData: state.manufacturerInfo.data,
        //获取地区信息
        areaInfo:state.global.areaInfo,
        //联系人信息
        addContactors: state.manufacturerInfo.contactInfo,
        //查看银行信息
        addBankAccount: state.manufacturerInfo.bankInfoList,
        //删除生产厂家是否成功
        delCode: state.manufacturerInfo.delManuCode,
        editCode: state.manufacturerInfo.editManuCode
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //编辑生产厂家信息
        editManufacturerInfo: (params) => dispatch(actionCreater.editManufacturerInfoList(params)),
        //查询地区
        getArea: () => dispatch(actionCreater.getAreaInfo()),
        //查询厂家联系人信息
        manufacturerContactInfo: (param) => dispatch(actionCreater.manufacturerContactListInfo(param)),
        //查看银行账户信息
        getBankAccount: (param) => dispatch(actionCreater.getBankAccountInfo(param)),
        //删除生产厂家信息
        delManuInfo: (param) => dispatch(actionCreater.delManuInfoList(param)),
        //获取生产厂家信息
        getManufacturerInfo: (param) => dispatch(actionCreater.getManufacturerListInfo(param)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ManufacturerOperationModel))