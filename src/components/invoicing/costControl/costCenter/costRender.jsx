import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Icon,Modal} from 'antd'
import SeeModal from '../modal/seeModal.jsx'
import ApproveModal from '../modal/approveModal.jsx'
import EditModal from '../modal/editModal.jsx'
import * as actionCreater from "../../../../actions/invoicing/costControl/costControl.js"


export class CostRender extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            ModifyVisible:false,
            submitVisible:false,
            approveVisible:false,
            seeVisible:false
        }
    }
    componentWillMount(){

    }
    openSubmit(){
        this.setState({
            submitVisible:true,
        })
    }
    openSee(){
        this.setState({
            seeVisible:true
        })
    }
    openExamination(){
        this.setState({
            approveVisible:true,
        })
    }
    closeSubmit(){
        this.setState({
            submitVisible:false,
        })
    }
    closeSee(){
        this.setState({
            seeVisible:false
        })
    }
    closeExamination(){
        this.setState({
            approveVisible:false,
        })
    }
    closeConfirmSubmit(){
        this.setState({
            submitVisible:false,
        })
    }
    modifyModal(){
        this.props.openAddModal(true,0)
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return (
            <div>
                <div style={{textAlign:"center"}}>
                    <Icon type="modify" className="iconStyle" onClick={this.modifyModal.bind(this)}/>
                    <Icon type="submit-applications"  className="iconStyle" onClick={this.openSubmit.bind(this)}/>
                    <Icon type="See"  className="iconStyle" onClick={this.openSee.bind(this)}/>
                    <Icon type="Examination"  className="iconStyle" onClick={this.openExamination.bind(this)}/>
                </div>
                   <EditModal/>
                <Modal
                    title="提交申请"
                    visible={this.state.submitVisible}
                    onCancel={this.closeSubmit.bind(this)}
                    footer={null}
                >
                    <p style={{fontSize:"14px",marginTop:"20px",textAlign:"center",}}>提交审批后无法进行编辑与撤回，确认提交吗？</p>
                    <div style={{textAlign:"center",margin:"40px 0"}}>
                        <Button style={{marginRight:"40px"}} onClick={this.closeSubmit.bind(this)}>取消</Button>
                        <Button onClick={this.closeConfirmSubmit.bind(this)} className="mainButton">确定</Button>
                    </div>
                </Modal>
                <Modal
                    title="查看"
                    visible={this.state.seeVisible}
                    onCancel={this.closeSee.bind(this)}
                    footer={null}
                >
                    < SeeModal seeClose={this.closeSee.bind(this)}/>
                </Modal>
                <Modal
                    title="审核"
                    visible={this.state.approveVisible}
                    onCancel={this.closeExamination.bind(this)}
                    footer={null}
                    width={width}
                >
                      <ApproveModal ApproveClose={this.closeExamination.bind(this)}/>
                </Modal>

            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        openAddModal:(visible,type)=>(dispatch(actionCreater.costControlAdd(visible,type)))
    }
}
export default connect(null,mapDispatchToProps)(CostRender)