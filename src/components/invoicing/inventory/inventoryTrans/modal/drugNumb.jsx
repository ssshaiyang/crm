import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Table} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
import {exportDate, formatDate} from "../../../../../utils/common";
const data = [{
        "drug_code":100001,
        "expiry_date":"1111111111",
    },
    {
        "drug_code":100002,
        "expiry_date":"2222222222",
    }];



export class DrugNumb extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    closeModal(){
        this.props.drugNumbClose();
    }
    selected(record, index, event){
        const para={}
               para.drug_code=record.drug_code
               para.expiry_date=record.expiry_date
        const zhi={}
        for(let key in this.props.allFormData){
            zhi[key]=this.props.allFormData[key]
        }
        const param=Object.assign(zhi,para)
        this.props.addFormData(param)
        this.props.drugNumbClose();
    }


    render(){

        const columns = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key',

        }, {
            title: '批号',
            dataIndex: 'drug_code',
            key: 'drug_code',
        }, {
            title: '有效期',
            dataIndex: 'expiry_date',
            key: 'expiry_date',
            render:(text,record)=>formatDate(exportDate(text),'-','-')
        }];
        let count=1
        for(let i=0;i<data.length;i++){
            data[i].key=count++
        }
        return (
            <div style={{paddingBottom:"20px"}}>
                <Table dataSource={data} columns={columns} onRowClick={this.selected.bind(this)} pagination={false}/>
                {/*<div style={{textAlign:"center",marginTop:"20px"}}>
                    <Button style={{marginRight:"20px"}}>关闭</Button>
                    <Button onClick={this.closeModal.bind(this)} className="mainButton">保存</Button>
                </div>*/}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        allFormData:state.inventory.formData
    }
}
function mapDispatchToProps(dispatch){
    return{
        addFormData:(val)=>dispatch(actionCreater.inventoryGetDrugName(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DrugNumb)