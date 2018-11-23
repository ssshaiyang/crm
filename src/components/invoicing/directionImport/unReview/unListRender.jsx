import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,message} from 'antd'
// import * as actionCreater from "../../../actions/invoicing/directionGrab/directionGrab.js"

export class unListRender extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    analyse(){

    }
    delete(){
        //删除
        this.props.api.updateRowData({
            remove: [this.props.data]
        })
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        console.log("api1",this.props.data)
        return (
            <div>
                <div style={{textAlign:"center"}}>
                    <Icon type="Analysis"  className="iconStyle" onClick={this.analyse.bind(this)}/>
                    <Icon type="delete"  className="iconStyle" onClick={this.delete.bind(this)}/>
                </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(unListRender)