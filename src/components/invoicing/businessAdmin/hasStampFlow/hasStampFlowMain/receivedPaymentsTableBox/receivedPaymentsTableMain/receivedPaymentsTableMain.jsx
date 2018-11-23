import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker, Form, Input, Select, Button, Icon, Modal, Table, Card } from 'antd'
import CheckOutstandingFundInfo from './checkOutstandingFundInfo.jsx'
import CheckBackPayment from './checkBackPayment.jsx'
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
const data = [
    {
        key: 1,
        id: '1000001',
        letter_state: '未回款',
        system_number: 'CGD0000001',
    },
    {
        key: 2,
        letter_state: '已回款',
        system_number: 'KDG0000004',
    }
];

export class ReceivedPaymentsTableMain extends React.Component {

    constructor() {
        super();
        this.state = {
            paymentFormVisible: false,
            filteredInfo: null,
            documentsDetailVisible: false,
            data_arr: data
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

    //配置操作列中的操作
    renderColumns(value, record) {
        if (record.letter_state == '未回款') {
            return (
                <CheckOutstandingFundInfo />
            );
        } else if (record.letter_state == '已回款') {
            return (
                <CheckBackPayment />
            );
        }
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


        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            width: 100
        },
        {
            title: '单据状态',
            dataIndex: 'letter_state',
            key: 'letter_state   ',
            width: 150,
            filters: [
                { text: '未回款', value: '未回款' },
                { text: '已回款', value: '已回款' },
            ],
            onFilter: (value, record) => record.letter_state.indexOf(value) === 0
        },
        {
            title: '系统单号',
            width: 120,
            dataIndex: 'system_number',
            key: 'system_number',
        },
        {
            title: '药品',
            width: 120,
            dataIndex: 'medicine',
            key: 'medicine',
        },
        {
            title: '计量单位',
            width: 100,
            dataIndex: 'measurement_unit',
            key: 'measurement_unit',
        },
        {
            title: '剂型',
            width: 100,
            dataIndex: 'drug_type',
            key: 'drug_type',
        },
        {
            title: '规格',
            dataIndex: 'drug_format',
            key: 'drug_format',
            width: 100,
        },
        {
            title: '生产厂家',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
            width: 120
        },
        {
            title: '总付款金额',
            dataIndex: 'total_payment_amount',
            key: 'total_payment_amount',
            width: 120
        },
        {
            title: '待付金额',
            dataIndex: 'need_payment_amount',
            key: 'need_payment_amount',
            width: 120
        },
        {
            title: '付款金额',
            dataIndex: 'payment_amount',
            key: 'payment_amount',
            width: 120
        },
        {
            title: '付款日期',
            dataIndex: 'payment_date',
            key: 'payment_date',
            width: 120
        },
        {
            title: '付款账户明细',
            dataIndex: 'payment_account_details',
            key: 'payment_account_details',
            width: 120
        },
        {
            title: '买货数量',
            dataIndex: 'quantity_purchased',
            key: 'quantity_purchased',
            width: 120
        },
        {
            title: '买货单价',
            dataIndex: 'unit_price',
            key: 'unit_price',
            width: 120
        },
        {
            title: '采购日期',
            dataIndex: 'purchase_date',
            key: 'purchase_date',
            width: 120
        },
        {
            title: '开票公司',
            dataIndex: 'make_invoice_company',
            key: 'make_invoice_company',
            width: 120
        },
        {
            title: '创建日期',
            dataIndex: 'create_time',
            key: 'create_time',
            width: 120
        },
        {
            title: '创建人',
            dataIndex: 'creater',
            key: 'creater',
            width: 120
        },
        {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
            width: 200
        },
        {
            title: '操作',
            dataIndex: 'investment_operation',
            key: 'investment_operation',
            width: 120,
            fixed: 'right',
            render: (value, record) => this.renderColumns(value, record)
        }];

        return (
            <div className='botLine'>
                <Table columns={columns} dataSource={data} onChange={this.getDropDownVisible.bind(this)} scroll={{ x: '240%' }} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ReceivedPaymentsTableMain))