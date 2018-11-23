import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Table,Input} from 'antd'
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const data = [
    {
        "hospital_id":1,
        "hospital_name":"杭州第一医院",
        "hospital_type":1,
        "hospital_address":"杭州市下城区",
        "hospital_area":"浙江杭州",
        "creator_id":1,
        "creator_name":"张三",
        "create_time":"0121",
        "hospital_remark":"备注"
    },
    {
        "hospital_id":1,
        "hospital_name":"杭州第一医院",
        "hospital_type":1,
        "hospital_address":"杭州市下城区",
        "hospital_area":"浙江杭州",
        "creator_id":1,
        "creator_name":"张三",
        "create_time":"0121",
        "hospital_remark":"备注"
    }]



export class DrugNumb extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    closeModal(){
        this.props.drugNumbClose();
    }
    selected(){

    }


    render(){

        const columns = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key',

        }, {
            title: '名称',
            dataIndex: 'hospital_name',
            key: 'hospital_name',
        },];
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
                <Table dataSource={data} columns={columns} onRowClick={this.selected.bind(this)} pagination={false}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(DrugNumb)