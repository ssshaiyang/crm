import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Row,Col,Input} from 'antd'
import ReviewList from  './reviewList.jsx'
import ReviewPage from "./reviewPage.jsx"
// import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"

export class ReviewInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    componentWillMount(){

    }

    render(){
        return (
            <div>
                <Row>
                    <Col span={9}>
                        <Row>
                            <Col span={24} style={{border: "1px solid rgb(217, 217, 217)",lineHeight:"28px",textAlign:"center"}}>
                                  将字段拖拽此处进行分组查询
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8}>
                        <Row>
                            <Col span={19}>
                                <Input placeholder="搜索..."/>
                            </Col>
                            <Col span={5} style={{textAlign:"right"}}>
                                <Button className="mainButton"><Icon type="search"/></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={3} style={{textAlign:"right"}}>
                       <Button className="mainButton" >批量分析</Button>
                    </Col>
                    <Col span={3} style={{textAlign:"right"}}>
                        <Button className="mainButton">批量删除</Button>
                    </Col>
                </Row>
                <ReviewList/>
                <ReviewPage/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        // visible:state.inventory.checkOutVisible
    }
}
function mapDispatchToProps(dispatch){
    return{
        // openModalBox:(val)=>dispatch(actionCreater.checkOutActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewInfo)