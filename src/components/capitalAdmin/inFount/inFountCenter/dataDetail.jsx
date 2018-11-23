import React from 'react'
import {connect} from 'react-redux'
import {Card,Button} from 'antd'


import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class DataDetail extends React.Component {
    componentWillMount(){

    }
    handleCheck(){
        this.props.toStoreFormId(
            {
                relate_form_id:this.props.data.relate_form_id,
                relate_detail_id:this.props.data.relate_detail_id,
            }
        )
        this.props.toGetCheckOutList({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
       this.props.openModalBox(true)
    }
    render(){
        return (
            <div>
                <div >
                    <div style={{textAlign:"center"}}><span onClick={this.handleCheck.bind(this)}>查看</span></div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.detailActionCreater(val)),
        toStoreFormId:(val)=>dispatch(actionCreater.inFountIdActionCreater(val)),
        toGetCheckOutList:(val)=>dispatch(actionCreater.inFountListCheckOut(val))

    }
}
export default connect(null,mapDispatchToProps)(DataDetail)