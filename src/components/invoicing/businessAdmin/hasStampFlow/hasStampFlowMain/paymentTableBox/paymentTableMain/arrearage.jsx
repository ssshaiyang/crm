import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Steps, Table, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Step = Steps.Step;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class CheckPending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentInfoVisible: false,
            paymentDetailVisible: false,
            bankInfoVisible: false,
            editInfoVisible: false
        }
    }

    /**
     * 添加付款信息方法组
     */
    addPaymentinfo() {
        this.setState({
            paymentInfoVisible: true
        })
    }
    handleOkPaymentInfo() {
        this.setState({
            paymentInfoVisible: false
        })
    }
    handleCancelPaymentInfo() {
        this.setState({
            paymentInfoVisible: false
        })
    }

    /**
     * 添加付款明细
     */
    addPaymentDetailinfo() {
        this.setState({
            paymentDetailVisible: true
        })
    }
    handleOkPaymentDetailInfo() {
        this.setState({
            paymentDetailVisible: false
        })
    }

    handleCancelPaymentDetailInfo() {
        this.setState({
            paymentDetailVisible: false
        })
    }

    /**
     * 添加银行账户对话框信息
     */
    showBankInfo() {
        this.setState({
            bankInfoVisible: true
        })
    }

    handleOkBanklInfo() {
        this.setState({
            bankInfoVisible: false
        })
    }
    handleCancelBanklInfo() {
        this.setState({
            bankInfoVisible: false
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    //获取输入付款金额值
    getValue(e) {
        //console.log('ssssss', e.target.value)
        this.setState({
            payment: e.target.value
        })
    }

    /**
     * 删除付款信息
     */
    delPaymentInfo() {
        this.setState({
            delPaymentInfoVisible: true
        })
    }

    handleOkDelPaymentInfo() {
        this.setState({
            delPaymentInfoVisible: false
        })
    }

    handleCancelDelPaymentInfo() {
        this.setState({
            delPaymentInfoVisible: false
        })
    }

    /**
     * 编辑对话框弹框方法组
     */
    toEdit() {
        this.setState({
            editInfoVisible: true
        })
    }

    handleOkEditInfo() {
        this.setState({
            editInfoVisible: false
        })
    }
    handleCancelEditInfo() {
        this.setState({
            editInfoVisible: false
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
        const columns = [{
            title: '开户行',
            dataIndex: 'bank_deposit',
            key: 'bank_deposit',
        },
        {
            title: '开户名',
            dataIndex: 'bank_deposit_name',
            key: 'bank_deposit_name   ',
        },
        {
            title: '银行类型',
            dataIndex: 'bank_type',
            key: 'bank_type',
        },
        {
            title: '账号',
            dataIndex: 'id',
            key: 'id',
        }];

        const data = [
            {
                key: 1,
                bank_deposit: '',
                bank_deposit_name: '',
                bank_type: '',
                id: '',
            },
            {
                key: 2,
                bank_deposit: '',
                bank_deposit_name: '',
                bank_type: '',
                id: '',
            }
        ];
        const columns_payment_detail = [
            {
                title: '账号',
                dataIndex: 'id',
                key: 'id',
                width: 100
            },
            {
                title: '开户行',
                dataIndex: 'deposit_bank',
                key: 'deposit_bank',
                width: 100
            },
            {
                title: '开户名',
                dataIndex: 'deposit_bank_name',
                key: 'deposit_bank_name',
                width: 100
            },
            {
                title: '银行类型',
                dataIndex: 'bank_type',
                key: 'bank_type',
                width: 100
            },
            {
                title: '金额',
                dataIndex: 'money',
                key: 'money',
                width: 100
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                width: 100,
                render: () => (
                    <div>
                        <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.toEdit.bind(this)}><Icon type="edit" /></span>
                        <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delPaymentInfo.bind(this)}><Icon type="delete" /></span>
                    </div>
                )
            },
        ]
        const data_payment_detail = [
            {
                key: 2,
                id: '',
                deposit_bank: '',
                deposit_bank_name: '',
                bank_type: '',
                money: ''
            },
        ]
        return (
            <div>
                <span style={{ fontSize: 16, marginRight: 8, marginLeft: 8, cursor: 'pointer' }} onClick={this.addPaymentinfo.bind(this)}><Icon type="plus-circle-o" /></span>
                <Modal
                    title="添加付款申请"
                    width='700px'
                    visible={this.state.paymentInfoVisible}
                    onOk={this.handleOkPaymentInfo.bind(this)}
                    onCancel={this.handleCancelPaymentInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开票公司"
                                >
                                    {getFieldDecorator('make_invoice_company', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input placeholder='' style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="付款日期"
                                >
                                    {getFieldDecorator('payment_date', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        < DatePicker />
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        <Row className='botLine'>
                            <Col span={24}>
                                <FormItem
                                    {...formItemLayout}
                                    label="付款金额"
                                >
                                    {getFieldDecorator('payment_number', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input placeholder='' style={{ width: 200 }} onBlur={this.getValue.bind(this)} />
                                        )}
                                </FormItem>
                            </Col>

                            <FormItem
                                {...formItemLayout}
                                label="付款明细"
                            >
                                {getFieldDecorator('payment_detail', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div style={{ fontSize: 18, color: '#01d9b8', marginLeft: 15, cursor: 'pointer' }}
                                        onClick={this.addPaymentDetailinfo.bind(this)}>
                                        <Icon type="plus-circle" />
                                    </div>
                                    )}
                            </FormItem>
                            <Col span={24}>
                                <Table columns={columns_payment_detail} dataSource={data_payment_detail}></Table>
                            </Col>
                        </Row>
                    </Form>
                </Modal>

                <Modal
                    title="添加银行账户"
                    visible={this.state.paymentDetailVisible}
                    onOk={this.handleOkPaymentDetailInfo.bind(this)}
                    onCancel={this.handleCancelPaymentDetailInfo.bind(this)}
                >
                    <Row className='botLine'>
                        <FormItem
                            {...formItemLayout}
                            label="付款账号"
                        >
                            {getFieldDecorator('payment_id', {
                                rules: [{
                                    required: true
                                }],
                            })(
                                <div>
                                    <Input style={{ width: 200 }}
                                        readOnly
                                        placeholder={this.state.payment_id}
                                        prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                            onClick={this.showBankInfo.bind(this)}><Icon type="edit" /></span>} />
                                </div>
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="付款金额"
                        >
                            {getFieldDecorator('pay_amount', {
                                rules: [{
                                    required: true
                                }],
                            })(
                                <Input placeholder='' style={{ width: 200 }} />
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
                                <Input placeholder='' style={{ width: 200 }} />
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="开户名"
                        >
                            {getFieldDecorator('deposit_bank_name', {
                                rules: [{
                                    required: true
                                }],
                            })(
                                <Input placeholder='' style={{ width: 200 }} />
                                )}
                        </FormItem>
                    </Row>
                </Modal>

                <Modal
                    title="银行账户列表"
                    visible={this.state.bankInfoVisible}
                    onOk={this.handleOkBanklInfo.bind(this)}
                    onCancel={this.handleCancelBanklInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={data}></Table>
                </Modal>

                <Modal
                    title="编辑银行账户"
                    visible={this.state.editInfoVisible}
                    onOk={this.handleOkEditInfo.bind(this)}
                    onCancel={this.handleCancelEditInfo.bind(this)}
                >
                    <Row className='botLine'>
                        <FormItem
                            {...formItemLayout}
                            label="付款账号"
                        >
                            {getFieldDecorator('payment_id', {
                                rules: [{
                                    required: true
                                }],
                            })(
                                <div>
                                    <Input style={{ width: 200 }}
                                        readOnly
                                        placeholder={this.state.payment_id}
                                        prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                            onClick={this.showBankInfo.bind(this)}><Icon type="edit" /></span>} />
                                </div>
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="付款金额"
                        >
                            {getFieldDecorator('pay_amount', {
                                rules: [{
                                    required: true
                                }],
                            })(
                                <Input placeholder='' style={{ width: 200 }} />
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
                                <Input placeholder='' style={{ width: 200 }} />
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="开户名"
                        >
                            {getFieldDecorator('deposit_bank_name', {
                                rules: [{
                                    required: true
                                }],
                            })(
                                <Input placeholder='' style={{ width: 200 }} />
                                )}
                        </FormItem>
                    </Row>
                </Modal>

                <Modal
                    title="删除付款信息"
                    visible={this.state.delPaymentInfoVisible}
                    onOk={this.handleOkDelPaymentInfo.bind(this)}
                    onCancel={this.handleCancelDelPaymentInfo.bind(this)}
                >
                    <Card>
                        你确认要删除此信息吗？
                    </Card>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CheckPending))