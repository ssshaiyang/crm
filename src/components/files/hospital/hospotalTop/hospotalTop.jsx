import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Cascader, DatePicker } from 'antd'
import * as actionCreater from "../../../../actions/files/hospital/hospital.js"
import * as actionCreator from "../../../../actions/files/corporation/corporation.js"
import * as actionUser from "../../../../actions/files/medicineName/medicineName.js"

const CheckboxGroup = Checkbox.Group;
const { Column, ColumnGroup } = Table;
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

const options = [{
    value: 'zhejiang',
    label: '浙江省',
    children: [{
        value: 'huangzhou',
        label: '黄州市',
        children: [{
            value: 'xihu',
            label: '西湖区',
        }],
    }],
}, {
    value: 'jiangsu',
    label: '江苏省',
    children: [{
        value: 'nanjing',
        label: '南京市',
        children: [{
            value: 'zhonghuamen',
            label: '中华门区',
        }],
    }],
}];

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

export class HospotalTop extends React.Component {
    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            ContactsModelVisible: false,
            updateManuVisible: false,
            delManufacturerVisible: false,
            addBankInfoVisible: false
        }
    }

    componentWillMount() {

    }


    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        let params = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.getHospital(params);
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
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getHospitalSelect();
        this.props.getArea();
        this.props.getUserInfo(1);
        this.setState({
            addMechInfoVisible: true
        }, () => {
            this.props.getHospital(params);
        });
    }

    //中标类型方法，其中value为select选中的值
    handleChangeType(value) {
        this.setState({
            value: parseInt(value)
        })
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        let params = {
            page: -1,
            limit: 10
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let addHospital = {
                    hospital_name: values.hospital_name,
                    hospital_type: this.state.value,
                    hospital_province: this.state.area[0],
                    hospital_city: this.state.area[1],
                    hospital_district: this.state.area[2],
                    hospital_address: values.hospital_address,
                    hospital_remark: values.hospital_remark,
                    creator_name: this.props.userInfo.nickname
                }
                this.props.addHospital(addHospital);
            }
            this.props.getHospital(params);
        });
    }


    //获取医院类型select选中值
    handleChangeType(value) {
        this.setState({
            value: parseInt(value)
        })
    }

    //渲染医院类型select框
    renderHospitalselect() {
        if (this.props.hospitalSelect) {
            return (
                this.props.hospitalSelect.map((value, index) => {
                    return (
                        <Option value={String(value.hospital_type_id)}>{value.hospital_type_name}</Option>
                    );
                })
            );
        }
    }

    //级联选择框选择的值
    selectArea(value) {
        this.setState({
            area: value
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

        const formItemLayout2 = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }

        //标准药品名称列表
        const columns = [{
            title: '编号',
            dataIndex: 'key',
            key: 'key'
        }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '规格',
            dataIndex: 'format',
            key: 'format',
        }];

        return (
            <div>
                <Row>
                    <Col span={3}>
                        <Dropdown overlay={menu} trigger={['click']}>
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
                    title="添加医院b"
                    width='720px'
                    visible={this.state.addMechInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        {/* 第一层 */}
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="医院名称"
                                >
                                    {getFieldDecorator('hospital_name', {
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
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="医院类型"
                                >
                                    {getFieldDecorator('hospital_type', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="请选择医院类型"
                                            onChange={this.handleChangeType.bind(this)}
                                        >
                                            {this.renderHospitalselect.call(this)}
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="所属地区"
                                >
                                    {getFieldDecorator('hospital_area', {

                                    })(
                                        <div>
                                            <Cascader options={this.props.areaInfo[0]} onChange={this.selectArea.bind(this)} placeholder="请选择所属地区" />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}></Col>
                        </Row>
                        <br />
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout2}
                                label="医院地址"
                            >
                                {getFieldDecorator('hospital_address', {

                                })(
                                    <div>
                                        <Input placeholder='请输入医院地址' />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        {/* 第三层 */}
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
                                    {getFieldDecorator('hospital_remark', {

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
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('aaaaa',state.hospitalInfo.hospitalSelect)
    let areaList = [];
    if (state.corporationInfo.areaInfo) {
        areaList.push(state.corporationInfo.areaInfo);
    }
    return {
        //获取医院类型下拉框
        hospitalSelect: state.hospitalInfo.hospitalSelect,
        //获取区域信息
        areaInfo: areaList,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取医院类型下拉列表
        getHospitalSelect: () => dispatch(actionCreater.getHospitalSelectInfo()),
        //获取所属地区
        getArea: () => dispatch(actionCreator.getAreaInfo()),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionUser.getUser(param)),
        //添加医院信息
        addHospital: (param) => dispatch(actionCreater.addHospitalInfo(param)),
        //获取医院列表
        getHospital: (params) => dispatch(actionCreater.getHospitalInfo(params)),
        //删除医院信息
        delHospital: (params) => dispatch(actionCreater.delHospitalInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HospotalTop))