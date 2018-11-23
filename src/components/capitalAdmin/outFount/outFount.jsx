import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import OutSearch from "./outFountTop/outSearch"
import OutSelect from "./outFountTop/outSelect"
import OutFountList from "./outFountCenter/outFountList.jsx"
import OutFountListPage from "./outFountCenter/outFountListPage.jsx"

import * as actionCreater from "../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"

export class outFount extends React.Component {
    componentWillMount(){
         this.props.getOutFountList()
    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Card title="对外款项">
                       <div style={{overflow:"hidden"}}>
                           <div style={{float:"left"}}>
                               <OutSelect refresh={this.props.getOutFountList}/>
                           </div>
                           <div style={{float:"right"}}>
                               <OutSearch refresh={this.props.getOutFountList}/>
                           </div>
                       </div>
                        <div>
                            <OutFountList/>
                            <OutFountListPage refresh={this.props.getOutFountList}/>
                        </div>
                    {/*<OperationModal/>*/}
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        getOutFountList:()=>dispatch(actionCreater.outFountList())
    }
}
export default connect(null,mapDispatchToProps)(outFount)