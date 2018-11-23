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
import Grid from '../../common/Grid.jsx'
import ReviewRender from "./reviewRender.jsx"
const columnDefs= {
        "select":{
            headerName:"#" ,
            checkboxSelection: true,
        },
        "xuHao": {
            headerName: "序号",
        },"account_user": {
            headerName: "商业公司名称",
        },"account": {
            headerName: "抓取日期",
        },"account_name": {
            headerName: "抓取状态",
        },"bank_account": {
            headerName: "药品品种数量",
        },"account_type": {
            headerName: "条目数量",
        },"operation": {
            headerName: "操作",
            cellRendererFramework:ReviewRender
        },
    }

const allData=[{
    "account_id":1,
    "account_user":"孙浪",
    "account_phone":'市场部',
    "account_name":"联系方式",
    "bank_account":"为付款",
    "account_type":"付款单",
    "account_detail":"查看",
    "record":"记录",
    "operation":"打款"
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

            /*that.columnApi.setColumnVisible('bank_account', false);
            that.gridApi.sizeColumnsToFit();*/
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
