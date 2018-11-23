import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
const FormItem = Form.Item;
import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"

export class AccountSearch extends React.Component {
    componentWillMount(){

    }
    handleChange(e){
        this.props.handleFilter(e.target.value)
        this.props.refresh({
            page:1,
            limit:5,
            filter:e.target.value
        })
    }
    handleBtn(e){
        this.props.refresh({
            page:1,
            limit:5,
            filter:this.props.filter
        })
    }
    handelAdd(){
        this.props.clearPart()
         this.props.handleModal({
             editVisible:true,
             modalType:1
         })
    }
    render(){
        return (
            <div style={{overflow:"hidden"}}>
                <div style={{float:"left",width:"400px"}}>
                    <Input placeholder="搜索..." value={this.props.filter} style={{float:"left",width:"180px",marginRight:"10px"}} onChange={this.handleChange.bind(this)}/><Button className="mainButton" style={{float:"left"}} onClick={this.handleBtn.bind(this)}><Icon type="search" style={{ fontSize: 16, color: '#fff' }} /></Button>
                </div>
                <div style={{float:"right",}}>
                    {/*<Button  className="mainButton" style={{marginRight:"20px"}}>批量添加</Button>*/}
                    <Button  className="mainButton" onClick={this.handelAdd.bind(this)} ><Icon type="add" style={{ fontSize: 16, color: '#fff' }} /></Button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        filter:state.bankList.filter
    }
}
function mapDispatchToProps(dispatch){
    return{
        handleFilter:(val)=>dispatch(actionCreater.filterActionCreater(val)),
        handleModal:(val)=>dispatch(actionCreater.editActionCreater(val)),
        clearForm:()=>dispatch(actionCreater.clearCapitalForm()),
        clearPart:()=>dispatch(actionCreater.clearPartCapitalForm()),


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AccountSearch)