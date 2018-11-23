import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal,
    Card
} from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
import AgencyTop from './agencyTop/agencyTop.jsx'
import AgencyBody from './agencyBody/agencyBody.jsx'

export class Agency extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card>
                    <AgencyTop />
                    <br/>
                    <AgencyBody/>
                </Card>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Agency)