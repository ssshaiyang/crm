import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Table, Menu, Checkbox, Dropdown, message } from 'antd'
import * as actionCreater from "../../../../actions/files/medicineName/medicineName.js";
import * as actionCreator from "../../../../actions/files/medicine/medicine.js";
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const Search = Input.Search;

export class MedincineNameOperationModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            searchText: '',
            filtered: false,
            drug_name:this.props.data.drug_name,
            drug_id:this.props.data.drug_id
        }
    }

    componentWillMount() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getDrugList(param);
        this.setState({

        })
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editCode == 1000 && this.props.editCode !== 1000 ) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getDrugNameList(params)
        }
        if (nextProps.delCode == 1000 && this.props.delCode !== 1000 ) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getDrugNameList(params)
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
        //this.props.getUserInfo(1);
        this.setState({
            addMechInfoVisible: true
        });
    }

    //获取表格的行元素
    rowClick(record, index ) {
        //console.log('sssssss',record)
        this.setState({
            drug_name: record.drug_name,
            drug_id:record.drug_id,
            rowclicked :index
        })
    }

    /**
     * 计量单位select方法
     */
    handleChangeMedicineName(value) {
        //console.log(`selected ${value}`);
    }

    //中标类型方法，其中value为select选中的值
    handleChangeType(value) {
        //console.log(`selected ${value}`);
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
        let data = {
            page: -1,
            limit: 10
        }
        this.props.form.validateFields((err, values) => {
            let timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000;
            values.drug_id = this.state.id;
            values.creator_name = this.props.userInfo.username;
            values.create_time = timestamp;
            console.log(values);
            console.log(err)
            if (!err) {
                let params = {
                    drug_id: this.props.data.different_drug_id,
                    values: values
                }
                this.props.editDrugNameInfo(params);
                
            }
            this.props.getDrugNameList(data);
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
        this.props.delDrugNameInfo(this.props.data.different_drug_id);
        let data = {
            page: -1,
            limit: 10
        }
        if (this.props.delDrugNameCode == 1000) {
            message.info('删除药品异名信息成功!');
            this.props.getDrugNameList(data);
            this.setState({
                delAgentVisible: false,
            })
        } else {
            message.info('删除药品异名信息失败!');
            this.setState({
                delAgentVisible: true,
            })
        }
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 8 },
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
            dataIndex: 'drug_id',
            key: 'drug_id',
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
            dataIndex: 'drug_name',
            key: 'drug_name',
        },
        {
            title: '规格',
            dataIndex: 'specification',
            key: 'specification',
        }];
        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}>
                    <Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="编辑药品异名信息"
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
                                    label="标准药品信息"
                                >
                                    {getFieldDecorator('drug_name', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                value={this.state.drug_name}
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
                                    label="标准规格"
                                >
                                    {getFieldDecorator('specification', {
                                        rules: [{
                                            required: true
                                        }],
                                        initialValue:this.props.data.specification
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.specification} style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="异名药品名称"
                                >
                                    {getFieldDecorator('different_drug_name', {
                                        rules: [{
                                            required: true
                                        }],
                                        initialValue:this.props.data.different_drug_name
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.different_drug_name} style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="异名规格"
                                >
                                    {getFieldDecorator('different_specification', {
                                        rules: [{
                                            required: true
                                        }],
                                        initialValue:this.props.data.different_specification
                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.different_specification} style={{ width: 200 }} />
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
                                                <p>{this.props.data.create_time}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('different_drug_remark', {
                                        initialValue:this.props.data.different_drug_remark
                                    })(
                                        <div>
                                            <input type='textarea' defaultValue={this.props.data.different_drug_remark} className='my_textarea_style'  />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }} onClick={this.handleOkAddMechInfo.bind(this)}>
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
                    <Table columns={columns} dataSource={this.props.drugsListInfo.data} 
                    onRowClick={this.rowClick.bind(this)}  rowKey
                    rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''} />;
            </Modal>

                <Modal
                    title={"删除信息"}
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此条的信息吗?</span>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        //visible: state.inventory.checkOutVisible
        userInfo: state.drugNameListInfo.userInfo,
        editCode: state.drugNameListInfo.editDrugNameCode,
        delCode:state.drugNameListInfo.delDrugNameCode,
        delDrugNameCode: state.drugNameListInfo.delDrugNameCode,
        //获取药品信息
        drugsListInfo: state.drugListInfo.drugList,
    }
}
function mapDispatchToProps(dispatch){
    return {
        //获取药品列表
        getDrugList: (params) => dispatch(actionCreator.getDrugListInfo(params)),
        //获取药品异名列表
        getDrugNameList: (params) => dispatch(actionCreater.getDrugNameListInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreater.getUser(param)),
        //编辑药品异名
        editDrugNameInfo: (param) => dispatch(actionCreater.editClickDrugNameInfo(param)),
        //删除异名药品信息
        delDrugNameInfo: (param) => dispatch(actionCreater.delClickDrugNameInfo(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(MedincineNameOperationModel))