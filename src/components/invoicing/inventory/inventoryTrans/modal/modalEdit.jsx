import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Form,Input,Col,Row,DatePicker,} from 'antd'
import moment from 'moment'

import DrugName from './drugName.jsx'
import TransOut from './transOut.jsx'
import TransIn from './transIn.jsx'
import DrugNumb from './drugNumb.jsx'

import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"

const formItemLayout = {
    labelCol: {
        xs: {
            span: 8
        },
        sm: {
            span: 8
        },
    },
    wrapperCol: {
        xs: {
            span: 14
        },
        sm: {
            span: 16
        },
    },
};
const rowItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 4
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        },
    },
}
let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
const dataZhi={
        "stock_trans_id":"DBD000001",
        "apply_status":"待送审",
        "apply_type":"我的申请",
        "drug_name":"生血宝合剂",
        "unit":"盒",
        "dosage":"片剂",
        "specification":"20ml",
        "manufacturer_name":"浙江医学科技开发有限公司",
        "drug_code":"121212",
        "expiry_date":"12121202",
        "amount":100,
        "out_deliver_name":"调出商业公司名称",
        "out_date":"12121202",
        "in_deliver_name":"调入商业公司名称",
        "in_date":"12121202",
        "creator_name":"tom",
        "create_time":"12121202",
        "stock_remark":"备注"
    }
export class RenderEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            drugVisible:false,
            transInVisible:false,
            transOutVisible:false,
            drugNumbVisible:false,
            allFormData:{}
        }
    }
    componentWillMount(){
     /*   this.setState({
            allFormData:this.props.data
        })*/
    }
    openDrug(){
        this.setState({
            drugVisible:true
        })
    }
    closeDrug(){
        this.setState({
            drugVisible:false
        })
    }
    openTransIn(){
        this.setState({
            transInVisible:true
        })
    }
    closeTransIn(){
        this.setState({
            transInVisible:false
        })
    }
    openTransOut(){
        this.setState({
            transOutVisible:true
        })
    }
    closeTransOut(){
        this.setState({
            transOutVisible:false
        })
    }
    openDrugNumb(){
        this.setState({
            drugNumbVisible:true
        })
    }
    closeDrugNumb(){
        this.setState({
            drugNumbVisible:false
        })
    }
    closeModal(e){
        e.preventDefault()
        let data = this.props.data;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const modalType = this.props.modalType;
                console.log('dataParams',data)
                this.props.initFormData()
                this.props.openModifyModalBox({
                    addAndEdit:false,
                    addModalType:0
                })

                // String(modalType) == '0' ? this.editModal.call(this, data) : this.saveModal.call(this, data);
            }
        });



    }
    closeModifyModal(){
        this.props.openModifyModalBox({
            addAndEdit:false,
            addModalType:0
        })
    }
    addContinue(){
        let data = this.props.data;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const modalType = this.props.modalType;
                console.log('dataParams',data)
                this.props.initFormData()
                this.props.openModifyModalBox({
                    addAndEdit:false,
                    addModalType:0
                })
                // String(modalType) == '0' ? this.editModal.call(this, data) : this.saveModal.call(this, data);
            }
        });


    }
    closeAllModal(){
        this.props.openModifyModalBox({
            addAndEdit:false,
            addModalType:0
        })
    }
    render(){

        const {
            getFieldDecorator
        } = this.props.form;
        return (
            <Modal
                title={this.props.addModalType==0?"修改库存调拨单":"添加修改库存调拨单"}
                visible={this.props.addAndEdit}
                footer={null}
                onCancel={this.closeModifyModal.bind(this)}
                width="800px"
                maskClosable={false}
            >

            <div>
                <Form onSubmit={this.closeModal.bind(this)}>
                    <div className="botLine" style={{overflow:"hidden"}}>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                          col={12}
                        itemName="drug_name"
                         // row
                        label="药品名"
                        rules={
                            [{ required: true, message:"药品名不能为空" }]
                        }>
                        <Input  disabled addonAfter={<span style={{cursor: 'pointer' }} onClick={this.openDrug.bind(this)}><Icon type="down-trangle" /></span>}/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="specification"
                        // row
                        label="规格"
                        rules={
                            [{ required: true, message:"规格不能为空" }]
                        }>
                        <Input disabled/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="unit"
                        // row
                        label="计量单位"
                        rules={
                            [{ required: true, message:"计量单位不能为空" }]
                        }>
                        <Input disabled/>
                    </FormItem>

                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="dosage"
                        // row
                        label="剂型"
                        rules={
                            [{ required: true, message:"剂型不能为空" }]
                        }>
                        <Input disabled/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="manufacturer_name"
                        // row
                        label="生产厂家"
                        rules={
                            [{ required: true, message:"生产厂家不能为空" }]
                        }>
                        <Input disabled/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="drug_code"
                        // row
                        label="药品批号"
                        rules={
                            [{ required: true, message:"药品批号不能为空" }]
                        }>
                        <Input  disabled addonAfter={<span style={{ cursor: 'pointer' }} onClick={this.openDrugNumb.bind(this)}><Icon type="down-trangle" /></span>}/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="expiry_date"
                        // row
                        label="药品有效期"
                        rules={
                            [{ required: true, message:"药品有效期不能为空" }]
                        }>
                        <DatePicker  disabled/>
                    </FormItem>
                    </div>
                    <div className="botLine" style={{overflow:"hidden",margin:"20px 0"}}>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="out_deliver_name"
                        // row
                        label="调出商业公司"
                        rules={
                            [{ required: true, message:"调出商业公司不能为空" }]
                        }>
                        <Input disabled addonAfter={<span style={{ cursor: 'pointer' }} onClick={this.openTransOut.bind(this)}><Icon type="down-trangle" /></span>}/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="out_date"
                        // row
                        label="调出日期"
                        rules={
                            [{ required: true, message:"调出日期不能为空" }]
                        }>
                        <DatePicker />
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="in_deliver_name"
                        // row
                        label="调入商业公司"
                        rules={
                            [{ required: true, message:"调入商业公司不能为空" }]
                        }>
                        <Input disabled addonAfter={<span style={{ cursor: 'pointer' }} onClick={this.openTransIn.bind(this)}><Icon type="down-trangle" /></span>}/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="in_date"
                        // row
                        label="调入日期"
                        rules={
                            [{ required: true, message:"调入日期不能为空" }]
                        }>
                        <DatePicker />
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="amount"
                        // row
                        label="调拔数量"
                        rules={
                            [{ required: true, message:"调拔不能为空" }]
                        }>
                        <Input/>
                    </FormItem>
                    </div>
                    <div className="botLine" style={{overflow:"hidden"}}>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="creator_name"
                        // row
                        label="创建人"
                        rules={
                            [{ required: false, message:"创建人不能为空" }]
                        }>
                        <Input disabled/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="create_time"
                        // row
                        label="创建时间"
                        rules={
                            [{ required: false, message:"创建时间不能为空" }]
                        }>
                        <DatePicker disabled/>
                    </FormItem>
                    <FormItem
                        getFieldDecorator={getFieldDecorator}
                        col={12}
                        itemName="stock_remark"
                        // row
                        label="备注"
                        rules={
                            [{ required:false, message:"备注不能为空" }]
                        }>
                        <textarea className="my_textarea_style"></textarea>
                    </FormItem>

                    </div>
                    <div style={{textAlign:"center",margin:"20px 0"}}>
                        <Button style={{marginRight:"20px"}} onClick={this.closeAllModal.bind(this)}>关闭</Button>
                        {
                          this.props.addModalType==1?
                              <Button  className="mainButton" style={{marginRight:"20px"}} onClick={this.addContinue.bind(this)}>保存并且继续添加</Button> :""

                        }
                        <Button  htmlType="submit" className="mainButton">保存</Button>
                    </div>
                </Form>

                <Modal
                    title="药品列表"
                    visible={this.state.drugVisible}
                    onCancel={this.closeDrug.bind(this)}
                    maskClosable={false}
                    footer={null}
                >
                    <DrugName drugClose={this.closeDrug.bind(this)}/>
                </Modal>
                <Modal
                    title="商业公司列表"
                    visible={this.state.transInVisible}
                    onCancel={this.closeTransIn.bind(this)}
                    maskClosable={false}
                    footer={null}
                >
                      <TransIn transInClose={this.closeTransIn.bind(this)}/>
                </Modal>
                <Modal
                    title="商业公司列表"
                    visible={this.state.transOutVisible}
                    onCancel={this.closeTransOut.bind(this)}
                    maskClosable={false}
                    footer={null}
                >
                    <TransOut transOutClose={this.closeTransOut.bind(this)}/>
                </Modal>
                <Modal
                    title="批号列表"
                    visible={this.state.drugNumbVisible}
                    onCancel={this.closeDrugNumb.bind(this)}
                    maskClosable={false}
                    footer={null}
                >
                   <DrugNumb drugNumbClose={this.closeDrugNumb.bind(this)}/>
                </Modal>
            </div>
           </Modal>
        )
    }
}
class FormItem extends React.Component {
    render() {
        const Layout = this.props.row ? rowItemLayout : formItemLayout;
        return (
            <Col span={this.props.col}>
                <Form.Item
                    {...Layout}
                    label={this.props.label}>
                    {this.props.getFieldDecorator(this.props.itemName, {
                        rules: this.props.rules,
                    })(
                        this.props.children
                    )}
                </Form.Item>
            </Col>
        )
    }
}

FormItem.defaultProps = {
    col: 24,
    itemName: 'itemName',
    rules: [],
    label: 'label'
}

const GridRenderEdit =Form.create({
    onFieldsChange,
    mapPropsToFields
})(RenderEdit)

function mapPropsToFields(props) {
//映射到表单

    let fields={};
    let data=props.data;

        for (let key in props.data) {
        // console.log('key',props.data)
            if (key == "out_date" || key == "in_date" || key == "expiry_date"||key=="create_time") {
                if (props.data[key]) {
                    fields[key] = {
                        value: moment(new Date(parseInt(props.data[key]) * 1000).toLocaleDateString())
                    }
                } else {
                    fields[key] = {
                        value: props.data[key]
                    }
                }
            } else {
                if (key == "unit") {
                    if (props.data[key] == 1) {
                        fields[key] = {
                            value: "盒"
                        }
                    } else if (props.data[key] == 2) {
                        fields[key] = {
                            value: "件"
                        }
                    } else if (props.data[key] == 3) {
                        fields[key] = {
                            value: "瓶"
                        }
                    } else if (props.data[key] == 4) {
                        fields[key] = {
                            value: "支"
                        }
                    }
                } else {
                    fields[key] = {
                        value: props.data[key]
                    }
                }

            }
        }
    return fields
}

function onFieldsChange(props,changedFields){
//传到store
    console.log("123",changedFields)
    props.CompleteMemberInf(changedFields)
}




function mapStateToProps(state){
    return{
        data:state.inventory.formData,
        addAndEdit:state.inventory.addAndEdit,
        addModalType:state.inventory.addModalType,// visible:state.inventory.checkOutVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModifyModalBox:(val)=>dispatch(actionCreater.addAndEditActionCreater(val)),
        CompleteMemberInf:(val)=>dispatch(actionCreater.inventoryCompleteMemberInf(val)),
        initFormData:()=>dispatch(actionCreater.initFormData()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GridRenderEdit)