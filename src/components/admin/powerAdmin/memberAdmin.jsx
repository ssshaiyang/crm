import React from 'react'
import { connect } from 'react-redux'
import { Card ,Row,Col} from 'antd'
import LeftMemberInfo from './member/leftMemberInfo.jsx'
import RightMemberInfo from './member/rightMemberInfo.jsx'

export class MemberAdmin extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Col span={8}><LeftMemberInfo /></Col>
                <Col span={1}></Col>
                <Col span={15}><RightMemberInfo /></Col>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(MemberAdmin)