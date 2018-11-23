import React from 'react'
import { connect } from 'react-redux'
import { Card, Collapse, Input, Table, Icon, Row, Col, Button, Form, Select, Modal } from 'antd'
import * as actionCreater from '../../../actions/files/costPolicy/costPolicy.js'
const { Column, ColumnGroup } = Table;
const Panel = Collapse.Panel;
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;
const data_manufacturer = [{
    id: '100001',
    name: '浙江大学附属第二医院',
    componyliren: '10.00',
    zhongbiaoren: '',
    chuangjianren: '',
    chuangjian_time: '',
    tip: '',
},
{
    id: '100002',
    name: '浙江大学附属第二医院',
    componyliren: '10.00',
    zhongbiaoren: '',
    chuangjianren: '',
    chuangjian_time: '',
    tip: '',
},]
export class CostPolicy extends React.Component {
    constructor() {
        super();
        this.state = {
            allInputVisible: false,
            policyInputVisible:false,
            policyInputVisible:false
        }
    }
    componentWillMount() {
        let params = {
            page: -1,
            limit: 15
        }
        this.props.getHospital(params)
    }

    //点击搜索获取生产厂家输入信息
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.name,

        })
    }
    /**
     * 修改联系人信息
     */
    updateManufacturerInfo() {
        this.setState({
            updateManuVisible: true,
        })
    }
    //下拉框
    makeOptions(options) {
        if (options) {
            let keys = Object.keys(options);
            return keys.map(key => (
            <Option value={key.toString()} key={key.toString()}>
                {options[key]}
            </Option>
        ))

        }else{
            console.log(options)
        }
       
    }

    handleOkManufacturerInfo() {
        this.setState({
            updateManuVisible: false
        })
    }

    handleCancelManufacturerInfo() {
        this.setState({
            updateManuVisible: false
        })
    }

    /**
     * 删除用户信息
     */

    delManufacturerInfo() {
        this.setState({
            delManufacturerVisible: true
        })
    }

    handleOkDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
        })
    }

    handleCancelDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
        })
    }
    //显示员工
    showEmployeeInfo(){

    }

    /**
     * 医院分配批量导入和单个导入
     */
    showAllInput() {
        let params = {
            page: -1,
            limit: 15
        }
        this.props.getHospitalOptions(params, null);
        this.setState({
            allInputVisible: true
        })
    }

    handleOkAddHospital() {
        this.setState({
            allInputVisible: false
        })
    }

    handleCancelAddHospital() {
        this.setState({
            allInputVisible: false
        })
    }
    //添加医院分配
    handleSubmitDrugHospitalInfo(e) {
        e.preventDefault();
        let params = {
            page: -1,
            limit: 10
        }
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(fieldsValue)
            console.log(err)
            if (1==1) {
                let addHospital = {
                    hospital_id: fieldsValue.hospital_id,
                    company_profit: fieldsValue.company_profit,
                    bid_price: fieldsValue.bid_price,
                    drug_hospital_remark: fieldsValue.drug_hospital_remark
                }
                this.props.addHospital(addHospital);
                console.log("1111") 
            }
            this.props.getHospital(params)
        });
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    /**
     * 计量单位select方法
     */
    handleChangeCount(value) {
        //console.log(`selected ${value}`);
    }

    /**
     * 政策批量导入
     */
    showPolicyInput(){
        this.setState({
            policyInputVisible:true
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        //标准药品名称列表
        const columns = [{
            title: '药品编号',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '药品名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '剂型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '规格',
            dataIndex: 'format',
            key: 'format',
        },
        {
            title: '计量单位',
            dataIndex: 'danwei',
            key: 'danwei',
        },
        {
            title: '生产厂家',
            dataIndex: 'mark_compony',
            key: 'mark_compony',
        },
        {
            title: '中标价',
            dataIndex: 'zhongbiaoprice',
            key: 'zhongbiaoprice',
        },
        {
            title: '零售价',
            dataIndex: 'lingshouprice',
            key: 'lingshouprice',
        }];

        const columns_policy=[{
            title: '序号',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '身份',
            dataIndex: 'shenfen',
            key: 'shenfen'
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '政策值',
            dataIndex: 'policyNum',
            key: 'policyNum'
        },
        {
            title: '政策比例',
            dataIndex: 'policybili',
            key: 'policybili'
        },
        {
            title: '有效期开始日期',
            dataIndex: 'time_start',
            key: 'time_start'
        },
        {
            title: '有效期结束日期',
            dataIndex: 'time_over',
            key: 'time_over'
        },
    ]

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
        return (
            <div style={{ padding: "35px 0" }}>
                <Collapse accordion>
                    <Panel header={'[]药品'} key="1">
                        <Search
                            placeholder="输入客户ID/姓名/联系方式"
                            onSearch={this.getMedicineNameSearchValue.bind(this)}
                            style={{ marginBottom: 10 }}
                        />
                        <Table columns={columns} onRowClick={this.rowClick.bind(this)} />
                    </Panel>
                    <Panel header={'[]的医院分配'} key="2">
                        <Row>
                            <Col span={8}>
                                <Search
                                    placeholder="输入客户ID/姓名/联系方式"
                                    onSearch={this.getMedicineNameSearchValue.bind(this)}
                                    style={{ marginBottom: 10 }}
                                />
                            </Col>
                            <Col span={8}></Col>
                            <Col span={8}>
                                <Button className='mainButton' style={{ marginRight: 8 }} >批量导入</Button>
                                <Button className='mainButton' onClick={this.showAllInput.bind(this)}><Icon type="plus-square-o"  style={{ fontSize: 14 }} /></Button>
                            </Col>
                        </Row>
                        <Table dataSource={this.props.policyHospital}>
                            <Column
                                title="编号"
                                dataIndex="hospital_id"
                                key="hospital_id"
                            />
                            <Column
                                title="名称"
                                dataIndex="hospital_name"
                                key="hospital_name"
                            />
                            <Column
                                title="公司利润"
                                dataIndex="company_profit"
                                key="company_profit"
                            />
                            <Column
                                title="中标价"
                                dataIndex="bid_price"
                                key="bid_price"
                            />
                            <Column
                                title="创建人"
                                dataIndex="creator_name"
                                key="creator_name"
                            />
                            <Column
                                title="创建时间"
                                dataIndex="create_time"
                                key="create_time"
                            />
                            <Column
                                title="备注"
                                dataIndex="drug_hospital_id"
                                key="drug_hospital_id"
                            />
                            <Column
                                title="操作"
                                key="operation"
                                render={() => (
                                    <div>
                                        <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                            onClick={this.updateManufacturerInfo.bind(this)}><Icon type="edit" /></span>
                                        <span style={{ fontSize: 16, cursor: 'pointer' }} onClick={this.delManufacturerInfo.bind(this)}><Icon type="file-excel" /></span>
                                    </div>
                                )}
                            />
                        </Table>
                    </Panel>
                    <Panel header={'[]的政策分配'} key="3">
                        <Row>
                            <Col span={8}>
                                <Search
                                    placeholder="输入客户ID/姓名/联系方式"
                                    onSearch={this.getMedicineNameSearchValue.bind(this)}
                                    style={{ marginBottom: 10 }}
                                />
                            </Col>
                            <Col span={8}></Col>
                            <Col span={8}>
                                <Button className='mainButton' style={{ marginRight: 8 }} onClick={this.showPolicyInput.bind(this)}>批量导入</Button>
                                <Button className='mainButton'><Icon type="plus-square-o" style={{ fontSize: 14 }} /></Button>
                            </Col>
                        </Row>
                        <Table columns={columns_policy} onRowClick={this.rowClick.bind(this)} />
                    </Panel>
                </Collapse>

                <Modal
                    title='添加医院分配'
                    width='720px'
                    visible={this.state.allInputVisible}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmitDrugHospitalInfo.bind(this)}>
                        <Row>
                            {/* 第一层 */}
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="医院"
                                >
                                    {getFieldDecorator('hospital_name', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="请选择医院"
                                            optionFilterProp="children"
                                            onChange={this.handleChangeCount.bind(this)}
                                        >
                                            {this.makeOptions(this.props.hospitalOptions)}
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="公司利润"
                                >
                                    {getFieldDecorator('company_profit', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="中标价"
                                >
                                    {getFieldDecorator('bid_price', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={13}></Col>
                        </Row>
                        <br />

                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="创建人"
                                >
                                    {getFieldDecorator('creater_name', {

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
                                    {getFieldDecorator('creater_time', {

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
                                {getFieldDecorator('drug_hospital_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                         <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.handleOkAddHospital.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddHospital.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                {/* <Modal
                    title='添加政策分配'
                    width='720px'
                    visible={this.state.policyInputVisible}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmitDrugHospitalInfo.bind(this)}>
                        <Row>
                            {/* 第一层 */}{/*
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="业务类型"
                                >
                                    {getFieldDecorator('hospital_name', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                       
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="医院"
                                >
                                    {getFieldDecorator('hospital_name', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                value={this.state.employeeName}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                onClick={this.showEmployeeInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="政策值"
                                >
                                    {getFieldDecorator('hospital_policy_profit', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="政策比例
"
                                >
                                    {getFieldDecorator('hospital_policy_rate', {
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
                                    label="身份
"
                                >
                                    {getFieldDecorator('hospital_policy_identity', {
                                         
                                    })(
                                        <Input style={{ width: 200 }} />
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
                                    {getFieldDecorator('creater_name', {

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
                                    {getFieldDecorator('creater_time', {

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
                                {getFieldDecorator('drug_hospital_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                         <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.handleOkAddHospital.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddHospital.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal> */}

            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    console.log(state.hospitalInfo.costPolicyInfo)
    console.log(state.hospitalInfo.getPolicyHospital.data)
    return{
        hospitalOptions: state.hospitalInfo.costPolicyInfo,
        policyHospital:state.hospitalInfo.getPolicyHospital.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHospitalOptions: (hospital_name, cb) => dispatch(actionCreater.getHospitalSelectInfo(hospital_name, cb)),
        addHospital: (parmas) => dispatch(actionCreater.addHospitalInfo(parmas)),
        getHospital: (parmas) => dispatch(actionCreater.getHospitalInfo(parmas))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CostPolicy))