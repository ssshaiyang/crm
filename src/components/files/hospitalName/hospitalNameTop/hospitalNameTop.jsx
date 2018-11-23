import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Tree } from 'antd'
import * as actionArea from "../../../../actions/files/corporation/corporation.js"
import * as actionCreater from "../../../../actions/files/hospital/hospital.js"
import * as actionCreator from "../../../../actions/files/hospitalName/hospitalName.js"

const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="3">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Menu.Item>
    </Menu>
);

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

export class HospitalNameTop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            filtered: false
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    /**
     * 控制添加药品信息按钮
     */
    handleOkAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }
    handleCancelAddMechInfo() {
        this.setState({
            addMechInfoVisible: false,
        });
    }

    //点击搜索获取生产厂家输入信息
    getMedicineNameSearchValue(value) {
        //console.log('ssss', value)
    }

    //添加药品信息对话框
    addMechInfo() {
        this.props.getArea();
        this.setState({
            addMechInfoVisible: true
        });
    }

    //获取表格的行元素
    rowClick(record) {
        this.setState({
            hospital_name: record.hospital_name,
            hospital_id:record.hospital_id
        })
    }

    //弹出医院信息对话框
    showMedicineNameInfo() {
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getHospital(params);
        this.setState({
            showMedicineNameVisible: true
        })
    }
    handleOkMedicineInfo() {
        this.setState({
            showMedicineNameVisible: false,
        });
    }
    handleCancelMedicineInfo() {
        this.setState({
            showMedicineNameVisible: false,
        });
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                let params={
                    hospital_id:this.state.hospital_id,
                    hospital_name:this.state.hospital_name,
                    different_hospital_name:value.different_hospital_name,
                    different_hospital_remark:value.different_hospital_remark
                }
                this.props.addDiffHospital(params);
            }
        });
    }

    //获取树型控件显示信息
    onSelect(selectedKeys, info) {
        //console.log('selected', selectedKeys, info);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        const formItemLayout1 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            }
        }
        //标准医院名称列表
        const columns = [{
            title: '编号',
            dataIndex: 'hospital_id',
            key: 'hospital_id'
        }, {
            title: '名称',
            dataIndex: 'hospital_name',
            key: 'hospital_name',
        }];
        return (
            <div>
                <Row>
                    <Col span={3}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button className='mainButton'><Icon type="menu-unfold" /></Button>
                        </Dropdown>
                    </Col>
                    <Col span={9}></Col>
                    <Col span={8}>
                        <Search
                            placeholder="输入客户ID/姓名/联系方式"
                            onSearch={this.getSearchValue.bind(this)}
                        />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <Button className='mainButton' onClick={this.addMechInfo.bind(this)}><Icon type="plus-square-o" style={{ fontSize: 16 }} /></Button>
                    </Col>
                </Row>
                <Modal
                    title="添加医院异名信息"
                    width='720px'
                    visible={this.state.addMechInfoVisible}
                    footer={null}
                    closable={false}
                >
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row className='botLine'>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="标准医院名"
                                >
                                    {getFieldDecorator('hospital_name', {
                                        
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                placeholder={this.state.hospital_name}
                                                prefix={<span style={{ marginLeft: 170, cursor: 'pointer' }}
                                                    onClick={this.showMedicineNameInfo.bind(this)}><Icon type="edit" /></span>} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <FormItem
                                    {...formItemLayout}
                                    label="异名医院名"
                                >
                                    {getFieldDecorator('different_hospital_name', {
                                        
                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} />
                                        </div>
                                        )}
                                </FormItem>
                            </Col>
                        </Row>
                        <br />
                        <div>
                            <Row className='botLine'>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="创建人"
                                    >
                                        {getFieldDecorator('creater', {

                                        })(
                                            <div>
                                                <p>{this.props.userInfo.nickname}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={11}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="创建时间"
                                    >
                                        {getFieldDecorator('create_time', {

                                        })(
                                            <div>
                                                <p>{new Date().toLocaleDateString()}</p>
                                            </div>
                                            )}
                                    </FormItem>
                                </Col>
                                <FormItem
                                    {...formItemLayout1}
                                    label="备注"
                                >
                                    {getFieldDecorator('different_hospital_remark', {

                                    })(
                                        <div>
                                            <input type='textarea' className='my_textarea_style' />
                                        </div>
                                        )}
                                </FormItem>
                            </Row>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10, marginLeft: 550, marginRight: 10 }}
                            onClick={this.handleOkAddMechInfo.bind(this)}>
                            确定
                        </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleCancelAddMechInfo.bind(this)}>
                            退出
                        </Button>
                    </Form>
                </Modal>

                <Modal
                    title="医院列表"
                    width='700px'
                    visible={this.state.showMedicineNameVisible}
                    onOk={this.handleOkMedicineInfo.bind(this)}
                    onCancel={this.handleCancelMedicineInfo.bind(this)}
                >
                    <Row>
                        <Col span={11}>
                            <Search
                                placeholder="输入地区"
                                onSearch={this.getMedicineNameSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Tree
                                showLine
                                defaultExpandedKeys={['zhejiang']}
                                onSelect={this.onSelect.bind(this)}
                            >
                                <TreeNode title="浙江" key="zhejiang">
                                    <TreeNode title="杭州" key="hangzhou" />
                                    <TreeNode title="温州" key="wenzhou" />
                                    <TreeNode title="宁波" key="ningbo" />
                                </TreeNode>
                                <TreeNode title="上海" key="shanghai">
                                    <TreeNode title="上海摊" key="shanghaitan" />
                                </TreeNode>
                                <TreeNode title="湖北" key="0-0-2">
                                    <TreeNode title="武汉" key="wuhan" />
                                    <TreeNode title="黄石" key="huangshi" />
                                </TreeNode>
                            </Tree>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={12}>
                            <Search
                                placeholder="输入客户ID/姓名/联系方式"
                                onSearch={this.getMedicineNameSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Table rowKey='key' columns={columns} dataSource={this.props.rowData ? this.props.rowData.data : []} onRowClick={this.rowClick.bind(this)}/>
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let areaList = [];
    if (state.corporationInfo.areaInfo) {
        areaList.push(state.corporationInfo.areaInfo);
    }
    return {
        //获取区域列表
        areaInfo: areaList,
        //获取医院信息
        rowData: state.hospitalInfo.data,
        //获取用户信息
        userInfo: state.drugNameListInfo.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //获取所属地区
        getArea: () => dispatch(actionArea.getAreaInfo()),
        //获取医院列表
        getHospital: (params) => dispatch(actionCreater.getHospitalInfo(params)),
        //添加医院异名
        addDiffHospital:(params) => dispatch(actionCreator.addDiffHospitalInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HospitalNameTop))