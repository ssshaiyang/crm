/*
 * @Author: lcj
 * @Date:   2017-08-23 20:12:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:32:29
 * @Descriptions: 客户管理-客户列表-操作render
 */

import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    DatePicker,
    Radio,
    message,
    Modal
} from 'antd'
import {
    connect
} from 'react-redux'
import ERROR from '../../../utils/error-message.json'
import * as actionCreator from "../../../actions/admin/companyInf/companyInfForm.js"
const Option=Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import {getCompaniesEdit} from "../../../utils/interface.js"
import CompanyLogo from "./companyInfLogo.jsx"
let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
import moment from 'moment'

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        },
    },
};
const rowItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 4
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        },
    },
}

export class Render extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
        }
    }

    componentWillMount(){
        console.log(this.props.data);
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = this.props.data;
        this.props.form.validateFields((err, values) => {
            console.log(err)
            if (!err) {
                delete data.company_logo;
                delete data.undefined
                this.editModal.call(this, data) ;
            }
        });

    }

    editModal(data) {
        function cb(res) {
            console.log(res);
            if (res.error_code === GLOBALSUCCESS) {
                message.success("保存信息成功!")
            }
        }
        console.log('data',data)
        getCompaniesEdit(data, cb.bind(this))

    }
    handleModal(){
        this.props.openModal(true);
    }
    render(){
        const {
            getFieldDecorator
        } = this.props.form;
        return(

                <div >
                    <div >
                        <CompanyLogo/>
                        <FormItem
                            getFieldDecorator={getFieldDecorator}
                            col={24}
                            row
                            label="企业Logo"
                           >
                            <div style={{display: 'flex'}}>
                                <img src={this.props.urlImg} alt="logo" style={{width:'80px',height:'80px'}}/>
                                <p style={{ marginLeft: '10px',color: '#02d3b3', cursor: 'pointer'}} onClick={this.handleModal.bind(this)}>
                                    上传头像
                                </p>
                            </div>
                        </FormItem>
                        <div style={{overflow:'hidden',padding:'0  10px 20px 10px',border:'none'}}>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="company_name"
                                    row
                                    label="公司名称"
                                    rules={
                                        [{ required: true, message:"请输入公司名称" }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="company_phone"
                                    row
                                    label="联系电话"
                                    rules={
                                        [{ required: true, message:"请输入联系电话" }]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="company_fax"
                                    row
                                    label="传真"
                                    rules={
                                        [{ required: true, message:"请输入传真"}]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="company_address"
                                    row
                                    label="地址"
                                    rules={
                                        [{ required: true, message:"请输入地址"}]
                                    }>
                                    <Input/>
                                </FormItem>
                                <FormItem
                                    getFieldDecorator={getFieldDecorator}
                                    col={24}
                                    itemName="company_zip_code"
                                    row
                                    label="邮编"
                                    rules={
                                        [{ required: true, message:"请输入邮编"}]
                                    }>
                                    <Input/>
                                </FormItem>
                               {/*{ <FormItem*/}
                                    {/*getFieldDecorator={getFieldDecorator}*/}
                                    {/*col={0}*/}
                                    {/*itemName="company_website"*/}
                                    {/*row*/}
                                    {/*label="官网"*/}
                                    {/*rules={*/}
                                        {/*[{ required: true, message:"请输入官网" }]*/}
                                    {/*}>*/}
                                    {/*<Input/>*/}
                                {/*</FormItem>}*/}
                                <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <Button className="mainButton" htmlType="submit" style={{marginLeft:'30px'}} >保存</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>

        )
    }
}
class FormItem extends React.Component {
    render() {
        const Layout = this.props.row ? rowItemLayout : formItemLayout;
        return (
            <Col span={this.props.col}>
                <Form.Item
                    {...Layout}
                    label={this.props.label}>
                    {this.props.getFieldDecorator(this.props.itemName, {
                        rules: this.props.rules,
                    })(
                        this.props.children
                    )}
                </Form.Item>
            </Col>
        )
    }
}

FormItem.defaultProps = {
    col: 24,
    itemName: 'itemName',
    rules: [],
    label: 'label'
}

const rightBtnModalForm =Form.create({
    onFieldsChange,
    mapPropsToFields
})(Render)

function mapPropsToFields(props) {
//映射到表单
    let fields={};
    let data=props.data;
    for (let key in props.data){
        if(key == "enter_time"|| key=="update_time") {
            if(props.data[key]) {
                fields[key]={
                    value:moment(new Date(parseInt(props.data[key])*1000).toLocaleDateString())
                }
            }else {
                fields[key]={
                    value:moment(new Date())
                }
            }
        }else {
            fields[key]={
                value:props.data[key]&&props.data[key].toString()
            }
        }
    }
    return fields
}

function onFieldsChange(props,changedFields){
//传到store
    props.completeInf(changedFields)
}

function mapStateToProps(state) {
    return {
       data:state.companyInf.data,
        urlImg:state.companyInf.urlImg
    }
}
function mapDispatchToProps(dispatch) {
    return {
        completeInf :(val)=>dispatch(actionCreator.completeMemberInf(val)),
        clearForm:(val)=>dispatch(actionCreator.ClearModal()),
        openModal:(val)=>dispatch(actionCreator.getUrlImgModal(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rightBtnModalForm)