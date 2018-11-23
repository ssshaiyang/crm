/*
 * @Author: lcj
 * @Date:   2017-08-14 11:56:57
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:36:16
 */

'use strict';

import React from 'react'
import {
    connect
} from 'react-redux'
import {
    Modal,
    Form,
    Button,
    Upload,
    Icon,
    message
} from 'antd'
const FormItem = Form.Item
import * as actionCreator from "../../../actions/admin/companyInf/companyInfForm.js"
import {uploadCompanyLogo} from "../../../utils/interface.js"
/*import {
    uploadAvatar
} from '../../../utils/interface.js'*/

let styles = {
    modal: {
        padding: '0 20px'
    },
    title: {
        color: '#292929',
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: '30px'
    },
    button: {
        borderRadius: '30px',
        width: '90px'
    },
    uploadButton: {
        color: '#41dec1'
    },
    tips: {
        color: '#c8c8c8',
        fontSize: '14px',
        marginBottom: '12px'
    },
    upload: {
        width: '400px',
        height: '400px'
    }
}

export class CompanyLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            uploadFile: null,
            loading: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            loading: true
        })

        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                this.props.changeUrlImg(res.data.logo)
                message.success('修改头像成功')
                this.cancel()
            }
        }
        uploadCompanyLogo(this.state.uploadFile, cb.bind(this))
    }

    cancel() {
        this.props.closeModal(false);
        this.setState({
            fileList: [],
            loading: false
        })
    }

    handlePreview(file) {}

    beforeUpload(file) {
        let type = file.type;
        if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/jpg' && type !== 'image/gif') {
            message.error('所上传的格式不正确!');
            return false;
        }
        if (file.size / 1024 / 1024 > 2) {
            message.error('图片大小不可超过2M!');
            return false;
        }
        this.setState({
            uploadFile: file
        })
    }

    handleChange(file) {
        //去除红框
console.log("file",file)
        if (file.fileList.length > 1)
            file.fileList[0].status = 'done'
        this.setState({
            fileList: file.fileList
        })
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                onCancel={this.cancel.bind(this)}
                maskClosable={false}
                footer={null}>
                <div style={styles.modal}>
                    <p style={styles.title}>修改企业Logo</p>
                    <p style={styles.tips}>支持图片格式：JPG/GIF/PNG/JPEG文件小于2M</p>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem>
                            <Upload.Dragger
                                name="company_logo"
                                // action="/companies/logo"
                                headers={{Authorization:localStorage.getItem('token') || sessionStorage.getItem('token')}}
                                listType="picture-card"
                                beforeUpload={this.beforeUpload.bind(this)}
                                showUploadList={{showPreviewIcon:false}}
                                fileList={this.state.fileList}
                                onPreview={this.handlePreview.bind(this)}
                                onChange={this.handleChange.bind(this)}>
                                {
                                    this.state.fileList.length>=1?false:
                                        <div>
                                            <p className="ant-upload-drag-icon">
                                                <Icon type="plus" />
                                            </p>
                                            <p className="ant-upload-text">单击或拖拽到此处上传图片</p>
                                        </div>
                                }
                            </Upload.Dragger>
                        </FormItem>

                        <FormItem style={{textAlign:'center'}}>
                            <Button loading={this.state.loading} htmlType="submit" className="mainButton" style={Object.assign({},styles.button,{marginRight:'40px'})}>
                                {this.state.loading?'上传中':'确认'}
                            </Button>
                            <Button className="cancelButton" style={styles.button} onClick={this.cancel.bind(this)}>
                                取消
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </Modal>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        /* closeChangeAvatarModel: () => dispatch(actionCreater.switchChangeAvatarModelActionCreater(false)),
         changeAvatar: (head_picture) => dispatch(actionCreater.changeAvatarActionCreater(head_picture))*/
        changeUrlImg:(val)=>dispatch(actionCreator.getUrlImg(val)),
        closeModal:(val)=>dispatch(actionCreator.getUrlImgModal(val)),
    }
}

function mapStateToProps(state) {
    return {
        visible:state.companyInf.visible,
        urlImg:state.companyInf.urlImg
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLogo)