import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import {formatDate} from '../../../../utils/common.js'

export class InFountList extends React.Component {
    componentWillMount(){
        // this.props.refreshLisT()
    }
    closeModal(){
        this.props.closeRecord()
    }
    makeColumnDefs() {
        return {
            "key": {
                headerName: "序号",
            },"create_time": {
                headerName: "回款日期",
                valueGetter: (params) =>{
                    return  formatDate(params.data.create_time,"月","日")
                }
            },"pay_account_user": {
                headerName: "付款开户名",
            },"pay_account_name": {
                headerName: "付款开户行",
            },"pay_bank_account": {
                headerName: "付款账号",
            },"receipt_account_user": {
                headerName: "回款开户名",
            },"receipt_account_name": {
                headerName: "回款开户行",
            },"receipt_bank_account": {
                headerName: "回款账号",
            },"price": {
                headerName: "回款金额",
            },"voucher": {
                headerName: "凭证",
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
                <div style={{textAlign:"center",margin:"10px 0"}}>
                    {/*<Button onClick={this.handleCancle.bind(this)} style={{marginRight:"40px"}}>取消</Button>*/}
                    <Button className="mainButton" onClick={this.closeModal.bind(this)}>关闭</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rowData:state.backFountList.backRecord
    }
}
function mapDispatchToProps(dispatch) {
    return {


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InFountList)