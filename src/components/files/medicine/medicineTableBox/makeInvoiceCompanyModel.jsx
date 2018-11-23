import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table } from 'antd'
import * as actionCreater from "../../../../actions/files/medicine/medicine.js"
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;

export class MakeInvoiceCompanyModel extends React.Component {

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
        this.props.getBillingInfo(this.props.data.drug_id);
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
        // const data = [
        //     {
        //         key: '1',
        //         make_invoice_company_id: '',
        //         make_invoice_company_name: '',
        //     },
        // ];
        const columns = [{
            title: '开票公司编号',
            dataIndex: 'billing_id',
            key: 'billing_id'
        }, {
            title: '开票公司名称',
            dataIndex: 'billing_name',
            key: 'billing_name',
        }];
        return (
            <div>
                <a onClick={this.showDetail.bind(this)}>查看详情</a>
                <Modal
                    title="开票公司详细"
                    visible={this.state.detailInfoVisible}
                    onOk={this.handleOkDetailInfo.bind(this)}
                    onCancel={this.handleCancelDetailInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={this.props.bilingInfo} bordered={true} />
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        bilingInfo: state.drugListInfo.bilingInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getBillingInfo: (id) => dispatch(actionCreater.getClickBillingInfo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(MakeInvoiceCompanyModel))