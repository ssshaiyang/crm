import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Table, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class CheckOutstandingFundInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editInfoVisible: false,
            checkInfoVisible: false
        }
    }

    /**
     * 编辑对话框模块方法组
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

    /**
     * 查看回款单信息方法组
     */
    checkInfo() {
        this.setState({
            checkInfoVisible: true
        })
    }

    handleOkCheckInfo() {
        this.setState({
            checkInfoVisible: false
        })
    }

    handleCancelCheckInfo() {
        this.setState({
            checkInfoVisible: false
        })
    }

    //根据判断条件把某些值制空
    isHasValue(value, record) {
        if (record.service_states == '采购') {
            //value = '';
        }
    }

    isHasCheckValue(value, record) {
        if (record.letter_states == '已付款') {
            //value = '';
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
     * 
     */

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
                sm: { span: 2 },
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
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '业务状态',
                dataIndex: 'service_states',
                key: 'service_states',
            },
            {
                title: '单据状态',
                dataIndex: 'letter_states',
                key: 'letter_states',
                render: (value, record) => this.isHasValue(value, record)
            },
            {
                title: '审批状态',
                dataIndex: 'approval_states',
                key: 'approval_states',
                render: (value, record) => this.isHasCheckValue(value, record)
            },
            {
                title: '系统单号',
                dataIndex: 'system_number',
                key: 'system_number',
            },
            {
                title: '创建日期',
                dataIndex: 'create_date',
                key: 'create_date',
            },
            {
                title: '创建人',
                dataIndex: 'creater',
                key: 'creater',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.checkInfo.bind(this)}><Icon type="search" /></span>
                )
            }];

        const data = [
            {
                key: 1,
                id: 1,
                service_states: '采购',
                letter_states: '11111',
                approval_states: '已通过'
            },
            {
                key: 2,
                id: 2,
                service_states: '付款',
                letter_states: '付款申请',
                approval_states: '待审批'
            },
            {
                key: 3,
                id: 3,
                service_states: '付款',
                letter_states: '已付款',
                approval_states: '1111111'
            }];
        return (
            <div>
                <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.toEdit.bind(this)}><Icon type="search" /></span>
                <Modal
                    title={"[" + {} + "]" + "的关联表单"}
                    width='700px'
                    visible={this.state.editInfoVisible}
                    onOk={this.handleOkEditInfo.bind(this)}
                    onCancel={this.handleCancelEditInfo.bind(this)}
                >
                    <div className='botLine'>
                        <Table columns={columns} dataSource={data}  />
                    </div>
                </Modal>

                <Modal
                    title="回款单"
                    width='700px'
                    visible={this.state.checkInfoVisible}
                    onOk={this.handleOkCheckInfo.bind(this)}
                    onCancel={this.handleCancelCheckInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmitPayment.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="回款日期"
                                >
                                    {getFieldDecorator('return_date', {
                                    })(
                                        <div>2017-08-20</div>
                                        )}
                                </FormItem>

                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="回款金额"
                                >
                                    {getFieldDecorator('time_end', {
                                    })(
                                        <div>10000.00 元</div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="回款账号"
                                >
                                    {getFieldDecorator('payment_Id', {
                                    })(
                                        <div>64210000111888222</div>
                                        )}
                                </FormItem>

                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="回款单附件"
                                >
                                    {getFieldDecorator('return_sheet_cash', {
                                    })(
                                        <a href='#'>回款单附件.rar</a>
                                        )}
                                </FormItem>
                            </Col>
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
                                {...formItemLayout1}
                                label="备注"
                            >
                                {getFieldDecorator('reamrk', {

                                })(
                                    <div>
                                        尽快回款
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CheckOutstandingFundInfo))