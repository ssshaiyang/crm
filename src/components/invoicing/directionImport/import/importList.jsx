import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
 import ImportRender from './importRender.jsx'
import {formatDate} from '../../../../utils/common.js'

const allData=[{
    "flow_direction_record_id": "1",
    "deliver_id": "10001",
    "deliver_name": "浙江英特",
    "direction_date": 37001212 ,
    "direction_status": "1",
    "drug_type_amount": "10",
    "drug_amount": "1000",
    "drug_success_amount": "900",
    "drug_fail_amount": "100",
    "record":"XXX 2017-08-10 22：10：10导入1000条"
},{
    "flow_direction_record_id": "1",
    "deliver_id": "10001",
    "deliver_name": "浙江英特",
    "direction_date": 37001212 ,
    "direction_status": "0",
    "drug_type_amount": "10",
    "drug_amount": "1000",
    "drug_success_amount": "900",
    "drug_fail_amount": "100",
    "record":"XXX 2017-08-10 22：10：10导入1000条"
}]
export class ListBox extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "flow_direction_id": {
                headerName: "序号",
            },"deliver_name": {
                headerName: "商业公司名称",
            },"direction_date": {
                headerName: "导入日期",
                valueGetter: (params) =>{
                    return formatDate(params.data.direction_date,'-','-')
                }
            },"direction_status": {
                headerName: "导入状态",
                valueGetter: (params) =>{
                    if(params.data.direction_status==0){
                      return "未导入"
                    }else if(params.data.direction_status==1){
                        return "已导入"
                    }

                }
            },"drug_type_amount": {
                headerName: "药品品种数量",
            },"drug_amount": {
                headerName: "条目数量",
            },"drug_success_amount": {
                headerName: "分析成功条目数量",
            },"drug_fail_amount": {
                headerName: "分析失败条目数量",
            },"record": {
                headerName: "添加记录",
            },"operation": {
                headerName: "操作",
                cellRendererFramework:ImportRender
            },
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }

        return(
            <div>
                <Grid
                    // rowData={this.props.rowData}
                    rowData={this.props.rowData}
                    columnDefs={this.makeColumnDefs.call(this)}
                    containerStyle={containerStyle}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rowData: allData,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListBox)