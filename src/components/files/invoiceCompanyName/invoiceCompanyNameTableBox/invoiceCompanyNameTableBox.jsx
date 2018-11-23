import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import InvoiceCompanyNameOperation from './invoiceCompanyNameOperation.jsx'
import * as actionCreater from "../../../../actions/files/invoiceCompanyName/invoiceCompanyName.js"

export class InvoiceCompanyNameTableBox extends React.Component {
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
        this.props.getBillingNameList(params);
    }
    createColumnDefs() {
        return [
            {
                headerName: "标准开票公司名称",
                field: 'billing_id',
                width: 150,
            },
            {
                headerName: "标准商业公司名称",
                field: 'billing_name',
                width: 150,
            },
            {
                headerName: "异名商业公司名称",
                field: 'different_billing_name',
                width: 150,
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
                field: 'different_billing_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 108,
                cellRendererFramework: InvoiceCompanyNameOperation,
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
                    rowData={this.props.rowData.data}
                    containerStyle={containerStyle}
                >

                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        //获取异名商业公司列表
        rowData: state.diffBillingInfo.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取异名商业公司列表
        getBillingNameList: (params) => dispatch(actionCreater.getBillingNameListInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceCompanyNameTableBox)