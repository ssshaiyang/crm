import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import HospitalNameOperation from './hospitalNameOperation.jsx'
import * as actionCreater from "../../../../actions/files/hospitalName/hospitalName.js"
import * as actionUser from "../../../../actions/files/medicineName/medicineName.js"

export class HospitalNameTableBox extends React.Component {
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
        this.props.getDiffHospital(params);
        this.props.getUserInfo(1);
    }

    createColumnDefs() {
        return [
            {
                headerName: "医院编号",
                field: 'hospital_id',
                width: 150,
            },
            {
                headerName: "标准医院名称",
                field: 'hospital_name',
                width: 150,
            },
            {
                headerName: "异名医院名称",
                field: 'different_hospital_name',
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
                field: 'different_hospital_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                width: 108,
                cellRendererFramework: HospitalNameOperation,
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
        //医院异名列表信息
        rowData: state.diffHospitalName.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取医院异名
        getDiffHospital: (params) => dispatch(actionCreater.getDiffHospitalInfo(params)),
        //获取用户信息
        getUserInfo: (param) => dispatch(actionUser.getUser(param)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HospitalNameTableBox)