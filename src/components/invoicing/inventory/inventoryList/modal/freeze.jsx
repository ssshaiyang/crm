import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"

export class CheckOut extends React.Component {
    componentWillMount(){

    }

    closeModal(){
       this.props.cancleFreeze()
    }
    render(){
        console.log("123",this.props.apiName)
        return (
            <div>
                <Modal
                    title="冻结"
                    visible={this.props.visible}
                    footer={null}
                    onCancel={this.closeModal.bind(this)}
                >
                    <p style={{fontSize:"14px",marginTop:"20px",textAlign:"center",}}>正在对库存进行冻结操作，请确认！</p>
                    <div style={{textAlign:"center",margin:"40px 0"}}>
                        <Button style={{marginRight:"40px"}} onClick={this.closeModal.bind(this)}>取消</Button>
                        <Button onClick={this.closeModal.bind(this)} className="mainButton">保存</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        visible:state.inventory.freezeVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.freezeActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)