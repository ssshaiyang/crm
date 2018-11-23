/*
 * @Author: lcj
 * @Date:   2017-08-15 09:35:01
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-18 12:11:10
 */

'use strict';
import React from 'react'
import {
    Col
} from 'antd'
import {
    connect
} from 'react-redux'
import * as actionCreater from "../../../actions/admin/appAdmin/appAdmin.js"

const styles = {
    container: {
        textAlign: 'center',
        // border: '1px black solid',
        padding: '10px',
    },
    logoImg: {
        width: '100px',
        height: '100px',
        cursor: 'pointer'
    },
    tips: {
        position: 'absolute',
        top: 0,
        right: '0px',
        textAlign: 'right',
        background: 'yellow',
        fontSize: '14px',
        padding: '3px 5px'
    },
    name: {
        color: '#3b4254',
        fontSize: '16px',
        paddingTop: '8px',
        cursor: 'pointer'
    }
}

export class AppBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.openAppDetailModel();
        //判断是否时全部应用
        this.props.initAppDetailModel(this.props.application_id, this.props.appStatus);
    }

    render() {
        const status = this.props.status;
        console.log('sta',status)
        const display = (status !== undefined && (status.toString() === '0' || status.toString() === '1')) ? 'block' : 'none';
        return (
            <Col style={styles.container} lg={4} md={6} sm={6} xs={12}>
                <div style={{position:'relative',width:"100px",margin:'0 auto'}}>
                   {/* <p style={Object.assign({},styles.tips,{display:display})}>
                        {status?'已安装':'未安装'}
                    </p>*/}
                    <img src={this.props.application_logo} alt="appIcon" style={styles.logoImg} onClick={this.handleClick.bind(this)}/>
                </div>
                <p style={styles.name} onClick={this.handleClick.bind(this)}>
                    {this.props.application_name}
                </p>
            </Col>
        )
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        openAppDetailModel: () => dispatch(actionCreater.toShowBuyModal(true)),
        initAppDetailModel: (id, status) => dispatch(actionCreater.buyModalDetail(id, status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBlock)