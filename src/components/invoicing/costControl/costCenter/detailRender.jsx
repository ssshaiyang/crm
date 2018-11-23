import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Icon,Modal} from 'antd'
import * as actionCreater from "../../../../actions/invoicing/costControl/costControl.js"


export class DetailRender extends React.Component {
    constructor(props) {
        super(props);
         this.state={
             detailVisible:false
         }
    }
    componentWillMount(){

}
    handleClick(){
         this.setState({detailVisible:true})
    }
    closeDetail(){
        this.setState({detailVisible:false})
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";
        return (
            <div>
                <div style={{textAlign:"center"}}>
                   <a href="javascript:;" style={{cursor:'pointer',}} onClick={this.handleClick.bind(this)}>详情</a>
                </div>
                <Modal
                    title="单据详情"
                    visible={this.state.detailVisible}
                    onCancel={this.closeDetail.bind(this)}
                    footer={null}
                >



                    <div style={{textAlign:"center",margin:"40px 0"}}>
                        <Button onClick={this.closeDetail.bind(this)} className="mainButton">关闭</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
    }
}
export default connect(null,mapDispatchToProps)(DetailRender)