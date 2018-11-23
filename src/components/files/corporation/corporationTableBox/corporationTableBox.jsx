import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import CorporateBankAccount from './corporateBankAccount.jsx'
import BussinessComponyOperation from './bussinessComponyOperation.jsx'
import ContactInformation from './contactInformation.jsx'
import * as actionCreater from "../../../../actions/files/corporation/corporation.js"

export class CorporationTableBox extends React.Component {
    constructor() {
        super();
        this.state = {
            columnDefs: this.createColumnDefs(),
        }
    }

    componentWillMount() {
        let data = {
            page: -1,
            limit: 10
        }
        this.props.getDeliverList(data);
    }

    createColumnDefs() {
        return [
            {
                headerName: "商业公司编号",
                field: 'deliver_id',
                width: 150,
            },
            {
                headerName: "商业公司名称",
                field: 'deliver_name',
                width: 150,
            },
            {
                headerName: "所属地区",
                field: 'deliver_area',
                width: 150,
            },
            {
                headerName: "是否抓取流向",
                field: 'if_grab',
                width: 120,
            },
            {
                headerName: "商业公司链接",
                field: 'deliver_url ',
                width: 150,
            },
            {
                headerName: "登录账号",
                field: 'deliver_account',
                width: 100,
            },
            {
                headerName: "登录密码",
                field: 'deliver_password',
                width: 100,
            },
            {
                headerName: "联系人信息",
                field: 'deliver_contact',
                width: 120,
                cellRendererFramework: ContactInformation,
            },
            {
                headerName: "公司银行账户",
                field: 'deliver_account',
                width: 150,
                cellRendererFramework: CorporateBankAccount,
            },
            {
                headerName: "公司地址",
                field: 'deliver_address',
                width: 100,
            },
            {
                headerName: "公司链接",
                field: 'deliver_url',
                width: 100,
            },
            {
                headerName: "是否停用",
                field: 'if_used',
                width: 100,
            },
            {
                headerName: "营业执照代码",
                field: 'business_license_code',
                width: 150,
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
                width: 100,
            },
            {
                headerName: "委托书过期时间",
                field: 'proxy_expire_time',
                width: 150,
            },
            {
                headerName: "协议区域",
                field: 'protocol_region',
                width: 100,
            },
            {
                headerName: "创建人姓名",
                field: 'creator_name',
                width: 120,
            },
            {
                headerName: "创建时间",
                field: 'create_time',
                width: 120,
            },
            {
                headerName: "备注",
                field: 'deliver_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 100,
                cellRendererFramework: BussinessComponyOperation,
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
    console.log(state.corporationInfo.data);
    //console.log('sssss',state.corporationInfo.data);
    return {
        //获取商业公司列表
        rowData: state.corporationInfo
    }
    console.log(state.corporationInfo.data)
}
function mapDispatchToProps(dispatch) {
    return {
        //获取商业公司列表
        getDeliverList: (params) => dispatch(actionCreater.getDeliverListInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CorporationTableBox)