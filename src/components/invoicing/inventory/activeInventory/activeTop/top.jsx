import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,DatePicker,Col,Row } from 'antd'
// import * as actionCreater from "../../../../actions/capitalAdmin/accountAdmin/accountCenter/bankList.js"

export class TopContent extends React.Component {
    componentWillMount(){

    }

    render(){
        return (
            <div style={{overflow:"hidden"}}>
                <Row type="flex" justify="space-between">
                    <Col span={6}>
                        <DatePicker  />
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
    return{
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TopContent)