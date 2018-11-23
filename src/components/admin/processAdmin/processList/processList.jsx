import React from 'react'
import {connect} from 'react-redux'
import {Card,Steps,Icon} from 'antd'
const Step = Steps.Step
import RenderCard from './renderCard.jsx'
import Pagination from "./processPage.jsx"
export class ProcessAdminList extends React.Component {
    componentWillMount(){

    }
    makeColumnDefs(obj) {
      return obj.map((val,i)=>{
            return <RenderCard key={i} {...val}/>
          }
      )
    }
    render(){

        return (
               <div>
                   {this.makeColumnDefs.call(this,this.props.data)}
               </div>
        )
    }
}


function mapStateToProps(state){
    return{
        data:state.getProcessAdminList.data,
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProcessAdminList)