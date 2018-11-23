import React from 'react'
import {connect} from 'react-redux'
import {Button,Icon,Input} from 'antd'
import * as actionCreater from "../../../../actions/invoicing/costControl/costControl.js"
import AddModal from '../modal/editModal.jsx'
export class CostSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }
    componentWillMount(){

    }
    closeModal(){
        this.setState({
            visible:false
        })
    }
    handleClick(){
        this.setState({
            visible:true
        })
    }
    openAddModal(){
        this.props.openModal(true,1)
    }
    render(){
        return (
            <div style={{textAlign:"center"}}>
                 <Input style={{width:"180px"}}/><Button className="mainButton" style={{margin:"0 20px"}}><Icon type="search" /></Button><Button className="mainButton" onClick={this.openAddModal.bind(this)}><Icon type="add" /></Button>
                  <AddModal/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModal:(visible,type)=>(dispatch(actionCreater.costControlAdd(visible,type)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CostSearch)