/*
import React from 'react'
import {connect} from 'react-redux'
import {Card,Row,Col,Upload,Icon} from 'antd'

export class CompanyInf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:''
        };
    }
    componentWillMount(){

    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange(info){
        console.log("1235",info)
        if (info.file.status === 'done') {
              console.log(info.file.response)
            // this.props.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }
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
    }
    render(){
        const imageUrl = this.state.imageUrl;
        return (
            <div style={{padding:"35px 0"}}>
                <Card
                 title="公司基本信息"
                >
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>企业logo</Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                            <img src={imageUrl} alt="" className="avatar" />
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                <Upload
                                beforeUpload={this.beforeUpload.bind(this)}
                                onChange={this.handleChange.bind(this)}
                                action="/companies/logo"
                                  >
                                    上传企业logo
                            </Upload>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(null,mapDispatchToProps)(CompanyInf)*/
