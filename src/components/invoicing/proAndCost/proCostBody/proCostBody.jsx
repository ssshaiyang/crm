import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker, Form, Input, Select, Button, Icon, Modal, Tree, Table, Card } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const TreeNode = Tree.TreeNode;
const { Column, ColumnGroup } = Table;
const columns = [{
    title: '编号',
    dataIndex: 'key',
    key: 'key'
}, {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
}];
const data = [{
    key: '100001',
    name: '浙江大学附属医院'
}, {
    key: '100002',
    name: '浙江大学附属召逸夫医院'
}, {
    key: '100003',
    name: '浙一医院',
}, {
    key: '100004',
    name: '浙江大学附属第二医院',
}];

const data_protocol_detail = [{
    id: '100001',
    name: '胞磷胆碱钠胶囊',
    type: '0.1g*6袋',
    protocol_number: '6666666666',
},
{
    id: '100002',
    name: '丙酸交沙霉素颗粒',
    type: '0.1g*6袋',
    protocol_number: '7777777777',
},]

const data_protocol_medicine = [{
    id: '1',
    medicine_id: 'YP00001',
    medicine_name: '胞磷胆碱钠胶囊',
    bail: 2000.00,
    sales_volume: 4000
},
{
    id: '2',
    medicine_id: 'YP00002',
    medicine_name: '丙酸交沙霉素颗粒',
    bail: 2000.00,
    sales_volume: 4000
},
]

const data_protocol_hospital = [{
    hospital_id: 'YY00002',
    hospital_name: '杭州市第三人名医院',
    bid_price: 15.00,
    bail: 10000.00,
    sales_volume: 2000,
    investment_personnel: '张三'
}, {
    hospital_id: 'YY00004',
    hospital_name: '杭州市儿童医院',
    bid_price: 15.00,
    bail: 10000.00,
    sales_volume: 2000,
    investment_personnel: '李四'
}]

const data_protocol_table=[{
    protocol_id:'ZXSW00001',
    agent:'',
    region:'',
    begin_time:'',
    over_time:'',
    audit_state:''
}]

export class ProCostBody extends React.Component {

    constructor() {
        super();
        this.state = {
            protocolModelVisible: false,
            showAgentInfoVisible: false,
            protocolInfoVisible: false,
            protocolHopstalVisible: false,
            isSalesVolumeModel: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    //select框选择值
    handleChangeApprove(approveValue) {
        //console.log(`selected ${value}`);
    }
    handleChangePro(proValue) {
        //console.log(`selected ${value}`);
    }

    //当表单点击确认按钮时获取表单值
    handleSubmitProCost() {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    /**
     * 添加协议弹框控件方法组
     */
    addProtocolInfo() {
        this.setState({
            protocolModelVisible: true
        })
    }

    handleOkProtocolInfo() {
        this.setState({
            protocolModelVisible: false
        })
    }

    handleCancelProtocolInfo() {
        this.setState({
            protocolModelVisible: false
        })
    }

    /**
     * 代理商对话框
     */

    showAgentInfo() {
        this.setState({
            showAgentInfoVisible: true
        })
    }

    handleOkAgentInfo() {
        this.setState({
            showAgentInfoVisible: false
        })
    }

    handleCancelAgentInfo() {
        this.setState({
            showAgentInfoVisible: false
        })
    }

    /**
     * 医院列表对话框
     * @param {*输入搜索框里的值} value 
     */
    getHopsitalDepartSearchValue(value) {

    }


    //获取树型控件显示信息
    onSelect(selectedKeys, info) {
        //console.log('selected', selectedKeys, info);
    }

    //获取医院列表搜索框部门值
    getDepartSearchValue(value) {

    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name
        })
    }

    /**
     * 协议明细弹框
     */
    showProtocolModel() {
        this.setState({
            protocolInfoVisible: true
        })
    }

    handleOkProtocolDetailInfo() {
        this.setState({
            protocolInfoVisible: false
        })
    }

    handleCancelProtocolDetailInfo() {
        this.setState({
            protocolInfoVisible: false
        })
    }
    //获取协议明细select选中值
    handleChangeProtocolDetail(value) {

    }

    /**
     * 协议医院弹框方法组
     */
    showProtocolHopstalModel() {
        this.setState({
            protocolHopstalVisible: true
        })
    }

    handleOkProtocolHopstalInfo() {
        this.setState({
            protocolHopstalVisible: false
        })
    }

    handleCancelProtocolHopstalInfo() {
        this.setState({
            protocolHopstalVisible: false
        })
    }

    /**
     * 销量明细弹出方法组
     */
    showSalesVolumeModel() {
        this.setState({
            isSalesVolumeModel: true
        })
    }

    render() {
        const sales_volume = this.state.isSalesVolumeModel ? { display: 'block' } : { display: 'none' }
        const { getFieldDecorator } = this.props.form;
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
        const formItemLayoutProtocol = {
            labelCol: {
                xs: { span: 20 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 14 },
            },
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmitProCost.bind(this)}>
                    <Row className='botLine'>
                        <Col span={9}>
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
                        <Col span={1}></Col>
                        <Col span={9}>
                            <Row>
                                <Col span={12}>
                                    <FormItem
                                        {...formTimeLayout1}
                                        label="结束日期"
                                    >
                                        {getFieldDecorator('time_start1', {
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
                                        {getFieldDecorator('time_end1', {
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={3}>
                            <Button className='mainButton' onClick={this.addProtocolInfo.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 16 }} /></Button>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <br/>
                    <div className='botLine'>
                        <FormItem
                        >
                            {getFieldDecorator('protocol_table', {
                            })(
                                <Table dataSource={data_protocol_table}>
                                    <Column
                                        title="协议编号"
                                        dataIndex="protocol_id"
                                        key="protocol_id"
                                    />
                                    <Column
                                        title="代理商"
                                        dataIndex="agent"
                                        key="agent"
                                    />
                                    <Column
                                        title="区域"
                                        dataIndex="region"
                                        key="region"
                                    />
                                    <Column
                                        title="开始日期"
                                        dataIndex="begin_time"
                                        key="begin_time"
                                    />
                                    <Column
                                        title="结束日期"
                                        dataIndex="over_time"
                                        key="over_time"
                                    />
                                    <Column
                                        title="审核状态"
                                        dataIndex="audit_state"
                                        key="audit_state"
                                    />
                                    <Column
                                        title="操作"
                                        key="operation"
                                        render={() => (
                                            <div>
                                                <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                    onClick={this.showProtocolModel.bind(this)}><Icon type="edit" /></span>
                                            </div>
                                        )}
                                    />
                                </Table>
                                )}
                        </FormItem>
                    </div>
                </Form>
                <Modal
                    title="添加药品信息"
                    width='720px'
                    visible={this.state.protocolModelVisible}
                    onOk={this.handleOkProtocolInfo.bind(this)}
                    onCancel={this.handleCancelProtocolInfo.bind(this)}
                >
                    <Row className='botLine'>
                        <Col span={11}>
                            <FormItem
                                {...formItemLayoutProtocol}
                                label="代理商"
                            >
                                {getFieldDecorator('medichine_name', {
                                    rules: [{
                                        required: true, message: '代理商',
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }}
                                            OnReady
                                            placeholder={this.state.name}
                                            prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                onClick={this.showAgentInfo.bind(this)}><Icon type="edit" /></span>} />
                                    </div>
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                            <FormItem
                                {...formItemLayoutProtocol}
                                label="所属地区"
                            >
                                {getFieldDecorator('medichine_name', {
                                    rules: [{
                                        required: true, message: '请输入所属地区',
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
                                {...formTimeLayout1}
                                label="有效期开始日期"
                            >
                                {getFieldDecorator('time_begin', {
                                })(
                                    <DatePicker style={{ width: 175 }} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={12}>
                            <FormItem
                                {...formTimeLayout1}
                                label="有效期结束日期"
                            >
                                {getFieldDecorator('time_over', {
                                })(
                                    <DatePicker style={{ width: 185 }} />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <br />
                    <div className='botLine'>
                        <FormItem
                            label="协议明细"
                        >
                            {getFieldDecorator('time_begin', {
                            })(
                                <Table dataSource={data_protocol_detail}>
                                    <Column
                                        title="药品编号"
                                        dataIndex="id"
                                        key="id"
                                    />
                                    <Column
                                        title="药品名称"
                                        dataIndex="name"
                                        key="name"
                                    />
                                    <Column
                                        title="规格"
                                        dataIndex="type"
                                        key="type"
                                    />
                                    <Column
                                        title="协议医院数量"
                                        dataIndex="protocol_number"
                                        key="protocol_number"
                                    />
                                    <Column
                                        title="操作"
                                        key="operation"
                                        render={() => (
                                            <div>
                                                <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                    onClick={this.showProtocolModel.bind(this)}><Icon type="edit" /></span>
                                            </div>
                                        )}
                                    />
                                </Table>
                                )}
                        </FormItem>
                    </div>
                </Modal>
                {/* 代理商对话框 */}
                <Modal
                    title="医院列表"
                    width='720px'
                    visible={this.state.showAgentInfoVisible}
                    onOk={this.handleOkAgentInfo.bind(this)}
                    onCancel={this.handleCancelAgentInfo.bind(this)}
                >
                    <Row>
                        <Col span={11}>
                            <Search
                                placeholder="输入部门名"
                                onSearch={this.getHopsitalDepartSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Tree
                                showLine
                                defaultExpandedKeys={['zhaoshang']}
                                onSelect={this.onSelect.bind(this)}
                            >
                                <TreeNode title="招商部" key="zhaoshang">
                                    <TreeNode title="招商一部" key="zhaoshang1" />
                                    <TreeNode title="招商二部" key="zhaoshang2" />
                                    <TreeNode title="招商三部" key="zhaoshang3" />
                                </TreeNode>
                                <TreeNode title="总经理" key="zongjingli">
                                    <TreeNode title="总经理助理" key="zongjingli1" />
                                </TreeNode>
                                <TreeNode title="财务部" key="caiwubu">
                                    <TreeNode title="财务部一部" key="caiwubu1" />
                                    <TreeNode title="财务部二部" key="caiwubu2" />
                                </TreeNode>
                            </Tree>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={12}>
                            <Search
                                placeholder="输入部门名称"
                                onSearch={this.getDepartSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Table columns={columns} dataSource={data} onRowClick={this.rowClick.bind(this)} />
                        </Col>
                    </Row>
                </Modal>

                <Modal
                    title="医院列表"
                    width='720px'
                    visible={this.state.protocolInfoVisible}
                    onOk={this.handleOkProtocolDetailInfo.bind(this)}
                    onCancel={this.handleCancelProtocolDetailInfo.bind(this)}
                >
                    <Row className='botLine'>
                        <Col span={11}>
                            <FormItem
                                {...formItemLayoutProtocol}
                                label="代理商"
                            >
                                {getFieldDecorator('protocolDetail', {
                                    rules: [{
                                        required: true, message: '代理商',
                                    }],
                                })(
                                    <Select
                                        style={{ width: 200 }}
                                        placeholder="请选择代理商"
                                        optionFilterProp="children"
                                        onChange={this.handleChangeProtocolDetail.bind(this)}
                                    >
                                        <Option value="1">代理商1</Option>
                                        <Option value="2">代理商2</Option>
                                        <Option value="3">代理商3</Option>
                                        <Option value="4">代理商4</Option>
                                    </Select>
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                            <FormItem
                                {...formItemLayoutProtocol}
                                label="协议有效日期"
                            >
                                {getFieldDecorator('medichine_name', {
                                    rules: [{
                                        required: true, message: '请输入所属地区',
                                    }],
                                })(
                                    <div>
                                        2017-01-01 至 2018-01-01
                                    </div>
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <br />
                    {/* 第二层 */}
                    <div className='botLine'>
                        <FormItem
                            label="协议明细"
                        >
                            {getFieldDecorator('protocol_detail', {
                            })(
                                <Table dataSource={data_protocol_medicine}>
                                    <Column
                                        title="序号"
                                        dataIndex="id"
                                        key="id"
                                    />
                                    <Column
                                        title="药品编号"
                                        dataIndex="medicine_id"
                                        key="medicine_id"
                                    />
                                    <Column
                                        title="药品名"
                                        dataIndex="medicine_name"
                                        key="medicine_name"
                                    />
                                    <Column
                                        title="保证金"
                                        dataIndex="bail"
                                        key="bail"
                                    />
                                    <Column
                                        title="协议销量"
                                        dataIndex="sales_volume"
                                        key="sales_volume"
                                    />
                                    <Column
                                        title="操作"
                                        key="operation"
                                        render={() => (
                                            <div>
                                                <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                    onClick={this.showProtocolHopstalModel.bind(this)}><Icon type="file" /></span>
                                            </div>
                                        )}
                                    />
                                </Table>
                                )}
                        </FormItem>
                    </div>
                </Modal>

                <Modal
                    title="协议医院"
                    width='720px'
                    visible={this.state.protocolHopstalVisible}
                    onOk={this.handleOkProtocolDetailInfo.bind(this)}
                    onCancel={this.handleCancelProtocolDetailInfo.bind(this)}
                >
                    <Card title={'[' + {} + ']' + '协议医院详细'}>
                        <div className='botLine'>
                            <Table dataSource={data_protocol_hospital}>
                                <Column
                                    title="医院编号"
                                    dataIndex="hospital_id"
                                    key="hospital_id"
                                />
                                <Column
                                    title="医院名称"
                                    dataIndex="hospital_name"
                                    key="hospital_name"
                                />
                                <Column
                                    title="中标价"
                                    dataIndex="bid_price"
                                    key="bid_price"
                                />
                                <Column
                                    title="保证金"
                                    dataIndex="bail"
                                    key="bail"
                                />
                                <Column
                                    title="协议销量"
                                    dataIndex="sales_volume"
                                    key="sales_volume"
                                />
                                <Column
                                    title="招商人员"
                                    dataIndex="investment_personnel"
                                    key="investment_personnel"
                                />
                                <Column
                                    title="销量/消费明细"
                                    key="operation"
                                    render={() => (
                                        <div>
                                            <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                                onClick={this.showSalesVolumeModel.bind(this)}><Icon type="file" /></span>
                                        </div>
                                    )}
                                />
                            </Table>
                        </div>
                        <br />
                        <div style={sales_volume}>
                            <div className='botLine'>
                                <div className='sales_volume_top'>[杭州市第三人民医院]销量费用明细</div>
                                <div style={{ marginLeft: 10, marginBottom: 15 }}>协议开发时间 2个月</div>
                                <div style={{ marginLeft: 10, marginBottom: 5 }}>销量约定明细</div>
                                <table cellSpacing="0" cellPadding="0" style={{ width: '98%', marginLeft: 5, marginBottom: 10 }} className='table_border'>
                                    <tr>
                                        <td className='td_border'>月份</td>
                                        <td className='td_border'>1</td>
                                        <td className='td_border'>2</td>
                                        <td className='td_border'>3</td>
                                        <td className='td_border'>4</td>
                                        <td className='td_border'>5</td>
                                        <td className='td_border'>6</td>
                                        <td className='td_border'>7</td>
                                        <td className='td_border'>8</td>
                                        <td className='td_border' >9</td>
                                        <td className='td_border'>10</td>
                                        <td className='td_border'>11</td>
                                        <td className='td_border'>12</td>
                                    </tr>
                                    <tr>
                                        <td className='td_border'>销量</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border' >160</td>
                                        <td className='td_border' >160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                        <td className='td_border'>160</td>
                                    </tr>
                                </table>

                                <div style={{ marginLeft: 10, marginBottom: 5 }}>阶梯费用</div>
                                <table cellSpacing="0" cellPadding="0" style={{ width: '98%', marginLeft: 5, marginBottom: 10 }} className='table_border'>
                                    <tr>
                                        <td className='td_border'>销量达成比例</td>
                                        <td className='td_border'>小于50%(包括50%)</td>
                                        <td className='td_border'>50%~100%(包括100%)</td>
                                        <td className='td_border'>100%~150%(包括150%)</td>
                                        <td className='td_border'>150%~200%(包括200%)</td>
                                    </tr>
                                    <tr>
                                        <td className='td_border'>销量值</td>
                                        <td className='td_border'>7.00</td>
                                        <td className='td_border'>7.50</td>
                                        <td className='td_border'>8.00</td>
                                        <td className='td_border'>8.50</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ProCostBody))