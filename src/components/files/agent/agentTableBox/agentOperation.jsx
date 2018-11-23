import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table } from 'antd'
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
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

    constructor() {
        super();
        this.state = {
            addAgentVisible: false,
            addBankInfoVisible: false,
            delAgentVisible: false
        }
    }

    componentWillMount() {

    }

    /**
     * 添加代理商信息方法组
     */
    addAgent() {
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

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
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
        this.setState({
            delAgentVisible: false
        })
    }

    handleCancelDelAgent() {
        this.setState({
            agentModelVisible: false
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
                    title="添加代理商"
                    width='720px'
                    visible={this.state.addAgentVisible}
                    onOk={this.handleOkAddAgent.bind(this)}
                    onCancel={this.handleCancelAddAgent.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="代理商名称"
                                >
                                    {getFieldDecorator('agent_name', {
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
                                    label="招商人员"
                                >
                                    {getFieldDecorator('investment_personnel', {
                                        rules: [{
                                            required: true
                                        }],
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
                            <FormItem
                                {...formItemLayout1}
                                label="所属地区"
                            >
                                {getFieldDecorator('region', {

                                })(
                                    <div>
                                        <Cascader options={options} onChange={onChange} placeholder="请选择所属地区" style={{ width: 300 }} />
                                    </div>
                                    )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout1}
                                label="公司地址"
                            >
                                {getFieldDecorator('compony_address', {

                                })(
                                    <div>
                                        <Input placeholder="请输入公司地址" />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                        <br />
                        {/* 第二层 */}
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="联系人姓名"
                                >
                                    {getFieldDecorator('contacts_name', {
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
                                    label="联系人性别"
                                >
                                    {getFieldDecorator('contacts_sex', {

                                    })(
                                        <div>
                                            <label><input type="radio" name='radio1' value="1" checked />男 </label>
                                            <label><input type="radio" name='radio1' value="2" />女 </label>
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="手机号码"
                                >
                                    {getFieldDecorator('contacts_telphone', {
                                        rules: [{
                                            required: true, message: '手机号码',
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
                                    label="身份证号码"
                                >
                                    {getFieldDecorator('IDCard', {

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
                                    label="固定电话"
                                >
                                    {getFieldDecorator('landline_telephone', {
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
                                    label="传真"
                                >
                                    {getFieldDecorator('FAX', {

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
                                    label="微信"
                                >
                                    {getFieldDecorator('contacts_weixin', {
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
                                    label="邮箱"
                                >
                                    {getFieldDecorator('contacts_email', {

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
                                    label="QQ号"
                                >
                                    {getFieldDecorator('contactsQQ', {
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} />
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
                                    <Table dataSource={data_manufacturer_bankInfo} border={true}>
                                        <Column
                                            title="开户行"
                                            dataIndex="deposit_bank"
                                            key="deposit_bank"
                                        />
                                        <Column
                                            title="开户名"
                                            dataIndex="deposit_name"
                                            key="deposit_name"
                                        />
                                        <Column
                                            title="银行类型"
                                            dataIndex="bank_type"
                                            key="bank_type"
                                        />
                                        <Column
                                            title="账号"
                                            dataIndex="account_number"
                                            key="account_number"
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
                                        {getFieldDecorator('creater', {

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
                                    {getFieldDecorator('remark', {

                                    })(
                                        <div>
                                            <input type='textarea' className='my_textarea_style' />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                        </div>
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
                                {getFieldDecorator('account_number', {
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
                                {getFieldDecorator('deposit_bank', {
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
                    title={"删除信息"}
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
    return {
        //visible: state.inventory.checkOutVisible
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //openModalBox: (val) => dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AgentOperation))