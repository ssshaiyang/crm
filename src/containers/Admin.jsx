'use strict';

import React from 'react'
// import {connect} from 'react-reducer'
import {
    Layout,
    Row,
    Col
} from 'antd'
import {
    Route
} from 'react-router-dom'
import {connect} from "react-redux"
import AdminLogin from '../components/admin/adminLogin.jsx'
import Sider from '../components/admin/Sider.jsx'
import AdminMember from '../components/admin/adminMember/control.jsx'
import AppAdmin from '../components/admin/appAdmin/appAdmin.jsx'
import CompanyInf from '../components/admin/companyInf/companyInf.jsx'
import FrameWork from '../components/admin/frameWork/frameWork.jsx'
import PositionInf from '../components/admin/positionInfo/positionInfo.jsx'
import PowerAdmin from '../components/admin/powerAdmin/powerAdmin.jsx'
import MemberAdmin from '../components/admin/powerAdmin/memberAdmin.jsx'
import ApplyAdmin from '../components/admin/powerAdmin/applyAdmin.jsx'
import ProcessAdmin from '../components/admin/processAdmin/processAdmin.jsx'
import * as actionCreator from '../actions/admin/adminLogin.js'
let styles = {
    body: {
        padding: '0 35px'
    }
}

export class Admin extends React.Component {
    componentWillMount(){
        if(sessionStorage.getItem('adminLogedPass')){
            this.props.toShow(false)
            this.props.unVisible(false)
        }
    }
    constructor(props) {
        super(props);
    }

    render() {
        const show=!this.props.show&&!this.props.displayBlock?"block":"none"
        return (
            <Layout style={{flex:1}}>
                <AdminLogin/>
                <div style={{display:show}}>
                    <div style={{display:'flex'}} className="bodyContainer">
                        <Sider/>
                        <Layout.Content>
                            <div style={styles.body}>
                                <Route path='/admin' exact component={AdminMember} />
                                <Route path='/admin/adminMember'exact  component={AdminMember} />
                                <Route path='/admin/appAdmin'  component={AppAdmin} />
                                <Route path='/admin/companyInf'  component={CompanyInf} />
                                <Route path='/admin/frameWork'  component={FrameWork} />
                                <Route path='/admin/positionInf'  component={PositionInf} />
                                <Route path='/admin/powerAdmin/power'  component={PowerAdmin} />
                                <Route path='/admin/powerAdmin/member'  component={MemberAdmin} />
                                <Route path='/admin/powerAdmin/apply'  component={ApplyAdmin} />
                                <Route path='/admin/processAdmin'  component={ProcessAdmin} />
                            </div>
                        </Layout.Content>
                    </div>
                </div>
            </Layout>
        )
    }
}
function mapStateToProps(state){
     return {
         visible: state.toAdminLogin.visible,
         show:state.toAdminLogin.show
     }
}
function mapDispatchToProps(dispatch) {
    return {
        unVisible:(val)=>dispatch(actionCreator.adminLoginActionCreater(val)),
        toShow:(val)=>dispatch(actionCreator.adminLoginShow(val)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)