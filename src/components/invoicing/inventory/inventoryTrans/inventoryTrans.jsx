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
import TransBott from './transBott/transBott.jsx'
import TransBottPage from './transBott/transBottPage.jsx'
import TransTop from './transTop/transTop.jsx'
import TransCenter from './transCenter/transCenter.jsx'
export class InventoryTrans extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                <TransTop/>
                <TransCenter/>
                <TransBott/>
                <TransBottPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(InventoryTrans)