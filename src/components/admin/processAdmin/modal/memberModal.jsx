/*
 * @Author: lcj
 * @Date:   2017-08-22 19:08:03
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:03:47
 * @Descriptions: 添加客户第二步-已经添加的药品展板
 */

import React from 'react'
import {
    connect
} from 'react-redux'
import {Button,Input } from 'antd'
// import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'
import * as actionCreater from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"
import * as actionCreaterModal from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"
import Pagination from "../processList/memberPage.jsx"
import MemberListModal from "./memberDetailModal.jsx"
export class AddedDrugsPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    saveGetApi(){
        let checkId = this.props.checkId;
        let changeData =this.props.changeData;
        let changeFormData =this.props.changeFormData;
        let idList = this.props.idList
        let params ={
            idList:idList,
            checkId:checkId,
            changeData:changeData,
            changeFormData:changeFormData,
        }
        console.log(params)
        this.props.changeDataList(params)
    }
    handleChange(e){
        console.log(e.target.value)
        this.props.setValueFilter(e.target.value);
        this.props.initPage(1,5)
        this.props.filterGetList({
            limit:5,
            page:1,
            filter:e.target.value
        })
    }
    serarch(){
        this.props.initPage(1,5)
        this.props.filterGetList({
            limit:5,
            page:1,
            filter:this.props.filter
        })
    }
    render() {
        return (
            <div>
                <div style={{overflow:"hidden",padding:"20px 10px"}}>
                    <Input placeholder="输入客户姓名进行查询" value={this.props.filter} style={{float:"left",width:"140px",marginRight:"10px"}} onChange={this.handleChange.bind(this)}/><Button className="mainButton" style={{float:"left"}} onClick={this.serarch.bind(this)}>搜索</Button>
                </div>
                <MemberListModal/>
                <div style={{textAlign:"center",margin:"10px 0"}}>
                    <Pagination refresh={this.props.filterGetList}/>
                </div>
                <div style={{overflow:"hidden",textAlign:"center"}}>
                    <Button style={{marginRight:"20px"}}>返回</Button>
                    <Button className="mainButton" onClick={this.saveGetApi.bind(this)}>保存</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedApi:state.addRulesModal.api,
        filter:state.addRulesModal.filter,
        changeData:state.addRulesModal.changeData,
        changeFormData:state.addRulesModal.changeFormData,
        idList:state.addRulesModal.idList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setValueFilter:(val)=>dispatch(actionCreater.getValue(val)),
        filterGetList:(val)=>dispatch(actionCreaterModal.memberList(val)),
        initPage:(page,size)=>dispatch(actionCreaterModal.getAddBranchModalPage(page,size)),
        changeDataList:(val)=>dispatch(actionCreaterModal.changeDataList(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedDrugsPanel)