import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import BusinessComponyNameOperation from './businessComnopyNameOperation.jsx'
import * as actionCreater from "../../../../actions/files/corporationName/corporationName.js"

export class CorporationNameTableBox extends React.Component {
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
        this.props.getDeliverNameList(params);
    }
    createColumnDefs() {
        return [
            {
                headerName: "商业公司编号",
                field: 'deliver_id',
                width: 150,
            },
            {
                headerName: "标准商业公司名称",
                field: 'deliver_name',
                width: 150,
            },
            {
                headerName: "异名商业公司名称",
                field: 'different_deliver_name',
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
                field: 'different_deliver_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 108,
                cellRendererFramework: BusinessComponyNameOperation,
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
    //console.log('aaaaaaaa', state.corporationNameInfo.data)
    return {
        //获取异名商业公司列表
        rowData: state.corporationNameInfo.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取异名商业公司列表
        getDeliverNameList: (params) => dispatch(actionCreater.getDeliverNameListInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CorporationNameTableBox)