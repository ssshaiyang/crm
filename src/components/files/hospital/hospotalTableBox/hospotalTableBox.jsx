import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import HospitalOperation from './hospitalOperation.jsx'
import * as actionCreater from "../../../../actions/files/hospital/hospital.js"

export class ManuNameTableBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs(),
        }
    }

    componentWillMount() {
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getHospital(params);
    }

    createColumnDefs() {
        return [
            {
                headerName: "医院编号",
                field: 'hospital_id',
                width: 150,
            },
            {
                headerName: "医院名称",
                field: 'hospital_name',
                width: 150,
            },
            {
                headerName: "医院类型",
                field: 'hospital_type',
                width: 150,
            },
            {
                headerName: "医院地址",
                field: 'hospital_address',
                width: 100,
            },
            {
                headerName: "所属地区",
                field: 'hospital_area',
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
                width: 100,
            },
            {
                headerName: "备注",
                field: 'hospital_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 108,
                cellRendererFramework: HospitalOperation,
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
    return {
        rowData: state.hospitalInfo.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取医院列表
        getHospital: (params) => dispatch(actionCreater.getHospitalInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManuNameTableBox)