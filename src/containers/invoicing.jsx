/*
 * @Author: lcj
 * @Date:   2017-08-15 08:58:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 13:32:38
 */

'use strict';

import React from 'react'
import {
    Layout,
    Row,
    Col
} from 'antd'
import {
    Route
} from 'react-router-dom'
import Sider from '../components/invoicing/Sider.jsx'
import DirectionGrab from '../components/invoicing/directionGrab/directionGrab.jsx'
import Agency from '../components/invoicing/agency/agency.jsx'
import BusinessAdmin from '../components/invoicing/businessAdmin/businessAdmin.jsx'
import CostControl from '../components/invoicing/costControl/costControl.jsx'
import DirectionCheck from '../components/invoicing/directionCheck/directionCheck.jsx'
import DirectionImport from '../components/invoicing/directionImport/directionImport.jsx'
import ProAndCost from '../components/invoicing/proAndCost/proAndCost.jsx'
import Inventory from '../components/invoicing/inventory/inventory.jsx'
// import Agency from '../components/invoicing/agency/agency.jsx'

let styles = {
    body: {
        padding: '0 35px'
    }
}

export class Invoicing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout style={{flex:1}}>
                <div style={{display:'flex'}} className="bodyContainer">
                    <Sider/>
                    <Layout.Content>
                        <div style={styles.body}>
                            <Route path='/invoicing' exact component={DirectionGrab} />
                            <Route path='/invoicing/directionGrab' exact component={DirectionGrab} />
                            <Route path='/invoicing/agency' exact component={Agency} />
                            <Route path='/invoicing/businessAdmin' exact component={BusinessAdmin} />
                            <Route path='/invoicing/costControl' exact component={CostControl} />
                            <Route path='/invoicing/directionCheck' exact component={DirectionCheck} />
                            <Route path='/invoicing/directionImport' exact component={DirectionImport} />
                            <Route path='/invoicing/proAndCost' exact component={ProAndCost} />
                            <Route path='/invoicing/inventory' exact component={Inventory} />
                        </div>
                    </Layout.Content>
                </div>
            </Layout>
        )
    }
}

export default Invoicing