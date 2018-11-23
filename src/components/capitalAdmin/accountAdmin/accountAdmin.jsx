import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import AccountSearch from "./accountTop/accountSearch"
import BankList from "./accountCenter/bankList.jsx"
import BankListPage from "./accountCenter/bankListPage.jsx"

import * as actionCreater from "../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"
import EditModal from "./modal/editModal.jsx"
import RecordModal from "./modal/recordModal.jsx"
export class AccountAdmin extends React.Component {
    componentWillMount(){
           this.props.getBankList({
               page:1,
               limit:5
           })
    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Card title="银行账户列表">
                    <AccountSearch refresh={this.props.getBankList}/>
                    <BankList/>
                    <div style={{textAlign:"center"}}>
                        <BankListPage refresh={this.props.getBankList}/>
                    </div>
                    <EditModal refresh={this.props.getBankList}/>
                    <RecordModal refresh={this.props.getBankList}/>
                </Card>
                <EditModal/>
                <RecordModal/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
       getBankList:(params)=>dispatch(actionCreater.bankAllList(params))
    }
}
export default connect(null,mapDispatchToProps)(AccountAdmin)