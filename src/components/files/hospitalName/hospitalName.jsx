import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import HospitalNameTop from './hospitalNameTop/hospitalNameTop.jsx'
import HospitalNameTableBox from './hospitalNameTableBox/hospitalNameTableBox.jsx'

//医院异名
export class HospitalName extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <HospitalNameTop />
                    <HospitalNameTableBox/>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(HospitalName)