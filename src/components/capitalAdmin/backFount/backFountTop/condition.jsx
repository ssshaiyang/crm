import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,Select} from 'antd'
const Option = Select.Option;
const FormItem = Form.Item;
import * as actionCreater from "../../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"

export class Condition extends React.Component {
    componentWillMount(){

    }
    handleChange(val){
        this.props.setSelectValue(val),
            this.props.changePage(1,5)
            this.props.refresh({
                status:val,
                page:1,
                limit:5
            })
    }
    render(){
        return (
            <div>
                <span style={{marginRight:"10px"}}>状态</span>
                <Select value={this.props.Val} style={{marginRight:"10px",width:"100px"}} onChange={this.handleChange.bind(this)} >
                    <Option value="-1">所有</Option>
                    <Option value="0">未付款</Option>
                    <Option value="1">已付款</Option>
                </Select>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        Val:state.backFountList.condition
    }
}
function mapDispatchToProps(dispatch){
    return{
        setSelectValue:(val)=>dispatch(actionCreater.backFountConditionActionCreater(val)),
        changePage:(page,limit)=>dispatch(actionCreater.backFountPaginationConditionActionCreater(page,limit))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Condition)