import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import bankListRender from "./bankListRender.jsx"
export class BankListRecord extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "key": {
                headerName: "序号",
            },"status": {
                headerName: "支出/回款",
            },"price": {
                headerName: "金額",
            },"pay_account_user": {
                headerName: "开户名",
            },"pay_bank_account": {
                headerName: "账号",
            },"pay_account_name": {
                headerName: "开户行",
            },"type": {
                headerName: "费用类型",
            },"receipt_account_user": {
                headerName: "对方开户名",
            },"receipt_bank_account": {
                headerName: "账号",
            },"receipt_account_name": {
                headerName: "对方开户行",
            },
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
    console.log('zhizhi',state.bankList.record)
    return {
        rowData: state.bankList.record,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BankListRecord)