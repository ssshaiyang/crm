import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Table} from 'antd'
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const data=[        {
    "deliver_id": 100001,
    "deliver_name":"北京康辰药业有限公司"
},
    {
        "deliver_id": 100002,
        "deliver_name":"北京康辰药业有限公司"
    }]
export class TransOut extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    closeModal(){
        this.props.companyClose();
    }
    selected(record, index, event){
        console.log(record)
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
            <div>
                <Table dataSource={data} columns={columns} onRowClick={this.selected.bind(this)}/>

                <div style={{textAlign:"center"}}>
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
export default connect(mapStateToProps,mapDispatchToProps)(TransOut)