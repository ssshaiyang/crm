import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,message} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
import ModalEdit from "../modal/modalEdit.jsx"
import ModalSee from "../modal/modalSee.jsx"
import ModalApprove from "../modal/modalApprove.jsx"
export class GridRender extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            modifyVisible:false,
            checkVisible:false,
            approveVisible:false,
        }
    }
    componentWillMount(){

    }

    closeCheckModal(){
        this.setState({
            checkVisible:false
        })
    }
    closeApproveModal(){
        this.setState({
            approveVisible:false
        })
    }
    handleApp(){
        Modal.confirm({
            content: "是否送审批?",
            onOk: () => {
                return new Promise(function(resolve) {
                    reject()
                });
            },
            iconType: null
        })
    }
    handleModify(){
        this.props.openModifyModalBox({
            addAndEdit:true,
            addModalType:0
        })
    }
    handleDelete(){
        Modal.confirm({
            content: "是否删除这条信息?",
            onOk: () => {
                this.props.api.updateRowData({
                    remove: [this.props.data]
                })
                message.success("删除成功!")
              /*  return new Promise(function(resolve) {
                    reject()
                });*/
            },
            iconType: null
        })
    }
    handleSee(){
    //查看
        this.setState({
            checkVisible:true
        })
    }
    handleExamination(){
    //审核
        this.setState({
            approveVisible:true
        })
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";

        return (
            <div>
                <div style={{textAlign:"center"}}>
                    <Icon type="delete" onClick={this.handleDelete.bind(this)} className="iconStyle"/>
                    <Icon type="Examination" onClick={this.handleExamination.bind(this)} className="iconStyle"/>
                    <Icon type="submit-applications" onClick={this.handleApp.bind(this)} className="iconStyle"/>
                    <Icon type="modify" onClick={this.handleModify.bind(this)} className="iconStyle"/>
                    <Icon type="See" onClick={this.handleSee.bind(this)} className="iconStyle"/>

                </div>

                      <ModalEdit/>

                <Modal
                    title="查看"
                    visible={this.state.checkVisible}
                    footer={null}
                    onCancel={this.closeCheckModal.bind(this)}
                    width={width}
                >
                   <ModalSee closeSee={this.closeCheckModal.bind(this)}/>
                </Modal>
                <Modal
                    title="审核"
                    visible={this.state.approveVisible}
                    footer={null}
                     onCancel={this.closeApproveModal.bind(this)}
                    width={width}
                >
                    <ModalApprove closeApprove={this.closeApproveModal.bind(this)}/>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        addAndEdit:state.inventory.addAndEdit,
        addModalType:state.inventory.addModalType
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModifyModalBox:(val)=>dispatch(actionCreater.addAndEditActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GridRender)