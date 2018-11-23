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
import ProCostTop from './proCostTop/proCostTop.jsx';
import ProCostBody from './proCostBody/proCostBody.jsx';

//协议管理
export class ProAndCost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card>
                    <ProCostTop />
                    <br />
                    <ProCostBody />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProAndCost)