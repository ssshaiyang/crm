import React from 'react'
import {connect} from 'react-redux'
import {Row,Col,Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import {formatDate} from '../../../../utils/common.js'
export class OutFountList extends React.Component {

    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "key": {
                headerName: "序号",
                valueGetter:()=>{
                    return "1"
                }
            },"bill_type": {
                headerName: "报销类型",
            },"usage": {
                headerName: "用途",
            },"voucher_amount": {
                headerName: "凭证数量",
            },"voucher_price": {
                headerName: "凭证金额",
            },
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        const allData=[]
        allData.push(this.props.rowData)


        return(
            <div>
                <Card>
                <Row>
                    <Col span={2} style={{textAlign:"center"}}>申请人:</Col>
                    <Col span={2} >{this.props.rowData.applicant}</Col>
                    <Col span={2} style={{textAlign:"center"}}>审批人:</Col>
                    <Col span={3} >{this.props.rowData.approver}</Col>
                    <Col span={2} style={{textAlign:"center"}}>审批时间:</Col>
                    <Col span={6} >{formatDate(this.props.rowData.approval_time,'年','月',"日",true)}</Col>
                    <Col span={1} offset={4}  style={{textAlign:"right"}}>合计:</Col>
                    <Col span={2} style={{textAlign:"center"}}>{this.props.rowData.voucher_price}</Col>
                </Row>
                <Grid
                    rowData={allData}
                    columnDefs={this.makeColumnDefs.call(this)}
                    containerStyle={containerStyle}
                />
                <div>
                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={3}>附件:</Col>
                                <Col span={3}>{this.props.rowData.voucher}</Col>
                            </Row>
                        </Col>
                        <Col span={2}  offset={14} style={{textAlign:"right"}}>
                                    <a href="#">[下载]</a>
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop:"20px"}}>
                    <Row>
                        <Col span={24}>备注：</Col>
                    </Row>
                    <Row>
                        <Col span={24} >
                            <Card style={{ textIndent:"50px"}}>
                                {
                                    this.props.rowData.remark
                                }
                            </Card>
                        </Col>
                    </Row>
                </div>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("ssssss", state.inFountData.checkOutDetail)
    return {
        rowData: state.inFountData.checkOutDetail,

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OutFountList)