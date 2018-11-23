import React from 'react'
import { connect } from 'react-redux'
import { Card, Tree } from 'antd'
import * as actionCreator from "../../../../actions/admin/power/leftPowerInfo.js";
const TreeNode = Tree.TreeNode;

export class RightPowerInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            expandedKeys: [],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    onExpand(expandedKeys) {
        console.log('onExpand', arguments);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    onCheck(checkedKeys) {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }
    onSelect(selectedKeys, info) {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    }

    renderTreeNodes(data) {
        if (data.length <= 0) {
            return (<div></div>);
        } else {
            return data.map((item) => {
                if (item.children) {
                    return (
                        <TreeNode title={item.permission_name} key={item.permission_id}>
                            {this.renderTreeNodes(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode title={item.permission_name} key={item.permission_id} />;
            });
        }
    }

    render() {
        return (
            <div>
                <Card title={"角色" + '[' + this.props.clickRoleName + ']权限列表'} id='leftPowerCard'>
                    <Tree
                        onExpand={this.onExpand.bind(this)}
                        expandedKeys={this.state.expandedKeys}
                        autoExpandParent={this.state.autoExpandParent}
                        onCheck={this.onCheck.bind(this)}
                        checkedKeys={this.state.checkedKeys}
                        onSelect={this.onSelect.bind(this)}
                        selectedKeys={this.state.selectedKeys}
                    >
                        {this.renderTreeNodes(this.props.clickRolePower)}
                    </Tree>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        clickRolePower: state.getPowerList.clickPowerList,
        clickRoleName: state.getPowerList.id
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightPowerInfo)