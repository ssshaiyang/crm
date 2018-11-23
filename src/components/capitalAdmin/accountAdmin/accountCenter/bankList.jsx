import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import bankListRender from "./bankListRender.jsx"
export class BankList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "key": {
                headerName: "序号",
            },"account_user": {
                headerName: "开户名",
            },"account_phone": {
                headerName: "联系方式",
            },"account_name": {
                headerName: "开户行",
            },"bank_account": {
                headerName: "银行类型",
            },"account_usage": {
                headerName: "账号",
            },"operation":{
                headerName:"操作",
                cellRendererFramework:bankListRender
            }
        }
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        let count=1
        for(let i=0;i<this.props.rowData.length;i++){
            this.props.rowData[i].key=count++
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
        rowData: state.bankList.data,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BankList)