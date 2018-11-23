import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import MedincineNameOperationModel from './medincineNameOperationModel.jsx'
import * as actionCreater from "../../../../actions/files/medicineName/medicineName.js";

export class MedicineNameTableBox extends React.Component {
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
        this.props.getDrugNameList(data);
        console.log(this.props.drugNameList)
        console.log(this.props.searchDrugInfo.data)
    }
    componentDidMount(){
        console.log(this.props.drugNameList)
        console.log(this.props.searchDrugInfo.data)
    }
    createColumnDefs() {
        return [
            {
                headerName: "药品编号",
                field: 'drug_id',
               
            },
            {
                headerName: "标准药品名称",
                field: 'drug_name',
               
            },
            {
                headerName: "标准规格",
                field: 'specification',
                
            },
            {
                headerName: "异名药品名称",
                field: 'different_drug_name',
               
            },
            {
                headerName: "异名规格",
                field: 'different_specification',
              
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
                field: 'different_drug_remark',
                
            },
            {
                headerName: "操作",
                field: 'medicine_name_operation',
               
                cellRendererFramework: MedincineNameOperationModel,
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
                    rowData={this.props.drugNameList.data}
                    containerStyle={containerStyle}
                >

                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.drugNameListInfo.data)
    return {
        //获取药品异名列表
        drugNameList: state.drugNameListInfo.data,
        //搜索药品信息
        searchDrugInfo: state.drugNameListInfo.searchDrugInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取药品异名列表
        getDrugNameList: (params) => dispatch(actionCreater.getDrugNameListInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MedicineNameTableBox)