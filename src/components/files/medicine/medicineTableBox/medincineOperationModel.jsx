import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table, Select, DatePicker, message, Radio } from 'antd'
import moment from 'moment';
import * as actionCreater from "../../../../actions/files/medicine/medicine.js"

const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;
const Option = Select.Option;
const Search = Input.Search;
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

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

export class MedincineOperationModel extends React.Component {

    constructor() {
        super();
        this.state = {
            addMedicineVisible: false,
            agentModelVisible: false,
            addBankInfoVisible: false,
            delAgentVisible: false,
            showManufacturerVisible: false,
            showBusinessComVisible: false,
            showAgentVisible: false
        }
    }

    componentWillMount() {
        console.log(this.props.data)
    }

    /**
     * 控制添加药品信息按钮
     */

    addMedicine() {
        this.setState({
            addMedicineVisible: true
        })
    }

    handleOkAddMechInfo() {
        const data = {
            page: -1,
            limit: 10
        }
        this.props.getDrugList(data);
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

    //显示生产厂家对话框
    showManufacturerInfo() {
        const data = {
            page: -1,
            limit: 10
        }
        this.props.getManufacturerList(data);
        this.setState({
            showManufacturerVisible: true
        })
    }

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
        //console.log('ssss', value)
    }

    //点击搜索获取生产厂家输入信息
    getMarkNameSearchValue(value) {
        let params = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.searchManufacturerInfo(params);
    }

    //添加药品信息对话框
    addMechInfo() {
        this.setState({
            addMechInfoVisible: true
        });
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
    rowClick(record) {
        //console.log('sssssss',record)
        this.setState({
            name: record.manufacturer_name,
            id: record.manufacturer_id,
        })
    }

    /**
     * 展现开票公司弹框
     */
    showCompany() {
        const param = {
            page: -1,
            limit: 10
        }
        this.props.getBillingComponyList(param);
        this.setState({
            showCompanyVisible: true
        })
    }

    handleOkCompanyInfo() {
        //this.renderTag();
        this.setState({
            showCompanyVisible: false
        })
    }

    handleCancelCompanyNameInfo() {
        this.setState({
            showCompanyVisible: false
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

    //获取开票公司搜索值
    getCompanyInfoSearchValue(value) {
        let data = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.searchBilingComponyInfo(data);
    }

    //获取商业公司搜索值
    getBusinessCompanyInfoSearchValue(value) {
        let data = {
            filter: value,
            page: -1,
            limit: 10
        }
        this.props.searchBusinessComInfo(data);
    }

    /**
     * 删除代理人信息方法组
     */

    showDel() {
        this.props.delDrugInfo(this.props.data.drug_id);
        this.setState({
            delAgentVisible: true
        })
    }

    handleOkDelAgent() {
        const data = {
            page: -1,
            limit: 10
        }
        if (this.props.delDrugInfoCode == 1000) {
            message.info('删除药品信息成功!');
            this.props.getDrugList(data);
            this.setState({
                delAgentVisible: false,
            })
        } else {
            message.info('删除药品信息失败!');
            this.setState({
                delAgentVisible: true
            })
        }
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('sssss', values);
            if (!err) {
                let value = {
                    'drug_name': values.drug_name,
                    'base_price': values.base_price,
                    'bid_type': values.bid_type,
                    'manufacturer_id': this.state.id,
                    'manufacturer_name': this.state.name,
                    'business_license_code': values.business_license_code,
                    'business_license_expire_time': Date.parse(values['business_license_expire_time'].format('YYYY-MM-DD')) / 1000,
                    'country_medicare_code': values.country_medicare_code,
                    'create_time': values.create_time,
                    'creater': values.creater,
                    'dosage': values.dosage,
                    'drug_deliver': values.drug_deliver,
                    'gmp_code': values.gmp_code,
                    'gmp_expire_time': Date.parse(values['gmp_expire_time'].format('YYYY-MM-DD')) / 1000,
                    'if_disabled': values.if_disabled,
                    'if_distribution': values.if_distribution,
                    'invoice_price': values.invoice_price,
                    'other_price': values.other_price,
                    'production_expire_time': Date.parse(values['production_expire_time'].format('YYYY-MM-DD')) / 1000,
                    'production_license': values.production_license,
                    'protocol_region': values.protocol_region,
                    'province_medicare_code': values.province_medicare_code,
                    'proxy': values.proxy,
                    'proxy_expire_time': Date.parse(values['proxy_expire_time'].format('YYYY-MM-DD')) / 1000,
                    'retail_price': values.retail_price,
                    'specification': values.specification,
                    'tax_price': values.tax_price,
                    'unit': values.unit,
                    'manufacturer_id': values.manufacturer_id,
                    'drug_billing': this.state.selectedkeys,
                    'drug_deliver': this.state.selectedBusinessInfokeys,
                    'drug_agent': ['1'],
                };
                // let data = {
                //     drug_id: this.props.data.drug_id,
                //     values: value
                // }
                // this.props.editDrugInfo(data)
            }
        });
    }

    //获取选中的表格值
    getSelectedRowsValue() {
        let selectedValues = [];
        let selectedkeys = [];
        if (this.state.selectedRows) {
            for (let i = 0; i < this.state.selectedRows.length; i++) {
                selectedValues.push(this.state.selectedRows[i].billing_name);
                selectedkeys.push(this.state.selectedRows[i].billing_id)
            }
        }
        this.setState({
            selectedValues: selectedValues,
            selectedkeys: selectedkeys
        })
    }

    getBusinessSelectedRowsValue() {
        let selectedBusinessInfoValues = [];
        let selectedBusinessInfokeys = [];
        if (this.state.selectedBusinessInfoRows) {
            for (let i = 0; i < this.state.selectedBusinessInfoRows.length; i++) {
                selectedBusinessInfoValues.push(this.state.selectedBusinessInfoRows[i].deliver_name);
                selectedBusinessInfokeys.push(this.state.selectedBusinessInfoRows[i].deliver_id);
            }
        }
        this.setState({
            selectedBusinessInfoValues: selectedBusinessInfoValues,
            selectedBusinessInfokeys: selectedBusinessInfokeys
        })
    }

    //代理商模块
    getAgentSelectedRowsValue() {
        let selectedAgentInfoValues = [];
        let selectedAgentInfokeys = [];
        if (this.state.selectedAgentInfoRows) {
            for (let i = 0; i < this.state.selectedAgentInfoRows.length; i++) {
                selectedAgentInfoValues.push(this.state.selectedAgentInfoRows[i].agent_id);
                selectedAgentInfokeys.push(this.state.selectedAgentInfoRows[i].agent_name);
            }
        }
        this.setState({
            selectedAgentInfoValues: selectedAgentInfoValues,
            selectedAgentInfokeys: selectedAgentInfokeys
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

    //代理商弹框
    showAgentModal() {
        this.setState({
            showAgentVisible: true
        })
    }

    handleOkAgentModal() {
        this.setState({
            showAgentVisible: false
        })
    }

    handleCancelAgentModal() {
        this.setState({
            showAgentVisible: false
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
                xs: { span: 10 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 9 },
            }
        }

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRows: selectedRows
                }, () => {
                    this.getSelectedRowsValue();
                })
            },
        }

        const business_rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedBusinessInfoRows: selectedRows
                }, () => {
                    this.getBusinessSelectedRowsValue();
                })
            },
        }

        const agent_rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedAgentInfoRows: selectedRows
                }, () => {
                    this.getAgentSelectedRowsValue();
                })
            },
        }

        return (
            <div>
                <span onClick={this.addMedicine.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}>
                    <Icon type="edit" style={{ fontSize: 18 }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: 18 }} /></span>
                <Modal
                    title="编辑药品信息"
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

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.drug_name} style={{ width: 200 }} />
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
                                    {getFieldDecorator('manufacturer_id', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                value={this.state.name}
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

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.dosage} style={{ width: 200 }} />
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
                                    label="计量单位"
                                >
                                    {getFieldDecorator('unit', {

                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            initialValue={this.props.data.unit}
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

                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            initialValue={this.props.data.bid_type}
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
                                            <Input style={{ width: 200 }} defaultValue={this.props.data.bid_price} /> 元
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
                                            <Input defaultValue={this.props.data.invoice_price} style={{ width: 200 }} /> 元
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
                                            <Input defaultValue={this.props.data.retail_price} style={{ width: 200 }} /> 元
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
                                            <Input defaultValue={this.props.data.tax_price} style={{ width: 200 }} /> 元
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
                                            <Input defaultValue={this.props.data.base_price} style={{ width: 200 }} /> 元
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
                                    {getFieldDecorator('other_price	', {

                                    })(
                                        <div>
                                            <Input defaultValue={this.props.data.other_price} style={{ width: 200 }} /> 元
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
                                label='开票公司'
                            >
                                {getFieldDecorator(' drug_billing', {
                                })(
                                    <div className='addNodeInfo'>
                                        {this.state.selectedValues}
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
                                        {this.state.selectedBusinessInfoValues}
                                        <Button style={{ float: 'right', marginRight: 2 }} size='small' className='mainButton'
                                            onClick={this.showBusinessCompany.bind(this)}><Icon type="plus-square" /></Button>
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout1}
                                label='代理商'
                            >
                                {getFieldDecorator('company_agent', {

                                })(
                                    <div className='addNodeInfo'>
                                        {this.state.selectedAgentInfoValues}
                                        <Button style={{ float: 'right', marginRight: 2 }} size='small' className='mainButton'
                                            onClick={this.showAgentModal.bind(this)}><Icon type="plus-square" /></Button>
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
                                                <Input defaultValue={this.props.data.province_medicare_code} style={{ width: 200 }} />
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
                                                <Input defaultValue={this.props.data.country_medicare_code} style={{ width: 200 }} />
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
                                                <Input defaultValue={this.props.data.business_license_code} style={{ width: 200 }} />
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
                                            <DatePicker defaultValue={this.props.business_license_expire_time} style={{ width: 200 }} />
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
                                                <Input defaultValue={this.props.data.gmp_code} style={{ width: 200 }} />
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
                                            <DatePicker defaultValue={this.props.gmp_expire_time} style={{ width: 200 }} />
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
                                                <Input defaultValue={this.props.data.production_license} style={{ width: 200 }} placeholder='' />
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
                                            <DatePicker defaultValue={this.props.production_expire_time} style={{ width: 200 }} />
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
                                                <Input defaultValue={this.props.data.proxy} style={{ width: 200 }} />
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
                                            <DatePicker defaultValue={moment(this.props.proxy_expire_time)} style={{ width: 200 }} />
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
                                                <Input defaultValue={this.props.data.protocol_region} style={{ width: 200 }} />
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
                                    {getFieldDecorator('drug_remark', {

                                    })(
                                        <div>
                                            <input value={this.props.data.drug_remark} type='textarea' className='my_textarea_style' />
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
                    <Table rowKey columns={columns}
                        dataSource={this.props.searchManufacInfo.data ? this.props.searchManufacInfo.data : this.props.manufacturerList.data} onRowClick={this.rowClick.bind(this)} />
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
                    <Table rowSelection={rowSelection} columns={columns_compony}
                        dataSource={this.props.searchBilingComInfo.data ? this.props.searchBilingComInfo.data : this.props.bilingListInfo.data} />
                </Modal>

                <Modal
                    title="商业公司列表"
                    visible={this.state.showBusinessComVisible}
                    onOk={this.handleOkBusinessComInfo.bind(this)}
                    onCancel={this.handleCancelBusinessComInfo.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getBusinessCompanyInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table rowSelection={business_rowSelection} columns={columns_BusinessCom} dataSource={this.props.searchBusinessComInfo.data ? this.props.searchBusinessComInfo.data : this.props.businessComInfo.data} />
                </Modal>

                <Modal
                    title="代理商列表"
                    visible={this.state.showAgentVisible}
                    onOk={this.handleOkAgentModal.bind(this)}
                    onCancel={this.handleCancelAgentModal.bind(this)}
                >
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getBusinessCompanyInfoSearchValue.bind(this)}
                        style={{ marginBottom: 10 }}
                    />
                    <Table rowSelection={agent_rowSelection} columns={columns_agent} dataSource={this.props.agentInfo.data }/>
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
        //获取药品信息
        drugsListInfo: state.drugListInfo.data,
        manufacturerList: state.drugListInfo.manufacturerList,
        bilingListInfo: state.drugListInfo.bilingListInfo,
        businessComInfo: state.drugListInfo.businessCom,
        delDrugInfoCode: state.drugListInfo.delDrugInfoCode,
        searchManufacInfo: state.drugListInfo.searchManufacInfo,
        searchBilingComInfo: state.drugListInfo.searchBilingComInfo,
        searchBusinessComInfo: state.drugListInfo.searchBusinessComInfo,
        agentInfo:state.drugListInfo.agentInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取药品列表
        getDrugList: (params) => dispatch(actionCreater.getDrugListInfo(params)),
        //编辑药品信息
        editDrugInfo: (data) => dispatch(actionCreater.editClickDrugInfo(data)),
        //获取生产厂家信息
        getManufacturerList: (param) => dispatch(actionCreater.getManufacturerListInfo(param)),
        //获取开票公司信息
        getBillingComponyList: (param) => dispatch(actionCreater.getBillingComponyListInfo(param)),
        //获取商业公司信息
        getBusinessComList: (param) => dispatch(actionCreater.getBusinessComListinfo(param)),
        //删除药品信息
        delDrugInfo: (param) => dispatch(actionCreater.delDrugInfoList(param)),
        //搜索生产厂家
        searchManufacturerInfo: (param) => dispatch(actionCreater.searchManufacturerInfoList(param)),
        //搜索开票公司
        searchBilingComponyInfo: (param) => dispatch(actionCreater.searchBilingComponyInfoList(param)),
        //搜索商业公司
        searchBusinessComInfo: (param) => dispatch(actionCreater.searchBusinessComInfoList(param)),
        //获取代理商信息
        getAgent:(param) => dispatch(actionCreater.getAgentInfo(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(MedincineOperationModel))