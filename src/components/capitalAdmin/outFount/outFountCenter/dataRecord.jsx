import React from 'react'
import {connect} from 'react-redux'
import {Card,Button} from 'antd'
import RecordModal from '../modal/recordModal.jsx'
import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"
import {
    getPaymentRecord
} from "../../../../utils/interface.js"
export class DataRecord extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount(){

    }
    handleCheck(){

        this.props.storeId({
            pay_manage_id:this.props.datapay_manage_id,
        })
        this.props.getData({
            pay_manage_id:this.props.data.pay_manage_id,
        })
        this.props.openModalBox(true)
    }
    render(){
        return (
            <div style={{textAlign:"center"}}>
                {
                    this.props.data.status==0?
                       "暂无"
                        :
                        <span onClick={this.handleCheck.bind(this)} style={{cursor:"pointer"}}>查看</span>
                }

            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.recordActionCreater(val)),
        storeId:(val)=>dispatch(actionCreater.toStorePaymentId(val)),
        getData:(val)=>dispatch(actionCreater.outFountListPaymentCheckOut(val)),
    }
}
export default connect(null,mapDispatchToProps)(DataRecord)