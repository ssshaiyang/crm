import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal} from 'antd'
import * as actionCreater from "../../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"

export class DataDetail extends React.Component {
    componentWillMount(){

    }
    handleCheck(){
        this.props.getManageID({
            pay_manage_id:this.props.data.pay_manage_id
        })
        this.props.getPaymentRecord({
            pay_manage_id:this.props.data.pay_manage_id
        })
        this.props.openModalBox(true)
    }

    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return (
            <div>
                <div style={{textAlign:"center"}}>
                    {
                        this.props.data.status==0?
                            "暂无"
                            :
                            <span onClick={this.handleCheck.bind(this)}>查看</span>
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        visible:state.backFountList.recordRender
    }
}
/*detailRender:false,
    recordRender:false,
    operationRender:false,*/
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.recordRenderActionCreater(val)),
        getManageID:(val)=>dispatch(actionCreater.backFountStorePayManageActionCreater(val)),
        getPaymentRecord:(val)=>dispatch(actionCreater.BackFountPaymentRecord(val)),


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DataDetail)