import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import AgentTop from './agentTop/agentTop.jsx'
import AgentTableBox from './agentTableBox/agentTableBox.jsx'

//代理商
export class Agent extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <AgentTop />
                    <AgentTableBox />
                </Card>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(Agent)