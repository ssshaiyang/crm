/*
 * @Author: lcj
 * @Date:   2017-08-03 15:51:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-04 14:20:55
 */


import React from 'react'
import {
    connect
} from 'react-redux'
import { Modal, Button ,Input,Form,message,Icon,Steps,Popconfirm,Popover} from 'antd'
import * as actionCreater from "../../../../actions/admin/processAdmin/processAdminTop/processType.js"
import * as actionCreaterModal from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"

import MemberListModal from "./memberModal.jsx"
const Step = Steps.Step
let styles={
    containers:{
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        width:"150px",
        display:"block"
    }
}

class AddRuleModal extends React.Component {
    componentWillMount(){

    }
    closeModal(){
       this.props.unVisible({
           visible:false,
           modalType:0
       })
    }
     dataSort(obj){
        console.log('aaa',obj)
         let arr=[]
         for(let i in obj.steps){
             arr.push(obj.steps[i])
         }
           console.log('bbb',arr)
         return arr.map((val, i)=> {
             if(i==0){
                 return  <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click"><span style={styles.containers}>{val}</span></Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>

             }else{
                 return  <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click">{val}</Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>

             }
             // return  <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click"><span>{val}</span></Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>
         })
     }
    addOneStep(){
       /*  console.log('data1',this.props.data.steps)
       let len= Object.keys(this.props.data.steps).length
        let isLen=0;
        for(var i in this.props.data.steps){
             if(this.props.data.steps[i]==''){
               isLen+=1
             }
        }
        if(isLen!=0){
            return
        }else{

            this.props.data.steps[len+1]="选择人名"
            this.props.updataModal(this.props.data)
        }*/
        this.addOne()
    }
    addOne(){
        return <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click">{val}</Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>

    }
    render() {
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        // const zhi='<Step  title={ <Popover content={<MemberListModal/>}  trigger="click">123</Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>'

        return (
            <Modal
             title={this.props.modalType==0?"添加常规规则":"修改审批流通"}
             visible={this.props.visible}
             footer={null}
             onCancel={this.closeModal.bind(this)}
             width={width}
             maskClosable={false}
            >
                <div className="shadowBox">
                    <div style={{overflow:"hidden",display:'flex'}}>
                        <div style={{flex:1}}>
                            <Steps ref="addOne" id="node">
                                {this.dataSort.call(this,this.props.data)}
                            </Steps>
                        </div>
                        <div style={{width:"60px",textAlign:"center"}}>
                            <Button type="primary" shape="circle" icon="plus-circle-o" onClick={this.addOneStep.bind(this)} />
                        </div>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>
                    <Button onClick={this.closeModal.bind(this)}>取消</Button>
                    <Button className="mainButton" style={{marginLeft:"20px"}}>确定</Button>
                </div>
                <div>
                    <p>所有人名</p>
                    <div className="shadowBox">
124
                    </div>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    console.log("aaa");
    return {
        data:state.addRulesModal.data,
        visible:state.processAdminTop.visible,
        modalType:state.processAdminTop.modalType
    }
}

function mapDispatchToProps(dispatch) {
    return {
      unVisible:(val)=>dispatch(actionCreater.showModal(val)),
       updataModal:(val)=>dispatch(actionCreaterModal.getAddBranchModal(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddRuleModal)
