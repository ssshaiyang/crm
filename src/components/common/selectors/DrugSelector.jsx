/**
 * @Author: wanbing.shi
 * @CDate: 2017/10/14 16:49
 * @Desc: Selector to select medicine from the medicine list
 */


'use strict';

import React from 'react';
import {Input, Modal} from 'antd';
import {connect} from 'react-redux';
import {getDrugListSelectorActionCreator} from '../../../actions/files/medicine/medicine.js'
import SelfTable from "../Table";

const Search = Input.Search;

const columnList =  [
    {
        title: '编号',
        dataIndex: 'drug_id',
        key: 'id',
    },
    {
        title: '名称',
        dataIndex: 'drug_name',
        key: 'name',
        width: 120,
        sorter: true
    },
    {
        title: '规格',
        dataIndex: 'specification',
        key: 'specification'
    },
    {
        title: '计量单位',
        dataIndex: 'unit',
        key: 'unit'
    },
    {
        title: '剂型',
        dataIndex: 'dosage',
        key: 'dosage'
    },
    {
        title: '生产厂家',
        dataIndex: 'manufacturer_name',
        key: 'manufacturer_name'
    },
];

let styles = {
    SearchBlock : {
        marginBottom : 10
    }
};

class DrugSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDrug : {},
            pageSize : 20,
        };
    }

    init() {
        this.setState({
            selectedDrug : {},
            pageSize : 20,
        });
        this.refs.search_input.input.refs.input.value = "";
        this.refs.drug_table.init();
    }


    componentDidMount() {
        let params = {
            page : 1,
            limit : this.state.pageSize,
        };
        this.props.getDrugList(params);
    }

    componentDidUpdate(preProps, preState) {
        const {visible} = preProps;
        if(this.props.visible !== visible && !visible && this.refs.search_input) {
            this.init();
            let params = {
                page : 1,
                limit : this.state.pageSize,
            };
            this.props.getDrugList(params);
        }
    }

    onSearchHandler(searchCondition) {
        let params = {
            page : 1,
            filter : searchCondition,
            limit : this.state.pageSize,
        };
        this.props.getDrugList(params);
    }

    onChangeHandler(page, pageSize) {
        let params = {
            page : page,
            limit : pageSize,
            filter : this.refs.search_input.input.refs.input.value,
        };
        this.props.getDrugList(params);
    }

    onRowDoubleClickHandler(drug) {
        this.props.onOkHandler(drug);
    }

    onRowClickHandler(drug) {
        this.setState({
            selectedDrug : drug,
        });
    }

    onOKHandler() {
        this.props.onOkHandler(this.state.selectedDrug);
        this.init();
    }

    onCancelHandler() {
        this.props.onCancelHandler();
        this.init();
    }


    rowKeySelect(record) {
        return record.drug_id;
    }

    render() {
       return (
           <Modal
               title="药品列表"
               visible={this.props.visible}
               onOk={this.onOKHandler.bind(this)}
               onCancel={this.onCancelHandler.bind(this)}
           >
               <Search
                   ref = "search_input"
                   placeholder = {"请输入药品名称"}
                   style = {styles.SearchBlock}
                   onSearch = {this.onSearchHandler.bind(this)}
               />
               <SelfTable
                   ref = 'drug_table'
                    data = {this.props.drugList}
                    rowKeySelect = {this.rowKeySelect.bind(this)}
                    columns = {columnList}
                    pageSize = {this.state.pageSize}
                    page = {this.state.currentPage}
                    onChangeHandler = {this.onChangeHandler.bind(this)}
                    onRowDoubleClickHandler = {this.onRowDoubleClickHandler.bind(this)}
                    onRowClickHandler = {this.onRowClickHandler.bind(this)}
               />
           </Modal>
       );
    }
}

function mapStateToProps(state) {
    return {
        drugList: state.drugListInfo.drugSelector,
    };
}

function mapDispatchToProps(dispatch) {
    return ({
        getDrugList : (params) => dispatch(getDrugListSelectorActionCreator(params)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DrugSelector)