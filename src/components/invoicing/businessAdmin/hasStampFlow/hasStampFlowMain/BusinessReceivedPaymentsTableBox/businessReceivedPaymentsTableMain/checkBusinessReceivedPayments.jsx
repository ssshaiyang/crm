import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Table, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class CheckBusinessReceivedPayments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delInfoVisible: false,
            editInfoVisible: false
        }
    }

    toExamine() {

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
     * 药品列表对话框方法组
     */
    showManufacturerInfo() {
        this.setState({
            showManufacturerVisible: true
        })
    }
    handleOkMarkNameInfo() {
        this.setState({
            showManufacturerVisible: false,
        });
    }
    handleCancelMarkNameInfo() {
        this.setState({
            showManufacturerVisible: false,
        });
    }

    getMarkNameSearchValue(value) {
        //console.log('sssss',value)
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name
        })
    }

    //获取公司名称
    rowClickCompony(record) {
        this.setState({
            componyName: record.name
        })
    }

    /**
     * 选择开票公司List表单
     */

    showComponyList() {
        this.setState({
            companyInfoListVisible: true
        })
    }

    handleOkComponyInfo() {
        this.setState({
            companyInfoListVisible: false
        })
    }

    handleCancelComponyInfo() {
        this.setState({
            companyInfoListVisible: false
        })
    }


    /**
     * 删除信息对话框方法组
     */
    delInfo() {
        this.setState({
            delInfoVisible: true
        })
    }

    handleOkDelInfo() {
        this.setState({
            delInfoVisible: false
        })
    }

    handleCancelDelInfo() {
        this.setState({
            delInfoVisible: false
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
                <span style={{ fontSize: 16, marginRight: 8, marginLeft: 8, cursor: 'pointer' }} onClick={this.toExamine.bind(this)}><Icon type="to-top" /></span>
                <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.toEdit.bind(this)}><Icon type="edit" /></span>
                <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delInfo.bind(this)}><Icon type="delete" /></span>

                <Modal
                    title="商业回款单"
                    width='700px'
                    visible={this.state.editInfoVisible}
                    onOk={this.handleOkEditInfo.bind(this)}
                    onCancel={this.handleCancelEditInfo.bind(this)}
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

                <Modal
                    title="删除信息"
                    visible={this.state.delInfoVisible}
                    onOk={this.handleOkDelInfo.bind(this)}
                    onCancel={this.handleCancelDelInfo.bind(this)}
                >
                    你确定要删除此信息吗？
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CheckBusinessReceivedPayments))