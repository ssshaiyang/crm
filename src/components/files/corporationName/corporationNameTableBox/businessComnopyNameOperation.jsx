import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select } from 'antd'
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

export class BusinessComnopyNameOperation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            delAgentVisible: false,
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            searchText: '',
            filtered: false,
            name: this.props.data.deliver_name,
            id: this.props.data.deliver_id
        }
    }

    componentWillMount() {
        console.log(this.props.data)
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    componentWillReceiveProps(nextProps){

        if (nextProps.editCode == 1000 && this.props.editCode !== 1000) {
            let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getDeliverList(params)
                console.log("自动刷新")
        }
        if (nextProps.delCode == 1000 && this.props.delCode !== 1000) {
            let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getDeliverList(params)
                console.log("自动刷新")
        }
        console.log("执行了componentWillReceiveProps")
    
    }


    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getDeliverNameList(param);
        this.setState({
            addMechInfoVisible: false,
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }

    //点击搜索商业公司
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }


    //添加药品信息对话框
    addMechInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getUserInfo(1);
        this.props.getDeliverList(param);
        this.setState({
            addMechInfoVisible: true
        });
    }

    //获取表格的行元素
    rowClick(record , index ) {
        this.setState({
            name: record.deliver_name,
            id: record.deliver_id,
            rowclicked: index
        })
    }

    //显示标准药品对话框
    showMedicineNameInfo() {
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
                    value: {
                        deliver_id: this.state.id,
                        different_deliver_name: values.different_deliver_name,
                        creator_name: this.props.userInfo.username,
                        different_deliver_remark: values.different_deliver_remark
                    },
                    id: this.props.data.different_deliver_id
                }
                this.props.editDeliverNameInfo(params);
            }
        });
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
        this.props.delDeliverNameInfo(this.props.data.different_deliver_id);
        this.setState({
            delAgentVisible: false
        }, () => {
            this.props.getDeliverList(param);
        })
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

    getContactsInfoSearchValue(value) {
        //console.log('ssssss',value)
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
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
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
                                        initialValue:this.props.data.different_deliver_name
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.different_deliver_name} style={{ width: 200 }} />
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
                                                <p>{this.props.data.creator_name}</p>
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
                                        initialValue:this.props.data.different_deliver_remark
                                    })(
                                        <div>
                                            <input defaultValue={this.props.data.different_deliver_remark} type='textarea' className='my_textarea_style' />
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
                    <Table columns={columns} dataSource={this.props.rowData} onRowClick={this.rowClick.bind(this)}
                    rowKey
                    rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''}/> />
                </Modal>

                <Modal
                    title="删除信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此人的信息吗?</span>
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
        delCode:state.drugNameListInfo.delDeliverNameCode,
        editCode:state.drugNameListInfo.editDeliverNameCode
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取商业公司列表
        getDeliverList: (params) => dispatch(actionCreator.getDeliverListInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionUser.getUser(param)),
        //编辑商业公司异名
        editDeliverNameInfo: (params) => dispatch(actionCreater.editDeliverNameInfoList(params)),
        //获取异名商业公司列表
        getDeliverNameList: (params) => dispatch(actionCreater.getDeliverNameListInfo(params)),
        //删除异名商业公司
        delDeliverNameInfo: (params) => dispatch(actionCreater.delDeliverNameInfoList(params))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BusinessComnopyNameOperation))