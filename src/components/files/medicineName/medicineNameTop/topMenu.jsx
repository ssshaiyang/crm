import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Tag } from 'antd'
import * as actionCreater from "../../../../actions/files/medicineName/medicineName.js";
import * as actionCreator from "../../../../actions/files/medicine/medicine.js";
const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;

export class TopMenu extends React.Component {

    constructor() {
        super();
        this.state = {
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            searchText: '',
            filtered: false,
            visible: false,
            name: ''
        }
    }

    componentWillMount() {
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getDrugList(params);
    }

    componentDidMount() {   
        console.log("TopMenu")

    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        let data = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.searchDrugName(data);
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        let data = {
            page: -1,
            limit: 10
        }
        this.props.searchDrugName(data);
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
        let params = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.searchDrugName(params);
    }

    //添加药品信息对话框
    addMechInfo() {
        this.props.getUserInfo(1);
        //获取当前日期
        let localDate = new Date().toLocaleDateString();
        this.setState({
            addMechInfoVisible: true,
            localDate: localDate
        });
    }

    //获取表格的行元素
    rowDrugNameClick(record) {
        //console.log('aaaaaaaa', record)
        this.setState({
            name: record.drug_name,
            id: record.drug_id
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
        let timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                values.drug_id = this.state.id;
                values.creator_name = this.props.userInfo.nickname;
                values.create_time = timestamp;
                this.props.addDrugNameInfo(values);
            }
        });
    }

    handleMenuClick(e) {
        //console.log('sssssss', e)
        let selectValue = [];
        if (this.state.isSelected) {
            //selectValue.push(e);
        }
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

        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)} style={{ height: 450, overflow: 'auto' }}>
                <Menu.Item key="0">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>药品编号</Checkbox>
                </Menu.Item>
                <Menu.Item key="1">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>药品名称</Checkbox>
                </Menu.Item>
                <Menu.Item key="2">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>规格</Checkbox>
                </Menu.Item>
                <Menu.Item key="3">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>异名药品名称</Checkbox>
                </Menu.Item>
                <Menu.Item key="4">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>异名药品规格</Checkbox>
                </Menu.Item>
                <Menu.Item key="5">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建人</Checkbox>
                </Menu.Item>
                <Menu.Item key="6">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建时间</Checkbox>
                </Menu.Item>
                <Menu.Item key="7">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>备注</Checkbox>
                </Menu.Item>
            </Menu>
        );

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
            title: '药品名称',
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
                    title="添加异名药品信息"
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
                                    label="标准规格"
                                >
                                    {getFieldDecorator('specification', {
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

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="异名药品名称"
                                >
                                    {getFieldDecorator('different_drug_name', {
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
                                    label="异名药品规格"
                                >
                                    {getFieldDecorator('different_specification', {
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
                                                <p>{this.state.localDate}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('different_drug_remark', {

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
                    <Table columns={columns} dataSource={this.props.drugsListInfo.data} onRowClick={this.rowDrugNameClick.bind(this)} />;
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.drugNameListInfo.userInfo,
        //获取药品信息
        drugsListInfo: state.drugListInfo.drugList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取药品列表
        getDrugList: (params) => dispatch(actionCreator.getDrugListInfo(params)),
        searchDrugName: (params) => dispatch(actionCreater.searchDrugNameInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreater.getUser(param)),
        //添加药品异名信息
        addDrugNameInfo: (param) => dispatch(actionCreater.addDrugNameInfoList(param))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(TopMenu))