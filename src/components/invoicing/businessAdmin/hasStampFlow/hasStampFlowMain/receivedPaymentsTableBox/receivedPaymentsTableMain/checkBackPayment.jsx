import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Icon, Table, DatePicker } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Search = Input.Search;
const { Column, ColumnGroup } = Table;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class CheckBusinessReceivedPayments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editInfoVisible: false
        }
    }

    /**
     * 编辑对话框模块方法组
     */
    toEdit() {
        this.setState({
            editInfoVisible: true
        })
    }

    handleOkEditInfo() {
        this.setState({
            editInfoVisible: false
        })
    }

    handleCancelEditInfo() {
        this.setState({
            editInfoVisible: false
        })
    }

    isHasValue(value,record){
        console.log('sssss',value)
        if(record.service_states=='采购'){
            
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '业务状态',
                dataIndex: 'service_states',
                key: 'service_states',
                render:(value,record)=>this.isHasValue(value,record)
            },
            {
                title: '单据状态',
                dataIndex: 'letter_states',
                key: 'letter_states',
            },
            {
                title: '审批状态',
                dataIndex: 'approval_states',
                key: 'approval_states',

            },
            {
                title: '系统单号',
                dataIndex: 'system_number',
                key: 'system_number',
            },
            {
                title: '创建日期',
                dataIndex: 'create_date',
                key: 'create_date',
            },
            {
                title: '创建人',
                dataIndex: 'creater',
                key: 'creater',
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
            }];
        const data = [
            {
                key:1,
                id:1,
                service_states:'采购', 
            }
        ];
        return (
            <div>
                <span style={{ fontSize: 16, marginRight: 8, cursor: 'pointer' }} onClick={this.toEdit.bind(this)}><Icon type="search" /></span>
                <Modal
                    title={"[" + {} + "]" + "的关联表单"}
                    width='700px'
                    visible={this.state.editInfoVisible}
                    onOk={this.handleOkEditInfo.bind(this)}
                    onCancel={this.handleCancelEditInfo.bind(this)}
                >
                    <div className='botLine'>
                        <Table columns={columns} dataSource={data} scroll={{ x: '240%' }} />
                    </div>
                </Modal>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CheckBusinessReceivedPayments))