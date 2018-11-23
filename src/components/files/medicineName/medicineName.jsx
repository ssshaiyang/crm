import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import TopMenu from './medicineNameTop/topMenu.jsx'
import MedicineNameTableBox from './medicineNameTableBox/medicineNameTableBox.jsx'

//药品异名
export class CorporationName extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card title='已归档'>
                    <TopMenu />
                    <MedicineNameTableBox />
                </Card>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(null, mapDispatchToProps)(CorporationName)