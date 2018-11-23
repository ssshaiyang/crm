import React from 'react'
import { connect } from 'react-redux'
import { Card, Collapse, Input, Table, Popconfirm, Icon,Radio , Row, Col, Button, Form, Select, Modal } from 'antd'
import * as actionCreater from '../../../actions/files/costPolicy/costPolicy.js'
const { Column, ColumnGroup } = Table;
const Panel = Collapse.Panel;
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const data_manufacturer = [{
    id: '100001',
    name: '浙江大学附属第二医院',
    componyliren: '10.00',
    zhongbiaoren: '',
    chuangjianren: '',
    chuangjian_time: '',
    tip: '',
},
{
    id: '100002',
    name: '浙江大学附属第二医院',
    componyliren: '10.00',
    zhongbiaoren: '',
    chuangjianren: '',
    chuangjian_time: '',
    tip: '',
},]
export class CostPolicy extends React.Component {
    constructor() {
        super();
        this.state = {
            allInputVisible: false,
            policyAllotVisible:false,
            policyInputVisible:false,
            drug_name:'',
            drug_id:0,
            hospital_policy_type:1,
            employee_name:'',
            employee_id:0
        }
    }
    componentWillMount() {
        let params = {
            page: -1,
            limit: 15
        }
        // this.props.getHospital(params);
        this.props.getDrugList(params)
        this.props.getUserInfo(1);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.agentContactInfo !== this.props.agentContactInfo) {
            this.setState({
                addContactors: nextProps.agentContactInfo,
                addBankAccount: nextProps.agentBankInfo
            })


        }
        if ((nextProps.editPolicyCode == true && this.props.editPolicyCode !== true)||
            (nextProps.addPolicyode == true && this.props.addPolicyode !== true)||
            (nextProps.delPolicyCode == true && this.props.delPolicyCode !== true)
            ) {
              let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getPolicyHospital(params)
            console.log("自动刷新")
        }
        if ((nextProps.addAllotCode == true && this.props.addAllotCode !== true)||
            (nextProps.editAllotCode == true && this.props.editAllotCode !== true)||
            (nextProps.delAllotCode == true && this.props.delAllotCode !== true)
            ) {


              let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getExpensesPolicyList(params)
            console.log("自动刷新")
        }
    }

    //点击搜索获取生产厂家输入信息
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }

    //获取表格的行元素
    rowClick(record, index) {
        console.log(record)
        this.setState({
            drug_name: record.drug_name,
            drug_id:record.drug_id,
            rowDrugclicked: index
        })
        let params = {
            id: record.drug_id || 1,
            values: {
                page: -1,
                limit: 10
            }
        }
        this.props.getPolicyHospital(params)
    }

    rowHospitalClick(record, index){
        console.log(record)
        this.setState({
            drug_hospital_id:record.drug_hospital_id,
            rowclicked: index
        })
        let params = {
            id: record.drug_hospital_id || 1,
            values: {
                page: -1,
                limit: 10
            }
        }
        this.props.getExpensesPolicyList(params);

    }
    /**
     * 修改联系人信息
     */
    updateManufacturerInfo() {
        this.setState({
            updateManuVisible: true,
        })
    }
    //下拉框
    makeOptions(options) {
        if (options) {
            let keys = Object.keys(options);
            return keys.map(key => (
            <Option value={key.toString()} key={key.toString()}>
                {options[key]}
            </Option>
        ))

        }else{
            console.log(options)
        }
       
    }

    handleOkManufacturerInfo() {
        this.setState({
            updateManuVisible: false
        })
    }

    handleCancelManufacturerInfo() {
        this.setState({
            updateManuVisible: false
        })
    }

    updateHospitalInfo(record){
        console.log(record)
        let params = {
            page: -1,
            limit: 15
        }
        this.props.getHospitalOptions(params, null);
        this.setState({
            editHospitalVisible: true,
            drug_hospital_id:record.drug_hospital_id,
            hospital_id:record.hospital_id
        })
         this.props.form.setFieldsValue({
            hospital_edit_name:record.hospital_name,
            company_edit_profit:record.company_profit,
            bid_edit_price:record.bid_price,
            creater_edit_name:record.creator_name,
            creater_edit_time:record.create_time,
            drug_hospital_edit_remark:record.drug_hospital_remark,

         })
    }

    updateOkHospitalInfo(){
        this.setState({
            editHospitalVisible: false
        })
    }

    updateCanelHospitalInfo(){
        this.setState({
            editHospitalVisible: false
        })
    }

    /**
     * 删除用户信息
     */

    delManufacturerInfo() {
        this.setState({
            delManufacturerVisible: true
        })
    }

    handleOkDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
        })
    }

    handleCancelDelManufacturerInfo() {
        this.setState({
            delManufacturerVisible: false
        })
    }
    //显示员工
    showEmployeeInfo(){
        this.setState({
            employeeVisible:true
        })
    }

    onChangeColl(){
        this.setState({
            activeKey:2
        })
            
    }
    //删除医院分配
    delHospitalInfo(record){
        console.log(record);
        this.props.delHospital(record.drug_hospital_id)
        let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getHospital(params)
    }

    /**
     * 医院分配批量导入和单个导入
     */
    showAllInput() {
        let params = {
            page: -1,
            limit: 15
        }
        this.props.getHospitalOptions(params, null);
        this.setState({
            allInputVisible: true
        })
    }

    handleOkAddHospital() {
        this.setState({
            allInputVisible: false
        })
    }

    handleCancelAddHospital() {
        this.setState({
            allInputVisible: false
        })
    }
    //添加医院分配
    handleSubmitDrugHospitalInfo(e) {
        e.preventDefault();
        
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(fieldsValue)
            console.log(err)
            if (1==1) {
                let addHospital = {

                    drug_id:this.state.drug_id,
                    drug_hospital_remark:fieldsValue.drug_hospital_remark,
                    data:[{
                        drug_hospital_remark: fieldsValue.drug_hospital_remark,
                        hospital_id: parseInt(this.state.hospital_id),
                        hospital_name: this.state.hospital_name,
                        company_profit: parseInt(fieldsValue.company_profit),
                        bid_price: parseInt(fieldsValue.bid_price),
                    }]
                    
                }
                this.props.addHospital(addHospital);
                console.log("1111") 
            }
            let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getHospital(params)
        });
    }

    //编辑
    handleEditDrugHospitalInfo(e){
        e.preventDefault();
        
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(fieldsValue)
            console.log(err)
            if (1==1) {
                let params = {
                    id: this.state.drug_hospital_id,
                    values:{
                        drug_id: this.state.drug_id,
                        hospital_id: parseInt(this.state.hospital_id),
                        hospital_name: fieldsValue.hospital_edit_name || this.state.hospital_edit_name,
                        company_profit: fieldsValue.company_edit_profit,
                        bid_price: fieldsValue.bid_edit_price,
                        drug_hospital_remark: fieldsValue.drug_hospital_edit_remark
                    }
                    

                }
                this.props.editHospital(params);
                console.log("1111")
            }
            let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getHospital(params)
        });
    }

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    /**
     * 计量单位select方法
     */
    handleChangeCount(value) {
        //console.log(`selected ${value}`);
        console.log(value)
        console.log("value")
        this.setState({
            hospital_id:value,
            hospital_name:this.props.hospitalOptions[value]
        })
    }

    handleChangeCount2(value) {
        // //console.log(`selected ${value}`);
        // console.log(value)
        // console.log("value")
        // this.setState({
        //     hospital_id:value,
        //     hospital_name:this.props.hospitalOptions[value]
        // })
    }

    /**
     * 政策
     */
    showAllAllotInput(){
         this.setState({
            policyAllotVisible:true
         })
    }

    okPolicyAllotInput(){

        this.setState({
            policyAllotVisible:false
        })
    }

    cancelPolicyAllotInput(){

        this.setState({
            policyAllotVisible:false
        })
    }

    handleSubmitAllotInfo(e){
         e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(fieldsValue)
            console.log(err)
            if (1==1) {
                let params = {
                    drug_hospital_id: this.state.drug_hospital_id,
                    hospital_policy_remark:fieldsValue.drug_hospital_remark,
                    data:[{
                        hospital_policy_type: this.state.hospital_policy_type,
                        employee_id: this.state.employee_id,
                        employee_name: this.state.employee_name,
                        hospital_policy_profit: fieldsValue.hospital_policy_profit,
                        hospital_policy_rate: fieldsValue.hospital_policy_rate,
                        hospital_policy_identity: fieldsValue.hospital_policy_identity
                    }]
                }
                this.props.addAllotHospital(params);
                console.log("1111")
            }
            let params = {
                id: this.state.drug_hospital_id || 1,
                values: {
                    page: -1,
                    limit: 10
                }
            }
            this.props.getExpensesPolicyList(params);
            });
    }
    //编辑政策分配
    handleEditAllotInfo(e){
         e.preventDefault();
        
        this.props.form.validateFields((err, fieldsValue) => {
            console.log(fieldsValue)
            console.log(err)
            if (1==1) {
                let params = {
                        drug_hospital_id:this.state.drug_hospital_id,
                        hospital_policy_id: this.state.hospital_policy_id,
                        drug_id: this.state.drug_id,
                        hospital_policy_rate: fieldsValue.edit_hospital_policy_rate,
                        hospital_policy_remark: fieldsValue.edit_hospital_policy_remark,
                        hospital_policy_type: fieldsValue.edit_hospital_policy_type,
                        employee_name: this.state.employee_name,
                        employee_id: this.state.employee_id,
                        hospital_policy_profit: fieldsValue.edit_hospital_policy_profit,
                }
                this.props.editAllot(params);
                console.log("1111")
            }
            let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getHospital(params)
        });
    }

    showEmployeeInfo() {
        let data = {
            page: -1,
            limit: 10,
            department_id:-1,
            position_id:-1
        }
        this.props.getEmployee(data);
        this.setState({
            showEmployeesNameVisible: true
        })
        console.log(this.props)
    }
    handleOkEmployeesInfo(){
        this.setState({
            showEmployeesNameVisible:false
        })
    }
    handleCancelEmployeesInfo(){
        this.setState({
            showEmployeesNameVisible:false
        })
    }

    rowEmployeesClick(record) {
        //console.log('sssssss',record)
        this.setState({
            employee_name: record.employee_name,
            employee_id: record.employee_id
        })
        console.log(this.state.employee_id)

    }

        //删除医院分配
    delAllotInfo(record){
        console.log(record);
        this.props.delAllot(record.hospital_policy_id)
        let params ={
                id:this.state.drug_id,
                values:{
                     page:-1,
                     limit:10
                }
            }
            this.props.getHospital(params)
    }

    updateAllotInfo(record){
        console.log(record)
        let params = {
            page: -1,
            limit: 15
        }
        this.props.getHospitalOptions(params, null);
        this.setState({
            editAllotVisible: true,
            drug_hospital_id:record.drug_hospital_id,
            employee_name:record.employee_name,
            employee_id:record.employee_id,
            hospital_policy_id:record.hospital_policy_id
        })
        this.props.form.setFieldsValue({
            edit_hospital_policy_type:record.hospital_policy_type,
            edit_hospital_policy_identity:record.hospital_policy_type,
            edit_hospital_policy_rate:record.hospital_policy_rate,
            edit_hospital_policy_profit:record.hospital_policy_profit,
            edit_hospital_policy_remark:record.hospital_policy_remark,
        })
    }

    updateOkAllotInfo(){
        this.setState({
            editAllotVisible: false
        })
    }

    updateCanelAllotInfo(){
        this.setState({
            editAllotVisible: false
        })
    }


    rowAllotClick(record, index){
        this.setState({
            rowAllotclicked:index
        })
    }

    onTyprChange(e){
        this.setState({
            hospital_policy_type:e.target.value
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
         const employeecolumns = [
            {
            title: '编号',
            dataIndex: 'employee_id',
            key: 'employee_id',
            },
            {
            title: '姓名',
            dataIndex: 'employee_name',
            key: 'employee_name',
            },
            {
            title: '职位',
            dataIndex: 'role',
            key: 'role',
            }
        ]
        //标准药品名称列表
        const columns = [{
            title: '药品编号',
            dataIndex: 'drug_id',
            key: 'drug_id'
        }, {
            title: '药品名',
            dataIndex: 'drug_name',
            key: 'drug_name',
        },
        {
            title: '剂型',
            dataIndex: 'specification',
            key: 'specification',
        },
        {
            title: '规格',
            dataIndex: 'spec',
            key: 'spec',
        },
        
        {
            title: '生产厂家',
            dataIndex: 'manufacturer_name',
            key: 'manufacturer_name',
        },
        {
            title: '中标价',
            dataIndex: 'bid_price',
            key: 'bid_price',
        },
        {
            title: '零售价',
            dataIndex: 'retail_price',
            key: 'retail_price',
        }];

        const columns_policy=[{
            title: '序号',
            dataIndex: 'hospital_policy_id',
            key: 'hospital_policy_id'
        },
        {
            title: '身份',
            dataIndex: 'hospital_policy_identity',
            key: 'hospital_policy_identity'
        },
        {
            title: '姓名',
            dataIndex: 'employee_name',
            key: 'employee_name'
        },
        {
            title: '政策值',
            dataIndex: 'hospital_policy_profit',
            key: 'hospital_policy_profit'
        },
        {
            title: '政策比例',
            dataIndex: 'hospital_policy_rate',
            key: 'hospital_policy_rate'
        },
        
    ]

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
        return (
            <div style={{ padding: "35px 0" }}>
                <Collapse accordion onChange={this.onChangeColl.bind(this)}>
                    <Panel header={'药品'} key="1">
                        <Search
                            placeholder="输入客户ID/姓名/联系方式"
                            onSearch={this.getMedicineNameSearchValue.bind(this)}
                            style={{ marginBottom: 5 }}
                        />
                        <Table columns={columns} dataSource={this.props.drugsListInfo.data} onRowClick={this.rowClick.bind(this)} rowKey
                    rowClassName={(record, index) => index   === this.state.rowDrugclicked ? "antTableRowClick" : ''}/>
                    </Panel>
                    <Panel header={`${this.state.drug_name}的医院分配`} key="2">
                        <Row>
                            <Col span={8}>
                                <Search
                                    placeholder="输入客户ID/姓名/联系方式"
                                    onSearch={this.getMedicineNameSearchValue.bind(this)}
                                    style={{ marginBottom: 10 }}
                                />
                            </Col>
                            <Col span={8}></Col>
                            <Col span={8}>
                                {/*<Button className='mainButton' style={{ marginRight: 8 }} >批量导入</Button>*/}
                                <Button className='mainButton' onClick={this.showAllInput.bind(this)}><Icon type="plus-square-o"  style={{ fontSize: 14 }} /></Button>
                            </Col>
                        </Row>
                        <Table dataSource={this.props.policyHospital} onRowClick={this.rowHospitalClick.bind(this)} rowKey
                    rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''}>
                            <Column
                                title="编号"
                                dataIndex="drug_hospital_id"
                                key="drug_hospital_id"
                            />
                            <Column
                                title="名称"
                                dataIndex="hospital_name"
                                key="hospital_name"
                            />
                            <Column
                                title="公司利润"
                                dataIndex="company_profit"
                                key="company_profit"
                            />
                            <Column
                                title="中标价"
                                dataIndex="bid_price"
                                key="bid_price"
                            />
                            <Column
                                title="创建人"
                                dataIndex="creator_name"
                                key="creator_name"
                            />
                            <Column
                                title="创建时间"
                                dataIndex="create_time"
                                key="create_time"
                            />
                            <Column
                                title="备注"
                                dataIndex="drug_hospital_remark"
                                key="drug_hospital_remark"
                            />
                            <Column
                                title="操作"
                                key="operation"
                                render={(text, record, index) => (
                                    <div>
                                        <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                            onClick={() => this.updateHospitalInfo(record)}><Icon type="edit" /></span>
                                         <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delHospitalInfo(record)}>
                                               <Icon type="file-excel" />
                                        </Popconfirm>  
                                    </div>
                                )}
                            />
                        </Table>
                    </Panel>
                    <Panel header={`${this.state.drug_name}的的政策分配`} key="3">
                        <Row>
                            <Col span={8}>
                                <Search
                                    placeholder="输入客户ID/姓名/联系方式"
                                    onSearch={this.getMedicineNameSearchValue.bind(this)}
                                    style={{ marginBottom: 10 }}
                                />
                            </Col>
                            <Col span={8}></Col>
                            <Col span={8}>
                                {/*<Button className='mainButton' style={{ marginRight: 8 }} onClick={this.showPolicyInput.bind(this)}>批量导入</Button>*/}
                                <Button className='mainButton' onClick={this.showAllAllotInput.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 14 }} /></Button>
                            </Col>
                        </Row>
                        <Table dataSource={this.props.policyInfo} onRowClick={this.rowAllotClick.bind(this)} rowKey
                    rowClassName={(record, index) => index   === this.state.rowAllotclicked ? "antTableRowClick" : ''}>
                            <Column
                                title="序号"
                                dataIndex="hospital_policy_id"
                                key="hospital_policy_id"
                            />
                            <Column
                                title="身份"
                                dataIndex="hospital_policy_identity"
                                key="hospital_policy_identity"
                            />
                            <Column
                                title="姓名"
                                dataIndex="employee_name"
                                key="employee_name"
                            />
                            <Column
                                title="政策值"
                                dataIndex="hospital_policy_profit"
                                key="hospital_policy_profit"
                            />
                            <Column
                                title="政策比例"
                                dataIndex="hospital_policy_rate"
                                key="hospital_policy_rate"
                            />
                            <Column
                                title="操作"
                                key="operation"
                                render={(text, record, index) => (
                                    <div>
                                        <span style={{ fontSize: 16, marginRight: 10, cursor: 'pointer' }}
                                            onClick={() => this.updateAllotInfo(record)}><Icon type="edit" /></span>
                                         <Popconfirm title="确定要删除此条的信息吗" onConfirm={() =>this.delAllotInfo(record)}>
                                               <Icon type="file-excel" />
                                        </Popconfirm>  
                                    </div>
                                )}
                            />

                        </Table>
                    </Panel>
                </Collapse>

                <Modal
                    title='添加医院分配'
                    width='720px'
                    visible={this.state.allInputVisible}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmitDrugHospitalInfo.bind(this)}>
                        <Row>
                            {/* 第一层 */}
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="医院"
                                >
                                    {getFieldDecorator('hospital_name', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="请选择医院"
                                            optionFilterProp="children"
                                            onChange={this.handleChangeCount.bind(this)}
                                        >
                                            {this.makeOptions(this.props.hospitalOptions)}
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="公司利润"
                                >
                                    {getFieldDecorator('company_profit', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="中标价"
                                >
                                    {getFieldDecorator('bid_price', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={13}></Col>
                        </Row>
                        <br />

                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="创建人"
                                >
                                    {getFieldDecorator('creater_name', {

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
                                    {getFieldDecorator('creater_time', {

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
                                {getFieldDecorator('drug_hospital_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                         <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.handleOkAddHospital.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddHospital.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title='编辑医院分配'
                    width='720px'
                    visible={this.state.editHospitalVisible}
                    footer={null}
                >
                    <Form onSubmit={this.handleEditDrugHospitalInfo.bind(this)}>
                        <Row>
                            {/* 第一层 */}
                            <Col span={11}>
                               <FormItem
                                    {...formItemLayout}
                                    label="医院"
                                >
                                    {getFieldDecorator('hospital_edit_name', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="请选择医院aaaaa"
                                            optionFilterProp="children"
                                            onChange={this.handleChangeCount.bind(this)}
                                        >
                                            {this.makeOptions(this.props.hospitalOptions)}
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="公司利润"
                                >
                                    {getFieldDecorator('company_edit_profit', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="中标价"
                                >
                                    {getFieldDecorator('bid_edit_price', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={13}></Col>
                        </Row>
                        <br />

                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="创建人"
                                >
                                    {getFieldDecorator('creater_edit_name', {

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
                                    {getFieldDecorator('creater_edit_time', {

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
                                {getFieldDecorator('drug_hospital_edit_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                         <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.updateOkHospitalInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.updateCanelHospitalInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                 <Modal
                    title='添加政策分配'
                    width='720px'
                    visible={this.state.policyAllotVisible}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmitAllotInfo.bind(this)}>
                        <Row>
                             {/*第一层 */}
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="业务类型"
                                >
                                    {getFieldDecorator('hospital_policy_type', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <RadioGroup onChange={this.onTyprChange.bind(this)} value={this.state.hospital_policy_type}>
                                                <Radio value={1}>直营</Radio>
                                                <Radio value={2}>招商</Radio>
                                            </RadioGroup>
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="员工"
                                >
                                    {getFieldDecorator('employee_id', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                value={this.state.employee_name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                onClick={this.showEmployeeInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="政策值"
                                >
                                    {getFieldDecorator('hospital_policy_profit', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="政策比例
"
                                >
                                    {getFieldDecorator('hospital_policy_rate', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="身份
"
                                >
                                    {getFieldDecorator('hospital_policy_identity', {
                                         
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />

                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="创建人"
                                >
                                    {getFieldDecorator('creater_name', {

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
                                    {getFieldDecorator('creater_time', {

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
                                {getFieldDecorator('drug_hospital_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                         <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.okPolicyAllotInput.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.cancelPolicyAllotInput.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal> 
                <Modal
                    title='编辑政策分配'
                    width='720px'
                    visible={this.state.editAllotVisible}
                    footer={null}
                >
                    <Form onSubmit={this.handleEditAllotInfo.bind(this)}>
                        <Row>
                             {/*第一层 */}
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="业务类型"
                                >
                                    {getFieldDecorator('edit_hospital_policy_type', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <RadioGroup onChange={this.onTyprChange.bind(this)} value={this.state.hospital_policy_type}>
                                                <Radio value={1}>直营</Radio>
                                                <Radio value={2}>招商</Radio>
                                            </RadioGroup>
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="员工"
                                >
                                    {getFieldDecorator('employee_id', {
                                        //  rules: [{
                                        //     required: true
                                        // }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                value={this.state.employee_name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                onClick={this.showEmployeeInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="政策值"
                                >
                                    {getFieldDecorator('edit_hospital_policy_profit', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="政策比例
"
                                >
                                    {getFieldDecorator('edit_hospital_policy_rate', {
                                         rules: [{
                                            required: true
                                        }],
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="身份
"
                                >
                                    {getFieldDecorator('edit_hospital_policy_identity', {
                                         
                                    })(
                                        <Input style={{ width: 200 }} />
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />

                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="创建人"
                                >
                                    {getFieldDecorator('edit_creater_name', {

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
                                    {getFieldDecorator('edit_creater_time', {

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
                                {getFieldDecorator('edit_hospital_policy_remark', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                         <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.updateOkAllotInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.updateCanelAllotInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>

                </Modal> 
                 <Modal
                    title="员工列表"
                    visible={this.state.showEmployeesNameVisible}
                    onOk={this.handleOkEmployeesInfo.bind(this)}
                    onCancel={this.handleCancelEmployeesInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getMedicineNameSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table columns={employeecolumns} dataSource={this.props.employeeInfo} onRowClick={this.rowEmployeesClick.bind(this)} />
                </Modal>

            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    console.log(state.costPolicy)
    console.log(state.costPolicy.policyInfo)
    return{
        hospitalOptions: state.hospitalInfo.costPolicyInfo,
        policyHospital:state.costPolicy.hospitalInfo.data,
        policyInfo:state.costPolicy.policyInfo.data,
         //获取药品信息
        drugsListInfo: state.drugListInfo.drugList,
        userInfo: state.drugNameListInfo.userInfo,
        employeeInfo:state.agentInfo.employeeInfo.data,
        addPolicyode:state.costPolicy.addPolicyode,
        delPolicyCode:state.costPolicy.delPolicyCode,
        editPolicyCode:state.costPolicy.editPolicyCode,
        addAllotCode:state.costPolicy.addAllotCode,
        delAllotCode:state.costPolicy.delAllotCode,
        editAllotCode:state.costPolicy.editAllotCode,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDrugList: (params) => dispatch(actionCreater.getDrugListInfo(params)),
        getHospitalOptions: (hospital_name, cb) => dispatch(actionCreater.getHospitalSelectInfo(hospital_name, cb)),
        addHospital: (params) => dispatch(actionCreater.addHospitalInfo(params)),
        getHospital: (params) => dispatch(actionCreater.getHospitalInfo(params)),
        getPolicyHospital:(params) => dispatch(actionCreater.getPolicyHospitalInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreater.getUser(param)),
        delHospital:(params) => dispatch(actionCreater.delHospitalInfo(params)),
        editHospital:(params) => dispatch(actionCreater.editHospitalInfo(params)),
        getExpensesPolicyList:(params) => dispatch(actionCreater.getExpensesPolicyListInfo(params)),
        getEmployee:(params) => dispatch(actionCreater.getEmployeeInfo(params)),
        addAllotHospital:(params) => dispatch(actionCreater.addAllotHospitalInfo(params)),
        delAllot:(params) => dispatch(actionCreater.delAllotInfo(params)),
        editAllot:(params) => dispatch(actionCreater.editAllotInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CostPolicy))