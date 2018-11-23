import React from 'react'
import { Form, Input, Select, Row, Col, Button, Modal, Card, Menu, Checkbox, Dropdown, Icon } from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"


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
export class TaxReceiptTableTop extends React.Component {
    constructor(props) {
        super(props);
    }


    //点击搜索获取输入框输入的值,其中value是输入的参数
    getSearchValue(value) {
        //console.log('ssss', value)
    }

    render() {
        return (
            <Row className='table_top'>
                <Col span={4}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button className='mainButton'><Icon type="menu-unfold" /></Button>
                    </Dropdown>
                </Col>
                <Col span={10}></Col>
                <Col span={10}>
                    <Search
                        placeholder="输入客户ID/姓名/联系方式"
                        onSearch={this.getSearchValue.bind(this)}
                    />
                </Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(TaxReceiptTableTop)