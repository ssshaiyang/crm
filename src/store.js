/*
 * @Author: lcj
 * @Date:   2017-07-25 08:39:49
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-09-01 13:11:18

 */

import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducer.js'

import global from './stores/global.js'
import topMenu from './stores/topMenu.js'
import workSider from './stores/work/workSider.js'
import companyList from './stores/work/companyList.js'
import companyLoginModel from './stores/work/companyList/companyLoginModel.js'
import createCompanyModel from './stores/work/companyList/createCompanyModel.js'
import approval from './stores/work/approval.js'
import topStateBar from './stores/work/approval/topStateBar.js'
import approvalFilter from './stores/work/approval/filter.js'
import approvalPagination from './stores/work/approval/pagination.js'
import approvalNameModel from './stores/work/approval/approvalCard/nameModel.js'
import approvalOrderModel from './stores/work/approval/approvalCard/orderModel.js'
import approvalOpinionModel from './stores/work/approval/approvalCard/approvalOpinionModel.js'
import department from './stores/work/department.js'
import selfSetting from './stores/selfSetting.js'
import companySetting from './stores/companySetting.js'
import appsPanel from './stores/apps/appsPanel.js'
import appDetailModel from './stores/apps/appDetailModel.js'
import customerListPagination from './stores/applications/crm/customerManage/customerList/customerListPagination.js'
import customerListFilter from './stores/applications/crm/customerManage/customerList/customerListFilter.js'
import customerListCardExtra from './stores/applications/crm/customerManage/customerList/customerListCardExtra.js'
import addCustomerModal from './stores/applications/crm/customerManage/modal/addCustomerModal.js'
import customerDataReview from './stores/applications/crm/customerManage/customerDataReview.js'
import customerList from './stores/applications/crm/customerManage/customerList.js'
import productWantedModal from './stores/applications/crm/customerManage/modal/productWantedModal.js'
import visitRecordModal from './stores/applications/crm/customerManage/modal/visitRecordModal.js'
import visitRecordWatchModal from './stores/applications/crm/customerManage/modal/visitRecordWatchModal.js'
import bulkImportModal from './stores/applications/crm/customerManage/modal/bulkImportModal.js'
import followRecordModal from './stores/applications/crm/customerManage/modal/followRecordModal.js'
import addVisitCustomerModal from './stores/applications/crm/customerManage/modal/addVisitCustomerModal.js'
import importNewUserModal from './stores/applications/crm/customerManage/modal/importNewUserModal.js'
import goalReachedGeneralMap from './stores/applications/crm/salePlan/goalReachedGeneralMap.js'
import salePlanListFilter from './stores/applications/crm/salePlan/salePlanList/salePlanListFilter.js'
import salePlanListGrid from './stores/applications/crm/salePlan/salePlanList/salePlanListGrid.js'
import salePlanListPagination from './stores/applications/crm/salePlan/salePlanList/salePlanListPagination.js'
import salePlanListVisitRecordModal from './stores/applications/crm/salePlan/salePlanList/salePlanListVisitRecordModal.js'
import salePlanListAddSalePlanModal from './stores/applications/crm/salePlan/salePlanList/salePlanListAddSalePlanModal.js'
import addModalLeftForm from './stores/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'
import addModalRightGrid from './stores/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalRightGrid.js'
import workReportDataCard from './stores/applications/crm/workReport/workReportDataCard.js'
import productAll from './stores/applications/crm/saleCheck/productList/productListAll.js'
import productAllFilter from './stores/applications/crm/saleCheck/productList/productListFilter.js'
import saleProductList from './stores/applications/crm/saleCheck/saleDetail.js'
import saleProductTime from './stores/applications/crm/saleCheck/saleDetail/saleDetailTime.js'
import saleProductPage from './stores/applications/crm/saleCheck/saleDetail/saleCheckpage.js'
import saleTable from './stores/applications/crm/saleCheck/saleDetail/saleTable.js'
import workReportReportList from './stores/applications/crm/workReport/reportList/reportGrid.js'
import reportListFilter from './stores/applications/crm/workReport/reportList/reportListFilter.js'
import reportListPagination from './stores/applications/crm/workReport/reportList/reportListPagination.js'
import addSaleReportModal from './stores/applications/crm/workReport/modal/addSaleReportModal.js'
import groupAchievements from './stores/applications/crm/myGroup/groupAchievements.js'
import toAdminLogin from "./stores/admin/adminLogin.js"
import rightSearch from "./stores/admin/adminMember/rightSearch/rightSearch.js"
import centerSearch from "./stores/admin/adminMember/centerSearch/centerSearch.js"
import memberList from "./stores/admin/adminMember/memberList/memberList.js"
// import addMember from "./stores/admin/adminMember/modal/addMember.js"
import modify from "./stores/admin/adminMember/modal/modify.js"
import memberListPage from "./stores/admin/adminMember/memberPage.js"
import excelModal from "./stores/admin/adminMember/modal/excel.js"
import lotAddModal from "./stores/admin/adminMember/modal/lotAdd.js"
import addBranchModal from "./stores/admin/frameWork/modal/addBranch.js"
import frameWorkList from "./stores/admin/frameWork/rightGrid/rightList.js"
import frameWorkMenue from "./stores/admin/frameWork/leftMenue/leftMenue.js"
import frameWorkRightBth from "./stores/admin/frameWork/rightGrid/rightEdit.js"
import frameWorkPage from "./stores/admin/frameWork/rightGrid/rightPage.js"
import companyInf from "./stores/admin/companyInf/companyInfForm.js"
import getDepartSelectList from "./stores/admin/positionInf/positionInfTop.js"
import getDepartSelectListsInfo from "./stores/admin/positionInf/positionInfleft.js"
import getPowerList from "./stores/admin/power/leftPowerInfo.js"
import appAdminData from "./stores/admin/appAdmin/appAdmin.js"
import processAdminTop from "./stores/admin/processAdmin/processAdminTop/processType.js"
import getProcessAdminList from "./stores/admin/processAdmin/processList/processList.js"
import addRulesModal from "./stores/admin/processAdmin/modal/addRuleModal.js"
import bankList from "./stores/capitalAdmin/accountAdmin/accountCenter/bankList.js"
import outFountData from "./stores/capitalAdmin/OutFount/outFountCenter/outFountList.js"
import inFountData from "./stores/capitalAdmin/InFount/InFountCenter/InFountList.js"
import backFountList from "./stores/capitalAdmin/backFount/backFountCenter/backFountList.js"
import inventory from './stores/invoicing/inventory/inventory.js'
import costControl from './stores/invoicing/costControl/costControl.js'
import directionGrab from './stores/invoicing/directionGrab/directionGrab.js'
import directionImport from './stores/invoicing/directionImport/directionImport.js'
import drugListInfo from './stores/files/medicine/medicine.js'
import drugNameListInfo from './stores/files/medicineName/medicineName.js'
import manufacturerInfo from './stores/files/manufacturer/manufacturer.js'
import manufacturerNameInfo from './stores/files/manufacturerName/manufacturerName.js'
import corporationInfo from './stores/files/corporation/corporation.js'
import corporationNameInfo from './stores/files/corporationName/corporationName.js'
import billingInfo from './stores/files/invoiceCompany/invoiceCompany.js'
import diffBillingInfo from './stores/files/invoiceCompanyName/invoiceCompanyName.js'
import hospitalInfo from './stores/files/hospital/hospital.js'
import editDrugInfo from './stores/invoicing/businessAdmin/businessAdmin.js'
import diffHospitalName from './stores/files/hospitalName/hospitalName.js'
import agentInfo from './stores/files/agent/agent.js'
import costPolicy from './stores/files/costPolicy/costPolicy.js'

let initState = {
	global,
	topMenu,
	//工作页面
	workSider,
	//工作-企业列表
	companyList,
	companyLoginModel,
	createCompanyModel,
	//工作-审批
	approval,
	topStateBar,
	approvalFilter,
	approvalPagination,
	approvalNameModel,
	approvalOrderModel,
	approvalOpinionModel,
	//工作-部门
	department,
	//个人设置
	selfSetting,
	companySetting,
	//应用
	appsPanel,
	appDetailModel,
	//CRM应用-客户管理
	customerListPagination,
	customerListFilter,
	customerListCardExtra,
	addCustomerModal,
	customerDataReview,
	customerList,
	productWantedModal,
	visitRecordModal,
	visitRecordWatchModal,
	bulkImportModal,
	followRecordModal,
	addVisitCustomerModal,
	importNewUserModal,
	//CRM应用-销售计划
	goalReachedGeneralMap,
	salePlanListFilter,
	salePlanListGrid,
	salePlanListPagination,
	salePlanListVisitRecordModal,
	salePlanListAddSalePlanModal,
	addModalLeftForm,
	addModalRightGrid,
	//CRM应用-工作汇报
	workReportDataCard,
	// CRM应用-销量查看
	productAll,
	productAllFilter,
	saleProductList,
	saleProductTime,
	saleProductPage,
	workReportReportList,
	reportListFilter,
	reportListPagination,
	addSaleReportModal,
	groupAchievements,
	saleTable,
	//管理员-员工管理
	toAdminLogin,
	rightSearch,
	centerSearch,
	memberList,
	// addMember,
	modify,
	memberListPage,
	lotAddModal,
	excelModal,
	addBranchModal,
	frameWorkList,
	frameWorkMenue,
	frameWorkRightBth,
	frameWorkPage,
	companyInf,
	getDepartSelectList,
	getDepartSelectListsInfo,
	getPowerList,
	appAdminData,
	processAdminTop,
	getProcessAdminList,
	addRulesModal,
	bankList,
	//进销存
	outFountData,
	inFountData,
	backFountList,
	inventory,
	//进销存-直营-费用管理
	costControl,
	directionGrab,
	directionImport,
	drugListInfo,
	drugNameListInfo,
	manufacturerInfo,
	manufacturerNameInfo,
	corporationInfo,
	corporationNameInfo,
	billingInfo,
	diffBillingInfo,
	hospitalInfo,
	//进销存-直营-业务管理
	editDrugInfo,
	diffHospitalName,
	agentInfo
}

initState.changePsw = {
	phone: null,
	step: 0,
	codeButtonValue: '获取验证码',
	codeButtonDisabled: false,
	img: {
		logo: '/imgs/login/logo-white-with-letter.png',
		caption: '/imgs/login/login-caption-pic.png'
	},
}

let store = createStore(combineReducers(reducers), initState, applyMiddleware(thunk));

export default store;