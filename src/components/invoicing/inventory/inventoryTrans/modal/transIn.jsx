import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Table} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const data=[        {
     "deliver_id": 100001,
     "deliver_name":"北京康辰药业有限公司"
},
    {
        "deliver_id": 100002,
        "deliver_name":"北京康辰药业有限公司"
    }]
export class TransIn extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    closeModal(){
        this.props.transInClose();
    }
    selected(record, index, event){
        const para={}
             para["in_deliver_name"]=record.deliver_name
             para["in_deliver_id"]=record.deliver_id
        const zhi={}
        for(let key in this.props.allFormData){
            zhi[key]=this.props.allFormData[key]
        }
        const param=Object.assign(zhi,para)
        this.props.addFormData(param)
        this.props.transInClose();
    }

    render(){
        const columns = [{
            title: '编号',
            dataIndex: 'deliver_id',
            key: 'deliver_id',

        }, {
            title: '名称',
            dataIndex: 'deliver_name',
            key: 'deliver_name',
        }, ];
        let count=1
        for(let i=0;i<data.length;i++){
            data[i].key=count++
        }
        return (
            <div style={{paddingBottom:"20px"}}>
                <Table dataSource={data} columns={columns} onRowClick={this.selected.bind(this)}/>
               {/* <div style={{textAlign:"center",marginTop:"20px"}}>
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
export default connect(mapStateToProps,mapDispatchToProps)(TransIn)