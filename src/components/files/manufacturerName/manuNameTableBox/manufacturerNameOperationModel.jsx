import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, message } from 'antd'
import * as actionCreater from "../../../../actions/files/manufacturerName/manufacturerName.js"
import * as actionCreator from "../../../../actions/files/medicine/medicine.js"
import * as action from "../../../../actions/files/medicineName/medicineName.js"
import * as actioner from "../../../../actions/files/manufacturer/manufacturer.js";
const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

//生产厂家列表
const data = [{
    key: '100001',
    name: '胞磷胆碱钠胶囊',
    format: '0.1g*6袋'
}, {
    key: '100002',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    key: '100003',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}, {
    key: '100004',
    name: '丙酸交沙霉素颗粒',
    format: '0.1g*6袋'
}];

export class ManufacturerNameOperationModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            delAgentVisible: false,
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            data: data,
            searchText: '',
            filtered: false,
            name:this.props.data.manufacturer_name,
            id:this.props.data.manufacturer_id
        }
    }

    componentWillMount() {
        console.log(this.props.data)
        this.props.getUserInfo(1);
    }

    componentWillReceiveProps(nextProps){
       if (nextProps.editManuNameCode == 1000 && this.props.editManuNameCode !== 1000) {
        let data = {
            page: -1,
            limit: 10
        }

        this.props.getManufacturerNameList(data)
       }
              if (nextProps.delManuNameCode == 1000 && this.props.delManuNameCode !== 1000) {
        let data = {
            page: -1,
            limit: 10
        }

        this.props.getManufacturerNameList(data)
       }
    }

    componentWillUpdate() {
        let data = {
            page: -1,
            limit: 10
        }
        if (this.state.editManuNameCode == 1000) {
            this.props.getManufacturerNameList(data);
        }
        // this.setState({
        //     editManuNameCode: nextProps.editManuNameCode
        // })
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        let data = {
            page: -1,
            limit: 10
        }
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
        let timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        this.setState({
            addMechInfoVisible: true,
            timestamp: timestamp
        });
    }

    //获取表格的行元素
    rowClick(record , index) {
        //console.log('sssssss',record)
        this.setState({
            name: record.manufacturer_name,
            id: record.manufacturer_id,
            rowclicked:index
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
        this.setState({
            showMedicineNameVisible: false,
        });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('ssssss', this.props.data.different_manufacturer_name)
                let editManuName = {
                    different_manufacturer_id:this.state.different_manufacturer_id,
                    manufacturer_id: this.state.id ,
                    different_manufacturer_name: values.different_manufacturer_name ? values.different_manufacturer_name : this.props.data.different_manufacturer_name,
                    different_manufacturer_remark: values.different_manufacturer_remark,
                }
                let data = {
                    id: this.props.data.different_manufacturer_id,
                    value: editManuName
                }
                this.props.editManufacturerInfo(data)
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
        this.props.delManufacturerNameInfo(this.props.data.different_manufacturer_id)
        this.setState({
            delAgentVisible: false
        }, () => {
            let data = {
                page: -1,
                limit: 10
            }
            this.props.getManufacturerNameList(data);
        })
    }

    handleCancelDelAgent() {
        this.setState({
            agentModelVisible: false
        })
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
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
                sm: { span: 12 },
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

        return (
            <div>
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="编辑药品信息"
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
                                    label="标准生产厂家名称"
                                >
                                    {getFieldDecorator('manufacturer_name', {
                                        
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
                                    {getFieldDecorator('different_manufacturer_name', {

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.different_manufacturer_name} style={{ width: 200 }} />
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
                                    {getFieldDecorator('different_manufacturer_remark', {
                                        initialValue:this.props.data.different_manufacturer_remark
                                    })(
                                        <div>
                                            <input type='textarea' defaultValue={this.props.data.different_manufacturer_remark} className='my_textarea_style' />
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
                    <Table columns={columns} dataSource={this.props.rowData.data} onRowClick={this.rowClick.bind(this)}
                    rowKey
                    rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''} />
                </Modal>

                <Modal
                    title={"删除信息"}
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
        //获取生产厂家信息
        rowData: state.manufacturerInfo.data,
        //获取药品信息
        drugsListInfo: state.drugListInfo.data,
        userInfo: state.drugNameListInfo.userInfo,
        //编辑异名生产厂家code
        editManuNameCode: state.manufacturerNameInfo.editManuNameCode,
        //删除异名厂家信息code
        delManuNameCode: state.manufacturerNameInfo.delManuNameCode,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取药品列表
        getDrugList: (params) => dispatch(actionCreator.getDrugListInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(action.getUser(param)),
        //获取生产厂家信息
        getManufacturerInfo: (param) => dispatch(actioner.getManufacturerListInfo(param)),
        //编辑异名生产厂家信息
        editManufacturerInfo: (params) => dispatch(actionCreater.editManufacturerInfoList(params)),
        //获取生产厂家异名列表
        getManufacturerNameList: (param) => dispatch(actionCreater.getManufacturerNameListInfo(param)),
        //删除异名生产厂家信息
        delManufacturerNameInfo: (param) => dispatch(actionCreater.delManufacturerNameInfoList(param))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ManufacturerNameOperationModel))