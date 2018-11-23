import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Row, Col, Input, Form, Select, message } from 'antd'
import * as actionCreator from "../../../../actions/admin/frameWork/modal/addBranch.js"
import ERROR from "../../../../utils/error-message.json"
import { giveDevelopmentsTo } from "../../../../utils/interface.js"
import * as LeftActionCreator from '../../../../actions/admin/frameWork/leftMenue/leftMenue.js'

const Option = Select.Option;
// const FormItem = Form.Item;
const rowItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 4
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        },
    },
}
export class frameWorkModal extends React.Component {
    componentWillMount() {
        this.props.getBranch()
        this.props.getChargeMan()
    }
    closeModal() {
        this.props.closeModal(false)
    }
    openModal() {
        this.props.closeModal(true)
    }
    handleSubmitInf(e) {
        e.preventDefault();
        function cb(res, error, params) {
            if (res.error_code === GLOBALSUCCESS) {
                message.info('添加部门成功!');
                this.props.closeModal(false)
                // this.props.form.resetFields();
                this.props.getLeftMenue()
            } else {
                message.info('添加部门失败!');
            }
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                giveDevelopmentsTo(values, cb.bind(this));
            }
        });
    }
    makeOptions(options) {
        if (options.department) {
            let keys = Object.keys(options.department)
            return keys.map(key => (
                <Option value={options.parent_id[key]} key={key}>
                    {options.department[key]}
                </Option>
            ))
        }
    }
    makeListOptions(options) {
        if (options) {
            let keys = Object.keys(options)
            return keys.map(key => (
                <Option value={key} key={key}>
                    {options[key]}
                </Option>
            ))
        }
    }

    backLast() {
        this.props.closeModal(false)
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form;
        return (
            <div >
                <Button className="mainButton" onClick={this.openModal.bind(this)}>添加部门</Button>
                <Modal
                    visible={this.props.visible}
                    onCancel={this.closeModal.bind(this)}
                    footer={null}
                    title="添加部门"
                >
                    <div style={{ "overflow": "hidden" }}>
                        <Form onSubmit={this.handleSubmitInf.bind(this)}>

                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="parent_department_id"
                                row
                                label="上级部门"
                                rules={
                                    [{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                }>

                                <Select>
                                    {this.makeOptions(this.props.Branch)}
                                </Select>

                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="department_name"
                                row
                                label="部门名称"
                                rules={
                                    [{ required: true, message: ERROR.BRANCH_NAME_REQUIRED }]
                                }>
                                <Input />
                            </FormItem>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="department_leader_id"
                                row
                                label="负责人"
                                rules={
                                    [{ required: false, message: ERROR.CUSTOMER_NAME_REQUIRED }]
                                }>
                                <Select>
                                    {this.makeListOptions(this.props.employee_select)}
                                </Select>
                            </FormItem>
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Button onClick={this.backLast.bind(this)}>返回</Button>
                                <Button className="mainButton" htmlType="submit" style={{ marginLeft: '30px' }} >保存</Button>
                            </div>
                        </Form>
                    </div>

                </Modal>
            </div>

        )
    }
}
class FormItem extends React.Component {
    render() {
        const Layout = this.props.row ? rowItemLayout : formItemLayout;
        return (
            <Col span={this.props.col}>
                <Form.Item
                    {...Layout}
                    label={this.props.label}
                >
                    {this.props.getFieldDecorator(this.props.itemName, {
                        rules: this.props.rules,
                    })(
                        this.props.children
                        )}
                </Form.Item>
            </Col>
        )
    }
}
FormItem.defaultProps = {
    col: 24,
    itemName: 'itemName',
    rules: [],
    label: 'label'
}
function mapStateToProps(state) {
    return {
        visible: state.addBranchModal.visible,
        Branch: state.addBranchModal.branch,
        employee_select:state.addBranchModal.employee_select
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModal: (val) => dispatch(actionCreator.addBranchModal(val)),
        getBranch: () => dispatch(actionCreator.getAllBranch()),
        getLeftMenue: () => dispatch(LeftActionCreator.getAllBranchFrameWork()),
        getChargeMan:()=>dispatch(actionCreator.getAllChargeMan())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(frameWorkModal))
