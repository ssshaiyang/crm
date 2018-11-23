// 存放员工列表
import React from 'react'
import {connect}from 'react-redux'
import Grid from '../../../common/Grid.jsx'
// import * as actionCreator from '../../../../../actions/applications/crm/saleCheck/saleDetailList/saleCheckpage.js'
import {formatDate} from '../../../../utils/common.js'
import gridButton from './gridRender.jsx'
export class MemberListAll extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "employee_id": {
                headerName: "ID",
            },"employee_name": {
                headerName: "姓名",
            },"telephone": {
                headerName: "手机号码",
            },"department": {
                headerName: "所属部门",
            },"position": {
                headerName: "职位",
            },"role": {
                headerName: "角色",
            },"email": {
                headerName: "邮箱",
            },"sex": {
                headerName: "性别",
            },"enter_time": {
                headerName: "入职时间",
                valueGetter: (params) =>{
                    return formatDate(params.data.enter_time,'-','-')
                }
            },"operation": {
                headerName: "操作",
                cellRendererFramework:gridButton
            }
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        return(
            <div>
                <Grid
                    rowData={this.props.rowData}
                    columnDefs={this.makeColumnDefs.call(this)}
                    containerStyle={containerStyle}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rowData: state.memberList.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberListAll)