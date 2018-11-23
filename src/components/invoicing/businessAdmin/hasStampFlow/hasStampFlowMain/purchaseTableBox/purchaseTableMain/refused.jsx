import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Steps, Table, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Step = Steps.Step;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class Refused extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInfo: false,
            editInfoVisible: false,
            showManufacturerVisible: false,
            companyInfoListVisible: false
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
        const columns_medicineList = [
            {
                title: '编码',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: 120
            },
            {
                title: '规格',
                dataIndex: 'format',
                key: 'format'
            },
            {
                title: '计量单位',
                dataIndex: 'measurement_unit',
                key: 'measurement_unit'
            },
            {
                title: '药剂',
                dataIndex: 'drug',
                key: 'drug'
            },
            {
                title: '生产厂家',
                dataIndex: 'manufacturer',
                key: 'manufacturer'
            },
        ];
        const data_medicineList = [
            {
                key: 1,
                id: '100001',
                name: '胞磷胆碱钠胶囊',
                format: '0.1g*6袋',
                measurement_unit: '盒',
                drug: '冲剂',
                manufacturer: ''
            },
            {
                key: 2,
                id: '100002',
                name: '胞磷胆碱钠胶囊',
                format: '0.1g*6袋',
                measurement_unit: '盒',
                drug: '冲剂',
                manufacturer: ''
            },
            {
                key: 3,
                id: '100003',
                name: '胞磷胆碱钠胶囊',
                format: '0.1g*6袋',
                measurement_unit: '盒',
                drug: '冲剂',
                manufacturer: ''
            },
        ];

        const columns_componyList = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
                width: 100
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: 150
            },
        ]

        const data_componyList = [
            {
                key: 1,
                id: 10001,
                name: '北京康辰药业有限公司'
            },
            {
                key: 2,
                id: 10002,
                name: '清华德人西安幸福制药有限公司'
            },
            {
                key: 3,
                id: 10003,
                name: '上海康辰药业有限公司'
            },
        ]

        return (
            <div>
                <span style={{ fontSize: 16, marginRight: 8, marginLeft: 8, cursor: 'pointer' }} onClick={this.toEdit.bind(this)}><Icon type="edit" /></span>
                <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.toCheck.bind(this)}><Icon type="search" /></span>
                <Modal
                    title="查看信息"
                    width='700px'
                    visible={this.state.checkInfo}
                    onOk={this.handleOkToCheck.bind(this)}
                    onCancel={this.handleCancelToCheck.bind(this)}
                >
                    <div className='botLine'>
                        <Steps>
                            <Step status="finish" title="小方已送审" description="2017-08-05" icon={<Icon type="user" />} />
                            <Step status="finish" title="陈刚已送审" description="2017-08-05" icon={<Icon type="solution" />} />
                            <Step status="wait" title="Tom待审核" description="------" icon={<Icon type="credit-card" />} />
                        </Steps>
                    </div>
                    <div>审批记录</div>
                    <div className='botLine'>
                        <Table columns={columns} dataSource={data}></Table>
                    </div>
                </Modal>

                <Modal
                    title="编辑信息"
                    width='700px'
                    visible={this.state.editInfoVisible}
                    onOk={this.handleOkEditInfo.bind(this)}
                    onCancel={this.handleCancelEditInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Row className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="药品名"
                            >
                                {getFieldDecorator('medicine_name', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }}
                                            readOnly
                                            placeholder={this.state.name}
                                            prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                onClick={this.showManufacturerInfo.bind(this)}><Icon type="edit" /></span>} />
                                    </div>
                                    )}
                            </FormItem>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="规格"
                                >
                                    {getFieldDecorator('medicine_format', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>20ml</div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="计量单位"
                                >
                                    {getFieldDecorator('medicine_format', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>盒</div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="剂型"
                                >
                                    {getFieldDecorator('drug_type', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>片剂</div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="生产厂家"
                                >
                                    {getFieldDecorator('manufacturer', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>浙江医学开发公司</div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="采购日期"
                                >
                                    {getFieldDecorator('purchase_date', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <DatePicker />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="买货单位"
                                >
                                    {getFieldDecorator('purchase_unit', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input placeholder='0.00' style={{ width: 200 }} />元
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="买货数量"
                                >
                                    {getFieldDecorator('purchase_number', {
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
                                    label="开票公司"
                                >
                                    {getFieldDecorator('make_invoice_company', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                placeholder={this.state.componyName}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showComponyList.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
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
                </Modal>

                <Modal
                    title="药品列表"
                    visible={this.state.showManufacturerVisible}
                    onOk={this.handleOkMarkNameInfo.bind(this)}
                    onCancel={this.handleCancelMarkNameInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMarkNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table columns={columns_medicineList} dataSource={data_medicineList} onRowClick={this.rowClick.bind(this)} />;
                </Modal>

                <Modal
                    title="开票公司列表"
                    visible={this.state.companyInfoListVisible}
                    onOk={this.handleOkComponyInfo.bind(this)}
                    onCancel={this.handleCancelComponyInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMarkNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table columns={columns_componyList} dataSource={data_componyList} onRowClick={this.rowClickCompony.bind(this)} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Refused))