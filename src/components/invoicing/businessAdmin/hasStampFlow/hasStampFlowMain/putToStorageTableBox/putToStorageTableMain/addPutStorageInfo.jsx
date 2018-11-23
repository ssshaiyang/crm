import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Table, Tabs, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class AddPutStorageInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInfo: false,
            componyInfoVisible: false
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

    /**
     * 展示公司信息方法组
     */
    showComponyInfo() {
        this.setState({
            componyInfoVisible: true
        })
    }
    handleOkComponyInfo() {
        this.setState({
            componyInfoVisible: false
        })
    }
    handleCancelComponyInfo() {
        this.setState({
            componyInfoVisible: false
        })
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name
        })
    }

    rowClickDamaged(record) {
        this.setState({
            damagedName: record.name
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 10 },
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
        const formItemLayout2 = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 10 },
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
            },
        ]
        return (
            <div>
                <span style={{ fontSize: 16, marginLeft: 8, cursor: 'pointer' }} onClick={this.toCheck.bind(this)}><Icon type="plus-circle-o" /></span>
                <Modal
                    title="查看信息"
                    width='700px'
                    visible={this.state.checkInfo}
                    onOk={this.handleOkToCheck.bind(this)}
                    onCancel={this.handleCancelToCheck.bind(this)}
                >
                    <Tabs defaultActiveKey="10">
                        <TabPane tab="入库单" key="10">
                            <Form onSubmit={this.handleSubmit}>
                                <Row className='botLine'>
                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="商业公司"
                                        >
                                            {getFieldDecorator('business_compony', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <div>
                                                    <Input style={{ width: 200 }}
                                                        readOnly
                                                        placeholder={this.state.name}
                                                        prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                            onClick={this.showComponyInfo.bind(this)}><Icon type="edit" /></span>} />
                                                </div>
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11}></Col>

                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="入库数量"
                                        >
                                            {getFieldDecorator('put_storage_acount', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <Input placeholder='' style={{ width: 200 }} />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="入库日期"
                                        >
                                            {getFieldDecorator('put_storage_date', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <DatePicker />
                                                )}
                                        </FormItem>
                                    </Col>

                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="入库药品批号"
                                        >
                                            {getFieldDecorator('put_storage_drug_id', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <Input placeholder='' style={{ width: 200 }} />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout2}
                                            label="入库药品有效期"
                                        >
                                            {getFieldDecorator('put_storage_drug_date', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <DatePicker />
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
                                                <input type='textarea' className='my_textarea_style' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Row>
                            </Form>
                        </TabPane>

                        <TabPane tab="破损单" key="11">
                            <Form onSubmit={this.handleSubmit}>
                                <Row className='botLine'>
                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="商业公司"
                                        >
                                            {getFieldDecorator('business_compony', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <div>
                                                    <Input style={{ width: 200 }}
                                                        readOnly
                                                        placeholder={this.state.damagedName}
                                                        prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                            onClick={this.showComponyInfo.bind(this)}><Icon type="edit" /></span>} />
                                                </div>
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11}></Col>

                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="破损数量"
                                        >
                                            {getFieldDecorator('damaged_num', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <Input placeholder='' style={{ width: 200 }} />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="破损日期"
                                        >
                                            {getFieldDecorator('damaged_date', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <DatePicker />
                                                )}
                                        </FormItem>
                                    </Col>

                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="破损药品批号"
                                        >
                                            {getFieldDecorator('damaged_id', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <Input placeholder='' style={{ width: 200 }} />
                                                )}
                                        </FormItem>
                                    </Col>
                                    <Col span={2}></Col>
                                    <Col span={11}>
                                        <FormItem
                                            {...formItemLayout2}
                                            label="破损药品有效期"
                                        >
                                            {getFieldDecorator('damaged_date', {
                                                rules: [{
                                                    required: true
                                                }],
                                            })(
                                                <DatePicker />
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
                                                <input type='textarea' className='my_textarea_style' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Row>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>

                <Modal
                    title="商业公司列表"
                    visible={this.state.componyInfoVisible}
                    onOk={this.handleOkComponyInfo.bind(this)}
                    onCancel={this.handleCancelComponyInfo.bind(this)}
                >
                    <Table rowKey={record => record.keyId} columns={columns_compony} dataSource={data_compony} onRowClick={this.rowClickDamaged.bind(this)}></Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddPutStorageInfo))