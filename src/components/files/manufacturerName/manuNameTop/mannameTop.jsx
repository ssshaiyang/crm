import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Tag, DatePicker } from 'antd'
import * as actionCreater from "../../../../actions/files/manufacturer/manufacturer.js";
import * as actionCreator from "../../../../actions/files/manufacturerName/manufacturerName.js";

const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;

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


export class MannameTop extends React.Component {

    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            data: data,
            searchText: '',
            filtered: false,
            visible: false,
        }
    }

    componentWillMount() {

    }

    componentWillUpdate() {
        let data = {
            page: -1,
            limit: 10
        }
        if(this.props.addManuCode==1000){
            this.props.getManufacturerNameList(data);
        }
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
        let params = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.searchManufacturerName(params);
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        this.setState({
            addMechInfoVisible: false
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
        let timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        this.setState({
            addMechInfoVisible: true,
            //设置当前添加药品时间搓
            timestamp: timestamp
        });
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.manufacturer_name,
            id: record.manufacturer_id
        })
        console.log(this.state.name)
        
    }

    /**
     * 计量单位select方法
     */
    handleChangeMedicineedit(value) {
        //console.log(`selected ${value}`);
    }

    //中标类型方法，其中value为select选中的值
    handleChangeType(value) {
        //console.log(`selected ${value}`);
    }

    //显示标准药品对话框
    showMedicineNameInfo() {
        let data = {
            page: -1,
            limit: 10
        }
        this.props.getManufacturerInfo(data);
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
        // this.props.getManufacturerNameList(params);
        this.setState({
            showMedicineNameVisible: false,
        });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let addManuName = {
                    manufacturer_id: this.state.id,
                    different_manufacturer_name: values.other_manufacturer_name,
                    different_manufacturer_remark: values.remark,
                    creator_name:this.props.userInfo.nickname,
                    // create_time:this.state.timestamp,
                }
                this.props.addManuNameinfo(addManuName);
            }
        });
    }

    handleVisibleChange(flag) {
        this.setState({ visible: flag });
    }

    onChangeSelect(e) {
        let isSelected = e.target.checked;
        this.setState({
            isSelected: isSelected
        })
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
        //标准药品名称列表
        const columns = [{
            title: '编号',
            dataIndex: 'manufacturer_id',
            key: 'manufacturer_id',
            // filterDropdown: (
            //     <div className="custom-filter-dropdown" >
            //         <h3>说明</h3>
            //         <p>系统内产生的唯一代码</p>
            //     </div>
            // ),
            // filterIcon: <Icon type="bars" style={{ fontSize: 18, color: '#01d9b8' }} />,
            // filterDropdownVisible: this.state.filterDropdownVisible,
            // onFilterDropdownVisibleChange: (visible) => {
            //     this.setState({
            //         filterDropdownVisible: visible,
            //     });
            // },
        }, {
            title: '名称',
            dataIndex: 'manufacturer_name',
            key: 'manufacturer_name',
        }];

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>生产厂家编号</Checkbox>
                </Menu.Item>
                <Menu.Item key="1">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>标准生产厂家名称</Checkbox>
                </Menu.Item>
                <Menu.Item key="3">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>异名生产厂家名称</Checkbox>
                </Menu.Item>
                <Menu.Item key="4">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建人</Checkbox>
                </Menu.Item>
                <Menu.Item key="5">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建时间</Checkbox>
                </Menu.Item>
                <Menu.Item key="6">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>备注</Checkbox>
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Row>
                    <Col span={3}>
                        <Dropdown overlay={menu} trigger={['hover']} onVisibleChange={this.handleVisibleChange.bind(this)} visible={this.state.visible}>
                            <Button className='mainButton'><Icon type="menu-unfold" /></Button>
                        </Dropdown>
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
                    title="添加药品信息"
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
                                    label="标准生产厂家名"
                                >
                                    {getFieldDecorator('standard_manufacturer_name', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
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
                                    label="异名生产厂家名"
                                >
                                    {getFieldDecorator('other_manufacturer_name', {
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
                                        {getFieldDecorator('creater', {

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
                                    {getFieldDecorator('remark', {

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
                    title="药品列表"
                    visible={this.state.showMedicineNameVisible}
                    onOk={this.handleOkMedicineInfo.bind(this)}
                    onCancel={this.handleCancelMedicineInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMedicineNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table columns={columns} dataSource={this.props.rowData.data} onRowClick={this.rowClick.bind(this)} />
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        //生产厂家信息列表
        rowData: state.manufacturerInfo.data,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        //添加异名生产厂家成功code
        addManuCode: state.manufacturerNameInfo.addManuCode,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取生产厂家信息
        getManufacturerInfo: (param) => dispatch(actionCreater.getManufacturerListInfo(param)),
        //添加异名生产厂家
        addManuNameinfo: (params) => dispatch(actionCreator.addManuNameInfoList(params)),
        //获取生产厂家异名列表
        searchManufacturerName: (param) => dispatch(actionCreator.searchManufacturerNameInfo(param)),
        //获取生产厂家异名列表
        getManufacturerNameList: (param) => dispatch(actionCreator.getManufacturerNameListInfo(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(MannameTop))