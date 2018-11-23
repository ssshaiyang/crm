import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Table,Row,Col} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const dataZhi = [{
    "drug_codes":100001,
    "amount":123,
    "expiry_date":"2018-08-01",
},
    {
        "drug_codes":100002,
        "amount":123,
        "expiry_date":"2018-08-01",
    }];

export class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           totalCount:0
        }
    }
    componentWillMount(){
        let totalcount=0;
        for(let i=0;i<this.props.data.length;i++){
            totalcount+=this.props.data[i].amount
        }
        this.setState({totalCount:totalcount})
    }
    handleCheck(){
        this.props.openModalBox(true)
    }
    closeModal(){
        this.props.openModalBox(false)
    }

    render(){
        const columns = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key',

        }, {
            title: '药品批号',
            dataIndex: 'drug_codes',
            key: 'drug_codes',
        },, {
            title: '结余数量',
            dataIndex: 'amount',
            key: 'amount',
        }, {
            title: '有效期',
            dataIndex: 'expiry_date',
            key: 'expiry_date',
        }];
        let count=1
        for(let i=0;i<this.props.data.length;i++){
            this.props.data[i].key=count++;

        }

        return (
            <div>
                <div style={{textAlign:"center"}}><Icon type="See" onClick={this.handleCheck.bind(this)} className="iconStyle"/></div>
               <Modal
                   title="批号明细"
                   visible={this.props.visible}
                   footer={null}
                   onCancel={this.closeModal.bind(this)}
               >
                   <Card>
                       <Table dataSource={this.props.data} columns={columns}pagination={false}/>
                       <Row>
                           <Col span={4}></Col>
                           <Col span={6}>合计</Col>
                           <Col span={5}>
                               {this.state.totalCount}
                           </Col>
                           <Col span={4}></Col>
                       </Row>
                   </Card>
                   <div style={{textAlign:"center",marginTop:"20px"}}>
                       <Button onClick={this.closeModal.bind(this)} className="mainButton">关闭</Button>
                   </div>
               </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        data:dataZhi,
        visible:state.inventory.checkOutVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)