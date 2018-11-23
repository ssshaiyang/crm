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
        const defaultSelected = window.location.pathname.split('/')[2] || 'directionGrab';
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

                    <SubMenu key="sub1" title={<span><Icon type="flow-collection" /><span>流向收集</span></span>}>
                        <Menu.Item key="directionGrab" style={{ display: display }}>
                            <Link to="/invoicing/directionGrab">
                                <span>流向抓取</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="directionImport" style={{ display: display }}>
                            <Link to="/invoicing/directionImport">
                                <span>流向导入</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="directionCheck" style={{ display: display }}>
                            <Link to="/invoicing/directionCheck">
                                <span>流向数据查询</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="directly" /><span>直营</span></span>}>
                        <Menu.Item key="businessAdmin" style={{ display: display }}>
                            <Link to="/invoicing/businessAdmin">
                                <span>业务管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="costControl" style={{ display: display }}>
                            <Link to="/invoicing/costControl">
                                <span>费用管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="" /><span>招商</span></span>}>
                        <Menu.Item key="proAndCost" style={{ display: display }}>
                            <Link to="/invoicing/proAndCost">
                                <span>协议管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="agency" style={{ display: display }}>
                            <Link to="/invoicing/agency">
                                <span>费用管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="inventory" style={{ display: display }}>
                        <Link to="/invoicing/inventory">
                            <Icon type="inventory" className="siderIcon" />
                            <span>库存管理</span>
                        </Link>
                    </Menu.Item>
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