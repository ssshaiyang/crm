import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Steps,Table} from 'antd'
const Step = Steps.Step;
import {formatDate,exportDate} from '../../../../../utils/common.js'
// str=formatDate(exportDate(this.props.start_time), '.','.', '')
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const data=[{
        "employee_name":"张伟",
        "employee_id":1,
        "approval_record_status": 0,
        "approval_create_time":1436864169,
        "approval_record_remark":"尽快采购",
        "approval_record_step":1
    },
    {
        "employee_name":"张伟2",
        "employee_id":2,
        "approval_record_status": 1,
        "approval_create_time":1436864169,
        "approval_record_remark":"尽快采购",
        "approval_record_step":2
    },{
        "employee_name":"张伟2",
        "employee_id":2,
        "approval_record_status": 1,
        "approval_create_time":1436864169,
        "approval_record_remark":"尽快采购",
        "approval_record_step":3
    }]
export class GridRenderSee extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    closeModal(){
        this.props.closeSee();
    }
    showStep(datazhi){
        return datazhi.map((obj,i)=>{
            if(obj.approval_record_status==0){
                return <Step key={i} title="" icon={<Icon type="check"/>} description={<div><p style={{textAlign:"center"}}>{formatDate(exportDate(obj.approval_create_time))}</p><p style={{textAlign:"center"}}>{obj.employee_name}</p><p style={{textAlign:"center"}}>待审核</p></div>} />
            }
             if(obj.approval_record_status==1){
                 return <Step key={i} title="" description={<div><p style={{textAlign:"center"}}>{formatDate(exportDate(obj.approval_create_time))}</p><p style={{textAlign:"center"}}>{obj.employee_name}</p><p style={{textAlign:"center"}}>待操作</p></div>} />
             }
             if(obj.approval_record_status==2){
                 return <Step key={i} title="" description={<div><p style={{textAlign:"center"}}>{formatDate(exportDate(obj.approval_create_time))}</p><p style={{textAlign:"center"}}>{obj.employee_name}</p><p style={{textAlign:"center"}}>待审批</p></div>} />
             }
            if(obj.approval_record_status==3){
                return <Step key={i} title="" description={<div><p style={{textAlign:"center"}}>{formatDate(exportDate(obj.approval_create_time))}</p><p style={{textAlign:"center"}}>{obj.employee_name}</p><p style={{textAlign:"center"}}>已审批拒绝</p></div>} />
            }

        })
    }

    render(){

        const columns = [{
            title: '序号',
            dataIndex: 'approval_record_step',
            key: 'approval_record_step',
        }, {
            title: '日期',
            dataIndex: 'approval_create_time',
            key: 'approval_create_time',
            render:(text,record)=>{formatDate(exportDate(record.approval_create_time))}
        }, {
            title: '操作人',
            dataIndex: 'employee_name',
            key: 'employee_name',
        }, {
            title: '状态',
            dataIndex:"approval_record_status",
            key: 'approval_record_status',
            render:(text,record)=>{
                if(record.approval_record_status==0){
                    return <span>待审核</span>
                }
                if(record.approval_record_status==1){
                    return <span>待操作</span>
                }
                if(record.approval_record_status==2){
                    return <span>待审批</span>
                }
                if(record.approval_record_status==3){
                    return <span>已审批拒绝</span>
                }
            }
        },{
            title: '备注',
            dataIndex:"approval_record_remark",
            key: 'approval_record_remark',
        },];
        let count=1
        for(let i=0;i<data.length;i++){
            data[i].key=count++
        }
        return (
            <div>
                <Card className="stepsContainers">
                    <Steps>
                        {this.showStep.call(this,data)}

                    </Steps>
                </Card>
                <Card style={{marginTop:"20px"}}>
                    <Table columns={columns}  dataSource={data} pagination={false} />
                </Card>
                <div style={{textAlign:"center",marginTop:"20px"}}>
                    <Button onClick={this.closeModal.bind(this)} className="mainButton">关闭</Button>
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
export default connect(mapStateToProps,mapDispatchToProps)(GridRenderSee)