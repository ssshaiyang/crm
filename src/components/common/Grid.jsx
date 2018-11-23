/*
 * @Author: lcj
 * @Date:   2017-08-21 14:40:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:10:45
 * @Descriptions: 表格的通用UI组件,详细props使用方式,请见最下方
 */

var license = "Evaluation_License_Valid_Until__16_September_2018__MTUzNzA1MjQwMDAwMA==b7ecc78983c1bf33b5eb3682cc62cfaa"
import React from 'react'
import {
    AgGridReact
} from "ag-grid-react";
import {LicenseManager} from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey(license);
import "ag-grid-enterprise";
import "ag-grid-root/dist/ag-grid-enterprise.min.js";
import "ag-grid-root/dist/ag-grid-enterprise.min.noStyle.js";
import "ag-grid-root/dist/ag-grid-enterprise.noStyle.js";
// import 'ag-grid-root/dist/styles/ag-grid.css'
// import 'ag-grid-root/dist/styles/theme-blue.css'

let styles = {
	container: {
		height: 250,
		//width:  '100%',
		autoScroll :  true,
		margin: '20px 0'
	}
}

/**
 * [props中列的格式可以为种,简化传递方式]
 * @param  {[Object/Array]} columnDefs [列]
 */
function initColumnDefs(columnDefs) {
	return Array.isArray(columnDefs) ? initArrayColumnDefs(columnDefs) : initObjectColumnDefs(columnDefs);
}

/**
 * [格式化数组列]
 * @param  {[type]} columnDefs [description]
 */
function initArrayColumnDefs(columnDefs) {
	return columnDefs.map(columnDef => {
		switch (typeof columnDef) {
			case 'object':
				return columnDef;
			case 'string':
				return {
					headerName: columnDef,
					field: columnDef,
				}
			default:
				return columnDef
		}
	})
}

/**
 * [格式化对象列]
 * @param  {[type]} columnDefs [push中为最简单的默认样式]
 */
function initObjectColumnDefs(columnDefs) {
	let column = [];
	for (let columnDefKey in columnDefs) {
		const headerName = columnDefs[columnDefKey];
		if (typeof headerName === "string") {
			column.push({
				field: columnDefKey,
				headerName: headerName,
				enableRowGroup: true
			})
		} else {
			headerName.field = columnDefKey;
			column.push(headerName);
		}
	}
	return column;
}

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
	}

	onGridReady(params) {
		this.gridApi = params.api;
		this.columnApi = params.columnApi;

		// this.gridApi.sizeColumnsToFit();
		this.props.componentDidMount(this);
	}

	componentWillReceiveProps(props) {
		this.props.componentWillReceiveProps(props, this);
	}

	componentDidUpdate() {
		// if (this.gridApi)
		// 	this.gridApi.sizeColumnsToFit();
	}

	makeGridOptions() {
		return {
			enableColResize: true,
			enableSorting: true,
			enableFilter: true,
			// unSortIcon: true,
			rowGroupPanelShow: 'onlyWhenPivoting',
			rowStyle: {
				// textAlign: 'center',
			},
			rowSelection: 'multiple',
			defaultColDef: {
				checkboxSelection: (params) => {
					if (!this.props.selection) {
						return false;
					}
					if (params.columnApi.getAllDisplayedColumns()[0] === params.column)
						return true;
				},
				headerCheckboxSelection: (params) => {
					if (!this.props.selection) {
						return false;
					}
					if (params.columnApi.getAllDisplayedColumns()[0] === params.column)
						return true;
				}
			}
		}
	}
	render() {
		const gridOptions = this.makeGridOptions.call(this);
		Object.assign(gridOptions, this.props.gridOptions);
		return (
			<div
				style={Object.assign({}, styles.container, this.props.containerStyle)}
				className="ag-blue">
				<AgGridReact
					// properties
					columnDefs={initColumnDefs(this.props.columnDefs)}
					rowData={this.props.rowData}
					onSelectionChanged={this.props.onSelectionChanged.bind(this)}
					{...gridOptions}
					// events
					onGridReady={this.onGridReady.bind(this)}>

				</AgGridReact>
			</div>
		)
	}
}

Grid.defaultProps = {
	containerStyle: {},
	gridOptions: {},
	//columnDefs可以为对象或者数组,若为对象则key为field,value为headerName
	columnDefs: [],
	rowData: [],
	onSelectionChanged: () => false,
	componentWillReceiveProps: () => false,
	componentDidMount: () => false,
	selection: false,
}