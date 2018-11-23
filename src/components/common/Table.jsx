/**
 * @Author: wanbing.shi
 * @CDate: 2017/10/16 17:21
 * @Desc:
 */

'use strict';

import React from 'react';
import {Table} from 'antd';

export default class SelfTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : '',
        };
    }

    init() {
        this.setState({
            selectedIndex : '',
        });
    }

    onChangeHandler(page, pageSize) {
        this.props.onChangeHandler(page, pageSize);
    }

    onRowDoubleClickHandler(record) {
        this.props.onRowDoubleClickHandler(record);
    }

    onRowClickHandler(record, index) {
        this.setState({
            selectedIndex : index,
        });
        this.props.onRowClickHandler(record);
    }

    render() {
        return (
            <Table
                dataSource = {this.props.data.data}
                rowKey = {this.props.rowKeySelect}
                columns = {this.props.columns}
                pagination = {{
                    total : this.props.data.total_count,
                    pageSize : this.props.pageSize,
                    current : this.props.page,
                    showSizeChanger : true,
                    pageSizeOptions : this.props.pageSizeOptions,
                    onChange : this.onChangeHandler,
                    showTotal : (total, range) => '共'+total+'项',
                    showQuickJumper : true,
                }}
                onRowDoubleClick = {this.onRowDoubleClickHandler.bind(this)}
                onRowClick = {this.onRowClickHandler.bind(this)}
                rowClassName = {(record, index) => index === this.state.selectedIndex? 'ant-table-row-select' : ''}
            />
        );
    }
}

SelfTable.defaultProps = {
    data : {
        data : [],
        total_count : 0,
    },
    pageSize : 20,
    page : 1,
    pageSizeOptions : ['20', '50', '100', '200'],
    onChangeHandler : () => false,
    onRowClickHandler : () => false,
};