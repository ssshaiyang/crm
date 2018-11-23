import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select } from 'antd'
import * as actionUser from "../../../../actions/files/medicineName/medicineName.js"
import * as actionCreator from "../../../../actions/files/invoiceCompany/invoiceCompany.js"
import * as actionDiffBillingName from "../../../../actions/files/invoiceCompanyName/invoiceCompanyName.js"

const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;

export class BusinessComnopyNameOperation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            delAgentVisible: false,
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            searchText: '',
            filtered: false,
            name: this.props.data.billing_name,
            id: this.props.data.billing_id
        }
    }

    componentWillMount() {
        console.log(this.props.data)
    }

    componentWillReceiveProps(nextProps){

        if (nextProps.editCode == 1000 && this.props.editCode !== 1000) {
            let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getBillingNameList(params)
                console.log("自动刷新")
        }
        if (nextProps.delCode == 1000 && this.props.delCode !== 1000) {
            let params ={
                    page :-1 ,
                    limit : 10
                }
                this.props.getBillingNameList(params)
                console.log("自动刷新")
        }
     }


    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.setState({
            addMechInfoVisible: false,
        }, () => {
            this.props.getBillingNameList(param);
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }

    //点击搜索开票公司
    getMedicineNameSearchValue(value) {
        let params={
            filter:value,
            page:-1,
            limit:10
        }
        this.props.getBillingInfo(params);
    }

    //添加药品信息对话框
    addMechInfo() {
        this.props.getUserInfo(1);
        this.setState({
            addMechInfoVisible: true
        });
    }

    //获取表格的行元素
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.billing_name,
            id: record.billing_id
        })
    }

    //显示标准药品对话框
    showMedicineNameInfo() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getBillingInfo(param);
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
        let param = {
            page: -1,
            limit: 10
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let params = {
                    value: {
                        billing_id: this.state.id,
                        different_billing_name: values.different_billing_name,
                        creator_name: this.props.userInfo.username,
                        different_billing_remark: values.different_billing_remark
                    },
                    id: this.props.data.different_billing_id
                }
                this.props.editBillingName(params);
                this.props.getBillingNameList(param);
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
        this.props.delDiffBillingName(this.props.data.different_billing_id);
        this.props.getBillingNameList(param);
        this.setState({
            delAgentVisible: false
        }, () => {
            this.props.getBillingNameList(param);
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
        //标准开票公司列表
        const columns = [{
            title: '编号',
            dataIndex: 'billing_id',
            key: 'billing_id',
        }, {
            title: '名称',
            dataIndex: 'billing_name',
            key: 'billing_name',
        }];

        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="编辑开票公司信息"
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
                                    {getFieldDecorator('billing_name', {

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
                                    {getFieldDecorator('different_billing_name', {
                                        initialValue:this.props.data.different_billing_name
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.different_billing_name} style={{ width: 200 }} />
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
                                            initialValue:this.props.data.creator_name
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
                                    {getFieldDecorator('different_billing_remark', {
                                        initialValue:this.props.data.different_billing_remark
                                    })(
                                        <div>
                                            <input defaultValue={this.props.data.different_billing_remark} type='textarea' className='my_textarea_style' />
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
                    title="开票公司列表"
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

                <Modal
                    title="删除信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此条信息吗?</span>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    //console.log('ssss', state.billingInfo.data)
    return {
        //获取开票公司列表
        rowData: state.billingInfo.data,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
        editCode:state.diffBillingInfo.editDiffBillingCode,
        delCode:state.diffBillingInfo.delDiffBillingCode
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取用户信息
        getUserInfo: (param) => dispatch(actionUser.getUser(param)),
        //获取开票公司列表
        getBillingInfo: (params) => dispatch(actionCreator.getBillingInfoList(params)),
        //编辑开票公司信息
        editBillingName: (params) => dispatch(actionDiffBillingName.editBillingNameInfo(params)),
        //获取异名商业公司列表
        getBillingNameList: (params) => dispatch(actionDiffBillingName.getBillingNameListInfo(params)),
        //删除开票公司异名信息
        delDiffBillingName:(params)=>dispatch(actionDiffBillingName.delDiffBillingInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BusinessComnopyNameOperation))