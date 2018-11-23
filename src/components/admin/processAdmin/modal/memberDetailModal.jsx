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
import * as actionCreater from "../../../../actions/admin/processAdmin/processAdminTop/processType.js"
import * as actionCreaterModal from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"
const Step = Steps.Step
import Grid from '../../../common/Grid.jsx'
const columnDefs = {
    "employee_name": "姓名",
    "department": "部门",
    "position": "职位",
    "telephone": '联系方式',
}
function selectionChaged() {
    const selections = this.gridApi.getSelectedRows()
    if(selections.length>1){
        message.info("只能选择一个人员")
        return false
    }else{
        console.log("selections",selections)
        this.props.selectionChanged(selections)
        this.props.saveChange(selections)
    }
}


function mapStateToProps(state) {
    return {
        rowData: state.addRulesModal.memberList,
        columnDefs: columnDefs,
        containerStyle: {
            margin: '0 0 10px 0',
            width:"400px"
        },
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
        selectionChanged:(val)=>dispatch(actionCreaterModal.getGridSelected(val)),
        saveChange:(val)=>dispatch(actionCreaterModal.saveChangeData(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Grid)
