import React from 'react'
import {
    Input,
    Select,
    Row,
    Col,
    Button,
    Card,
    DatePicker,
    Tabs,
    Icon
} from 'antd'

import {
    connect
} from 'react-redux'
const TabPane = Tabs.TabPane;
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
import * as actionCreater from "../../../actions/invoicing/directionGrab/directionGrab.js"
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import GrabList from './grabList.jsx'
import CheckBoxContent from './checkBox.jsx'
import ReviewInfo from './reviewInfo.jsx'
export class DirectionGrab extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showCheckOut:"none"
        }
    }


    render(){
        return(
            <div>
                <Card style={{marginTop:"30px"}}  >
                    <div className="tabContainers" style={{position:"relative"}}>
                        <div style={{position:"absolute",right:0,top:"18px",zIndex:"20",}}>
                            <Row style={{width:"240px"}}>
                                <Col span={6} style={{lineHeight:"28px"}}>选择月份</Col>
                                <Col span={16}>
                                    <MonthPicker defaultValue={moment('2015-01')} />
                                </Col>
                            </Row>
                        </div>
                        <Tabs type="card">
                            <TabPane tab="本月抓取" key="1">
                                <Card>
                                    {/*开始*/}
                                    <div style={{display:this.props.isMountShow}}>
                                        <Row>
                                            <Col span={8}>
                                                <Row>
                                                    <Col span={5} style={{lineHeight:"28px"}}>抓取日期</Col>
                                                    <Col span={19}>
                                                        <RangePicker
                                                            defaultValue={[moment('2015-01-01'), moment('2015-01-01')]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={8}>
                                                <Row>
                                                    <Col span={7} style={{lineHeight:"28px",textAlign:"center"}}>抓取状态</Col>
                                                    <Col span={17}>
                                                        <Select defaultValue="0" style={{ width:120 }}>
                                                            <Option value="0">所有状态</Option>
                                                            <Option value="1">已导入</Option>
                                                            <Option value="2">未导入</Option>
                                                        </Select>
                                                    </Col>
                                                </Row>
                                            </Col>
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
                                        </Row>
                                        <GrabList/>
                                    </div>
                                {/*查看*/}
                                    <div style={{display:this.props.isShowCheck}}>
                                          <CheckBoxContent/>
                                    </div>
                                </Card>
                            </TabPane>
                            <TabPane tab="新增未备案信息" key="2">
                                <Card>
                                    <ReviewInfo/>
                                </Card>
                            </TabPane>
                        </Tabs>
                    </div>
                </Card>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('123',state.directionGrab)
    return {
        isShowCheck:state.directionGrab.checkBoxVisible,
        isMountShow:state.directionGrab.monthVisible
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // showCheckOut:(val)=>(dispatch(actionCreater.CheckBoxAction(val)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DirectionGrab)