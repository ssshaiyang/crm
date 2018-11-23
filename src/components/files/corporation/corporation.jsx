import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import CorportionTop from './corporationTop/corporationTop.jsx'
import CorporationTableBox from './corporationTableBox/corporationTableBox.jsx'

//商业公司
export class Corporation extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <CorportionTop />
                    <CorporationTableBox/>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(Corporation)