import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Icon,Table,Row,Col,Input} from 'antd'
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const data = [        {
    "drug_id": 1,
    "drug_name":"白加黑",
    "specification": "500g",
    "dosage": '盒' ,
    "unit":4,
    "manufacturer_name":"第一制药厂",
    "company_billing":"",
    "company_delive":"",
    "company_agent":"",
    "bid_type": 1,
    "bid_price":"55",
    "retail_price": "80",
    "invoice_price": '90' ,
    "tax_price":90,
    "base_price":"60",
    "other_price": "80",
    "if_distribution": 1,
    "if_disabled":2,
    "province_medicare_code":1001,
    "country_medicare_code": 1002,
    "business_license_code":"300303",
    "business_license_expire_time": "000000",
    "gmp_code": '1000' ,
    "gmp_expire_time":123,
    "production_license":"1010",
    "production_expire_time": "000000",
    "proxy": 1010,
    "proxy_expire_time":123,
    "protocol_region":"浙江",
    "creator_id":"1",
    "creator_name":"tom",
    "create_time": "000000",
    "drug_remark": "000000"
},];


export class DrugList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    closeModal(){
        this.props.drugClose();
    }
    onSelect(record, index, event){
        console.log(record);
    }

    render(){
        const columns = [{
            title: '编号',
            dataIndex: 'drug_id',
            key: 'drug_id',
        }, {
            title: '名称',
            dataIndex: 'drug_name',
            key: 'drug_name',
        }, {
            title: '规格',
            dataIndex: 'specification',
            key: 'specification',
        }, {
            title: '计量单位',
            dataIndex:"dosage",
            key: 'dosage',
        }, {
            title: '剂型',
            dataIndex:"unit",
            key: 'unit',
            render : (text,record) =>{
                if(record.unit==1){
                    return <span>盒</span>
                }
                if(record.unit==2){
                    return <span>件</span>
                }
                if(record.unit==3){
                    return <span>瓶</span>
                }
                if(record.unit==4){
                    return <span>支</span>
                }
            }}, {
            title: '生产厂家',
            dataIndex:"manufacturer_name",
            key: 'manufacturer_name',
        }];
        let count=1
        for(let i=0;i<data.length;i++){
            data[i].key=count++
        }
        return (
            <div>

                <div style={{overflow:"hidden",paddingBottom:"20px"}}>
                    <div style={{textAlign:"center"}}>
                        <Input placeholder="搜索..." style={{width:"200px",marginRight:"10px"}}/><Button className="mainButton"><Icon type="search"/></Button>
                    </div>
                </div>
                <Table columns={columns} onRowClick={this.onSelect.bind(this)} dataSource={data} pagination={false} />
                <div style={{textAlign:"center",marginTop:"20px"}}>
                    <Button style={{marginRight:"20px"}}>关闭</Button>
                    <Button onClick={this.closeModal.bind(this)} className="mainButton">保存</Button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        // visible:state.inventory.checkOutVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        // openModalBox:(val)=>dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DrugList)