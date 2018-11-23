import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'

import Grid from '../../../common/Grid.jsx'
import BankAccountModel from './bankAccount.jsx'
import AgentOperationModel from './agentOperation.jsx'
import ContactModel from './contactFormation.jsx'
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
                field: 'agent_area',
                width: 100,

            },
            {
                headerName: "地址",
                field: 'agent_address',
                width: 100,

            },
            {
                headerName: "招商人员",
                field: 'employee_name',
                width: 100,

            },
            
            // {
            //     headerName: "付款方式",
            //     field: 'payment_type',
            //     width: 100,

            // },
            {
                headerName: "联系人信息",
                field: 'agent_contact',
                width: 100,
                cellRendererFramework: ContactModel,
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