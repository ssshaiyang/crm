import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Menu, Checkbox, Dropdown, Icon } from 'antd'
import { connect } from 'react-redux'
import BusinessReceivedPaymentsTableTop from './businessReceivedPaymentsTableTop/businessReceivedPaymentsTableTop.jsx'
import BusinessReceivedPaymentsTableMain from './businessReceivedPaymentsTableMain/businessReceivedPaymentsTableMain.jsx'
const FormItem = Form.Item;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class BusinessReceivedPaymentsTableBox extends React.Component {
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
                <BusinessReceivedPaymentsTableTop />
                <BusinessReceivedPaymentsTableMain />
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessReceivedPaymentsTableBox)