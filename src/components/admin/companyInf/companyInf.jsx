import React from 'react'
import {connect} from 'react-redux'
import {Card,Row,Col,Upload,Icon} from 'antd'
import * as actionCreater from "../../../actions/admin/companyInf/companyInfForm.js"
import FromList from "./companyInfForm.jsx"
export class CompanyInf extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
          this.props.getCopanyList()
    }

    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Card
                 title="公司基本信息"
                >
                   <FromList/>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        getCopanyList:()=>dispatch(actionCreater.companyInfoCompanyEdit())
    }
}
export default connect(null,mapDispatchToProps)(CompanyInf)