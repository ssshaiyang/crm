import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
/*import AddBranch  from './modal/addBranch.jsx'
import * as actionCreator from "../../../actions/admin/frameWork/modal/addBranch.js"*/
import Eidt from './rightEdit'
import GridList from './rightList.jsx'
import Paginations from './rightPage.jsx'
export class RightBox extends React.Component {
    componentWillMount(){

    }
    render(){
        return (
            <div>
               <GridList freshList={this.props.refresh}/>
               <div style={{textAlign:"center"}}>
                   <Paginations refresh={this.props.refresh}/>
               </div>
                <Eidt/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
    }
}
export default connect(null,mapDispatchToProps)(RightBox)