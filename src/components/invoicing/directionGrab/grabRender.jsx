import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,message} from 'antd'
import * as actionCreater from "../../../actions/invoicing/directionGrab/directionGrab.js"

export class GrabRender extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }


toSee(){
        this.props.showCheckOut({
            checkBoxVisible:"block",
            monthVisible:"none"
        })
}
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";

        return (
            <div>
                <div style={{textAlign:"center"}}>
                    <Icon type="see"  className="iconStyle" onClick={this.toSee.bind(this)}/>
                    <Icon type="grab"  className="iconStyle"/>
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
        showCheckOut:(val)=>(dispatch(actionCreater.CheckBoxAction(val)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GrabRender)