import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal,
    Card,
    Icon
} from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
const Option = Select.Option;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

export class ListTop extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div style={{overflow:"hidden",marginTop:"20px"}}>
                <Row type="flex" justify="space-between">
                    <Col span={6}>
                        <Row>
                            <Col span={6} style={{lineHeight:"28px",height:"28px"}}>
                                冻结状态
                            </Col>
                            <Col span={16}>
                                <Select defaultValue="lucy" style={{ width: 120 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={10} style={{lineHeight:"28px",height:"28px",textAlign:"center",border:"1px solid #d9d9d9"}}>
                        将字段拖至此处进行分组查询
                    </Col>
                    <Col span={8}>
                        <div style={{float:"right",textAlign:"center"}}>
                            <Input placeholder="搜索..." style={{width:"200px",marginRight:"10px"}}/><Button className="mainButton"><Icon type="search"/></Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTop)