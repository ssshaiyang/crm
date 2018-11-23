
import React from 'react'
import {connect} from 'react-redux'
import {Card,Steps,Icon,Popover ,Button} from 'antd'
const Step = Steps.Step
import * as actionCreater from "../../../../actions/admin/processAdmin/processAdminTop/processType.js"
import * as modalDataAction from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"
import * as actionCreaterModal from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"


import TwoBtn from"./renderBtn.jsx"
let styles={
    containers:{
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        width:"150px",
        display:"block"
    }
}

export class RenderCard extends React.Component {
    componentWillMount(){

    }
    editOpenModal(){
        this.props.visibleModal({
            visible:true,
            modifyModal:1
        });
        this.props.getModalData(this.props.modalDataProps)
        this.props.getModalDataList({
            limit:5,
            page:1
        })
    }
    deleteOpenModal(){

    }


    render(){
        return (
                <div>
                     <Button
                          icon="xiugaihuobianji"
                          className="gridButton"
                          style={{marginRight:'10px'}}
                          onClick={this.editOpenModal.bind(this)}
                      />
                      <Button
                          icon="delete"
                          className="gridButton"
                          onClick={this.deleteOpenModal.bind(this)}
                      />

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
        visibleModal:(val)=>dispatch(actionCreater.showModal(val)),
        getModalData:(val)=>dispatch(modalDataAction.getAddBranchModal(val)),
        getModalDataList:(val)=>dispatch(actionCreaterModal.memberList(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderCard)