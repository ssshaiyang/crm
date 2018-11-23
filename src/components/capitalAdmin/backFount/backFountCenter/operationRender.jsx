import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Row,Col,Table,Input,Form, DatePicker,Upload,message} from 'antd'
// import DetailModal from '../modal/detialModal.jsx'
import {formatDate,exportDate} from '../../../../utils/common.js'
const FormItem = Form.Item;
import * as actionCreater from "../../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"
import {getBackFountBillVarcher} from "../../../../utils/interface.js"
import {uploadVoucher,getBackFountVourch} from "../../../../utils/interface.js"

//paramsData
export class DataDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            file:"",
            loading:false,
            value:""
        }
    }
    componentWillMount(){

    }
    handleCheck(){
        this.props.storeId({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.getManageID({
            pay_manage_id:this.props.data.pay_manage_id
        })
        this.props.checkOutDetail({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })

        this.props.openModalBox(true)
    }
    closeModal(){
        this.props.openModalBox(false)
        this.props.form.resetFields()
    }
    saveModal(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //paramsData /payments/:pay_manage_id/receipts
                // console.log('Received values of form: ', values);
                // pay_manage_id
                 function cb(res) {
                              if (res.error_code === GLOBALSUCCESS) {
                                  console.log('data',res)
                                  message.success('保存成功')
                                  this.props.openModalBox(false)
                                  this.props.form.resetFields()
                              }
                 }
                 values.create_time=exportDate(values.create_time)
                getBackFountVourch({pay_manage_id:this.props.pay_manage_id,allData:values},cb.bind(this))
            }
        });
    }
    normFile(e){
        console.log("e",e.file)
        //请求返回的数据是return

           /* function cb(res) {
                if (res.error_code === GLOBALSUCCESS) {
                    console.log('data',res)
                    this.setState({
                        value: res.data,
                        loading:false,
                    })
                    message.success('上传凭证成功')
                    return res.data
                }
            }
            uploadVoucher(this.state.file, cb.bind(this))*/
           return "1234"

    }
    beforeUpload(file){
        let type = file.type;
        if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/jpg' && type !== 'image/gif') {
            message.error('所上传的格式不正确!');
            return false;
        }
        if (file.size / 1024 / 1024 > 2) {
            message.error('图片大小不可超过2M!');
            return false;
        }
        console.log("file",file)
       this.setState({
            file: file,
            loading:true
        })
    }
   /* handleChange(file){

    }*/
    render(){
        const { getFieldDecorator } = this.props.form;
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        const columns = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key',
        }, {
            title: '系统单号',
            dataIndex: 'order_no',
            key: 'order_no',
        }, {
            title: '商业公司',
            dataIndex: 'develier_name',
            key: 'develier_name',
        }, {
            title: "药品",
            dataIndex: 'drug_name',
            key: 'drug_name',
        }, {
            title: '剂型',
            dataIndex: 'dosage',
            key: 'dosage',
        }, {
            title: '规格',
            dataIndex: 'specification',
            key: 'specification',
            render:(text,record)=>{
                return text+"/"+record.unit
            }
        },  {
            title: '生产厂家',
            dataIndex: 'manufacturer_name',
            key: 'manufacturer_name',
        }, {
            title: '开票公司',
            dataIndex: 'billing_name',
            key: 'billing_name',
        }, {
            title: '回款数量',
            dataIndex: 'receipt_amount',
            key: 'receipt_amount',
        }, {
            title: '开票单价',
            dataIndex: 'receipt_price',
            key: 'receipt_price',
        }];
        this.props.allData["key"]=1;
        const rowData=[]
        rowData.push(this.props.allData)
        const formItemLayout = {
            labelCol: { span:8},
            wrapperCol: { span: 16 },
        };
        return (
            <div>
                <div >
                    <div><Button onClick={this.handleCheck.bind(this)}>上传凭证</Button></div>
                </div>
                <Modal
                    title="单据详情"
                    visible={this.props.visible}
                    footer={null}
                    onCancel={this.closeModal.bind(this)}
                    width={width}
                >
                    <div>
                        <Card>
                            <Row>
                                <Col span={2}>申请人:</Col>
                                <Col span={3}>{rowData[0].applicant}</Col>
                                <Col span={2}>审批人:</Col>
                                <Col span={3}>{rowData[0].approver}</Col>
                                <Col span={2}>审批时间:</Col>
                                <Col span={6}>{formatDate(rowData[0].approval_time,'年','月',"日",true)}</Col>
                                <Col span={2}>合计:</Col>
                                <Col span={4}>{rowData[0].receipt_price*rowData[0].receipt_amount}</Col>
                            </Row>
                            <Table
                                columns={columns}
                                dataSource={rowData}
                                bordered
                                pagination={false}
                            />
                        </Card>
                        <div style={{marginTop:"20px"}}>
                            <Form onSubmit={this.saveModal.bind(this)}>
                                <Row>
                                    <Col span={8}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="付款开户名"
                                        >
                                            {getFieldDecorator('pay_account_user', {
                                                rules: [{ required: true, message: '请输入付款开户名' }],
                                            })(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="付款开户行"
                                        >
                                            {getFieldDecorator('pay_account_name',{
                                                rules: [{ required: true, message: '请输入付款开户行' }],
                                            } )(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="付款账号"
                                        >
                                            {getFieldDecorator('pay_bank_account',{
                                                rules: [{ required: true, message: '请输入付款账号',pattern:/^(\d{16}|\d{19})$/ }],
                                            } )(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="回款开户名"
                                        >
                                            {getFieldDecorator('receipt_account_user', {
                                                rules: [{ required: true, message: '请输入回款开户名' }],
                                            })(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="回款开户行"
                                        >
                                            {getFieldDecorator('receipt_account_name', {
                                                rules: [{ required: true, message: '请输入回款开户行' }],
                                            })(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="回款账号"
                                        >
                                            {getFieldDecorator('receipt_bank_account', {
                                                rules: [{ required: true, message: '请输入回款账号',pattern:/^(\d{16}|\d{19})$/ }],
                                            })(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="回款金额"
                                        >
                                            {getFieldDecorator('price', {
                                                rules: [{ required: true, message: '请输入回款金额'}],
                                            })(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={6}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="回款日期"
                                        >
                                            {getFieldDecorator('create_time', {
                                                rules: [{ required: true, message: '请输入回款日期' }],
                                            })(
                                                <DatePicker   placeholder="年/月/日"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={6}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="凭证编号"
                                        >
                                            {getFieldDecorator('voucher_number', {
                                                rules: [{ required: true, message: '请输入凭证编号' }],
                                            })(
                                                <Input placeholder="请输入"/>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={6}>
                                        <FormItem
                                            {...formItemLayout}
                                            label="回款凭证"
                                        >
                                            {getFieldDecorator('voucher', {
                                                rules: [{ required: true, message: '请输入回款凭证' }],
                                                getValueFromEvent: this.normFile.bind(this),
                                            })(
                                                <Upload
                                                    name="load"
                                                    beforeUpload={this.beforeUpload.bind(this)}
                                                    // showUploadList={{showPreviewIcon:false}}
                                                    // fileList={this.state.fileList}
                                                    showUploadList={false}
                                                    // onChange={this.handleChange.bind(this)}
                                                >
                                                    <Button>点击上传</Button>
                                                </Upload>
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div style={{textAlign:"center",marginTop:"20px"}}>
                                    <Button onClick={this.closeModal.bind(this)} style={{marginRight:"40px"}}>取消</Button>
                                    <Button  htmlType="submit" className="mainButton">保存</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        visible:state.backFountList.operationRender,
        allData: state.backFountList.billsDetail,
        pay_manage_id:state.backFountList.pay_manage_id
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.operationRenderActionCreater(val)),
        storeId:(val)=>dispatch(actionCreater.backFountStoreIdActionCreater(val)),
        checkOutDetail:(val)=>dispatch(actionCreater.BackFountBillDetail(val)),
        getManageID:(val)=>dispatch(actionCreater.backFountStorePayManageActionCreater(val)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(DataDetail))