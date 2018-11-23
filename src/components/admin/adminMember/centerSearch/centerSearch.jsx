/*
 * @Author: lcj
 * @Date:   2017-08-21 18:06:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:07:07
 * @Descriptions: 客户列表-头部过滤选项
 */

import React from 'react'
import {
    Select,
    Button,
    Row,
    Col
} from 'antd'
import {
    connect
} from 'react-redux'
import * as actionCreater from '../../../../actions/admin/adminMember/centerSearch/centerSearch.js'
import * as initPageAction from "../../../../actions/admin/adminMember/memberPage.js"

/*import {
    switchBulkImportModalVisible
} from '../../../../../actions/applications/crm/customerManage/modal/bulkImportModal.js'*/
const Option = Select.Option

let styles = {
    container: {
        marginBottom: '24px'
    },
    importButton: {
        float: 'right'
    }
}

let SelectCol = (title = 'title', data = [], onChange = () => false, value = "0") => (
    <Col span={6}>
        <Row type="flex" align="middle">
            <Col md={{span:8}} xs={{span:10}}>
                <span>{title}</span>
            </Col>
            <Col md={{span:16}} xs={{span:14}}>
                <Select
                    defaultValue="0"
                    value={value}
                    style={{width:'100%'}}
                    onChange={onChange}>
                    {data.map(option=>(
                        <Option value={option.key} key={option.key}>
                            {option.value}
                        </Option>
                    ))}
                </Select>
            </Col>
        </Row>
    </Col>
)

export class CenterSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //初始化客情阶段select
        this.props.initBranch();
        //初始化客户类型select
        this.props.initPosition();
    }

    /**
     * [select组件的change事件]
     * @param  {[type]} changedSelectId [0则change的时客户类型,1为客情阶段]
     * @param  {[type]} value           [修改以后的value]
     */
    handleChange(changedSelectId, value) {
        changedSelectId ? this.props.changePhaseValue(value) : this.props.changeTypeValue(value);
        this.props.initPagination();
        let params = {
            page: 1,
            limit: 5
        }
        this.props.refreshList(params);
    }

    makeSelectCol(colNumber, additionNode = false) {
        const title = ['部门', '职位'][colNumber];
        const options = [this.props.branchOptions, this.props.positionOptions][colNumber];
        const value = [this.props.branch, this.props.position][colNumber]
        const keys = Object.keys(options)
        return (
            <Col span={6}>
                <Row type="flex" align="middle">
                    <Col md={{span:8}} xs={{span:10}}>
                        <span>{title}</span>
                    </Col>
                    <Col md={{span:16}} xs={{span:14}}>
                        <Select
                            defaultValue="0"
                            value={value}
                            style={{width:'100%'}}
                            onChange={this.handleChange.bind(this,colNumber)}>
                            {additionNode}
                            {keys.map(key=>(
                                <Option value={key} key={key}>
                                    {options[key]}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
            </Col>
        )
    }

    render() {
        const {
            branch,
            branchOptions,
            position,
            positionOptions
        } = this.props;
        const allBranch = <Option value={"-1"} key={"-1"}>所有部门</Option>
        const allPosition = <Option value={"-1"} key={"-1"}>所有职位</Option>
        return (
            <Row gutter={20} style={styles.container}>
                {this.makeSelectCol.call(this,0,allBranch)}
                {this.makeSelectCol.call(this,1,allPosition)}

               {/* <Col span={12}>
                    <Button
                        className="mainButton"
                        style={styles.importButton}
                        onClick={this.props.openImportModal}>
                        批量导入
                    </Button>
                </Col>*/}
            </Row>
        )
    }
}

function mapStateToProps(state) {
    const filter = state.centerSearch
    return {
        branch: filter.branch,
        branchOptions: filter.developmentOptions,
        position: filter.position,
        positionOptions: filter.positionOptions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTypeValue: (value) => dispatch(actionCreater.changeBranchSelectValue(value)),
        changePhaseValue: (value) => dispatch(actionCreater.changePositionSelectValue(value)),
        initBranch: () => dispatch(actionCreater.getMemberBranch()),
        initPosition: () => dispatch(actionCreater.getMemberPosition()),
        initPagination: () => dispatch(initPageAction.initPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterSearch)