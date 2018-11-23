import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon,Row,Col } from 'antd'
import DropDownMenu from './leftDropDown/leftDropDown.jsx'
import MedicineTableBox from './medicineTableBox/medicineTableBox.jsx'

//药品
export class Medicine extends React.Component {
    componentWillMount() {
        
    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='药品'>
                    <DropDownMenu/>
                    <MedicineTableBox/>
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
       
    }
}
export default connect(null, mapDispatchToProps)(Medicine)