import React from 'react'
import { Form, Input, Row, Col, Button, Modal, Card, DatePicker, Icon, Table } from 'antd'
import {
    connect
} from 'react-redux'
import InvoiceCompanyTableBox from './invoiceCompanyTableBox/invoiceCompanyTableBox.jsx'
const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class InvoiceCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentInfoVisible: false
        }
    }

    //当表单点击确认按钮时获取表单值
    handleSubmitPayment() {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    /**
     * 添加付款信息方法组
     */
    addPaymentInfo() {
        this.setState({
            paymentInfoVisible: true
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
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
        return (
            <div className='purchase_top_container'>
                <div className='purchase_tip'>过票流程-开票公司入库</div>
                <Form onSubmit={this.handleSubmitPayment.bind(this)}>
                    <Row className='time'>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <FormItem
                                        {...formTimeLayout1}
                                        label="开始日期"
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
                        <Col span={10}></Col>
                        <Col span={2}></Col>
                    </Row>
                </Form>
                <InvoiceCompanyTableBox />
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(InvoiceCompany))