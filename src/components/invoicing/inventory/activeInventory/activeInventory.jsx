import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal,
    Card
} from 'antd'
import {
    connect
} from 'react-redux'
const FormItem = Form.Item;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import ListBox from './listBox/listBox.jsx'
import ListBoxPage from "./listBox/listBoxPage.jsx"
import TopContent from './activeTop/top.jsx'
export class activeInventory extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                   <TopContent/>
                   <ListBox/>
                <div style={{textAlign:"center"}}>
                    <ListBoxPage/>
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

export default connect(mapStateToProps,mapDispatchToProps)(activeInventory)