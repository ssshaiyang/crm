import React from 'react'
import {connect} from 'react-redux'
import {Card,Button} from 'antd'

import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"
import {
    getPaymentOutFountModal,
    getPaymentOutFountCenterModal
} from "../../../../utils/interface.js"
export class Operation extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            relate_form_id:"" ,
            relate_detail_id:"",
            dataTop:[],
            dataMiddle:[],
            pay_id:''
        }
    }
    componentWillMount(){

    }
    handleCheck() {
        this.props.storeId({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.getId({
            pay_manage_id:this.props.data.pay_manage_id,
        })
        this.props.getData({
            relate_form_id:this.props.data.relate_form_id,
            relate_detail_id:this.props.data.relate_detail_id,
        })
        this.props.getCenterData(this.props.data.pay_manage_id)

        this.props.openModalBox(true)

    }



    render(){
        return (
            <div style={{textAlign:"center"}}>
                {
                    this.props.data.status==0?
                        <div>
                             <Button onClick={this.handleCheck.bind(this)} style={{cursor:"pointer"}}>打款</Button>
                            {/*<OperationModal/>*/}
                        </div>
                        :
                        ""
                }

            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.operationActionCreater(val)),
        storeId:(val)=>dispatch(actionCreater.toStoreId(val)),
        getData:(val)=>dispatch(actionCreater.outFountListPaymentTop(val)),
        getId:(val)=>dispatch(actionCreater.toStorePaymentId(val)),
        getCenterData:(val)=>dispatch(actionCreater.outFountListPaymentCenter(val)),

    }
}
export default connect(null,mapDispatchToProps)(Operation)