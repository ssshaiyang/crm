import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
const FormItem = Form.Item;
import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class InSearch extends React.Component {
    componentWillMount(){


    }
    handleChange(e){
        this.props.getFilter(e.target.value)
        this.props.changePage(1,5)
        this.props.refresh({
            page:1,
            limit:5
        })
    }
    handleBtn(){
        this.props.changePage(1,5)
        this.props.refresh({
            page:1,
            limit:5
        })
    }
  /*  handleFilter(e){
        this.props.changeFilter(e.target.value)
        this.props.changePage(1,5)
        this.props.refresh({
            page:1,
            limit:5
        })
    }
    handleBtn(){
        this.props.changePage(1,5)
        this.props.refresh({
            page:1,
            limit:5
        })
    }*/
    render(){
        return (
            <div style={{'textAlign':'center'}}>
                <Input placeholder="搜索..." style={{width:"200px",marginRight:"10px"}} value={this.props.filter} onChange={this.handleChange.bind(this)}/><Button className="mainButton" onClick={this.handleBtn.bind(this)}><Icon type="search"/></Button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        filter:state.inFountData.filter
    }
}
function mapDispatchToProps(dispatch){
    return{
        getFilter:(val)=>dispatch(actionCreater.inFilterActionCreater(val)),
        changePage:(page,limit)=>dispatch(actionCreater.inPageActionCreater(page,limit)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InSearch)