import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker, Form, Input, Select, Button, Icon, Modal, Table } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
}

const data_paymentForm = [{
    key: 1,
    salesman: '业务员1',
    business_month: '2017-08',
    unpaid_amount: 7000,
    paid_month: '2017-09',
},
{
    key: 2,
    salesman: '业务员1',
    business_month: '2017-08',
    unpaid_amount: 7000,
    paid_month: '2017-09',
},
{
    key: 3,
    salesman: '业务员2',
    business_month: '2017-08',
    unpaid_amount: 7000,
    paid_month: '2017-09',
}]

const data_marketing_information = [
    {
        id: 1,
        marketing_information_id: 1,
        product_name: '生血宝合计',
        product_size: '500ml/瓶',
        product_chemicals: '药剂',
        measurement_unit: '瓶',
        manufacturer: '幸福药业'
    },
    {
        id: 2,
        marketing_information_id: 2,
        product_name: '生血宝合计',
        product_size: '500ml/瓶',
        product_chemicals: '盒装',
        measurement_unit: '盒',
        manufacturer: '幸福药业'
    },
    {
        id: 3,
        marketing_information_id: 3,
        product_name: '生血宝合计',
        product_size: '500ml/瓶',
        product_chemicals: '药剂',
        measurement_unit: '瓶',
        manufacturer: '幸福药业'
    }
]


export class AgencyTop extends React.Component {

    constructor() {
        super();
        this.state = {
            paymentFormVisible: false,
            filteredInfo: null,
            sortedInfo: null
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    //select框选择值
    handleChangeApprove(approveValue) {
        //console.log(`selected ${value}`);
    }
    handleChangePro(proValue) {
        //console.log(`selected ${value}`);
    }

    //当表单点击确认按钮时获取表单值
    handleSubmitProCost() {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    //获取审核选择类型
    handleChangeAssessmentType(value) {

    }

    handleChangeState() {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    /**
     * 添加支付单对话框方法组
     */
    addPaymentForm() {
        this.setState({
            paymentFormVisible: true
        })
    }

    handleOkPaymentFormInfo() {
        this.setState({
            paymentFormVisible: false
        })
    }

    handleCancelPaymentFormInfo() {
        this.setState({
            paymentFormVisible: false
        })
    }

    handleSubmitPaymentForm() {

    }

    //获取时隔月份的值
    handleChangePaymentInterval(value) {

    }

    /**
     * table表格筛选方法
     * @param {*} pagination 
     * @param {*} filters 
     * @param {*} sorter 
     */
    getCheckBoxAllValue(pagination, filters) {
        console.log('Various parameters', pagination, filters);
        this.setState({
            filteredInfo: filters,
        });
    }

    clearFilters() {
        this.setState({ filteredInfo: null });
    }
    clearAll() {
        this.setState({
            filteredInfo: null,
        });
    }

    showProtocolModel() {

    }

    /**
     * 招商支付table方法组
     */
    getInvestmentPaymentAllValue(pagination, filters) {
        // //console.log('Various parameters', pagination, filters);
        // this.setState({
        //     filteredInfo: filters,
        // });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let { filteredInfo } = this.state;
        filteredInfo = filteredInfo || {};
        const formItemLayout = {
            labelCol: {
                xs: { span: 15 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 12 },
            },
        };
        const formTimeLayout1 = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 14 },
            },
        }
        const formTimeLayout2 = {
            labelCol: {
                xs: { span: 5 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 14 },
            },
        }

        const columns_paymentForm = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key',
        }, {
            title: '付款间隔',
            dataIndex: 'payment_interval',
            key: 'payment_interval',
            render: (text, record) => (
                <Select
                    placeholder="请选择隔一个月"
                    optionFilterProp="children"
                    style={{ width: 82 }}
                    onChange={this.handleChangePaymentInterval.bind(this)}
                >
                    <Option value="1">隔一个月</Option>
                    <Option value="2">隔二个月</Option>
                    <Option value="3">隔三个月</Option>
                    <Option value="4">隔四个月</Option>
                </Select>
            ),
        }, {
            title: '业务员',
            dataIndex: 'salesman',
            key: 'salesman',
            filters: [
                { text: '业务员1', value: '业务员1' },
                { text: '业务员2', value: '业务员2' },
            ],
            onFilter: (value, record) => record.salesman.indexOf(value) === 0,
        },
        {
            title: '业务月份',
            dataIndex: 'business_month',
            key: 'business_month',
        },
        {
            title: '未支付金额',
            dataIndex: 'unpaid_amount',
            key: 'unpaid_amount',
        },
        {
            title: '支付月份',
            dataIndex: 'paid_month',
            key: 'paid_month',
        }];

        const columns_marketing_information = [
            {
                title: '序号',
                dataIndex: 'marketing_information_id',
                key: 'marketing_information_id',
            },
            {
                title: '产品名称',
                dataIndex: 'product_name',
                key: 'product_name',
            },
            {
                title: '产品规格',
                dataIndex: 'product_size',
                key: 'product_size',
            },
            {
                title: '药剂类型',
                dataIndex: 'product_chemicals ',
                key: 'product_chemicals',
            },
            {
                title: '计量单位',
                dataIndex: 'measurement_unit ',
                key: 'measurement_unit',
            },
            {
                title: '生产厂家',
                dataIndex: 'manufacturer ',
                key: 'manufacturer',
            },
        ]

        return (
            <div>
                <Form onSubmit={this.handleSubmitProCost.bind(this)}>
                    <Row className='botLine'>
                        <Col span={14}>
                            <Row>
                                <Col span={12}>
                                    <FormItem
                                        {...formTimeLayout1}
                                        label="起始日期"
                                    >
                                        {getFieldDecorator('time_start', {
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formTimeLayout1}
                                        label="终止日期"
                                    >
                                        {getFieldDecorator('time_end', {
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Search
                                placeholder="输入代理商名称"
                                onSearch={this.getSearchValue.bind(this)}
                                style={{ width: 150 }}
                            />
                        </Col>
                        <Col span={2}>
                            <Button className='mainButton' style={{ marginLeft: 15 }} onClick={this.addPaymentForm.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 14 }} /></Button>
                        </Col>
                    </Row>
                </Form>

                <Modal
                    title="添加支付单"
                    width='1100px'
                    visible={this.state.paymentFormVisible}
                    onOk={this.handleOkPaymentFormInfo.bind(this)}
                    onCancel={this.handleCancelPaymentFormInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmitPaymentForm.bind(this)}>
                        <Row className='botLine'>
                            <Col span={12}>
                                <Row>
                                    <Col span={12}>
                                        <FormItem
                                            {...formTimeLayout1}
                                            label="起始日期"
                                        >
                                            {getFieldDecorator('time_start', {
                                            })(
                                                <DatePicker />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem
                                            {...formTimeLayout2}
                                            label="至"
                                        >
                                            {getFieldDecorator('time_end', {
                                            })(
                                                <DatePicker />
                                                )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <Search
                                    placeholder="输入代理商名称"
                                    onSearch={this.getSearchValue.bind(this)}
                                />
                            </Col>
                            <Col span={1}></Col>
                        </Row>
                        <br />
                        <div>
                            <Row className='botLine'>
                                <Row>
                                    <Col span={12}><div className='paymentForm'>选择需要支付的业务月份</div></Col>
                                    <Col span={1}></Col>
                                    <Col span={11}><div className='paymentForm'>销售信息列表</div></Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Table rowKey={record => record.key} rowSelection={rowSelection} columns={columns_paymentForm} dataSource={data_paymentForm} onChange={this.getCheckBoxAllValue.bind(this)} />
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Table rowKey={record => record.id} columns={columns_marketing_information} dataSource={data_marketing_information} onChange={this.getCheckBoxAllValue.bind(this)} />
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                        <br />
                        <div className='sales_volume'>
                            <div className='botLine'>
                                <table cellSpacing="0" cellPadding="0" style={{ width: '98%', marginLeft: 5, marginBottom: 10 }} className='table_border'>
                                    <tr>
                                        <td className='td_border'>业务员</td>
                                        <td className='td_border'>联系方式</td>
                                        <td className='td_border'>开户银行</td>
                                        <td className='td_border'>业务月份</td>
                                        <td className='td_border'>需支付金额</td>
                                        <td className='td_border'>支付月份</td>
                                    </tr>
                                    <tr>
                                        <td className='td_border'>小A</td>
                                        <td className='td_border'>1234567890</td>
                                        <td className='td_border'>622222212313213</td>
                                        <td className='td_border'>2017-08</td>
                                        <td className='td_border'>24600</td>
                                        <td className='td_border'>2017-10</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Form>
                </Modal>
            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AgencyTop))