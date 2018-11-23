/*
 * @Author: lcj
 * @Date:   2017-08-15 09:00:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-21 11:13:25
 */

'use strict';

import React from 'react';
import {
    Layout,
    Menu,
    Icon
} from 'antd';
import {
    Link
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
import SiderCompanyName from '../common/SiderCompanyName.jsx'
const SubMenu = Menu.SubMenu;

let styles = {
    sider: {
        color: 'white',
        fontSize: '14px',
        paddingBottom: '48px',
        height: '100%',
        minHeight: document.body.clientHeight - 64 + 'px',
    }
}

export class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    render() {
        const content = this.props.sideContent || sideContent;
        const display = content.map((data) => {
            data.needCompanyLogined && !companyLogined ? 'none' : 'block';
        })
        // const defaultSelected = window.location.pathname.split('/')[2] || 'accountAdmin';

        return (
            <Layout.Sider style={styles.sider} breakpoint='sm' collapsible collapsed={this.state.collapsed} onCollapse={(collapsed) => this.setState({ collapsed })}>
                <SiderCompanyName />
                <Menu
                    defaultSelectedKeys={['adminMember']}
                    theme="dark"
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}>
                    <Menu.Item key='adminMember' style={{ display: display }}>
                        <Link to='/admin/adminMember'>
                            <Icon type='employee-management' className="siderIcon" />
                            <span>员工管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='frameWork' style={{ display: display }}>
                        <Link to="/admin/frameWork">
                            <Icon type="organizational-framework" className="siderIcon" />
                            <span>组织架构</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="positionInf" style={{ display: display }}>
                        <Link to="/admin/positionInf">
                            <Icon type="job-information" className="siderIcon" />
                            <span>职位信息</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<Link to="/admin/powerAdmin">
                        <Icon type="privilege-management" className="siderIcon" />
                        <span>权限管理</span>
                    </Link>} >
                        <Menu.Item key="power">
                            <Link to="/admin/powerAdmin/power">
                                <Icon type="" className="siderIconSmall" />
                                <span>权限</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="member">
                            <Link to="/admin/powerAdmin/member">
                                <Icon type="" className="siderIconSmall" />
                                <span>人员</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="apply">
                            <Link to="/admin/powerAdmin/apply">
                                <Icon type="" className="siderIconSmall" />
                                <span>应用</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="appAdmin" style={{ display: display }}>
                        <Link to="/admin/appAdmin">
                            <Icon type="application-management" className="siderIcon" />
                            <span>应用管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="companyInf" style={{ display: display }}>
                        <Link to="/admin/companyInf">
                            <Icon type="company-information" className="siderIcon" />
                            <span>公司信息</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="processAdmin" style={{ display: display }}>
                        <Link to="/admin/processAdmin">
                            <Icon type='flow' className="siderIcon" />
                            <span>流程管理</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        )
    }
}

function mapStateToProps(state) {
    return {
        sideContent: state.global.adminSiderContent,
        companyLogined: state.global.companyLogined,
    }
}

export default connect(mapStateToProps)(Sider);