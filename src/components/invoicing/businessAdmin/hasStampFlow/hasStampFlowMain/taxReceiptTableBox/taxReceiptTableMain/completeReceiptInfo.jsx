import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Table, DatePicker, Upload } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class CompleteReceiptInfo extends React.Component {
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
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
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
        //上传附件信息
        const props = {
            name: 'file',
            action: '',
            headers: {
                authorization: '',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div>
                <span style={{ fontSize: 16, marginRight: 8, marginLeft: 8, cursor: 'pointer' }} onClick={this.toExamine.bind(this)}><Icon type="to-top" /></span>
                <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.toEdit.bind(this)}><Icon type="edit" /></span>
                <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delInfo.bind(this)}><Icon type="delete" /></span>

                <Modal
                    title="发票信息单"
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
                                    label="签收人"
                                >
                                    {getFieldDecorator('receiver', {
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
                                    label="签收人电话"
                                >
                                    {getFieldDecorator('collect_call', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <FormItem
                                {...formItemLayout1}
                                label="签收日期"
                            >
                                {getFieldDecorator('receipt_date', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    < DatePicker />
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout1}
                                label="签收单附件"
                            >
                                {getFieldDecorator('attachment_sign', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <Upload {...props}>
                                        <Button>
                                            <Icon type="upload" /> 上传
                                            </Button>
                                    </Upload>
                                    )}
                            </FormItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CompleteReceiptInfo))