import React from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Icon, Form, Row, Col, Input, Cascader, Table } from 'antd'
import * as actionCreator from "../../../../actions/files/agent/agent.js"
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const FormItem = Form.Item;
const { Column, ColumnGroup } = Table;

export class BankAccount extends React.Component {

    constructor() {
        super();
        this.state = {
            addAgentVisible: false,
            addBankInfoVisible: false,
            detailInfoVisible:false
        }
    }

    componentWillMount() {

    }

    componentDidMount(){
        // var bankdata = this.props.bankdata;
        // var bankdatalist = [];
        // bankdata.map(function(item){
        //     bankdataitem = item.company_agent_account;
        //     bankdata.push(bankdata)
        // })
        // console.log(bankdata)
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

    handleSubmitContactsInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    /**
     * 查看银行信息方法组
     */

    showDetail() {
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
        const data = [
            {
                key: '1',
                account_number: '',
                deposit_bank: '',
                deposit_name: '',
                bank_type:''
            },
        ];
        const columns = [{
            title: '账号',
            dataIndex: 'agent_bank_account',
            key: 'agent_bank_account'
          }, {
            title: '开户行',
            dataIndex: 'agent_account_name',
            key: 'agent_account_name',
          }, {
            title: '开户人名',
            dataIndex: 'agent_account_user',
            key: 'agent_account_user',
          }];
        return (
            <div>
                <a onClick={this.addAgent.bind(this)}>添加</a>|<a onClick={this.showDetail.bind(this)}>查看详情</a>
                <Modal
                    title="添加代理商"
                    visible={this.state.addAgentVisible}
                    onOk={this.handleOkAddAgent.bind(this)}
                    onCancel={this.handleCancelAddAgent.bind(this)}
                >
                    <Form onSubmit={this.handleSubmitContactsInfo.bind(this)}>
                        {/* 第一层 */}
                        <div className='botLine'>
                            <FormItem
                                {...formItemLayout}
                                label="账号"
                            >
                                {getFieldDecorator('account_number', {
                                    rules: [{
                                        required: true
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
                                {getFieldDecorator('deposit_bank', {
                                    rules: [{
                                        required: true
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
                                {getFieldDecorator('deposit_name', {
                                    rules: [{
                                        required: true
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="银行类型"
                            >
                                {getFieldDecorator('bank_type', {
                                    rules: [{
                                        required: true, message: '请输入你的银行类型',
                                    }],
                                })(
                                    <div>
                                        <Input style={{ width: 200 }} />
                                    </div>
                                    )}
                            </FormItem>
                        </div>
                    </Form>
                </Modal>

                <Modal
                    title="银行账户列表"
                    visible={this.state.detailInfoVisible}
                    onOk={this.handleOkDetailInfo.bind(this)}
                    onCancel={this.handleCancelDetailInfo.bind(this)}
                >
                    <Table columns={columns} dataSource={this.props.bankdata} bordered={true}/>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(state) {
  
    return {
        //visible: state.inventory.checkOutVisible
        bankdata: state.agentInfo.data.data

    }
    console.log(bankdata)
}
function mapDispatchToProps(dispatch) {
    return {
         //获取代理商列表
        getAgent: (params) => dispatch(actionCreator.getAgentInfo(params)),
        //openModalBox: (val) => dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BankAccount))