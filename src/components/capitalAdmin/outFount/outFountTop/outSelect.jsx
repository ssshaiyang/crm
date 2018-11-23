import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,Select,Row,Col} from 'antd'
const Option = Select.Option;
const FormItem = Form.Item;
// import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"
import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"

export class OutSelect extends React.Component {
    componentWillMount(){

    }
    changeCondition(val){
        this.props.getCondition(val)
        this.props.changePage(1,5)
        this.props.refresh({
            limit:5,
            page:1
        })
    }
    render(){
        return (
            <div style={{width:"300px"}}>
                <Row>
                    <Col span={3} style={{lineHeight:"26px"}}>状态</Col>
                    <Col span={8}>
                        <Select value={this.props.Value} style={{width:"80px"}} onChange={this.changeCondition.bind(this)}>
                            <Option value="-1">所有</Option>
                            <Option value="0">未付款</Option>
                            <Option value="1">已付款</Option>
                        </Select>
                    </Col>
                    {/*<Col span={3} style={{lineHeight:"26px"}}>类型</Col>
                    <Col span={8}>
                        <Select defaultValue="lucy" style={{width:"80px"}}>
                            <Option value="jack">所有</Option>
                            <Option value="lucy">所有</Option>
                        </Select>
                    </Col>*/}
                </Row>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        Value:state.outFountData.condition
    }
}
function mapDispatchToProps(dispatch){
    return{
       getCondition:(val)=>dispatch(actionCreater.conditionActionCreater(val)),
        changePage:(page,limit)=>dispatch(actionCreater.changePageLimit(page,limit)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OutSelect)