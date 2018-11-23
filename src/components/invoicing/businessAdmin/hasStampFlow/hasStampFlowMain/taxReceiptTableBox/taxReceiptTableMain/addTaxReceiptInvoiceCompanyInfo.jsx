import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Table, Tabs, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class addTaxReceiptInvoiceCompanyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInfo: false,
            componyInfoVisible: false,
            paymentAccountVisible: false
        }
    }
    /**
     * 查看对话框方法组
     */
    toCheck() {
        this.setState({
            checkInfo: true
        })
    }

    handleOkToCheck() {
        this.setState({
            checkInfo: false
        })
    }

    handleCancelToCheck() {
        this.setState({
            checkInfo: false
        })
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name
        })
    }

    /**
     * 付款账号对话框方法组
     */
    showPaymentAccountInfo() {
        this.setState({
            paymentAccountVisible: true
        })
    }

    handleOkShowBankAcount() {
        this.setState({
            paymentAccountVisible: false
        })
    }

    handleCancelBankAcount() {
        this.setState({
            paymentAccountVisible: false
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 9 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 9 },
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
                xs: { span: 12 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 9 },
            },
        }

        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            width: 100
        },
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date   ',
            width: 150
        },
        {
            title: '操作人',
            dataIndex: 'creater',
            key: 'creater',
            width: 100
        },
        {
            title: '状态',
            width: 100,
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: '备注',
            width: 150,
            dataIndex: 'remark',
            key: 'remark',
        }];

        const data = [
            {
                key: 1,
                id: 1,
                date: '2017-08-05',
                creater: '小方',
                state: '已送审',
                remark: '麻烦大钢进行审批'
            },
            {
                key: 2,
                id: 2,
                date: '2017-08-05',
                creater: '陈刚',
                state: '已通过',
                remark: '无'
            }
        ];

        const columns_compony = [
            {
                title: '编号',
                dataIndex: 'NO',
                key: 'NO',
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            },
        ]

        const data_compony = [
            {
                keyId: 1,
                NO: '100001',
                name: '北京康辰药业有限公司'
            },
            {
                keyId: 2,
                NO: '100002',
                name: '浙江珍诚医药在线股份有限公司'
            }]

        const columns_bank_list=[
            {
                title: '开户行',
                dataIndex: 'account_bank',
                key: 'account_bank',
            },
            {
                title: '开户名',
                dataIndex: 'account_name',
                key: 'account_name',
            },
            {
                title: '账号',
                dataIndex: 'account_number',
                key: 'account_number',
            },
        ]   
        const data_bank_list=[
            {
                key:1,
            },
        ]
        return (
            <div>
                <span style={{ fontSize: 16, marginLeft: 8, cursor: 'pointer' }} onClick={this.toCheck.bind(this)}><Icon type="plus-circle-o" /></span>
                <Modal
                    title="添加发票信息单"
                    width='700px'
                    visible={this.state.checkInfo}
                    onOk={this.handleOkToCheck.bind(this)}
                    onCancel={this.handleCancelToCheck.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Row className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="申请开票数量"
                            >
                                {getFieldDecorator('medicine_name', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <Input style={{ width: 200 }} />
                                    )}
                            </FormItem>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开票单价"
                                >
                                    {getFieldDecorator('invoiced_unit_price', {
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
                                    label="申请开票金额"
                                >
                                    {getFieldDecorator('medicine_format', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 180 }} defaultValue="500.00" />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="税价"
                                >
                                    {getFieldDecorator('tax_price', {
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
                                    label="税额"
                                >
                                    {getFieldDecorator('medicine_format', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 180 }} defaultValue="500.00" />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />

                        <Row className='botLine'>
                            <FormItem
                                {...formItemLayout2}
                                label="付款账号"
                            >
                                {getFieldDecorator('payment_account', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }}
                                            readOnly
                                            placeholder={this.state.name}
                                            prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                onClick={this.showPaymentAccountInfo.bind(this)}><Icon type="edit" /></span>} />
                                    </div>
                                    )}
                            </FormItem>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开户名"
                                >
                                    {getFieldDecorator('account_name', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            浙江英特
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开户行"
                                >
                                    {getFieldDecorator('account_bank', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            中国银行西溪支行
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>

                <Modal
                    title="银行账户列表"
                    visible={this.state.paymentAccountVisible}
                    onOk={this.handleOkShowBankAcount.bind(this)}
                    onCancel={this.handleCancelBankAcount.bind(this)}
                >
                    <Table columns={columns_bank_list} dataSource={data_bank_list} onRowClick={this.rowClick.bind(this)} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(addTaxReceiptInvoiceCompanyInfo))