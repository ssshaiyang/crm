import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table } from 'antd'
import * as actionCreater from "../../../../actions/files/medicine/medicine.js"
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;

export class BusinessCompanyModal extends React.Component {

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
        this.props.getDeliverInfo(this.props.data.drug_id)
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
        const columns = [{
            title: '商业公司编号',
            dataIndex: 'deliver_id',
            key: 'deliver_id'
        }, {
            title: '商业公司名称',
            dataIndex: 'deliver_name',
            key: 'deliver_name',
        }];
        return (
            <div>
                <a onClick={this.showDetail.bind(this)}>查看详情</a>
                <Modal
                    title="商业公司详细"
                    visible={this.state.detailInfoVisible}
                    onOk={this.handleOkDetailInfo.bind(this)}
                    onCancel={this.handleCancelDetailInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={this.props.deliverInfo} bordered={true} />
                </Modal>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        deliverInfo: state.drugListInfo.deliverInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getDeliverInfo: (id) => dispatch(actionCreater.getClickDeliverInfo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BusinessCompanyModal))