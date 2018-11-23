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
    Icon,
    Modal
} from 'antd'

import {
    connect
} from 'react-redux'
const TabPane = Tabs.TabPane;
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
import ImportList from './import/importList.jsx'
 import ImportListPage from "./import/importListPage.jsx"
import SeeCheck from './import/seeCheck.jsx'
import AddBuy from "./import/addBuy.jsx"
import * as actionCreater from "../../../actions/invoicing/directionImport/directionImport.js"
import UnreviewInfo from "./unReview/unReviewInfo.jsx"
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export class DirectionGrab extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           addBuyVisible:false
        }
    }
    handleAdd(){
        this.setState({
            addBuyVisible:true
        })
    }
    addOpen(){
        this.props.addBuyOpen(true)
    }
    render(){
        return(
            <div>
                <Card style={{marginTop:"30px"}}  >
                    <div className="tabContainers" style={{position:"relative"}}>
                        <div style={{position:"absolute",right:0,top:"18px",zIndex:"20",width:"400px"}}>
                            <Row>
                                <Col span={14}>
                                    <Row>
                                        <Col span={6} style={{lineHeight:"28px"}}>选择月份</Col>
                                        <Col span={16}>
                                            <MonthPicker defaultValue={moment('2015-01')} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={10}>
                                    <Row >
                                        <Col span={14}>
                                            <Button className="mainButton" onClick={this.handleAdd.bind(this)}>批量导入</Button>
                                        </Col>
                                        <Col span={10}>
                                            <Button className="mainButton" onClick={this.addOpen.bind(this)}><Icon type="add"/></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <Tabs type="card">
                            <TabPane tab="本月导入" key="1">
                                <Card>
                                    {/*开始*/}
                                    <div style={{display:this.props.importVisible}}>
                                        <Row>
                                            <Col span={8}>
                                                <Row>
                                                    <Col span={5} style={{lineHeight:"28px"}}>导入日期</Col>
                                                    <Col span={19}>
                                                        <RangePicker
                                                            defaultValue={[moment('2015-01-01'), moment('2015-01-01')]}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={8}>
                                                <Row>
                                                    <Col span={7} style={{lineHeight:"28px",textAlign:"center"}}>导入状态</Col>
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
                                        <ImportList/>
                                        <ImportListPage/>
                                    </div>
                                    {/*查看*/}
                                    <div style={{display:this.props.seeVisible}}>
                                        <SeeCheck/>
                                    </div>
                                </Card>
                            </TabPane>
                            <TabPane tab="新增未备案信息" key="2">
                                <Card>
                                    <UnreviewInfo/>
                                </Card>
                            </TabPane>
                        </Tabs>
                    </div>
                </Card>
                <AddBuy/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        importVisible:state.directionImport.importVisible,
        seeVisible:state.directionImport.seeVisible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addBuyOpen:(val)=>(dispatch(actionCreater.addBuyAction(val)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DirectionGrab)