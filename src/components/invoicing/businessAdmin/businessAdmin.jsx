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
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import BusinessManageTop from './businessManageTop/businessManageTop.jsx'

export class BusinessAdmin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding:'35px 0'}}>
                <Card>
                    <div>
                        <BusinessManageTop />
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessAdmin)