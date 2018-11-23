import React from 'react';
import {connect} from 'react-redux';
import {Card ,Row,Col} from 'antd';
import LeftPowerInfo from './power/leftPowerInfo.jsx'
import RightPowerInfo from './power/rightPowerInfo.jsx'

export class PowerAdmin extends React.Component {
    componentWillMount(){

    }
    render(){
        return (
            <div style={{padding:"35px 0"}}>
                <Row>
                    <Col span={8}><LeftPowerInfo/></Col>
                    <Col span={1}></Col>
                    <Col span={15}><RightPowerInfo/></Col>
                </Row>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(null,mapDispatchToProps)(PowerAdmin)