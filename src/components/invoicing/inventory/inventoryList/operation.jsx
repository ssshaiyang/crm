import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Icon} from 'antd'
// import OperationModal from '../modal/operationModal.jsx'
import * as actionCreater from "../../../../actions/invoicing/inventory/inventory.js"
import EditModal from "./modal/editDrug.jsx"
import Freeze from './modal/freeze.jsx'
import InitDrug from './modal/initDrug.jsx'
import Unfreeze from './modal/unfreeze.jsx'

export class Operation extends React.Component {
    componentWillMount(){

    }
    handleModify(){
        this.props.openModifyModalBox(true)
    }
    handleInit(){
        this.props.openInitModifyModalBox(true)

    }
    handleFrozen(){
        this.props.openFreezeModalBox(true)
    }
    handleThaw(){
        this.props.openUnfreezeModalBox(true)

    }

    handleFrozenCancle(){
        this.props.openFreezeModalBox(false)
    }




    render(){
        return (
            <div>
                <div style={{textAlign:"center"}}>
                   <Icon type="modify" onClick={this.handleModify.bind(this)} className="iconStyle"/>
                   <Icon type="Initialization" onClick={this.handleInit.bind(this)} className="iconStyle"/>
                    <Icon type="Frozen" onClick={this.handleFrozen.bind(this)}   className="iconStyle"/>
                   <Icon type="Thaw" onClick={this.handleThaw.bind(this)} className="iconStyle" style={{fontSize:"22px"}}/>
                </div>
                <EditModal/>
                <Freeze apiName={this.props.data.account_name} cancleFreeze={this.handleFrozenCancle.bind(this)}/>
                <InitDrug/>
                <Unfreeze/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModifyModalBox:(val)=>dispatch(actionCreater.editModalActionCreater(val)),
        openFreezeModalBox:(val)=>dispatch(actionCreater.freezeActionCreater(val)),
        openUnfreezeModalBox:(val)=>dispatch(actionCreater.unfreezeActionCreater(val)),
        openInitModifyModalBox:(val)=>dispatch(actionCreater.initVisibleActionCreater(val)),


    }
}
export default connect(null,mapDispatchToProps)(Operation)