import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'antd'
import LeftApplyInfo from './apply/leftApplyInfo.jsx'
import RightApplyInfo from './apply/rightApplyInfo.jsx'

export class ApplyAdmin extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card>
                    <Col span={8}><LeftApplyInfo /></Col>
                    <Col span={1}></Col>
                    <Col span={15}><RightApplyInfo /></Col>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(ApplyAdmin)