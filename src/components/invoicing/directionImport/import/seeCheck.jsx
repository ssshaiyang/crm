import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,message,Row,Col,DatePicker,Select,Input,Table, Menu, Dropdown,Checkbox } from 'antd'
import * as actionCreater from "../../../../actions/invoicing/directionImport/directionImport.js"
import moment from 'moment';
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker;
import Grid from '../../../common/Grid.jsx'
const allData= [
    {
        "id":1,
        "drug_name": "生血宝",
        "specification": "75m'l",
        "manufacturer_name": "生产厂家" ,
        "storage_drug_code": 454452 ,
        "storage_expire_time":"3464324",
        "hospital_name": "温州第一人民医院",
        "deliver_name":"北京康辰药业有限公司",
        "drug_amount":"1000",
        "sales_date":"2017-09"
    },
    {
        "id":2,
        "drug_name": "生血宝",
        "specification": "75m'l",
        "manufacturer_name": "生产厂家" ,
        "storage_drug_code": 454452 ,
        "storage_expire_time":"3464324",
        "hospital_name": "温州第一人民医院",
        "deliver_name":"北京康辰药业有限公司",
        "drug_amount":"1000",
        "sales_date":"2017-09"
    }]







export class SeeCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            that:""
        }
    }

    componentWillMount(){
        // this.props.refreshLisT()
    }
    makeColumnDefs() {
        return {
            "xuhao": {
                headerName: "序号",
            },"drug_name": {
                headerName: "药品名称",
                enableRowGroup:true
            },"specification": {
                headerName: "规格",
            },"manufacturer_name": {
                headerName: "生产企业",
            },"storage_drug_code": {
                headerName: "批号",
            },"storage_expire_time": {
                headerName: "有效期",
            },"hospital_name": {
                headerName: "医院名称",
            },"deliver_name": {
                headerName: "商业公司",
            },"drug_amount": {
                headerName: "销售数量",
            },"sales_date": {
                headerName: "销售日期",
            }
        }
    }
    DidMount(that){
        this.setState({
            that:that
        })
        /*that.columnApi.setColumnVisible('drug_name', false)
        that.gridApi.sizeColumnsToFit()*/
    }
    Change(e){
        if(e.target.checked){
            this.state.that.columnApi.setColumnVisible(e.target.att, true)
            this.state.that.gridApi.sizeColumnsToFit()
        }else{
            this.state.that.columnApi.setColumnVisible(e.target.att, false)
            this.state.that.gridApi.sizeColumnsToFit()
        }
    }
    menueList(obj){
        const zhi=[]
        for(let i in obj){
            zhi.push( <Menu.Item key={i} ><Checkbox att={i} defaultChecked={true} onChange={this.Change.bind(this)}>{obj[i]["headerName"]} </Checkbox></Menu.Item>)
        }
        return zhi
    }






    toHidden(){
        this.props.changeShow({
            seeVisible:"none",
            importVisible:"block"
        })
    }


    render(){
        const containerStyle={
            minHeight: window.screen.availHeight - 530 + 'px',
        }

        const menu=(
            <Menu>
                {
                    this.menueList.call(this,this.makeColumnDefs.call(this))
                }
            </Menu>
        )
        return (
            <div>
                <p style={{background:"#f7f7f7",height:"50px",lineHeight:"50px",color:"#000",fontSize:"16px"}}>[浙江英特]流向分析明细</p>
                <Row style={{marginTop:"20px"}}>
                    <Col span={2}>
                        <Button className="mainButton" onClick={this.toHidden.bind(this)}>返回</Button>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={5} style={{lineHeight:"28px"}}>销售日期</Col>
                            <Col span={19}>
                                <RangePicker
                                    defaultValue={[moment('2015-01-01'), moment('2015-01-01')]}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Row>
                            <Col span={7} style={{lineHeight:"28px",textAlign:"center"}}>分析结果</Col>
                            <Col span={17}>
                                <Select defaultValue="0" style={{ width:120 }}>
                                    <Option value="0">全部</Option>
                                    <Option value="1">成功</Option>
                                    <Option value="2">失败</Option>
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
                <Row style={{margin:"20px 0"}}>
                    <Col span={2}>
                        <Dropdown overlay={menu}>
                            <Button className="mainButton"><Icon type="Enterprise-list"/></Button>
                        </Dropdown>
                    </Col>
                    <Col span={22} style={{border: "1px solid rgb(217, 217, 217)",lineHeight:"28px",textAlign:"center"}}>
                        将字段拖至此处进行查询
                    </Col>
                </Row>
                <Grid
                    rowData={this.props.rowData}
                    columnDefs={this.makeColumnDefs.call(this)}
                    containerStyle={containerStyle}
                    componentDidMount={this.DidMount.bind(this)}

                />

            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        rowData: allData,
    }
}
function mapDispatchToProps(dispatch){
    return{
        changeShow:(val)=>(dispatch(actionCreater.seeDetailAction(val)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SeeCheck)