import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal} from 'antd'
import * as actionCreater from "../../../../actions/capitalAdmin/backFount/backFountCenter/backFountList.js"

export class DataDetail extends React.Component {
    componentWillMount(){

    }
    handleCheck(){
        this.props.storeId({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.checkOutDetail({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.openModalBox(true)
    }

    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";

        return (
            <div>
                <div >
                    <div style={{textAlign:"center"}}><span onClick={this.handleCheck.bind(this)}>查看</span></div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        visible:state.backFountList.detailRender
    }
}
function mapDispatchToProps(dispatch){
    return{

        storeId:(val)=>dispatch(actionCreater.backFountStoreIdActionCreater(val)),
        checkOutDetail:(val)=>dispatch(actionCreater.BackFountBillDetail(val)),
        openModalBox:(val)=>dispatch(actionCreater.detailRenderActionCreater(val)),


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DataDetail)