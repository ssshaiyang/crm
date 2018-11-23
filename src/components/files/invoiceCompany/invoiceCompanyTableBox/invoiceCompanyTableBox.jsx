import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import BillingContactInformationModel from './billingContactInformationModel.jsx'
import BillingBankAccountModel from './billingBankAccountModel.jsx'
import BillingOperationModel from './billingOperationModel.jsx'
import * as actionCreater from "../../../../actions/files/invoiceCompany/invoiceCompany.js"

export class ManufacturerTableBox extends React.Component {
    constructor() {
        super();
        this.state = {
            columnDefs: this.createColumnDefs(),
        }
    }

    componentWillMount() {
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getBillingInfo(params);
    }
    createColumnDefs() {
        return [
            {
                headerName: "开票公司编号",
                field: 'billing_id',
                width: 150,
            },
            {
                headerName: "开票公司名称",
                field: 'billing_name',
                width: 150,
            },
            {
                headerName: "所属地区",
                field: 'billing_area',
                width: 120,
            },
            {
                headerName: "联系人信息",
                field: 'billing_contact',
                width: 120,
                cellRendererFramework: BillingContactInformationModel,
            },
            {
                headerName: "公司银行账户",
                field: 'billing_account',
                width: 120,
                cellRendererFramework: BillingBankAccountModel,
            },
            {
                headerName: "公司地址",
                field: 'billing_address',
                width: 120,
            },
            {
                headerName: "营业执照代码",
                field: 'business_license_code',
                width: 120,
            },
            {
                headerName: "营业执照过期日期",
                field: 'business_license_expire_time',
                width: 150,
            },
            {
                headerName: "GMP代码",
                field: 'gmp_code',
                width: 120,
            },
            {
                headerName: "GMP过期日期",
                field: 'gmp_expire_time',
                width: 120,
            },
            {
                headerName: "生产许可证",
                field: 'production_license',
                width: 120,
            },
            {
                headerName: "生产许可证有效期",
                field: 'production_expire_time',
                width: 150,
            },
            {
                headerName: "委托书",
                field: 'proxy',
                width: 120,
            },
            {
                headerName: "委托书有效期",
                field: 'proxy_expire_time',
                width: 120,
            },
            {
                headerName: "创建人",
                field: 'creator_name',
                width: 100,
            },
            {
                headerName: "创建时间",
                field: 'create_time',
                width: 120,
            },
            {
                headerName: "备注",
                field: 'billing_remark',
                width: 150,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 120,
                cellRendererFramework: BillingOperationModel,
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
                    rowData={this.props.rowData ? this.props.rowData.data : []}
                    containerStyle={containerStyle}
                >

                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.billingInfo.data)
    return {
        rowData: state.billingInfo.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取开票公司列表
        getBillingInfo: (params) => dispatch(actionCreater.getBillingInfoList(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerTableBox)