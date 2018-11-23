import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'antd'
import AddBranch from './modal/addBranch.jsx'
import * as actionCreator from "../../../actions/admin/frameWork/rightGrid/rightList.js"
import * as LeftActionCreator from '../../../actions/admin/frameWork/leftMenue/leftMenue.js'
import RightBox from './rightGrid/rightListBox'
import LeftBox from './leftMenue/leftMenue.jsx'
let styles = {
    flexbox: {
        'display': 'flex',
        'WebkitJustifyContent': 'space-between',
        'justifyContent': 'space-between',
        'WebkitFlexWrap': 'no-wrap',
        'flexWrap': 'no-wrap',
    },
    productlist: {
        width: '240px',
        'marginRight': '30px'
    },
    saledetail: {
        'flex': '1',
    },
    title: {
        'fontSize': '14px',
        'lineHeight': '30px'
    }
}
export class frameWork extends React.Component {
    componentWillMount() {
        this.props.getGridMemberList()
        this.props.getLeftMenue()
    }
    render() {
        return (
            <div style={{ padding: "35px 0" }}>
                <Card
                    title="组织架构"
                    extra={<AddBranch />}
                >
                    {/* <div style={styles.flexbox}>
                            <div style={styles.productlist}>
                               <LeftBox/>
                            </div>
                            <div style={styles.saledetail}>
                                <RightBox refresh={this.props.getGridMemberList}/>
                            </div>
                        </div> */}
                    <Row>
                        <Col span={24}><LeftBox /></Col>
                        {/*<Col span={1}></Col>*/}
                        {/*<Col span={13}><RightBox refresh={this.props.getGridMemberList} /></Col>*/}
                    </Row>
                </Card>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getGridMemberList: () => dispatch(actionCreator.getFrameWorkmemberList()),
        getLeftMenue: () => dispatch(LeftActionCreator.getAllBranchFrameWork())
    }
}
export default connect(null, mapDispatchToProps)(frameWork)