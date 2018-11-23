import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Form,Input,Col,Row} from 'antd'
import * as actionCreater from "../../../../actions/invoicing/directionImport/directionImport.js"
import DrugList from "./modal/drugList.jsx"
import CompanyList from "./modal/companyList.jsx"
import HospitalList from "./modal/hospitalList.jsx"
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
    drug_id :'',
    hospital_id:"" ,
    specification:'',
    unit:"",
    dosage:"",
    manufacturer_id:"",
    drug_code:"",
    expiry_date:"" ,
    deliver_id :'',
    sales_date :"",
    sales_amount:"",
    /* create_name:"",
     create_time:"",*/
    direction_remark:"",
}
export class RenderEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            drugVisible:false,
            transInVisible:false,
            transOutVisible:false,
            drugNumbVisible:false
        }
    }
    componentWillMount(){

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
    hospital(){
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
        this.props.addBuyOpen(false)

    }
    closeModifyModal(){
        this.props.addBuyOpen(false)

    }
    addContinue(){
        this.props.addBuyOpen(false)
    }
    render(){

        const {
            getFieldDecorator
        } = this.props.form;
        return (
            <Modal
                title="添加采购单"
                visible={this.props.visible}
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
                                itemName="drug_id"
                                // row
                                label="药品名"
                                rules={
                                    [{ required: true, message:"药品名不能为空" }]
                                }>
                                <Input   addonAfter={<span style={{cursor: 'pointer' }} onClick={this.openDrug.bind(this)}><Icon type="edit" /></span>}/>
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="hospital_id"
                                // row
                                label="医院"
                                rules={
                                    [{ required: true, message:"医院名不能为空" }]
                                }>
                                <Input   addonAfter={<span style={{cursor: 'pointer' }} onClick={this.hospital.bind(this)}><Icon type="edit" /></span>}/>
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
                                itemName="manufacturer_id"
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
                                <Input />
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="expiry_data"
                                // row
                                label="药品有效期"
                                rules={
                                    [{ required: true, message:"药品有效期不能为空" }]
                                }>
                                <Input/>
                            </FormItem>
                        </div>
                        <div className="botLine" style={{overflow:"hidden",margin:"10px 0"}}>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="deliver_id"
                                // row
                                label="商业公司"
                                rules={
                                    [{ required: true, message:"商业公司不能为空" }]
                                }>
                                <Input addonAfter={<span style={{ cursor: 'pointer' }} onClick={this.openTransOut.bind(this)}><Icon type="edit" /></span>}/>
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="sales_amount"
                                // row
                                label="销售日期"
                                rules={
                                    [{ required: true, message:"销售日期不能为空" }]
                                }>
                                <Input/>
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="sales_amount"
                                // row
                                label="销售数量"
                                rules={
                                    [{ required: true, message:"销售数量不能为空" }]
                                }>
                                <Input/>
                            </FormItem>
                        </div>
                        <div className="botLine" style={{overflow:"hidden"}}>
                            {/* <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="creator_name"
                                // row
                                label="创建人"
                                rules={
                                    [{ required: true, message:"创建人不能为空" }]
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
                                    [{ required: true, message:"创建时间不能为空" }]
                                }>
                                <Input disabled/>
                            </FormItem>*/}
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={12}
                                itemName="direction_remark"
                                // row
                                label="备注"
                                rules={
                                    [{ required: true, message:"备注不能为空" }]
                                }>
                                <textarea className="my_textarea_style"></textarea>
                            </FormItem>

                        </div>
                        <div style={{textAlign:"center",margin:"20px 0"}}>
                            <Button style={{marginRight:"20px"}}>关闭</Button>
                            <Button  className="mainButton" style={{marginRight:"20px"}} onClick={this.addContinue.bind(this)}>保存并且继续添加</Button>
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
                        <DrugList drugClose={this.closeDrug.bind(this)}/>
                    </Modal>

                    <Modal
                        title="商业公司列表"
                        visible={this.state.transOutVisible}
                        onCancel={this.closeTransOut.bind(this)}
                        maskClosable={false}
                        footer={null}
                    >
                        <CompanyList companyClose={this.closeTransOut.bind(this)}/>
                    </Modal>
                    <Modal
                        title="医院列表"
                        visible={this.state.drugNumbVisible}
                        onCancel={this.closeDrugNumb.bind(this)}
                        maskClosable={false}
                        footer={null}
                    >
                        <HospitalList drugNumbClose={this.closeDrugNumb.bind(this)}/>
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
    for (let key in props.data){
        fields[key]={
            value:props.data[key]&&props.data[key].toString()
        }
    }
    return fields
}

function onFieldsChange(props,changedFields){
//传到store
//     props.completeInf(changedFields)
}




function mapStateToProps(state){
    return{
        data:dataZhi,
        visible:state.directionImport.addBuy

    }
}
function mapDispatchToProps(dispatch){
    return{
        addBuyOpen:(val)=>(dispatch(actionCreater.addBuyAction(val)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GridRenderEdit)