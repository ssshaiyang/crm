import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Menu, Dropdown, Checkbox, Input, Row, Col, Modal, Form, Table, Select, Tree } from 'antd'
import * as actionArea from "../../../../actions/files/corporation/corporation.js"
import * as actionCreater from "../../../../actions/files/hospital/hospital.js"
import * as actionCreator from "../../../../actions/files/hospitalName/hospitalName.js"

const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
const TreeNode = Tree.TreeNode;

function onChange(e) {
    //console.log(`checked = ${e.target.checked}`);
}

export class HospitalNameOperation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            delAgentVisible: false,
            addMechInfoVisible: false,
            showMedicineNameVisible: false,
            filtered: false
        }
    }

    componentWillMount() {
        console.log(this.props.data)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editCode == 1000 && this.props.editCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getDiffHospital(params)
            console.log("自动刷新")
        }
         if (nextProps.delCode == 1000 && this.props.delCode !== 1000) {
            let params = {
                page: -1,
                limit: 10
            }
            this.props.getDiffHospital(params)
            console.log("自动刷新")
        }
    }

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    /**
     * 编辑异名医院信息按钮
     */
    addMechInfo() {
        this.setState({
            hospital_name: this.props.data.hospital_name,
            different_hospital_name: this.props.data.different_hospital_name,
            creator_name: this.props.data.creator_name,
            create_time: this.props.data.create_time,
            different_hospital_remark: this.props.data.different_hospital_remark,
            addMechInfoVisible: true
        });
    }
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

    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    //获取表格的行元素
    rowClick(record, index) {
        this.setState({
            hospital_name: record.hospital_name,
            hospital_id: record.hospital_id ,
            rowclicked: index
        })
    }

    /**
     * 删除医院异名方法组
     */

    showDel() {
        this.setState({
            delAgentVisible: true
        })
    }

    handleOkDelAgent() {
        //删除医院异名信息
        this.props.deleteDiffHispital(this.props.data.different_hospital_id);
        this.setState({
            delAgentVisible: false
        })
        let params = {
            page: -1,
            limit: 10
        }
        this.props.getDiffHospital(params)
    }

    handleCancelDelAgent() {
        this.setState({
            delAgentVisible: false
        })
    }

    //点击表单确认按钮
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                let params = {
                    different_hospital_id: this.props.data.different_hospital_id,
                    value: {
                        hospital_id: this.state.hospital_id ? this.state.hospital_id : this.props.data.hospital_id,
                        hospital_name: this.state.hospital_name ? this.state.hospital_name : this.props.data.hospital_name,
                        different_hospital_name: value.different_hospital_name ? value.different_hospital_name : this.props.data.different_hospital_name,
                        different_hospital_remark: value.different_hospital_remark ? value.different_hospital_remark : this.props.data.different_hospital_remark
                    }
                }
                this.props.editDiffHispitalName(params);
            }
            
            let param = {
                page: -1,
                limit: 10
            }
            this.props.getDiffHospital(param)
        });
    }


    /**
     * 控制弹出医院信息按钮
     */
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

    //获取树型控件显示信息
    onSelect(selectedKeys, info) {
        //console.log('selected', selectedKeys, info);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
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
                <span onClick={this.addMechInfo.bind(this)} style={{ cursor: 'pointer', marginRight: 10, marginLeft: 10 }}><Icon type="edit" style={{ fontSize: '18px' }} /></span>
                <span onClick={this.showDel.bind(this)} style={{ cursor: 'pointer' }} > <Icon type="delete" style={{ fontSize: '18px' }} /></span>
                <Modal
                    title="编辑医院异名信息"
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
                                    label="标准生产厂家名"
                                >
                                    {getFieldDecorator('hospital_name', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }}
                                                readOnly
                                                value={this.state.hospital_name}
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
                                    label="异名生产厂家名"
                                >
                                    {getFieldDecorator('different_hospital_name', {

                                    })(
                                        <div>
                                            <Input style={{ width: 200 }} defaultValue={this.state.different_hospital_name} />
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
                                        {getFieldDecorator('creator_name', {

                                        })(
                                            <div>
                                                <p>{this.state.creator_name}</p>
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
                                                <p>{this.state.create_time}</p>
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
                                            <input type='textarea' className='my_textarea_style' defaultValue={this.state.different_hospital_remark} />
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
                        {/*<Col span={11}>
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
                        <Col span={1}></Col>*/}
                        <Col span={24}>
                            <Search
                                placeholder="输入客户ID/姓名/联系方式"
                                onSearch={this.getMedicineNameSearchValue.bind(this)}
                                style={{ marginBottom: 10 }}
                            />
                            <Table rowKey='key' columns={columns} dataSource={this.props.rowData ? this.props.rowData.data : []} 
                            onRowClick={this.rowClick.bind(this)}  rowKey
                            rowClassName={(record, index) => index   === this.state.rowclicked ? "antTableRowClick" : ''}/>
                        </Col>
                    </Row>
                </Modal>

                <Modal
                    title="删除信息"
                    visible={this.state.delAgentVisible}
                    onOk={this.handleOkDelAgent.bind(this)}
                    onCancel={this.handleCancelDelAgent.bind(this)}
                >
                    <span>确定要删除此医院的信息吗?</span>
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
        editCode:state.drugNameListInfo.editDiffHispitalCode,
        delCode:state.drugNameListInfo.delDiffHispitalCode
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取所属地区
        getArea: () => dispatch(actionArea.getAreaInfo()),
         //获取医院异名
        getDiffHospital: (params) => dispatch(actionCreator.getDiffHospitalInfo(params)),
        //获取医院列表
        getHospital: (params) => dispatch(actionCreater.getHospitalInfo(params)),
        //编辑医院异名
        editDiffHispitalName: (params) => dispatch(actionCreator.editDiffHispitalNameInfo(params)),
        //删除医院异名信息
        deleteDiffHispital: (params) => dispatch(actionCreator.deleteDiffHispitalInfo(params)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(HospitalNameOperation))