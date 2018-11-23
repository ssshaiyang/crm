import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,Table,Row,Col } from 'antd'
import {formatDate,exportDate} from '../../../../utils/common.js'

const allData= [{
    "applicant": "陈钢",
    "approver":"Tom",
    "approval_time":1505269886,
    "receipt_pay_id": "1",
    "order_no": "RKD1",
    "bill_status":"未回款",
    "billing_name":"浙江医学科技开发有限公司",
    "develier_name":"浙江医学科技开发有限公司",
    "drug_name":"生血宝合剂",
    "unit":"盒",
    "dosage":"片剂",
    "specification":"20ml",
    "manufacturer_name":"浙江医学科技开发有限公司",
    "wait_receipt_amount":20,
    "wait_receipt_price":1000.00,
    "receipt_amount":20,
    "receipt_price":1000.00,
    "receipt_date":1505269886,
    "invoice_code":"dddd",
    "invoice_price":"1000.00",
    "receipt_account":"6225852",
    "creator_name":"张三",
    "create_time":1505269886,
    "receipt_pay_remark":"1234",
}
    ]

export class OutFountList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }

    closeModal(){
        this.props.closeModalDetail()
    }
    saveModal(){
        this.props.closeModalDetail()
    }
    render(){
        const containerStyle={
            minHeight:"200px",
        }

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
        return(
            <div>
                <Card>
                    <Row>
                        <Col span={2} style={{textAlign:"right"}}>申请人:</Col>
                        <Col span={3} style={{textAlign:"left"}}>{rowData[0].applicant}</Col>
                        <Col span={2} style={{textAlign:"right"}}>审批人:</Col>
                        <Col span={3} style={{textAlign:"left"}}>{rowData[0].approver}</Col>
                        <Col span={2} style={{textAlign:"right"}}>审批时间:</Col>
                        <Col span={6} style={{textAlign:"left"}}>{formatDate(rowData[0].approval_time,'年','月',"日",true)}</Col>
                        <Col span={2} style={{textAlign:"right"}} offset={2}>合计:</Col>
                        <Col span={2} style={{textAlign:"left"}}>{rowData[0].receipt_price*rowData[0].receipt_amount}</Col>
                    </Row>
                    <Table
                        columns={columns}
                        dataSource={rowData}
                        bordered
                        pagination={false}
                    />
                    <Row style={{marginTop:"20px"}}>
                        <Col span={1}>备注</Col>
                        <Col span={23}>
                            <Card>
                                {rowData[0].receipt_pay_remark}
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <div style={{textAlign:"center",marginTop:"20px"}}>
                    <Button onClick={this.closeModal.bind(this)} className="mainButton">关闭</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allData: state.backFountList.billsDetail,

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OutFountList)