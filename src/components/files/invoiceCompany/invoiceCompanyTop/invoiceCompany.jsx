import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import CorportionTop from './corportionTop/corportionTop.jsx'

//开票公司
export class InvoiceCompany extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <CorportionTop />
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