import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import InSearch from "./InFountTop/inSearch"
import InSelect from "./InFountTop/inSelect"
import InFountList from "./inFountCenter/inFountList.jsx"
import InFountListPage from "./inFountCenter/inFountListPage.jsx"
import * as actionCreater from "../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class InFount extends React.Component {
    componentWillMount(){
         this.props.getInFountList()
    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Card title="对外款项">
                       <div style={{overflow:"hidden"}}>
                           <div style={{float:"left"}}>
                               <InSelect refresh={this.props.getInFountList}/>
                           </div>
                           <div style={{float:"right"}}>
                               <InSearch refresh={this.props.getInFountList}/>
                           </div>
                       </div>
                        <div>
                            <InFountList/>
                            <InFountListPage refresh={this.props.getInFountList}/>
                        </div>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        getInFountList:()=>dispatch(actionCreater.inFountList())
    }
}
export default connect(null,mapDispatchToProps)(InFount)