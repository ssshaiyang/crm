import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker, Form, Input, Select, } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;

export class ProCostTop extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    //select框选择值
    handleChangeApprove(approveValue) {
        //console.log(`selected ${value}`);
    }
    handleChangePro(proValue) {
        //console.log(`selected ${value}`);
    }

    //当表单点击确认按钮时获取表单值
    handleSubmitProCost() {
        e.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
        });
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 15 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 12 },
            },
        };
        return (
            <Form onSubmit={this.handleSubmitProCost.bind(this)}>
                <Row className='botLine'>
                    <Col span={10}>
                        <Row>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="审批状态"
                                >
                                    {getFieldDecorator('medichine_name1', {

                                    })(
                                        <Select
                                            placeholder='全部状态'
                                            onChange={this.handleChangeApprove.bind(this)}
                                        >
                                            <Option value="1">全部状态</Option>
                                            <Option value="2">待送审</Option>
                                            <Option value="3">审批中</Option>
                                            <Option value="4">已通过</Option>
                                            <Option value="5">已拒绝</Option>
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="协议状态"
                                >
                                    {getFieldDecorator('medichine_name2', {

                                    })(
                                        <Select
                                            placeholder='全部状态'
                                            onChange={this.handleChangePro.bind(this)}

                                        >
                                            <Option value="6">全部状态</Option>
                                            <Option value="7">已生效</Option>
                                            <Option value="8">未生效</Option>
                                        </Select>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={7}>
                        <Search
                            placeholder="输入品种/代理商等进行搜索"
                            onSearch={this.getSearchValue.bind(this)}
                        />
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </Form>
        );
    }
}

function mapStateToProps(state) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ProCostTop))