import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table } from 'antd'
import * as actionCreater from "../../../../actions/files/corporation/corporation.js";
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;

export class OrporateBankAccountModel extends React.Component {

    constructor() {
        super();
        this.state = {
            addAgentVisible: false,
            addBankInfoVisible: false,
            detailInfoVisible: false
        }
    }

    componentWillMount() {

    }

    /**
     * 添加银行账户信息方法组
     */
    addAgent() {
        this.setState({
            addAgentVisible: true
        })
    }

    handleOkAddAgent() {
        this.setState({
            addAgentVisible: false
        })
    }

    handleCancelAddAgent() {
        this.setState({
            addAgentVisible: false
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let id = this.props.data.deliver_id;
                let params = {
                    id: id,
                    values: values
                }
                this.props.addBankAccount(params);
            }
        });
    }

    /**
     * 查看银行信息方法组
     */

    showDetail() {
        let id = this.props.data.deliver_id;
        this.props.getBankAccount(id);
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
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }
        const columns = [{
            title: '账号',
            dataIndex: 'deliver_bank_account',
            key: 'deliver_bank_account'
        }, {
            title: '开户行',
            dataIndex: 'deliver_account_name',
            key: 'deliver_account_name',
        }, {
            title: '开户名',
            dataIndex: 'deliver_account_user',
            key: 'deliver_account_user',
        }];
        return (
            <div>
                <a onClick={this.addAgent.bind(this)}>添加</a>|<a onClick={this.showDetail.bind(this)}>查看详情</a>
                <Modal
                    title="添加银行账户"
                    visible={this.state.addAgentVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('deliver_bank_account', {
                                    rules: [{
                                        required: true, message: '请输入你的账号',
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户行"
                            >
                                {getFieldDecorator('deliver_account_name', {
                                    rules: [{
                                        required: true, message: '请输入你的开户行',
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="开户名"
                            >
                                {getFieldDecorator('deliver_account_user', {
                                    rules: [{
                                        required: true, message: '请输入你的开户名',
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 350, marginRight: 10 }}
                            onClick={this.handleOkAddAgent.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddAgent.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title="银行账户列表"
                    visible={this.state.detailInfoVisible}
                    onOk={this.handleOkDetailInfo.bind(this)}
                    onCancel={this.handleCancelDetailInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={this.props.bankInfoList} bordered={true} />
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        bankInfoList: state.corporationInfo.deliverBankInfo,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //添加银行账户
        addBankAccount: (params) => dispatch(actionCreater.addDeliverBankInfoList(params)),
        //查看银行账户信息
        getBankAccount:(param)=>dispatch(actionCreater.getDeliverBankInfoList(param))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(OrporateBankAccountModel))