import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import InvoiceComponyTop from './invoiceCompanyTop/invoiceComponyTop.jsx'
import InvoiceCompanyTableBox from './invoiceCompanyTableBox/invoiceCompanyTableBox.jsx'

//开票公司
export class InvoiceCompany extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <InvoiceComponyTop />
                    <InvoiceCompanyTableBox />
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(InvoiceCompany)