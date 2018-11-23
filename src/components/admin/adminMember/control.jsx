import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import SearchMember from "./rightSearch/rightSearch.jsx"
import MemberList from "./memberList/memberList.jsx"
import * as memberListActionCreator from '../../../actions/admin/adminMember/memberList/memberList.js'
import ModifyModalContent from './modal/modify.jsx'
import Pagination from './memberPage.jsx'
import CenterSearch from './centerSearch/centerSearch.jsx'

export class Control extends React.Component {
    componentWillMount(){
        this.props.memberData()
    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
               <Card title="员工信息列表" extra={<SearchMember/>} className="shadowCard">
                   <div>
                       <CenterSearch refreshList={this.props.memberData}/>
                   </div>
                   <div>
                       <MemberList/>
                   </div>
                   <div style={{textAlign:'center'}}>
                       <Pagination refresh={this.props.memberData}/>
                   </div>
               </Card>
                <ModifyModalContent refresh={this.props.memberData}/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
           memberData:()=>dispatch(memberListActionCreator.memberList())
    }
}
export default connect(null,mapDispatchToProps)(Control)