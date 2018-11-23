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

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 9 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 9 },
            },
        };
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }

        const formItemLayout2 = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }

        return (
            <div>
                <span style={{ fontSize: 16, marginLeft: 8, cursor: 'pointer' }} onClick={this.toCheck.bind(this)}><Icon type="plus-circle-o" /></span>
                <Modal
                    title="商业回款单"
                    width='700px'
                    visible={this.state.checkInfo}
                    onOk={this.handleOkToCheck.bind(this)}
                    onCancel={this.handleCancelToCheck.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="回款数量"
                                >
                                    {getFieldDecorator('received_payments_number', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="回款金额"
                                >
                                    {getFieldDecorator('received_payments_acount', {
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
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout1}
                                    label="回款日期"
                                >
                                    {getFieldDecorator('received_payments_date', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <DatePicker />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                        </Row>
                        <br />
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
                                {...formItemLayout2}
                                label="备注"
                            >
                                {getFieldDecorator('reamrk', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                    </Form>
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