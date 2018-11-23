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
    constructor() {
        super();
        this.state = {
            data:{},
            dataLength:1
        }
    }
    componentWillMount(){

    }
    closeModal(){
       this.props.unVisible({
           visible:false,
           modalType:0
       })
    }
     dataSort(obj){
        console.log(obj)
         let check =[];
         let arr=[]
         var jsonObj =obj;
         if(obj.length>0){
              jsonObj = JSON.parse(jsonObj)
         }
         for(let i in jsonObj){
             arr.push(jsonObj[i])
         }
         return arr.map((val, i)=> {
             if(i==0){
                 return  <Step key={i} title={ <Popover content={<MemberListModal checkId={i}/>}  trigger="click"><span style={styles.containers}>{val}</span></Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>

             }else{
                 return  <Step key={i} title={ <Popover content={<MemberListModal checkId={i}/>}  trigger="click">{val}</Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>

             }
             // return  <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click"><span>{val}</span></Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>
         })
     }

    addOneStep(){
        let arrList = this.props.data;
        console.log(this.props.changeId)
        console.log()
        console.log(this.props.data)
        console.log(this.props.data.length)
        let  jsonObj={};
        let arrS={}
        if(arrList.length!=0){
            jsonObj =  JSON.parse(this.props.data)
        }else{
            console.log("数据为空")
        }
        let arr = [];
        for(let i in jsonObj){
            arr.push(jsonObj[i])
        }
        let list = {
            [arr.length+1]:"请选择"
        }
        arrS = Object.assign(jsonObj,list)
        arrS = JSON.stringify(arrS)
        this.props.updateModal(arrS)

    }
    addOne(){
        return <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click">{val}</Popover>} icon={<Icon type="user" style={{display: "block"}}/>}/>
        // return <Step key={i} title={ <Popover content={<MemberListModal/>}  trigger="click">{val}</Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>
    }
    checkData(){
        let ruleId =this.props.ruleId;
        let changeId =this.props.changeId;
        let params ={
            ruleId:ruleId,
            step:changeId,
        }
        // this.props.putChangeList(params)
        console.log("修改信息")
        this.props.unVisible({
            visible:false,
            modalType:0
        })

    }
    render() {
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        console.log(this.props.data)
        // const zhi='<Step  title={ <Popover content={<MemberListModal/>}  trigger="click">123</Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>'
        return (
            <Modal
             title={this.props.modalType==0?"添加常规规则":"修改审批流程"}
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
                    <Button className="mainButton" onClick={this.checkData.bind(this)} style={{marginLeft:"20px"}}>确定</Button>
                </div>
                <div>
                    <p>所有人名</p>
                    <div className="shadowBox">
                    </div>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    console.log(state.addRulesModal.changeFormData)
    return {
        data:state.addRulesModal.changeFormData,
        visible:state.processAdminTop.visible,
        modalType:state.processAdminTop.modalType,
        ruleId:state.getProcessAdminList.ruleId,
        changeId:state.addRulesModal.idList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      unVisible:(val)=>dispatch(actionCreater.showModal(val)),
       updateModal:(val)=>dispatch(actionCreaterModal.updateBranchModal(val)),
        putChangeList:(val)=>dispatch(actionCreaterModal.putChangeListData(val)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddRuleModal)
