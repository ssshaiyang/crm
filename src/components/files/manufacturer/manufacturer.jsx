import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'antd'
import ManufacturerTopMenu from './manufacturerTopMenu/manufacturerTopMenu.jsx'
import ManufacturerTableBox from './manufacturerTableBox/manufacturerTableBox.jsx'

//生产厂家
export class Manufacturer extends React.Component {
    componentWillMount(){

    }
    render(){
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <ManufacturerTopMenu />
                    <ManufacturerTableBox/ >
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(null,mapDispatchToProps)(Manufacturer)