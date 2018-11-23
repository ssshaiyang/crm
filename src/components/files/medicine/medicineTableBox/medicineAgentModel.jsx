import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table } from 'antd'
import * as actionCreater from "../../../../actions/files/medicine/medicine.js"
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;

export class MedicineAgentModel extends React.Component {

    constructor() {
        super();
        this.state = {
            detailInfoVisible: false
        }
    }

    /**
     * 查看银行信息方法组
     */

    showDetail() {
        this.props.getAgentInfo(this.props.data.drug_id)
        this.setState({
            detailInfoVisible: true
        })
    }

    handleOkDetailInfo() {
        this.setState({
            detailInfoVisible: false
        })
    }

    handleCancelDetailInfo() {
        this.setState({
            detailInfoVisible: false
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [{
            title: '代理商编号',
            dataIndex: 'agent_id',
            key: 'agent_id'
        }, {
            title: '代理商名称',
            dataIndex: 'agent_name',
            key: 'agent_name',
        }];
        return (
            <div>
                <a onClick={this.showDetail.bind(this)}>查看详情</a>
                <Modal
                    title="代理商详细"
                    visible={this.state.detailInfoVisible}
                    onOk={this.handleOkDetailInfo.bind(this)}
                    onCancel={this.handleCancelDetailInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={this.props.agentInfo} bordered={true} />
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        agentInfo: state.drugListInfo.agentInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAgentInfo: (id) => dispatch(actionCreater.getClickAgentInfo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(MedicineAgentModel))