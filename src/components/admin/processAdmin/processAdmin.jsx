import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import ProcessAdminTop from "./processAdminTop/processAdminTop.jsx"
import * as actionCreaterTop from "../../../actions/admin/processAdmin/processAdminTop/processType.js"
import * as actionCreaterList from "../../../actions/admin/processAdmin/processList/processList.js"
import ProcessAdminList from "./processList/processList.jsx"
import Pagination from "./processList/processPage.jsx"

export class ProcessAdmin extends React.Component {
    componentWillMount(){
        this.props.getTopProcessType()
        this.props.getProcessListData()
    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Card>
                    <ProcessAdminTop/>
                    流程管理
                    <ProcessAdminList/>
                    <div style={{textAlign:"center",margin:"10px 0"}}>
                        <Pagination refresh={this.props.getProcessListData}/>
                    </div>
                </Card>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch){
    return{
        getTopProcessType:()=>dispatch(actionCreaterTop.getProcessTopType()),
        getProcessListData:()=>dispatch(actionCreaterList.getProcessData())
    }
}
export default connect(null,mapDispatchToProps)(ProcessAdmin)