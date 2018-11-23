import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import * as actionCreater from "../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"
import BackFountCondition from "./backFountTop/condition.jsx"
import BackFountSearch from "./backFountTop/search.jsx"
import BackFountList from "./backFountCenter/backFountList.jsx"
import BackFountListPage from "./backFountCenter/backFountListPage.jsx"
export class BackFount extends React.Component {
    componentWillMount(){
        this.props.getAllData()
    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Card title="对外款项列表">
                    <div style={{overflow:'hidden'}}>
                        <div style={{float:"left"}} >
                            <BackFountCondition refresh={this.props.getAllData}/>
                        </div>
                        <div style={{float:"right"}} >
                            <BackFountSearch refresh={this.props.getAllData}/>
                        </div>
                    </div>
                    <BackFountList/>
                    <div style={{textAlign:"center"}}>
                        <BackFountListPage refresh={this.props.getAllData}/>
                    </div>
            </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
           getAllData:(val)=>dispatch(actionCreater.BackFountList(val))
    }
}
export default connect(null,mapDispatchToProps)(BackFount)