import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Menu, Checkbox, Dropdown, Icon } from 'antd'
import { connect } from 'react-redux'
import InvoiceCompanyTableTop from './invoiceCompanyTableTop/invoiceCompanyTableTop.jsx'
import InvoiceCompanyTableMain from './invoiceCompanyTableMain/invoiceCompanyTableMain.jsx'
const FormItem = Form.Item;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class PurchaseTableBox extends React.Component {
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
                <InvoiceCompanyTableTop />
                <InvoiceCompanyTableMain />
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseTableBox)