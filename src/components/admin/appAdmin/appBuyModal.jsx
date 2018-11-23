/*
 * @Author: lcj
 * @Date:   2017-08-15 11:02:43
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:22:44
 */

'use strict';
import React from 'react'
import {
    Modal
} from 'antd'
import {
    connect
} from 'react-redux'
import * as actionCreater from "../../../actions/admin/appAdmin/appAdmin.js"
import DetailModelFontBlock from '../../apps/DetailModelFontBlock.jsx'
/*import InstallButton from './appDetailModel/InstallButton.jsx'
import UninstallButton from './appDetailModel/UninstallButton.jsx'*/

const width = window.screen.availWidth > 1000 ? 1000 : window.screen.availWidth - 100;
let styles = {
    container: {
        padding: '20px 20px 40px'
    },
    logo: {
        width: '70px',
        height: '70px'
    },
    titleDiv: {
        display: 'inline-block',
        marginLeft: '20px'
    },
    img: {
        width: width / 3 - 50,
        height: width / 3 - 50,
    }
}

export class AppDetailModel extends React.Component {
    constructor(props) {
        super(props);
    }

    onCancel() {
        this.props.closeModel();
        // this.props.clearModel();
    }

    render() {
        const data = this.props.data;
        console.log("ssssssssdata",data)
        return (
            <Modal
                visible={this.props.visible}
                onCancel={this.onCancel.bind(this)}
                width={width}
                footer={null}>
                <div style={styles.container}>
                    <div style={{display:'flex',alignItems:'center',marginBottom:'20px',position:'relative'}}>
                        <img src={data.application_logo} alt="logo" style={styles.logo}/>
                        <div style={styles.titleDiv}>
                            <h1>{data.application_name}</h1>
                            <h3 style={{color:'#5c6270'}}>{data.application_title}</h3>
                        </div>
                       {/* <InstallButton
                            status={data.status}
                            closeModel={this.onCancel.bind(this)}
                            refreshApps={this.props.refreshApps}/>*/}
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <img src={data.application_img1} alt="img1" style={styles.img}/>
                        <img src={data.application_img2} alt="img2" style={styles.img}/>
                        <img src={data.application_img3} alt="img3" style={styles.img}/>
                    </div>
                    <DetailModelFontBlock title='应用描述' content={data.application_description} bottom/>
                    <DetailModelFontBlock title='安装说明' content={data.application_install_statement} bottom/>
                    <DetailModelFontBlock title='购买说明' content={data.application_statement}/>
                   {/* <UninstallButton
                        name={data.application_name}
                        status={data.status}
                        closeModel={this.onCancel.bind(this)}
                        refreshApps={this.props.refreshApps}/>*/}
                </div>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    console.log("buymodal",state.appAdminData.buyModal,state.appAdminData.buyModalData)
    return {
        visible: state.appAdminData.buyModal,
        data: state.appAdminData.buyModalData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModel: () => dispatch(actionCreater.toShowBuyModal(false)),
        // clearModel: () => dispatch(actionCreater.clearAppDetailModelActionCreater())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDetailModel)