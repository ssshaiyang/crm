import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import InvoiceCompanyNameTop from './invoiceCompanyNameTop/invoiceCompanyNameTop.jsx'
import InvoiceCompanyNameTableBox from './invoiceCompanyNameTableBox/invoiceCompanyNameTableBox.jsx'

//开票公司异名
//

export class InvoiceCompanyName extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <InvoiceCompanyNameTop />
                    <InvoiceCompanyNameTableBox />
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(InvoiceCompanyName)