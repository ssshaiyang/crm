import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, DatePicker, Radio, message } from 'antd'
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
            if (err) {
                return;
            }
        });
    }

    //点击确认修改联系人信息
    handleSubmitUpdateInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            //console.log('aaaaaaa', values)
            if (!err) {
                let editValue = {
                    manufacturer_contact_name: values.manufacturer_contact_name,
                    manufacturer_contact_sex: values.manufacturer_contact_sex,
                    manufacturer_contact_department: values.manufacturer_contact_department,
                    manufacturer_contact_position: values.manufacturer_contact_position,
                    manufacturer_contact_phone: values.manufacturer_contact_phone,
                    manufacturer_contact_qq: values.manufacturer_contact_qq,
                    manufacturer_contact_webchat: values.manufacturer_contact_webchat,
                    manufacturer_contact_email: values.manufacturer_contact_email
                }
                this.setState({
                    editManuInfoValue: editValue
                }, () => {

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
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
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
    delBankInfo() {
        this.setState({
            delBankVisible: true
        })
    }

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
                                            <Cascader options={options} onChange={onChange} placeholder="请选择所属地区" style={{ width: 300 }} />
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

                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.showContactsModel.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Table dataSource={this.props.contactInfo} onRowClick={this.rowClick.bind(this)} bordered={true}>
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
                                {getFieldDecorator('manufacturer_account', {

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
                                    <Table dataSource={this.props.bankInfoList} bordered={true}>
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
                                                <p>张三</p>
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
                                                <p>2017-05-25</p>
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
                                            <input value={this.props.data.manufacturer_remark} type='textarea' className='my_textarea_style' />
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
                    onOk={this.handleOkCompBankInfo.bind(this)}
                    onCancel={this.handleCancelCompBankInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('bank_id', {

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
                                {getFieldDecorator('deposit_bank', {

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
                                {getFieldDecorator('deposit_name', {
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
                                label="银行类型"
                            >
                                {getFieldDecorator('bank_type', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                    </Form>
                </Modal>

                <Modal
                    title='添加联系人'
                    visible={this.state.ContactsModelVisible}
                    onOk={this.handleOkAddContactsInfo.bind(this)}
                    onCancel={this.handleCancelAddContactsInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                            >
                                {getFieldDecorator('contact_name', {

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
                                {getFieldDecorator('contact_telphone', {

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
                                {getFieldDecorator('contact_sex', {
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
                                {getFieldDecorator('contact_deparment', {
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
                                {getFieldDecorator('contact_duty', {
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
                                {getFieldDecorator('contact_weixin', {
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
                                {getFieldDecorator('contact_QQ', {
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
                                {getFieldDecorator('contact_email', {
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
                    onOk={this.handleOkEditBankInfo.bind(this)}
                    onCancel={this.handleCancelEditBankInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('bank_id', {

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
                                {getFieldDecorator('deposit_bank', {

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
                                {getFieldDecorator('deposit_name', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="银行类型"
                            >
                                {getFieldDecorator('bank_type', {

                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
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
        areaInfo: state.manufacturerInfo.areaInfo,
        //联系人信息
        contactInfo: state.manufacturerInfo.contactInfo,
        //查看银行信息
        bankInfoList: state.manufacturerInfo.bankInfoList,
        //删除生产厂家是否成功
        delManuCode: state.manufacturerInfo.delManuCode,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //编辑生产厂家信息
        editManufacturerInfo: (param) => dispatch(actionCreater.editManufacturerInfoList(param)),
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