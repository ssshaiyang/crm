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
import Sider from '../components/files/Sider.jsx'
import Medicine from "../components/files/medicine/medicine.jsx"
import MedicineName from "../components/files/medicineName/medicineName.jsx"
import Agent from "../components/files/agent/agent.jsx"
import Corporation from "../components/files/corporation/corporation.jsx"
import CorporationName from "../components/files/corporationName/corporationName.jsx"
import CostPolicy from "../components/files/costPolicy/costPolicy.jsx"
import Hospital from "../components/files/hospital/hospital.jsx"
import HospitalName from "../components/files/hospitalName/hospitalName.jsx"
import InvoiceCompany from "../components/files/invoiceCompany/invoiceCompany.jsx"
import InvoiceCompanyName from "../components/files/invoiceCompanyName/invoiceCompanyName.jsx"
import Manufacturer from "../components/files/manufacturer/manufacturer.jsx"
import ManufacturerName from "../components/files/manufacturerName/manufacturerName.jsx"



let styles = {
    body: {
        padding: '0 35px'
    }
}

export class Files extends React.Component {
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
                            <Route path='/files' exact component={Medicine} />
                            <Route path='/files/medicine'  component={Medicine} />
                            <Route path='/files/medicineName' exact component={MedicineName} />
                            <Route path='/files/agent'  component={Agent} />
                            <Route path='/files/corporation' exact component={Corporation} />
                            <Route path='/files/corporationName'  component={CorporationName} />
                            <Route path='/files/costPolicy' exact component={CostPolicy} />
                            <Route path='/files/hospital'  component={Hospital} />
                            <Route path='/files/hospitalName' exact component={HospitalName} />
                            <Route path='/files/invoiceCompany'  component={InvoiceCompany} />
                            <Route path='/files/invoiceCompanyName' exact component={InvoiceCompanyName} />
                            <Route path='/files/manufacturer'  component={Manufacturer} />
                            <Route path='/files/manufacturerName'  component={ManufacturerName} />
                        </div>
                    </Layout.Content>
                </div>
            </Layout>
        )
    }
}

export default Files