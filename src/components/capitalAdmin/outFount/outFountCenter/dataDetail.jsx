import React from 'react'
import {connect} from 'react-redux'
import {Card,Button} from 'antd'

import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"
export class DataDetail extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount(){

    }
    handleCheck(){
        this.props.storeId({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.getData({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.openModalBox(true)
    }
    render(){
        return (
            <div>
                <div style={{textAlign:"center"}}>
                   <a href="javascript:;" onClick={this.handleCheck.bind(this)} style={{color:"#000"}}>查看</a>
                </div>
                {/*<DetailModal data={this.state.data}/>*/}

            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.detailActionCreater(val)),
        storeId:(val)=>dispatch(actionCreater.toStoreId(val)),
        getData:()=>dispatch(actionCreater.outFountListCheckOut()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DataDetail)