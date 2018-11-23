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
    DatePicker
} from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import ListTop from './listTop.jsx'
import ListBox from "./listBox.jsx"
import ListBoxPage from './listBoxPage.jsx'
export class InventoryList extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        const monthFormat = 'YYYY/MM';
        return(
            <div>
                    <div style={{borderBottom:"1px solid #d9d9d9",paddingBottom:"24px"}}>
                        <Row>
                            <Col span={1} style={{lineHeight:"28px",height:"28px"}}>年份</Col>
                            <Col span={26}>
                                <MonthPicker  defaultValue={moment('2015/01', monthFormat)} format={monthFormat} placeholder="结束日期" locale="zh-cn"/>
                            </Col>
                        </Row>
                    </div>
                     <div>
                          <ListTop/>
                         <ListBox/>
                         <div style={{textAlign:"center"}}>
                             <ListBoxPage/>
                         </div>
                     </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(InventoryList)