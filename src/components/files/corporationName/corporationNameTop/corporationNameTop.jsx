import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Tag, DatePicker } from 'antd'
import * as actionCreater from "../../../../actions/files/corporationName/corporationName.js"
import * as actionCreator from "../../../../actions/files/corporation/corporation.js"
import * as actionUser from "../../../../actions/files/medicineName/medicineName.js"

const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="3">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
    </Menu>
);

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

//生产厂家列表
const data = [{
    keyId: 1,
    key: '100001',
    name: '胞磷胆碱钠胶囊',
    format: '0.1g*6袋'
}, {
    keyId: 2,
    key: '100002',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    keyId: 3,
    key: '100003',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    keyId: 4,
    key: '100004',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}];


export class CorporationNameTop extends React.Component {

    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            data: data,
            searchText: '',
            filtered: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps){

        if (nextProps.addCode == 1000 && this.props.addCode !== 1000) {
            let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getDeliverNameList(params)
                console.log("自动刷新")
        }
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        let params = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.getDeliverNameList(params);
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }

    //点击搜索获取生产厂家输入信息
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }

    //添加药品信息对话框
    addMechInfo() {
        this.props.getUserInfo(1);
        this.setState({
            addMechInfoVisible: true
        });
    }

    //获取表格的行元素
    rowClick(record ,index) {
        console.log('sssssss',record)
        this.setState({
            name: record.deliver_name,
            id: record.deliver_id,
            rowclicked:index
        })
    }

    //显示标准药品对话框
    showMedicineNameInfo() {
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getDeliverList(params);
        this.setState({
            showMedicineNameVisible: true
        })
    }

    /**
     * 控制弹出生产厂家按钮
     */
    handleOkMedicineInfo() {
        this.setState({
            showMedicineNameVisible: false,
        });
    }
    handleCancelMedicineInfo() {
        this.setState({
            showMedicineNameVisible: false,
        });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if (!err) {
                let params = {
                    deliver_id: this.state.id,
                    different_deliver_name: values.different_deliver_name,
                    creator_name: this.props.userInfo.username,
                    different_deliver_remark: values.different_deliver_remark,
                    create_time:Date.parse(new Date())/1000
                }
                console.log(params)
                this.props.addDeliverNameInfo(params);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
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

        //标准商业厂家列表
        const columns = [{
            title: '编号',
            dataIndex: 'deliver_id',
            key: 'deliver_id',
        }, {
            title: '名称',
            dataIndex: 'deliver_name',
            key: 'deliver_name',
        }];

        return (
            <div>
                <Row>
                    <Col span={3}>
                        {/*<Dropdown overlay={menu} trigger={['click']}>
                            <Button className='mainButton'><Icon type="menu-unfold" /></Button>
                        </Dropdown>*/}
                    </Col>
                    <Col span={9}></Col>
                    <Col span={8}>
                        <Search
                            placeholder="输入客户ID/姓名/联系方式"
                            onSearch={this.getSearchValue.bind(this)}
                        />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <Button className='mainButton' onClick={this.addMechInfo.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 16 }} /></Button>
                    </Col>
                </Row>
                <Modal
                    title="添加公司信息"
                    width='720px'
                    visible={this.state.addMechInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="标准商业公司名"
                                >
                                    {getFieldDecorator('deliver_name', {
                                        
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                value={this.state.name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showMedicineNameInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="异名商业公司名"
                                >
                                    {getFieldDecorator('different_deliver_name', {
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
                        </Row>
                        <br />
                        <div>
                            <Row className='botLine'>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="创建人"
                                    >
                                        {getFieldDecorator('creator_name', {

                                        })(
                                            <div>
                                                <p>{this.props.userInfo.nickname}</p>
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
                                                <p>{new Date().toLocaleDateString()}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('different_deliver_remark', {

                                    })(
                                        <div>
                                            <input type='textarea' className='my_textarea_style' />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.handleOkAddMechInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddMechInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title="商业公司列表"
                    visible={this.state.showMedicineNameVisible}
                    onOk={this.handleOkMedicineInfo.bind(this)}
                    onCancel={this.handleCancelMedicineInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMedicineNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table rowKey={record => record.keyId} columns={columns} dataSource={this.props.rowData ? this.props.rowData : []} onRowClick={this.rowClick.bind(this)}  rowKey
                    rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''} />;
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        //获取商业公司列表
        rowData: state.corporationInfo.data,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        addCode:state.corporationNameInfo.addDeliverNameCode,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取异名商业公司列表
        getDeliverNameList: (params) => dispatch(actionCreater.getDeliverNameListInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionUser.getUser(param)),
        //获取商业公司列表
        getDeliverList: (params) => dispatch(actionCreator.getDeliverListInfo(params)),
        //添加异名商业公司
        addDeliverNameInfo:(params)=>dispatch(actionCreater.addDeliverNameInfo(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CorporationNameTop))