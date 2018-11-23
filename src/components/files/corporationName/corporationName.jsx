import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import CorporationNameTop from './corporationNameTop/corporationNameTop.jsx'
import CorporationNameTableBox from './corporationNameTableBox/corporationNameTableBox.jsx'

//商业公司异名
export class CorporationName extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <CorporationNameTop />
                    <CorporationNameTableBox />
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(CorporationName)