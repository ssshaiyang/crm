import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import ManufacturerNameOperationModel from './manufacturerNameOperationModel.jsx'
import * as actionCreater from "../../../../actions/files/manufacturerName/manufacturerName.js";
import * as actionCreator from "../../../../actions/files/medicineName/medicineName.js";

export class ManuNameTableBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs(),
        }
    }

    componentWillMount() {
        let param = {
            page: -1,
            limit: 10
        }
        this.props.getManufacturerNameList(param);
        this.props.getUserInfo(1);
    }
    createColumnDefs() {
        return [
            {
                headerName: "生产厂家编号",
                field: 'manufacturer_id',
            },
            {
                headerName: "标准生产厂家名称",
                field: 'manufacturer_name',
            },
            {
                headerName: "异名生产厂家名称",
                field: 'different_manufacturer_name',
            },
            {
                headerName: "创建人",
                field: 'creator_name',
            },
            {
                headerName: "创建时间",
                field: 'create_time',
            },
            {
                headerName: "备注",
                field: 'different_manufacturer_remark',
            },
            {
                headerName: "操作",
                field: 'operation',
                cellRendererFramework: ManufacturerNameOperationModel,
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
                    rowData={this.props.searchManuList.data ? this.props.searchManuList.data:this.props.rowData.data}
                    containerStyle={containerStyle}
                >

                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rowData: state.manufacturerNameInfo.data,
        //搜索生产厂家信息列表
        searchManuList: state.manufacturerNameInfo.searchManuList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取生产厂家异名列表
        getManufacturerNameList: (param) => dispatch(actionCreater.getManufacturerNameListInfo(param)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionCreator.getUser(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManuNameTableBox)