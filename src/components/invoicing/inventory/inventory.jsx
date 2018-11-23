import React from 'react'
import {
    Tabs,
    Form,
    Card
} from 'antd'
import {
    connect
} from 'react-redux'
const TabPane = Tabs.TabPane;
// import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"
import ActiveInventory from './activeInventory/activeInventory.jsx'
import InventoryList from './inventoryList/inventoryList.jsx'
import InventoryTrans from "./inventoryTrans/inventoryTrans.jsx"
export class Inventory extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div style={{paddingTop:"35px"}} className="tabContainers">
                <Tabs type="card">
                    <TabPane tab="库存列表" key="1">
                       <Card>
                             <InventoryList/>
                       </Card>
                    </TabPane>
                    <TabPane tab="动态库存" key="2">
                        <Card>
                             <ActiveInventory/>
                        </Card>
                    </TabPane>
                    <TabPane tab="库存调拨" key="3">
                        <Card>
                            <InventoryTrans/>
                        </Card>
                    </TabPane>
                </Tabs>
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

export default connect(mapStateToProps,mapDispatchToProps)(Inventory)