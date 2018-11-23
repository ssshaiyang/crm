import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,message} from 'antd'
import * as actionCreater from "../../../../actions/invoicing/directionImport/directionImport.js"

export class ImportRender extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    SeeContent(){
        this.props.changeShow({
            seeVisible:"block",
            importVisible:"none"
        })
    }
   /* delete(){
        //删除
        this.props.api.updateRowData({
            remove: [this.props.data]
        })
    }*/
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return (
            <div>
                {
                    this.props.data.direction_status==1
                        ?
                        <div style={{textAlign:"center"}}>
                            <Icon type="see"  className="iconStyle" onClick={this.SeeContent.bind(this)}/>
                        </div>
                        :
                        <div style={{textAlign:"center"}}>—</div>
                }

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
        changeShow:(val)=>(dispatch(actionCreater.seeDetailAction(val)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ImportRender)