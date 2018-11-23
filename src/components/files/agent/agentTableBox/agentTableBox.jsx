import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'

import Grid from '../../../common/Grid.jsx'
import BankAccountModel from './bankAccount.jsx'
import AgentOperationModel from './agentOperation.jsx'

import * as actionCreator from "../../../../actions/files/agent/agent.js"
import * as actionUser from "../../../../actions/files/medicineName/medicineName.js"

export class AgentTableBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs()
        }
    }

    componentWillMount() {
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getAgent(params);
        this.props.getUserInfo(1);
    }
    createColumnDefs() {
        return [
            {
                headerName: "代理商编号",
                field: 'agent_id',
                width: 100,

            },
            {
                headerName: "代理商名称",
                field: 'agent_name',
                width: 100,

            },
            {
                headerName: "所属地区",
                field: 'agent_address',
                width: 100,

            },
            {
                headerName: "地址",
                field: 'agent_address',
                width: 100,

            },
            {
                headerName: "招商人员",
                field: 'employee_id',
                width: 100,

            },
            {
                headerName: "联系人姓名",
                field: 'agent_contact_name[0]',
                width: 100,

            },
            {
                headerName: "手机号码",
                field: 'agent_contact_telephone',
                width: 100,

            },
            {
                headerName: "固定电话",
                field: 'agent_contact_phone',
                width: 100,

            },
            {
                headerName: "传真",
                field: 'agent_contact_fax',
                width: 100,

            },
            {
                headerName: "微信",
                field: 'agent_contact_webchat',
                width: 100,

            },
            {
                headerName: "QQ号",
                field: 'agent_contact_qq',
                width: 100,

            },
            {
                headerName: "邮箱",
                field: 'agent_contact_email',
                width: 100,

            },
            {
                headerName: "身份证号码",
                field: 'agent_contact_card',
                width: 100,

            },
            {
                headerName: "付款方式",
                field: 'payment_type',
                width: 100,

            },
            {
                headerName: "银行账户",
                field: 'agent_account',
                width: 100,
                cellRendererFramework: BankAccountModel,
            },
            {
                headerName: "创建人",
                field: 'creator_name',
                width: 100,

            },
            {
                headerName: "操作",
                field: 'agent_operation',
                cellRendererFramework: AgentOperationModel,
                width: 100,
            },
        ]
    }

    render() {
        const containerStyle = {
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        return (
            <div>
                <Grid
                    defaultColDef={{
                        enableRowGroup: true,
                    }}
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.rowData}
                    containerStyle={containerStyle}
                >
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.agentInfo.data.data)
    return {
        //获取代理商信息列表
        rowData: state.agentInfo.data.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取代理商列表
        getAgent: (params) => dispatch(actionCreator.getAgentInfo(params)),
        //获取用户信息
        getUserInfo: (params) => dispatch(actionUser.getUser(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AgentTableBox)