import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker, Form, Input, Select, Button, Icon, Modal, Table, Card } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;

const data = [
    {
        key: 1,
        investment_assessment_id: 1,
        investment_assessment_type: '我的申请',
        investment_assessment_state: '待付款',
        data_number: '20170826004',
        funds_paid: '2500.00',
        investment_business_month: '2017-07',
        investment_pay_month: '2017-08',
        investment_agent: '大钢',
        investment_tel: 123456789,
        investment_operation: '1111'
    },
    {
        key: 2,
        investment_assessment_id: 2,
        investment_assessment_type: '待我审核',
        investment_assessment_state: '已付款',
        data_number: '20170826004',
        funds_paid: '2500.00',
        investment_business_month: '2017-07',
        investment_pay_month: '2017-08',
        investment_agent: '大钢',
        investment_tel: 123456789,
        investment_operation: '1111'
    },
    {
        key: 3,
        investment_assessment_id: 3,
        investment_assessment_type: '我已审核',
        investment_assessment_state: '已付款',
        data_number: '20170826004',
        funds_paid: '2500.00',
        investment_business_month: '2017-07',
        investment_pay_month: '2017-08',
        investment_agent: '大钢',
        investment_tel: 123456789,
        investment_operation: '1111'
    },
];

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


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
}

export class AgencyBody extends React.Component {

    constructor() {
        super();
        this.state = {
            paymentFormVisible: false,
            filteredInfo: null,
            documentsDetailVisible: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }


    /**
     * table表格筛选方法
     * @param {*} pagination 
     * @param {*} filters 
     * @param {*} sorter 
     */
    getDropDownVisible(pagination, filters) {
        //console.log('Various parameters', pagination, filters);
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


    /**
     * 招商支付table方法组
     */
    getInvestmentPaymentAllValue(pagination, filters) {
        // //console.log('Various parameters', pagination, filters);
        // this.setState({
        //     filteredInfo: filters,
        // });
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

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    handleSubmitPaymentForm() {

    }

    //获取时隔月份的值
    handleChangePaymentInterval(value) {

    }

    /**
     * 单据详情对话框方法组
     */
    showDocumentsDetail() {
        this.setState({
            documentsDetailVisible: true
        })
    }

    handleOkDocumentsDetail() {
        this.setState({
            documentsDetailVisible: false
        })
    }

    handleCancelDocumentsDetail() {
        this.setState({
            documentsDetailVisible: false
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let { filteredInfo } = this.state;
        filteredInfo = filteredInfo || {};
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

        const columns = [{
            title: '序号',
            dataIndex: 'investment_assessment_id',
            key: 'investment_assessment_id',
        },
        {
            title: '审核类型',
            dataIndex: 'investment_assessment_type',
            key: 'investment_assessment_type',
            filters: [
                { text: '我的申请', value: '我的申请' },
                { text: '待我审核', value: '待我审核' },
                { text: '我已审核', value: '我已审核' },
            ],
            onFilter: (value, record) => record.investment_assessment_type.indexOf(value) === 0
        },
        {
            title: '状态',
            dataIndex: 'investment_assessment_state',
            key: 'investment_assessment_state',
            filters: [
                { text: '待付款', value: '待付款' },
                { text: '已付款', value: '已付款' },
            ],
            onFilter: (value, record) => record.investment_assessment_state.indexOf(value) === 0
        },
        {
            title: '数据编号',
            dataIndex: 'data_number',
            key: 'data_number',
        },
        {
            title: '待支付资金',
            dataIndex: 'funds_paid',
            key: 'funds_paid',
        },
        {
            title: '业务月份',
            dataIndex: 'investment_business_month',
            key: 'investment_business_month',
        },
        {
            title: '支付月份',
            dataIndex: 'investment_pay_month',
            key: 'investment_pay_month',
        },
        {
            title: '详情',
            dataIndex: 'investment_pay_detail',
            key: 'investment_pay_detail',
            render: (text, record) => <a onClick={this.showDocumentsDetail.bind(this)}>查看</a>
        },
        {
            title: '代理商',
            dataIndex: 'investment_agent',
            key: 'investment_agent',
        },
        {
            title: '联系方式',
            dataIndex: 'investment_tel',
            key: 'investment_tel',
        },
        {
            title: '操作',
            dataIndex: 'investment_operation',
            key: 'investment_operation',
            render: (text, record) => (
                <div>
                    <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                        onClick={this.addPaymentForm.bind(this)}><Icon type="edit" /></span>
                </div>
            )

        }];

        const columns_detail = [
            {
                title: '序号',
                dataIndex: 'detail_id',
                key: 'detail_id',
            },
            {
                title: '产品名称',
                dataIndex: 'detail_product_name',
                key: 'detail_product_name',
            },
            {
                title: '产品规格',
                dataIndex: 'detail_product_type',
                key: 'detail_product_type',
            },
            {
                title: '产品剂型',
                dataIndex: 'detail_product_dose',
                key: 'detail_product_dose',
            },
            {
                title: '计量单位',
                dataIndex: 'detail_measurement_unit',
                key: 'detail_measurement_unit',
            },
            {
                title: '生产厂家',
                dataIndex: 'detail_manufacturer',
                key: 'detail_manufacturer',
            },
            {
                title: '销售医院',
                dataIndex: 'detail_sales_hospital',
                key: 'detail_sales_hospital',
            },
            {
                title: '政策',
                dataIndex: 'detail_policy',
                key: 'detail_policy',
            },
            {
                title: '付款月销量',
                dataIndex: 'detail_monthly_payment_sales',
                key: 'detail_monthly_payment_sales',
            },
            {
                title: '销售单价',
                dataIndex: 'detail_price',
                key: 'detail_price',
            },
            {
                title: '销售总额',
                dataIndex: 'gross_sales',
                key: 'gross_sales',
            },
            {
                title: '付款月支付金额',
                dataIndex: 'detail_payment_amount',
                key: 'detail_payment_amount',
                render: (text, record) => (
                    <div style={{ color: 'red' }}>{text}</div>
                )
            },
        ];

        const data_detail = [
            {
                detailkey: 1,
                detail_id: 1,
                detail_product_name: '生血宝合剂',
                detail_product_type: '500ml/瓶',
                detail_product_dose: '药剂',
                detail_measurement_unit: '瓶',
                detail_manufacturer: '幸福制药',
                detail_sales_hospital: '杭州117武警医院',
                detail_policy: '5%',
                detail_monthly_payment_sales: 5000,
                detail_price: 20.00,
                gross_sales: 100000.00,
                detail_payment_amount: 5000
            },
            {
                detailkey: 2,
                detail_id: 2,
                detail_product_name: '生血宝合剂',
                detail_product_type: '500ml/瓶',
                detail_product_dose: '药剂',
                detail_measurement_unit: '瓶',
                detail_manufacturer: '幸福制药',
                detail_sales_hospital: '杭州117武警医院',
                detail_policy: '5%',
                detail_monthly_payment_sales: 5000,
                detail_price: 20.00,
                gross_sales: 100000.00,
                detail_payment_amount: 3000
            },
            {
                detailkey: 3,
                detail_id: 3,
                detail_product_name: '生血宝合剂',
                detail_product_type: '500ml/瓶',
                detail_product_dose: '药剂',
                detail_measurement_unit: '瓶',
                detail_manufacturer: '幸福制药',
                detail_sales_hospital: '杭州117武警医院',
                detail_policy: '5%',
                detail_monthly_payment_sales: 5000,
                detail_price: 20.00,
                gross_sales: 100000.00,
                detail_payment_amount: 2000
            },
            {
                detailkey: 4,
                detail_id: 4,
                detail_product_name: '生血宝合剂',
                detail_product_type: '500ml/瓶',
                detail_product_dose: '药剂',
                detail_measurement_unit: '瓶',
                detail_manufacturer: '幸福制药',
                detail_sales_hospital: '杭州117武警医院',
                detail_policy: '5%',
                detail_monthly_payment_sales: 5000,
                detail_price: 20.00,
                gross_sales: 100000.00,
                detail_payment_amount: 4000
            },
            {
                detailkey: 5,
                detail_id: 5,
                detail_product_name: '生血宝合剂',
                detail_product_type: '500ml/瓶',
                detail_product_dose: '药剂',
                detail_measurement_unit: '瓶',
                detail_manufacturer: '幸福制药',
                detail_sales_hospital: '杭州117武警医院',
                detail_policy: '5%',
                detail_monthly_payment_sales: 5000,
                detail_price: 20.00,
                gross_sales: 100000.00,
                detail_payment_amount: 5000
            },
        ]
        return (
            <div className='botLine'>
                <Table columns={columns} dataSource={data} onChange={this.getDropDownVisible.bind(this)} />
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
                                        <Table rowKey={record => record.key} rowSelection={rowSelection} columns={columns_paymentForm} dataSource={data_paymentForm} onChange={this.getDropDownVisible.bind(this)} />
                                    </Col>
                                    <Col span={1}></Col>
                                    <Col span={11}>
                                        <Table rowKey={record => record.id} columns={columns_marketing_information} dataSource={data_marketing_information} onChange={this.getDropDownVisible.bind(this)} />
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

                <Modal
                    title="添加支付单"
                    width='1000px'
                    visible={this.state.documentsDetailVisible}
                    onOk={this.handleOkDocumentsDetail.bind(this)}
                    onCancel={this.handleCancelDocumentsDetail.bind(this)}
                >
                    <Card title='单据详情'>
                        <Table rowKey={record => record.detailkey} columns={columns_detail} dataSource={data_detail} onChange={this.getDropDownVisible.bind(this)} />
                    </Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AgencyBody))