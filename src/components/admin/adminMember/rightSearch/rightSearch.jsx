import React from 'react'
import {Card,Input,Button,Menu, Dropdown, Icon, message} from 'antd'
import {connect}from 'react-redux'
import * as actionCreator from "../../../../actions/admin/adminMember/rightSearch/rightSearch.js"
import * as  memberListActionCreator from "../../../../actions/admin/adminMember/memberList/memberList.js"
import * as  initPageActionCreator from "../../../../actions/admin/adminMember/memberPage.js"
import ExcelModal from "../modal/excel.jsx"
import LotAddModal from "../modal/lotAdd.jsx"
import MenueContent from './rightAdd.jsx'
let styles = {
    searchButton: {
        width: "59px",
        margin: '0 15px 0 5px',
        fontSize: '16px'
    },
    addButton: {
        fontSize: '16px'
    }
}
// onPressEnter


export class SearchMember extends React.Component {
    handalValue(e){
       this.props.getSearchValue.call(this,e)
        this.props.initPagination();
       this.props.refreshList({
           limit:5,
           page:1,
           filter:e.target.value
       })
    }
    handleClick(){
        this.props.initPagination();
        this.props.refreshList({
            limit:5,
            page:1,
            filter:this.props.filter
        })
    }
    render (){
        return (
            <div style={{display:"flex",padding:'10px 0'}}>
                <Input
                    placeholder="搜索姓名/手机号码"
                    value={this.props.filter}
                    onChange={this.handalValue.bind(this)}
                    />
                <Button
                    icon="search"
                    className="mainButton"
                    style={styles.searchButton}
                    onClick={this.handleClick.bind(this)}
                   />
               <MenueContent/>
               <LotAddModal/>
                <ExcelModal/>
           </div>
        )
    }
}
function mapStateToProps(state){
    return {
           filter:state.rightSearch.filter
    }
}
function mapDispatchToProps(dispatch){
    return {
         getSearchValue:(e)=>dispatch(actionCreator.adminSearchActionCreater(e.target.value)),
         refreshList:(val)=>dispatch(memberListActionCreator.memberList(val)),
         initPagination:(val)=>dispatch(initPageActionCreator.initPage())

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchMember)
