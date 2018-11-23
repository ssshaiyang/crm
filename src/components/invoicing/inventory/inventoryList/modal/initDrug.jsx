import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"

export class CheckOut extends React.Component {
    componentWillMount(){

    }

    closeModal(){
        this.props.openModalBox(false)
    }
    render(){
        return (
            <div>
                <Modal
                    title="初始化"
                    visible={this.props.visible}
                    footer={null}
                    onCancel={this.closeModal.bind(this)}
                >
                    <p style={{marginTop:"20px",textAlign:"center",fontSize:"14px"}}>确定要初始化这条信息吗？</p>
                    <div style={{textAlign:"center",margin:"40px 0"}}>
                        <Button style={{marginRight:"40px"}} onClick={this.closeModal.bind(this)}>返回</Button>
                        <Button onClick={this.closeModal.bind(this)} className="mainButton">保存</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        visible:state.inventory.initVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.initVisibleActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)