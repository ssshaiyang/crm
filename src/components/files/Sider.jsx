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
        const defaultSelected = window.location.pathname.split('/')[2] || 'medicine';
        return (
            <Layout.Sider style={styles.sider} breakpoint='sm' collapsible collapsed={this.state.collapsed} onCollapse={(collapsed)=>this.setState({collapsed})}>
                <SiderCompanyName/>
                <Menu
                    defaultSelectedKeys={[defaultSelected]}
                    theme="dark"
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}>
                    {content.map(data=>Item(data,this.props.companyLogined))}
                </Menu>
            </Layout.Sider>
        )
    }
}

function Item(data, companyLogined) {
    const display = data.needCompanyLogined && !companyLogined ? 'none' : 'block';
    return (
        <Menu.Item key={data.key} style={{display:display}}>
            <Link to={data.url}>
                <Icon type={data.icon} className="siderIcon"/>
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