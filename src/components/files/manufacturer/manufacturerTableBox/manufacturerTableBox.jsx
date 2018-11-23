import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import ContactInformationModel from './contactInformationModel.jsx'
import OrporateBankAccountModel from './orporateBankAccountModel.jsx'
import ManufacturerOperationModel from './manufacturerOperationModel.jsx'
import * as actionCreater from "../../../../actions/files/manufacturer/manufacturer.js";

export class ManufacturerTableBox extends React.Component {
    constructor() {
        super();
        this.state = {
            columnDefs: this.createColumnDefs(),
        }
    }

    componentWillMount() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getManufacturerInfo(param);
    }
    createColumnDefs() {
        return [
            {
                headerName: "生产厂家编号",
                field: 'manufacturer_id',
                width: 150,
            },
            {
                headerName: "生产厂家名称",
                field: 'manufacturer_name',
                width: 150,
            },
            {
                headerName: "所属地区",
                field: 'manufacturer_name',
                width: 120,
            },
            {
                headerName: "联系人信息",
                field: 'manufacturer_contact',
                width: 120,
                cellRendererFramework: ContactInformationModel,
            },
            {
                headerName: "公司银行账户",
                field: 'manufacturer_account',
                width: 120,
                cellRendererFramework: OrporateBankAccountModel,
            },
            {
                headerName: "生产厂家地址",
                field: 'manufacturer_address',
                width: 150,
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
                width: 140,
            },
            {
                headerName: "委托书",
                field: 'proxy',
                width: 100,
            },
            {
                headerName: "委托书有效期",
                field: 'proxy_expire_time',
                width: 140,
            },
            {
                headerName: "创建人",
                field: 'creator_name',
                width: 100,
            },
            {
                headerName: "创建时间",
                field: 'create_time',
                width: 100,
            },
            {
                headerName: "备注",
                field: 'manufacturer_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 100,
                cellRendererFramework: ManufacturerOperationModel,
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
    //console.log('sssss',state.manufacturerInfo.data)
    return {
        rowData: state.manufacturerInfo.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getManufacturerInfo: (param) => dispatch(actionCreater.getManufacturerListInfo(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerTableBox)