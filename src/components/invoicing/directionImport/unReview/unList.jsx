/*
 * @Author: lcj
 * @Date:   2017-08-03 15:51:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-04 14:20:55
 */


import React from 'react'
import {
    connect
} from 'react-redux'
import { Modal, Button ,Input,Form,message,Icon,Steps,Popconfirm,Popover} from 'antd'
import UnListRender from "./unListRender.jsx"
import Grid from '../../../common/Grid.jsx'
// import ReviewRender from './reviewRender.jsx'
const columnDefs= {
    "xuhao": {
        headerName: "序号",
    },"drug_name": {
        headerName: "商业公司",
    },"account": {
        headerName: "新增未备案药品",
    },"account_name": {
        headerName: "新增未备案药品规格",
    },"bank_account": {
        headerName: "新增未备案医院",
    },"account_type": {
        headerName: "操作记录",
    },"operation": {
        headerName: "操作",
        cellRendererFramework:UnListRender
    },
}

const allData=[{
    "flow_direction_id":"1001",
    "flow_analysis_result": "1",
    "drug_name": "生血宝",
    "specification": "75m'l",
    "storage_drug_code": 454452 ,
    "hospital_name": "温州第一人民医院",
    "hospital_city": "温州市",
    "deliver_city": "温州市",
    "storage_expire_time":"3464324",
    "drug_amount":"1000",
    "drug_success_amount": "900",
    "drug_fail_amount": "100",
    "sales_date":365514585
},
    {
        "flow_direction_id":"1001",
        "flow_analysis_result": "0",
        "drug_name": "生血宝",
        "specification": "75m'l",
        "storage_drug_code": 454452 ,
        "hospital_name": "温州第一人民医院",
        "hospital_city": "温州市",
        "deliver_city": "温州市",
        "storage_expire_time":"3464324",
        "drug_amount":"1000",
        "drug_success_amount": "900",
        "drug_fail_amount": "100",
        "sales_date":"365514585"
    }]
function selectionChaged() {
    const selections = this.gridApi.getSelectedRows()
    console.log("selections",selections)
    // this.props.selectionChanged(selections)
}
const containerStyle={
    minHeight: window.screen.availHeight - 530 + 'px',
}

function mapStateToProps(state) {
    return {
        rowData: allData,
        columnDefs: columnDefs,
        containerStyle:containerStyle ,
        selection: true,
        onSelectionChanged: selectionChaged,
        componentDidMount: (that) => {
            console.log("456",that.gridApi)
            // that.props.getApi(that.gridApi)
        }
    }
}


function mapDispatchToProps(dispatch) {
    return {
        // getApi: (api) => dispatch(actionCreaterModal.getGridApiActionCreater(api)),
        // selectionChanged:(val)=>dispatch(actionCreaterModal.getGridSelected(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Grid)
