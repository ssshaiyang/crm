import React from 'react'
import { Form, Input, Row, Col, Button, Modal, Card, DatePicker, Icon,Table } from 'antd'
import {
    connect
} from 'react-redux'

import PurchaseTableBox from './purchaseTableBox/purchaseTableBox.jsx'
import DrugSelector from '../../../../common/selectors/DrugSelector.jsx';
import {setEditDrugInfoActionCreator} from '../../../../../actions/invoicing/businessAdmin/businessAdmin.js'

const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;


export class Purchase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drugSelectorVisible: false,

            editInfoVisible: false,
            companyInfoListVisible: false
        }
    }

    //当表单点击确认按钮时获取表单值
    handleSubmitProCost() {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    /**
     * 添加采购信息弹框方法组
     */
    addPurchaseInfo() {
        this.setState({
            editInfoVisible: true
        })
    }

    handleOkEditInfo() {
        this.setState({
            editInfoVisible: false
        })
    }

    handleCancelEditInfo() {
        this.setState({
            editInfoVisible: false
        })
    }

    /**
     * 药品列表对话框方法组
     */

    showDrugSelector(visible) {
        this.setState({drugSelectorVisible: visible});
    }

     onDrugSelectorOKHandler(record) {
        console.log(record);
        this.props.setEditDrugInfo(record);
        this.showDrugSelector(false);
    }

    onDrugSelectorCancelHandler() {
        this.showDrugSelector(false);
    }

    //获取表格的行元素
    rowClick(record) {
        this.setState({
            name: record.name
        })
    }

    //获取公司名称
    rowClickCompony(record) {
        this.setState({
            componyName: record.name
        })
    }

    /**
     * 选择开票公司List表单
     */

    showComponyList() {
        this.setState({
            companyInfoListVisible: true
        })
    }

    handleOkComponyInfo() {
        this.setState({
            companyInfoListVisible: false
        })
    }

    handleCancelComponyInfo() {
        this.setState({
            companyInfoListVisible: false
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formTimeLayout1 = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 14 },
            },
        }
        const formTimeLayout2 = {
            labelCol: {
                xs: { span: 5 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 14 },
            },
        }
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

        const columns_componyList = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
                width: 100
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: 150
            },
        ]


        return (
            <div className='purchase_top_container'>
                <div className='purchase_tip'>过票过程--采购</div>
                <Form onSubmit={this.handleSubmitProCost.bind(this)}>
                    <Row className='time'>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <FormItem
                                        {...formTimeLayout1}
                                        label="开始日期"
                                    >
                                        {getFieldDecorator('time_start', {
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem
                                        {...formTimeLayout2}
                                        label="至"
                                    >
                                        {getFieldDecorator('time_end', {
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={10}></Col>
                        <Col span={1}>
                            <Button className='mainButton' onClick={this.addPurchaseInfo.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 16 }} /></Button>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                </Form>
                <Modal
                    title="编辑信息"
                    width='700px'
                    visible={this.state.editInfoVisible}
                    onOk={this.handleOkEditInfo.bind(this)}
                    onCancel={this.handleCancelEditInfo.bind(this)}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Row className='botLine'>
                            <FormItem
                                {...formItemLayout1}
                                label="药品名"
                            >
                                {getFieldDecorator('drug_name', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div>
                                        <Input
                                            ref = "drug_input"
                                            style={{ width: 200 }}
                                            readOnly
                                            placeholder={"请选择药品"}
                                            value={this.props.editDrugInfo.drug_name}
                                            prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                          onClick={this.showDrugSelector.bind(this, true)}><Icon type="edit" /></span>} />
                                    </div>
                                    )}
                            </FormItem>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="规格"
                                >
                                    {getFieldDecorator('medicine_format', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>{this.props.editDrugInfo.specification}</div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="计量单位"
                                >
                                    {getFieldDecorator('medicine_format', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>{this.props.editDrugInfo.unit}</div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="剂型"
                                >
                                    {getFieldDecorator('drug_type', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>{this.props.editDrugInfo.dosage}</div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="生产厂家"
                                >
                                    {getFieldDecorator('manufacturer', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>{this.props.editDrugInfo.manufacturer_name}</div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="采购日期"
                                >
                                    {getFieldDecorator('purchase_date', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <DatePicker />
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="买货单位"
                                >
                                    {getFieldDecorator('purchase_unit', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input placeholder='0.00' style={{ width: 200 }} />元
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="买货数量"
                                >
                                    {getFieldDecorator('purchase_number', {
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
                                    label="开票公司"
                                >
                                    {getFieldDecorator('make_invoice_company', {
                                        rules: [{
                                            required: true
                                        }],
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                placeholder={this.state.componyName}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showComponyList.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
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
                                    {getFieldDecorator('creater', {

                                    })(
                                        <div>
                                            <p>张三</p>
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
                                            <p>2017-05-25</p>
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <FormItem
                                {...formItemLayout1}
                                label="备注"
                            >
                                {getFieldDecorator('reamrk', {

                                })(
                                    <div>
                                        <input type='textarea' className='my_textarea_style' />
                                    </div>
                                    )}
                            </FormItem>
                        </Row>
                    </Form>
                </Modal>


                <DrugSelector
                    visible = {this.state.drugSelectorVisible}
                    onOkHandler = {this.onDrugSelectorOKHandler.bind(this)}
                    onCancelHandler = {this.onDrugSelectorCancelHandler}
                />

                {/*<Modal*/}
                    {/*title="开票公司列表"*/}
                    {/*visible={this.state.companyInfoListVisible}*/}
                    {/*onOk={this.handleOkComponyInfo.bind(this)}*/}
                    {/*onCancel={this.handleCancelComponyInfo.bind(this)}*/}
                {/*>*/}
                    {/*<Search*/}
                        {/*placeholder="输入客户ID/姓名/联系方式"*/}
                        {/*onSearch={this.getMarkNameSearchValue.bind(this)}*/}
                        {/*style={{ marginBottom: 10 }}*/}
                    {/*/>*/}
                    {/*<Table columns={columns_componyList} dataSource={data_componyList} onRowClick={this.rowClickCompony.bind(this)} />;*/}
                {/*</Modal>*/}
                <PurchaseTableBox />
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("edit",state.editDrugInfo);
    return {
        editDrugInfo : state.editDrugInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEditDrugInfo : (params) => dispatch(setEditDrugInfoActionCreator(params)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Purchase))