import React from 'react'
import { Form, Input, Select, Row, Col, Button, Tabs } from 'antd'
import {
    connect
} from 'react-redux'
import NoStampPurchase from '../noStampFlow/NoStampPurchaseMain/noStampPurchase.jsx'
import NoStampPayment from '../noStampFlow/NoStampPurchaseMain/noStampPayment.jsx'
import NoStampBusinessPutToStorage from '../noStampFlow/NoStampPurchaseMain/noStampBusinessPutToStorage.jsx'
import NoStampBusinessComponyReceivedPayments from '../noStampFlow/NoStampPurchaseMain/noStampBusinessComponyReceivedPayments.jsx'
import NoStampReceivedPayments from '../noStampFlow/NoStampPurchaseMain/noStampReceivedPayments.jsx'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class NoStampFlow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tabContainers'>
                <Tabs type="card" >
                    <TabPane tab="采购" key="1">
                        < NoStampPurchase />
                    </TabPane>
                    <TabPane tab="付款" key="2">
                        <NoStampPayment />
                    </TabPane>
                    <TabPane tab="商业公司入库" key="3">
                        <NoStampBusinessPutToStorage />
                    </TabPane>
                    <TabPane tab="商业公司回款" key="4">
                        < NoStampBusinessComponyReceivedPayments />
                    </TabPane>
                    <TabPane tab="厂家公司回款" key="5">
                        <NoStampReceivedPayments />
                    </TabPane>
                </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoStampFlow)