import React from 'react'
import { Form, Input, Select, Row, Col, Button, Tabs } from 'antd'
import {
    connect
} from 'react-redux'
import Purchase from '../hasStampFlow/hasStampFlowMain/purchase.jsx'
import Payment from '../hasStampFlow/hasStampFlowMain/payment.jsx'
import BusinessPutToStorage from '../hasStampFlow/hasStampFlowMain/businessPutToStorage.jsx'
import InvoiceCompany from '../hasStampFlow/hasStampFlowMain/invoiceCompany.jsx'
import TaxReceipt from '../hasStampFlow/hasStampFlowMain/taxReceipt.jsx'
import BusinessComponyReceivedPayments from '../hasStampFlow/hasStampFlowMain/businessComponyReceivedPayments.jsx'
import ReceivedPayments from '../hasStampFlow/hasStampFlowMain/receivedPayments.jsx'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class HasNavInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tabContainers'>
                <Tabs type="card" >
                    <TabPane tab="采购" key="1">
                        < Purchase />
                    </TabPane>
                    <TabPane tab="付款" key="2">
                        <Payment />
                    </TabPane>
                    <TabPane tab="开票公司入库" key="3">
                        <InvoiceCompany />
                    </TabPane>
                    <TabPane tab="商业公司入库" key="4">
                        <BusinessPutToStorage />
                    </TabPane>
                    <TabPane tab="税票" key="5">
                        < TaxReceipt />
                    </TabPane>
                    <TabPane tab="商业公司回款" key="6">
                        < BusinessComponyReceivedPayments />
                    </TabPane>
                    <TabPane tab="回款" key="7">
                        <ReceivedPayments />
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

export default connect(mapStateToProps, mapDispatchToProps)(HasNavInfo)