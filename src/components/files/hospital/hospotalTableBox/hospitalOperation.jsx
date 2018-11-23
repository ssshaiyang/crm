import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, Select } from 'antd'
import * as actionCreater from "../../../../actions/files/hospital/hospital.js"
import * as actionCreator from "../../../../actions/files/corporation/corporation.js"
import * as actionUser from "../../../../actions/files/medicineName/medicineName.js"

const FormItem = Form.Item;
const Search = Input.Search;
const Option = Select.Option;
const { Column, ColumnGroup } = Table;

export class HospitalOperation extends React.Component {

    constructor() {
        super();
        this.state = {
            delAgentVisible: false,
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
        }
    }

    componentWillMount() {

    }

    /**
     * 编辑医院信息按钮
     */
    handleOkAddMechInfo() {
        let params = {
            page: -1,
            limit: 10
        }
        this.setState({
            addMechInfoVisible: false,
        }, () => {
            this.props.getHospital(params);
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
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
        this.props.getHospital(params);
        this.setState({
            addMechInfoVisible: true
        });
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
                let editHospital = {
                    value: {
                        hospital_name: values.hospital_name !== this.props.data.hospital_name ? values.hospital_name : this.props.data.hospital_name,
                        hospital_type: this.state.value,
                        hospital_province: this.state.area[0],
                        hospital_city: this.state.area[1],
                        hospital_district: this.state.area[2],
                        hospital_address: values.hospital_address !== this.props.hospital_address ? values.hospital_address : this.props.data.hospital_address,
                        hospital_remark: values.hospital_remark !== this.props.hospital_remark ? values.hospital_remark : this.props.data.hospital_remark,
                        creator_name: this.props.userInfo.username
                    },
                    id: this.props.data.hospital_id
                }
                this.props.editHospital(editHospital);
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

    /**
     * 删除代理人信息方法组
     */

    showDel() {
        this.setState({
            delAgentVisible: true
        })
    }

    handleOkDelAgent() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.delHospital(this.props.data.hospital_id);
        this.props.delHospital(param);
        this.setState({
            delAgentVisible: false
        }, () => {
            this.props.delHospital(param);
        })
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
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
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }
        const formItemLayout3 = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }

        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="添加医院a"
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
                                            <Cascader options={this.props.areaInfo} onChange={this.selectArea.bind(this)} placeholder="请选择所属地区" />
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
                                {...formItemLayout3}
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
                                                <p>{this.props.userInfo.username}</p>
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

                <Modal
                    title="删除医院信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定删除此医院信息吗?</span>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
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
        //编辑医院信息
        editHospital: (param) => dispatch(actionCreater.editHospitalInfo(param)),
        //获取医院列表
        getHospital: (params) => dispatch(actionCreater.getHospitalInfo(params)),
        //删除医院信息
        delHospital: (params) => dispatch(actionCreater.delHospitalInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HospitalOperation))