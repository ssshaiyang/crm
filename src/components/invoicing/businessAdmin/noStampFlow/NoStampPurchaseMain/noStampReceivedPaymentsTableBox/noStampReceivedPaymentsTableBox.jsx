import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Menu, Checkbox, Dropdown, Icon } from 'antd'
import { connect } from 'react-redux'
import NoStampReceivedPaymentsTableTop from 
'../../../hasStampFlow/hasStampFlowMain/receivedPaymentsTableBox/receivedPaymentsTableTop/receivedPaymentsTableTop.jsx'
import NoStampReceivedPaymentsTableMain from 
'../../../hasStampFlow/hasStampFlowMain/receivedPaymentsTableBox/receivedPaymentsTableMain/receivedPaymentsTableMain.jsx'
const FormItem = Form.Item;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class NoStampReceivedPaymentsTableBox extends React.Component {
    constructor(props) {
        super(props);
    }


    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    render() {
        return (
            <div>
                <NoStampReceivedPaymentsTableTop />
                <NoStampReceivedPaymentsTableMain />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoStampReceivedPaymentsTableBox)