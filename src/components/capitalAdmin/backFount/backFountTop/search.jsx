import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
const FormItem = Form.Item;
import * as actionCreater from "../../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"

export class Search extends React.Component {
    componentWillMount(){

    }
    handleInput(e){
         this.props.setSearchValue(e.target.value)
         this.props.changePage(1,5)
         this.props.refresh({
            page:1,
            limit:5,
            filter:e.target.value
        })
    }
    handleBtn(){
        this.props.changePage(1,5)
        this.props.refresh({
            page:1,
            limit:5,
            filter:this.props.filter
        })
    }
    render(){
        return (
            <div style={{'textAlign':'center'}}>
                <Input placeholder="搜索..." value={this.props.filter} style={{width:"200px",marginRight:"10px"}}onChange={this.handleInput.bind(this)} /><Button className="mainButton" onClick={this.handleBtn.bind(this)}><Icon type="search"/></Button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        filter:state.backFountList.filter
    }
}
function mapDispatchToProps(dispatch){
    return{
        setSearchValue:(val)=>dispatch(actionCreater.backFountFilterConditionActionCreater(val)),
        changePage:(page,limit)=>dispatch(actionCreater.backFountPaginationConditionActionCreater(page,limit))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)