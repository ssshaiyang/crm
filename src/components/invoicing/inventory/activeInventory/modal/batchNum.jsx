import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"

export class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }
    componentWillMount(){

    }
    handleCheck(){
        this.setState({
            visible:true
        })
    }
    closeModal(){
        this.setState({
            visible:false
        })
    }
    render(){
        return (
            <div>
                <div style={{textAlign:"center"}}>
                    <Icon type="See" onClick={this.handleCheck.bind(this)} className="iconStyle"/>
                </div>
                <Modal
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.closeModal.bind(this)}
                >
                    123
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        // visible:state.inventory.checkOutVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        // openModalBox:(val)=>dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)