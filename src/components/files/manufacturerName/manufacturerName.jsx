import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import MannameTop from './manuNameTop/mannameTop.jsx'
import ManuNameTableBox from './manuNameTableBox/manuNameTableBox.jsx'

//生产厂家异名
export class ManufacturerName extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <MannameTop />
                    <ManuNameTableBox />
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(ManufacturerName)