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
    DatePicker,
    Icon
} from 'antd'
import {
    connect
} from 'react-redux'
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import DirectionCheckList from "./directionCheckList.jsx"
import DirectionCheckPage from "./directionCheckPage.jsx"
export class DirectionCheck extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div style={{padding:"35px 0"}}>
                <Card>
                   <Row>
                       <Col span={8}>
                           <Row>
                               <Col span={5} style={{lineHeight:"28px"}}>
                                   销售日期
                               </Col>
                               <Col span={19}>
                                   <RangePicker />
                               </Col>
                           </Row>
                       </Col>
                       <Col span={8} offset={8}>
                           <Row>
                               <Col span={20}>
                                   <Input placeholder="搜索..." style={{width:"220px"}}/>
                               </Col>
                               <Col span={4}>
                                   <Button className="mainButton"><Icon type="search"/></Button>
                               </Col>
                          </Row>
                       </Col>
                   </Row>
                </Card>
                <Card>

                    <DirectionCheckList/>
                    <DirectionCheckPage/>

                </Card>
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

export default connect(mapStateToProps,mapDispatchToProps)(DirectionCheck)