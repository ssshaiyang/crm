import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import HospotalTop from './hospotalTop/hospotalTop.jsx'
import HospotalTableBox from './hospotalTableBox/hospotalTableBox.jsx'

//医院
export class Hospital extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <HospotalTop />
                    <HospotalTableBox/>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(Hospital)