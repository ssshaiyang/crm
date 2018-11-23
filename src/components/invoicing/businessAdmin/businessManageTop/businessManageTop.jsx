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
import NoStampFlow from '../noStampFlow/noStampFlow.jsx'
import HasNavInfo from '../hasStampFlow/hasNavInfo.jsx'
export class BusinessManageTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tabContainers">
                <Tabs type="card">
                    <TabPane tab="业务流程(过票)" key="1">
                        <HasNavInfo />
                    </TabPane>
                    <TabPane tab="业务流程(不过票)" key="2">
                        <Card>
                            <NoStampFlow />
                        </Card>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessManageTop)