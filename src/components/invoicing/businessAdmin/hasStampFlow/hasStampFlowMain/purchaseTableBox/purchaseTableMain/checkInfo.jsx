import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Steps, Table } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Step = Steps.Step;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class CheckPending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInfo: false
        }
    }
    /**
     * 查看对话框方法组
     */
    toCheck() {
        this.setState({
            checkInfo: true
        })
    }

    handleOkToCheck() {
        this.setState({
            checkInfo: false
        })
    }

    handleCancelToCheck() {
        this.setState({
            checkInfo: false
        })
    }

    render() {
        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            width: 100
        },
        {
            title: '日期',
            dataIndex: 'date',
            key: 'date   ',
            width: 150
        },
        {
            title: '操作人',
            dataIndex: 'creater',
            key: 'creater',
            width: 100
        },
        {
            title: '状态',
            width: 100,
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: '备注',
            width: 150,
            dataIndex: 'remark',
            key: 'remark',
        }];

        const data = [
            {
                key: 1,
                id: 1,
                date: '2017-08-05',
                creater: '小方',
                state: '已送审',
                remark: '麻烦大钢进行审批'
            },
            {
                key: 2,
                id: 2,
                date: '2017-08-05',
                creater: '陈刚',
                state: '已通过',
                remark: '无'
            }
        ];

        return (
            <div>
                <span style={{ fontSize: 16, marginRight: 8, marginLeft: 8, cursor: 'pointer' }} onClick={this.toCheck.bind(this)}><Icon type="search" /></span>
                <Modal
                    title="查看信息"
                    width='700px'
                    visible={this.state.checkInfo}
                    onOk={this.handleOkToCheck.bind(this)}
                    onCancel={this.handleCancelToCheck.bind(this)}
                >
                    <div className='botLine'>
                        <Steps>
                            <Step status="finish" title="小方已送审" description="2017-08-05" icon={<Icon type="user" />} />
                            <Step status="finish" title="陈刚已送审" description="2017-08-05" icon={<Icon type="solution" />} />
                            <Step status="wait" title="Tom待审核" description="------" icon={<Icon type="credit-card" />} />
                        </Steps>
                    </div>
                    <div>审批记录</div>
                    <div className='botLine'>
                        <Table columns={columns} dataSource={data}></Table>
                    </div>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckPending)