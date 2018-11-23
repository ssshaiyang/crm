/*
 * @Author: lcj
 * @Date:   2017-08-15 09:00:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-21 11:13:25
 */

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
        // const content = this.props.sideContent || sideContent;
        const defaultSelected = window.location.pathname.split('/')[2] || 'accountAdmin';
        const needCompanyLogined = true;
        const display = needCompanyLogined && !this.props.companyLogined ? 'none' : 'block';
        return (
            <Layout.Sider style={styles.sider} breakpoint='sm' collapsible collapsed={this.state.collapsed} onCollapse={(collapsed) => this.setState({ collapsed })}>
                <SiderCompanyName />
                <Menu
                    defaultSelectedKeys={[defaultSelected]}
                    theme="dark"
                    mode="inline"
                    defaultOpenKeys={['sub1']}
                    inlineCollapsed={this.state.collapsed}>
                    <SubMenu key="sub1" title={<span><Icon type="account" /><span>账号管理</span></span>}>
                        <Menu.Item key="accountAdmin" style={{ display: display }}>
                            <Link to="/capitalAdmin/accountAdmin">
                                <Icon type="" className="siderIcon" />
                                <span>银行账号</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="funds" /><span>款项管理</span></span>}>
                        <Menu.Item key="outFount" style={{ display: display }}>
                            <Link to="/capitalAdmin/outFount">
                                <Icon type="" className="siderIcon" />
                                <span>对外款项</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="inFount" style={{ display: display }}>
                            <Link to="/capitalAdmin/inFount">
                                <Icon type="" className="siderIcon" />
                                <span>对内款项</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="backFount" style={{ display: display }}>
                            <Link to="/capitalAdmin/backFount">
                                <Icon type="" className="siderIcon" />
                                <span>回款管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout.Sider>
        )
    }
}

function Item(data, companyLogined) {
    const display = data.needCompanyLogined && !companyLogined ? 'none' : 'block';
    return (
        <Menu.Item key={data.key} style={{ display: display }}>
            <Link to={data.url}>
                <Icon type={data.icon} className="siderIcon" />
                <span>{data.type}</span>
            </Link>
        </Menu.Item>
    )
}



function mapStateToProps(state) {
    return {
        sideContent: state.global.filesSiderContent,
        companyLogined: state.global.companyLogined,
    }
}

export default connect(mapStateToProps)(Sider);