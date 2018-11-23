import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Tag, DatePicker, message ,Radio } from 'antd'
import * as actionCreator from "../../../../actions/files/medicineName/medicineName.js";

import * as actionCreater from "../../../../actions/files/medicine/medicine.js";
const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const RadioGroup = Radio.Group;

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

const columns_compony = [{
    title: '编号',
    dataIndex: 'billing_id',
    key: 'billing_id',
}, {
    title: '名称',
    dataIndex: 'billing_name',
    key: 'billing_name',
}];

const columns_BusinessCom = [{
    title: '编号',
    dataIndex: 'deliver_id',
    key: 'deliver_id',
}, {
    title: '名称',
    dataIndex: 'deliver_name',
    key: 'deliver_name',
}];

const columns_agent = [{
    title: '编号',
    dataIndex: 'agent_id',
    key: 'agent_id',
}, {
    title: '名称',
    dataIndex: 'agent_name',
    key: 'agent_name',
}];



export class LeftDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showManufacturerVisible: false,
            filterDropdownVisible: false,
            showCompanyVisible: false,
            showAgentVisible:false,
            filtered: false,
            selectedMoreValue: [],
            indeterminate: true,
            checkAll: false,
            checkedList: '',
            visible: false,
            addMedicineVisible: false,
            name: '',
            gmpTime:'',
            proxyTime:'',
            productionTime:'',
            businessTime:''

        }
    }

    componentWillMount() {
        this.props.getUserInfo(1);
    }

    componentDidUpdate() {
        if (this.props.addDrugInfoCode == 1000) {
            const data = {
            page: 1,
            limit: 5
            }
            this.props.getDrugList(data);
            
        }

        console.log()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addCode == 1000 && this.props.addCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getDrugList(params);
        }
    }
    /**
     * 控制添加药品信息按钮
     */
    addMechInfo() {
        this.setState({
            addMedicineVisible: true
        })
    }

    handleOkAddMechInfo() {
        this.setState({
            addMedicineVisible: false,
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMedicineVisible: false,
        });
    }

    /**
     * 控制弹出生产厂家按钮
     */
    handleOkMarkNameInfo() {
        this.setState({
            showManufacturerVisible: false,
        });
    }
    handleCancelMarkNameInfo() {
        this.setState({
            showManufacturerVisible: false,
        });
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        let data = {
            filter: value,
            page: 1,
            limit: 5
        }
        this.props.searchDrugInfo(data)
    }

    //点击搜索获取生产厂家输入信息
    getMarkNameSearchValue(value) {
        //console.log('ssss', value)
    }

    //显示生产厂家对话框
    showManufacturerInfo() {
        const data = {
            page: 1,
            limit: 5
        }
        this.props.getManufacturerList(data);
        this.setState({
            showManufacturerVisible: true
        })
    }

    /**
     * 计量单位select方法
     */
    handleChangeCount(value) {
        //console.log(`selected ${value}`);
    }

    //中标类型方法，其中value为select选中的值
    handleChangeType(value) {
        //console.log(`selected ${value}`);
    }

    //获取表格的行元素
    rowClick(record,index) {
        console.log(index)
        this.setState({
            manufacturer_name: record.manufacturer_name,
            manufacturer_id : record.manufacturer_id,
            rowclicked :index
        })
        //rowclicked
        console.log(this.state.manufacturer_id)
    }

    /**
     * 展现开票公司弹框
     */
    showCompany() {
        const data = {
            page: -1,
            limit: 10
        }
        this.props.getBillingComponyList(data);
        this.setState({
            showCompanyVisible: true
        })
    }

    handleOkCompanyInfo() {
        this.setState({
            showCompanyVisible: false
        })
    }

    handleCancelCompanyNameInfo() {
        this.setState({
            showCompanyVisible: false
        })
    }

    /**
     * 展现代理商弹框
     */
    showAgent() {
        const data = {
            page: -1,
            limit: 10
        }
        this.props.getAgentList(data);
        this.setState({
            showAgentVisible: true
        })
    }

    handleOkAgentInfo() {
        this.setState({
            showAgentVisible: false
        })
    }

    handleCancelAgentNameInfo() {
        this.setState({
            showAgentVisible: false
        })
    }

     //是否分销单选按钮
    distribution(e) {
        distributionValue: e.target.value
    }

    //是否停用
    disabled(e) {
        disabledValue: e.target.value
    }

    //获取搜索值
    getCompanyInfoSearchValue(value) {

    }

    getAgentInfoSearchValue(value){

    }

    handleVisibleChange(flag) {
        this.setState({ visible: flag });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        console.log("aaskj")
        this.props.form.validateFields((err, values) => {
            console.log(values);
            var companyuserid = sessionStorage.getItem('companyuserid');
            console.log(companyuserid)
            if (!err) {
                //console.log('aaaaaaaaa', values)
                let params = {
                    'drug_name': values.drug_name,
                    'base_price': values.base_price,
                    'bid_type': values.bid_type,
                    'business_license_code': values.business_license_code,
                    'business_license_expire_time': Math.round(Date.parse(values.business_license_expire_time ? values.business_license_expire_time._d : '')/1000) ,
                    'country_medicare_code': values.country_medicare_code,
                    'create_time': values.create_time,
                    'creater': values.creater,
                    'dosage': values.dosage,
                    'drug_deliver': values.drug_deliver,
                    'gmp_code': values.gmp_code,
                    'gmp_expire_time': Math.round(Date.parse(values.gmp_expire_time?values.gmp_expire_time._d:'')/1000) || '',
                    'if_disabled': values.if_disabled,
                    'if_distribution': values.if_distribution,
                    'invoice_price': values.invoice_price,
                    'other_price': values.other_price,
                    'production_expire_time': Math.round(Date.parse(values.production_expire_time?values.production_expire_time._d:'')/1000),
                    'production_license': values.production_license,
                    'protocol_region': values.protocol_region,
                    'province_medicare_code': values.province_medicare_code,
                    'proxy': values.proxy,
                    'proxy_expire_time':  Math.round(Date.parse(values.proxy_expire_time?values.proxy_expire_time._d:'')/1000),
                    'retail_price': values.retail_price,
                    'specification': values.specification,
                    'tax_price': values.tax_price,
                    'bid_price':values.bid_price,
                    'unit': values.unit,
                    'manufacturer_id': this.state.manufacturer_id,
                    'manufacturer_name':this.state.manufacturer_name,
                    'creator_id':companyuserid,
                    'drug_remark':values.drug_remark,
                    'drug_deliver':this.state.bussinessId,
                    'drug_billing':this.state.billingId,
                    'drug_agent':this.state.agentId
                };
                console.log(params);
                this.props.addDrugInfo(params)
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

    onChangeSelect(e) {
        let isSelected = e.target.checked;
        this.setState({
            isSelected: isSelected
        })
    }

    //展示商业公司弹框方法组
    showBusinessCompany() {
        const param = {
            page: -1,
            limit: 10
        }
        this.props.getBusinessComList(param)
        this.setState({
            showBusinessComVisible: true
        })
    }

    handleOkBusinessComInfo() {
        this.setState({
            showBusinessComVisible: false
        })
    }

    handleCancelBusinessComInfo() {
        this.setState({
            showBusinessComVisible: false
        })
    }
    //时间选择
    gmpTimeChange(value){
        var time  = value._d;
        console.log(time.getTime());
        this.setState({
            gmpTime:time.getTime()
        })
    }
    proxyTimeChange(value){
        var time  = value._d
        console.log(time.getTime());
        this.setState({
            proxyTime:time.getTime()
        })
    }
    productionTimeChange(value){
        var time  = value._d
        console.log(time.getTime());
        this.setState({
            productionTime:time.getTime()
        })
    }
    businessTimeChange(value){
        var time  = value._d
        console.log(time.getTime());
        this.setState({
           businessTime:time.getTime()
        })
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)} style={{ height: 450, overflow: 'auto' }}>
                <Menu.Item key="0">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>药品编号</Checkbox >
                </Menu.Item>
                <Menu.Item key="1">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>药品名</Checkbox >
                </Menu.Item>
                <Menu.Item key="2">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>规格</Checkbox >
                </Menu.Item>
                <Menu.Item key="3">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>药剂</Checkbox >
                </Menu.Item>
                <Menu.Item key="4">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>计量单位</Checkbox >
                </Menu.Item>
                <Menu.Item key="5">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>生产厂家ID</Checkbox >
                </Menu.Item>
                <Menu.Item key="6">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>生产厂家名称</Checkbox >
                </Menu.Item>
                <Menu.Item key="7">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>中标类型</Checkbox >
                </Menu.Item>
                <Menu.Item key="8">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>参考中标价</Checkbox >
                </Menu.Item>
                <Menu.Item key="9">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>零售价</Checkbox >
                </Menu.Item>
                <Menu.Item key="10">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>开票价</Checkbox >
                </Menu.Item>
                <Menu.Item key="11">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>税票价</Checkbox >
                </Menu.Item>
                <Menu.Item key="12">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>底价</Checkbox >
                </Menu.Item>
                <Menu.Item key="13">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>其他费用</Checkbox >
                </Menu.Item>
                <Menu.Item key="14">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>是否新药分销</Checkbox >
                </Menu.Item>
                <Menu.Item key="15">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>是否停用</Checkbox >
                </Menu.Item>
                <Menu.Item key="16">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>省级医保代码</Checkbox >
                </Menu.Item>
                <Menu.Item key="17">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>国家医保代码</Checkbox >
                </Menu.Item>
                <Menu.Item key="18">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>营业执照代码</Checkbox >
                </Menu.Item>
                <Menu.Item key="19">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>营业执照过期日期</Checkbox >
                </Menu.Item>
                <Menu.Item key="20">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>GMP代码</Checkbox >
                </Menu.Item>
                <Menu.Item key="21">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>GMP过期日期</Checkbox >
                </Menu.Item>
                <Menu.Item key="22">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>生产许可证</Checkbox >
                </Menu.Item>
                <Menu.Item key="23">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>生产许可证过期日期</Checkbox >
                </Menu.Item>
                <Menu.Item key="24">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>委托书</Checkbox >
                </Menu.Item>
                <Menu.Item key="25">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>委托书过期时间</Checkbox >
                </Menu.Item>
                <Menu.Item key="26">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>协议区域</Checkbox >
                </Menu.Item>
                <Menu.Item key="27">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建人</Checkbox >
                </Menu.Item>
                <Menu.Item key="28">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建人姓名</Checkbox >
                </Menu.Item>
                <Menu.Item key="29">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>创建时间</Checkbox >
                </Menu.Item>
                <Menu.Item key="30">
                    <Checkbox onChange={this.onChangeSelect.bind(this)}>备注</Checkbox >
                </Menu.Item>
            </Menu>
        );
        //开票公司获取选中方法
        const { selectedRowKeys } = this.state;
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
                xs: { span: 10 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 9 },
            }
        }

        const manufacturerRowSelection ={
            
        }

        const billing_rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {

                var billingName = '';
                var billingId = [];
                selectedRows.map(function(item) {
                    console.log(item)
                    billingName = billingName + '/' + item.billing_name + '  ';
                    billingId.push(item.billing_id)
                })
                console.log(billingName)
                this.setState({
                    selectedBillingInfoRows: billingName,
                    billingId:billingId
                }, () => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                })
            },
        }

        const business_rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                var bussinessName = '';
                var bussinessId = [];
                selectedRows.map(function(item){
                    console.log(item)
                    bussinessName = bussinessName + '/'+ item.deliver_name + '  ';
                    bussinessId.push(item.deliver_id)
                })
                console.log(bussinessName)
                this.setState({
                    selectedBusinessInfoRows: bussinessName, 
                    bussinessId:bussinessId
                }, () => {
                     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                })
            },
        }

        const agent_rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                var agentName = '';
                var agentId = [];
                selectedRows.map(function(item){
                    console.log(item)
                    agentName = agentName + '/'+ item.agent_name + '  ';
                    agentId.push(item.agent_id)
                })
                console.log(agentName)
                this.setState({
                    selectedAgentRows: agentName, 
                    agentId:agentId
                }, () => {
                     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                })
            },
        }

        const antTableRowClick = {
            backgroundColor:'red'
        }


        return (
            <div>
                <Row>
                    <Col span={3}>
                      {/*  <Dropdown overlay={menu} trigger={['hover']} onVisibleChange={this.handleVisibleChange.bind(this)} visible={this.state.visible}>
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
                    title="添加药品信息"
                    width='720px'
                    visible={this.state.addMedicineVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="药品名"
                                >
                                    {getFieldDecorator('drug_name', {
                                        rules: [{
                                            required: true,message:'药品名不能为空'
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
                                    label="生产厂家"
                                >
                                    {getFieldDecorator('manufacturer_name', {
                                        rules: [{
                                           message:'生产厂家不能为空'
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                value={this.state.manufacturer_name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showManufacturerInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>

                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="剂型"
                                >
                                    {getFieldDecorator('dosage', {
                                        rules: [{
                                            required: true,message:'剂型不能为空'
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
                                    label="规格"
                                >
                                    {getFieldDecorator('specification', {
                                        rules: [{
                                            required: true,message:'规格不能为空'
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
                                    label="计量单位"
                                >
                                    {getFieldDecorator('unit', {
                                        rules: [{
                                            required: true,message:'计量单位不能为空'
                                        }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            optionFilterProp="children"
                                            onChange={this.handleChangeCount.bind(this)}
                                        >
                                            <Option value="1">盒</Option>
                                            <Option value="2">件</Option>
                                            <Option value="3">瓶</Option>
                                            <Option value="4">支</Option>
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="中标类型"
                                >
                                    {getFieldDecorator('bid_type', {
                                        rules: [{
                                            required: true,message:'中标类型不能为空'
                                        }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            optionFilterProp="children"
                                           
                                            onChange={this.handleChangeType.bind(this)}
                                        >
                                            <Option value="1">国家基药</Option>
                                            <Option value="2">军标</Option>
                                            <Option value="3">廉价药品</Option>
                                            <Option value="4">省增补药品</Option>
                                            <Option value="5">备案采购</Option>
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        {/* 第二层 */}
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="参考中标价"
                                >
                                    {getFieldDecorator('bid_price', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} /> 元
                                    </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="开票价"
                                >
                                    {getFieldDecorator('invoice_price', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} /> 元
                                </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="零售价"
                                >
                                    {getFieldDecorator('retail_price', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} /> 元
                                </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="税价"
                                >
                                    {getFieldDecorator('tax_price', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} /> 元
                                </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="底价"
                                >
                                    {getFieldDecorator('base_price', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} /> 元
                                </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="其他用费"
                                >
                                    {getFieldDecorator('other_price', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} /> 元
                                </div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        {/* 第三层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label='代理商'
                            >
                                {getFieldDecorator('drug_agent', {
                                })(
                                    <div className='addNodeInfo'>
                                        {/* {this.state.selectedValues ? this.state.selectedValues.map((value) => {
                                            <Tag>value</Tag>
                                        }) : <Tag></Tag>} */}
                                        {this.state.selectedAgentRows}
                                        <Button style={{ float: 'right', marginRight: 2 }} size='small' className='mainButton'
                                            onClick={this.showAgent.bind(this)}><Icon type="plus-square" /></Button>
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout1}
                                label='开票公司'
                            >
                                {getFieldDecorator('drug_billing', {
                                })(
                                    <div className='addNodeInfo'>
                                        {/* {this.state.selectedValues ? this.state.selectedValues.map((value) => {
                                            <Tag>value</Tag>
                                        }) : <Tag></Tag>} */}
                                        {this.state.selectedBillingInfoRows}
                                        <Button style={{ float: 'right', marginRight: 2 }} size='small' className='mainButton'
                                            onClick={this.showCompany.bind(this)}><Icon type="plus-square" /></Button>
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout1}
                                label='商业公司'
                            >
                                {getFieldDecorator('drug_deliver', {

                                })(
                                    <div className='addNodeInfo'>
                                        {this.state.selectedBusinessInfoRows}
                                        <Button style={{ float: 'right', marginRight: 2 }} size='small' className='mainButton'
                                            onClick={this.showBusinessCompany.bind(this)}><Icon type="plus-square" /></Button>
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <br />
                        {/* 第四层 */}
                        <div>
                            <Row className='botLine'>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="新药分销"
                                    >
                                        {getFieldDecorator('if_distribution', {

                                        })(
                                            <RadioGroup onChange={this.distribution.bind(this)} initialValue={1}>
                                                <Radio value={1}>是</Radio>
                                                <Radio value={2}>否</Radio>
                                            </RadioGroup>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="是否停用"
                                    >
                                        {getFieldDecorator('if_disabled', {

                                        })(
                                            <RadioGroup onChange={this.disabled.bind(this)} initialValue={1}>
                                                <Radio value={1}>是</Radio>
                                                <Radio value={2}>否</Radio>
                                            </RadioGroup>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="省级医保代码"
                                    >
                                        {getFieldDecorator('province_medicare_code', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="国家医保代码"
                                    >
                                        {getFieldDecorator('country_medicare_code', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="营业执照代码"
                                    >
                                        {getFieldDecorator('business_license_code', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="营业执照过期日期"
                                    >
                                        {getFieldDecorator('business_license_expire_time', {
                                        })(
                                            <DatePicker  onChange={this.businessTimeChange.bind(this)} style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="GMP代码"
                                    >
                                        {getFieldDecorator('gmp_code', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="GMP过期日期"
                                    >
                                        {getFieldDecorator('gmp_expire_time', {
                                        })(
                                            <DatePicker onChange={this.gmpTimeChange.bind(this)} style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="生产许可证"
                                    >
                                        {getFieldDecorator('production_license', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} placeholder='' />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="生产许可证有效期"
                                    >
                                        {getFieldDecorator('production_expire_time', {
                                        })(
                                            <DatePicker onChange={this.productionTimeChange.bind(this)} style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="委托书"
                                    >
                                        {getFieldDecorator('proxy', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="委托书有效期"
                                    >
                                        {getFieldDecorator('proxy_expire_time', {
                                        })(
                                            <DatePicker onChange={this.proxyTimeChange.bind(this)} style={{ width: 200 }} />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout2}
                                        label="协议区域"
                                    >
                                        {getFieldDecorator('protocol_region', {

                                        })(
                                            <div>
                                                <Input style={{ width: 200 }} />
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={12}></Col>
                            </Row>
                        </div>
                        <br />
                        {/* 第五层 */}
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
                                {getFieldDecorator('drug_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }} onClick={this.handleOkAddMechInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddMechInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>
                <Modal
                    title="生产厂家信息"
                    visible={this.state.showManufacturerVisible}
                    onOk={this.handleOkMarkNameInfo.bind(this)}
                    onCancel={this.handleCancelMarkNameInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMarkNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table 
                    columns={columns}  rowKey
                    dataSource={this.props.manufacturerList.data} 
                    onRowClick={this.rowClick.bind(this)} 
                    rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''}/>
                </Modal>

                <Modal
                    title="代理商列表"
                    visible={this.state.showAgentVisible}
                    onOk={this.handleOkAgentInfo.bind(this)}
                    onCancel={this.handleCancelAgentNameInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getAgentInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table rowSelection={agent_rowSelection} columns={columns_agent} 
                    dataSource={this.props.agentList.data}
                     />
                </Modal>

                <Modal
                    title="开票公司列表"
                    visible={this.state.showCompanyVisible}
                    onOk={this.handleOkCompanyInfo.bind(this)}
                    onCancel={this.handleCancelCompanyNameInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getCompanyInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table rowSelection={billing_rowSelection} columns={columns_compony} 
                    dataSource={this.props.bilingListInfo.data} 
                    />
                </Modal>

                <Modal
                    title="商业公司列表"
                    visible={this.state.showBusinessComVisible}
                    onOk={this.handleOkBusinessComInfo.bind(this)}
                    onCancel={this.handleCancelBusinessComInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getCompanyInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table rowSelection={business_rowSelection} columns={columns_BusinessCom} 
                    dataSource={this.props.businessComInfo}
                     />
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.drugNameListInfo.userInfo)
    return {
        manufacturerList: state.drugListInfo.manufacturerList,
        bilingListInfo: state.drugListInfo.bilingListInfo,
        businessComInfo: state.drugListInfo.businessCom,
        addDrugInfoCode: state.drugListInfo.addDrugInfoCode,
        userInfo: state.drugNameListInfo.userInfo,
        agentList:state.drugListInfo.agentInfo
    }
    console.log("aaaa")
}

function mapDispatchToProps(dispatch) {
    return {
        //获取药品列表
        getDrugList: (params) => dispatch(actionCreater.getDrugListInfo(params)),
        //搜索药品信息
        searchDrugInfo: (params) => dispatch(actionCreater.searchDrugListInfo(params)),
        //获取生产厂家信息
        getManufacturerList: (param) => dispatch(actionCreater.getManufacturerListInfo(param)),
        //获取开票公司信息
        getBillingComponyList: (param) => dispatch(actionCreater.getBillingComponyListInfo(param)),
        //获取商业公司信息
        getBusinessComList: (param) => dispatch(actionCreater.getBusinessComListinfo(param)),
        //获取代理商信息
        getAgentList:(param) => dispatch(actionCreater.getAgentInfo(param)),
        //添加药品信息123
        addDrugInfo: (param) => dispatch(actionCreater.addDrugFormInfo(param)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LeftDropDown))