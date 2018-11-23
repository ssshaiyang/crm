import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker, Form, Input, Select, Button, Icon, Modal, Table, Card } from 'antd'
import AddInvoiceCompanyInfo from './addInvoiceCompanyInfo.jsx'
import CheckPending from '../../purchaseTableBox/purchaseTableMain/checkPending.jsx'
import CheckInfo from '../../purchaseTableBox/purchaseTableMain/checkInfo.jsx'
import Refused from '../../purchaseTableBox/purchaseTableMain/refused.jsx'
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
const data = [
    {
        key: 1,
        sid: '1000001',
        document_status: '未入库',
        system_number: 'CGD0000001',
        // drug: '我的申请',
        // drug_type: '待付款',
        // drug_format: '20170826004',
        // manufacturer: '2500.00',
        // quantity_purchased: '2017-07',
        // unit_price: '2017-08',
        // purchase_date: '大钢',
        // create_time: 123456789,
        // creater: '1111',
        // remark:''
    },
    {
        key: 2,
        document_status: '已入库',
        approval_status: '审批中',
        assessment_type: '我的申请'
    },
    {
        key: 3,
        document_status: '已入库',
        approval_status: '已通过',
        assessment_type: '待我审核',
    },
    {
        key: 4,
        document_status: '已入库',
        approval_status: '已拒绝',
        assessment_type: '我已审核',
    },
    {
        key: 5,
        document_status: '已破损',
        approval_status: '审批中',
        assessment_type: '我的申请',
    },
];

export class InvoiceCompanyTableMain extends React.Component {

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
        if (record.approval_status == '待审核') {
            return (
                < CheckPending />
            );
        } else if (record.approval_status == '审批中') {
            return (
                <CheckInfo />
            );
        } else if (record.approval_status == '已通过') {
            return (
                <CheckInfo />
            );
        } else if (record.approval_status == '已拒绝') {
            return (
                <Refused />
            );
        } else if (record.letter_state == '未入库') {
            return (
                <AddInvoiceCompanyInfo />
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
            dataIndex: 'document_status',
            key: 'document_status   ',
            width: 150,
            filters: [
                { text: '未入库', value: '未入库' },
                { text: '已入库', value: '已入库' },
                { text: '已破损', value: '已破损' },
            ],
            onFilter: (value, record) => record.document_status.indexOf(value) === 0
        },
        {
            title: '审批状态',
            dataIndex: 'approval_status',
            key: 'approval_status   ',
            width: 150,
            filters: [
                { text: '待审核', value: '待审核' },
                { text: '审核中', value: '审核中' },
                { text: '已通过', value: '已通过' },
                { text: '已拒绝', value: '已拒绝' },
            ],
            onFilter: (value, record) => record.approval_status.indexOf(value) === 0
        },
        {
            title: '审核类型',
            dataIndex: 'assessment_type',
            key: 'assessment_type',
            width: 150,
            filters: [
                { text: '我的申请', value: '我的申请' },
                { text: '到我审核', value: '到我审核' },
                { text: '我已审核', value: '我已审核' },
            ],
            onFilter: (value, record) => record.assessment_type.indexOf(value) === 0
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(InvoiceCompanyTableMain))