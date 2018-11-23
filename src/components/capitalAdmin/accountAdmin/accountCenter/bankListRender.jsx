import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,Modal,message, } from 'antd'
import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"
import {DeleteCapitalBankList} from "../../../../utils/interface.js"


export class BankListRender extends React.Component {
    componentWillMount(){

    }
    record(){
        this.props.openRecordModalBox(true)
        this.props.setAccountId(this.props.data.account_id)
        this.props.getRecordList({
           account_id:this.props.data.account_id
        })
    }
    editBank(){
        /*console.log("api",this.props.data)
        console.log('apid',this.props.data.account_id)*/
        this.props.setApi(this.props.data)
        this.props.setAccountId(this.props.data.account_id)

      this.props.openEditModalBox({
          editVisible:true,
          modalType:0
      })
    }
    deleteBank(){
        this.props.setAccountId(this.props.data.account_id)
        Modal.confirm({
            content: "是否删除此条信息",
            onOk: () => {
                // console.log('id',this.props.account_id)
                function cb(res) {
                    if (res.error_code === GLOBALSUCCESS) {
                        this.props.api.updateRowData({
                            remove: [this.props.data]
                        })
                        message.success("删除信息成功!")
                        // Object.assign(this.props.api.data, data);
                        /*  this.props.api.api.updateRowData({
                              update: [this.props.api.data]
                          })*/
                    }
                }
                DeleteCapitalBankList({account_id:this.props.account_id}, cb.bind(this))
            },
            iconType: null
        })


    }
    render(){

        return(
            <div style={{textAlign:"center"}}>
                <Icon type="see" onClick={this.record.bind(this)} style={{cursor:"pointer",fontSize:"20px"}}/>
               <Icon type="revise" onClick={this.editBank.bind(this)}  style={{cursor:"pointer",fontSize:"16px",margin:"0 10px"}}/>
               <Icon type="delete" onClick={this.deleteBank.bind(this)} style={{cursor:"pointer",fontSize:"20px"}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        account_id:state.bankList.account_id
    }
}
function mapDispatchToProps(dispatch) {
    return {
        refreshBankList:(params)=>dispatch(actionCreater.bankAllList(params)),
        openEditModalBox:(val)=>dispatch(actionCreater.editActionCreater(val)),
        openRecordModalBox:(val)=>dispatch(actionCreater.recordActionCreater(val)),
        setApi:(val)=>dispatch(actionCreater.setApiActionCreater(val)),
        setAccountId:(val)=>dispatch(actionCreater.setAccountIdApiActionCreater(val)),
        getRecordList:(val)=>dispatch(actionCreater.getbankAllListRecord(val)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BankListRender)