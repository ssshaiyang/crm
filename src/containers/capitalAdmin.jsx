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
import Sider from '../components/capitalAdmin/Sider.jsx'
import AccountAdmin from '../components/CapitalAdmin/accountAdmin/accountAdmin.jsx'
import OutFount from '../components/CapitalAdmin/outFount/outFount.jsx'
import InFount from '../components/CapitalAdmin/inFount/inFount.jsx'
import BackFount from '../components/CapitalAdmin/backFount/backFount.jsx'
let styles = {
    body: {
        padding: '0 35px'
    }
}

export class CapitalAdmin extends React.Component {
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
                            <Route path='/capitalAdmin' exact component={AccountAdmin} />
                            <Route path='/capitalAdmin/accountAdmin' exact component={AccountAdmin} />
                            <Route path='/capitalAdmin/outFount' exact component={OutFount} />
                            <Route path='/capitalAdmin/inFount'  component={InFount} />
                            <Route path='/capitalAdmin/backFount' exact component={BackFount} />

                        </div>
                    </Layout.Content>
                </div>
            </Layout>
        )
    }
}

export default CapitalAdmin