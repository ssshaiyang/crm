import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal,
    Card
} from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import SearchContent from './costTop/costSearch'
import CostCenter from "./costCenter/costList.jsx"
import CostTop from './costTop/costTop.jsx'
import CostPage from './costCenter/costPage.jsx'
export class CostControl extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div style={{padding:"35px 0"}}>
                <Card title="业务支付单列表" extra={<SearchContent/>}>
                    <div>
                        <CostTop/>
                        <CostCenter/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <CostPage/>
                    </div>
                </Card>

            </div>


        )
    }
}
function mapStateToProps(state){
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CostControl)