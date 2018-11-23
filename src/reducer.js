/*
 * @Author: lcj
 * @Date:   2017-07-25 08:41:23

 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 08:54:16

 */

import global from './reducers/global.js'
import changePsw from './reducers/changePsw.js'
import topMenu from './reducers/topMenu.js'
import workSider from './reducers/work/workSider.js'
import companyList from './reducers/work/companyList.js'
import companyLoginModel from './reducers/work/companyList/companyLoginModel.js'
import createCompanyModel from './reducers/work/companyList/createCompanyModel.js'
import approval from './reducers/work/approval.js'
import topStateBar from './reducers/work/approval/topStateBar.js'
import approvalFilter from './reducers/work/approval/filter.js'
import approvalPagination from './reducers/work/approval/pagination.js'
import approvalNameModel from './reducers/work/approval/approvalCard/nameModel.js'
import approvalOrderModel from './reducers/work/approval/approvalCard/orderModel.js'
import approvalOpinionModel from './reducers/work/approval/approvalCard/approvalOpinionModel.js'
import department from './reducers/work/department.js'
import selfSetting from './reducers/selfSetting.js'
import companySetting from './reducers/companySetting.js'
import appsPanel from './reducers/apps/appsPanel.js'
import appDetailModel from './reducers/apps/appDetailModel.js'
import customerListPagination from './reducers/applications/crm/customerManage/customerList/customerListPagination.js'
import customerListFilter from './reducers/applications/crm/customerManage/customerList/customerListFilter.js'
import customerListCardExtra from './reducers/applications/crm/customerManage/customerList/customerListCardExtra.js'
import addCustomerModal from './reducers/applications/crm/customerManage/modal/addCustomerModal.js'
import customerDataReview from './reducers/applications/crm/customerManage/customerDataReview.js'
import customerList from './reducers/applications/crm/customerManage/customerList.js'
import productWantedModal from './reducers/applications/crm/customerManage/modal/productWantedModal.js'
import visitRecordModal from './reducers/applications/crm/customerManage/modal/visitRecordModal.js'
import visitRecordWatchModal from './reducers/applications/crm/customerManage/modal/visitRecordWatchModal.js'
import bulkImportModal from './reducers/applications/crm/customerManage/modal/bulkImportModal.js'
import followRecordModal from './reducers/applications/crm/customerManage/modal/followRecordModal.js'
import addVisitCustomerModal from './reducers/applications/crm/customerManage/modal/addVisitCustomerModal.js'
import importNewUserModal from './reducers/applications/crm/customerManage/modal/importNewUserModal.js'
import goalReachedGeneralMap from './reducers/applications/crm/salePlan/goalReachedGeneralMap.js'
import salePlanListFilter from './reducers/applications/crm/salePlan/salePlanList/salePlanListFilter.js'
import salePlanListGrid from './reducers/applications/crm/salePlan/salePlanList/salePlanListGrid.js'
import salePlanListPagination from './reducers/applications/crm/salePlan/salePlanList/salePlanListPagination.js'
import salePlanListVisitRecordModal from './reducers/applications/crm/salePlan/salePlanList/salePlanListVisitRecordModal.js'
import salePlanListAddSalePlanModal from './reducers/applications/crm/salePlan/salePlanList/salePlanListAddSalePlanModal.js'
import addModalLeftForm from './reducers/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'
import addModalRightGrid from './reducers/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalRightGrid.js'
import workReportDataCard from './reducers/applications/crm/workReport/workReportDataCard.js'
import productAll from './reducers/applications/crm/saleCheck/productList/productListAll.js'
import productAllFilter from './reducers/applications/crm/saleCheck/productList/productListFilter.js'
import saleProductList from './reducers/applications/crm/saleCheck/saleDetail.js'
import saleProductTime from './reducers/applications/crm/saleCheck/saleDetail/saleDetailTime.js'
import saleProductPage from './reducers/applications/crm/saleCheck/saleDetail/saleCheckpage.js'
import saleTable from './reducers/applications/crm/saleCheck/saleDetail/saleTable.js'
import workReportReportList from './reducers/applications/crm/workReport/reportList/reportGrid.js'
import reportListFilter from './reducers/applications/crm/workReport/reportList/reportListFilter.js'
import reportListPagination from './reducers/applications/crm/workReport/reportList/reportListPagination.js'
import addSaleReportModal from './reducers/applications/crm/workReport/modal/addSaleReportModal.js'
import groupAchievements from './reducers/applications/crm/myGroup/groupAchievements.js'
import toAdminLogin from './reducers/admin/adminLogin.js'
import rightSearch from './reducers/admin/adminMember/rightSearch/rightSearch.js'
import centerSearch from "./reducers/admin/adminMember/centerSearch/centerSearch.js"
import memberList from "./reducers/admin/adminMember/memberList/memberList.js"
import addBranchModal from "./reducers/admin/frameWork/modal/addBranch.js"

// import addMember from "./reducers/admin/adminMember/modal/addMember.js"
import modify from "./reducers/admin/adminMember/modal/modify.js"
import memberListPage from "./reducers/admin/adminMember/memberPage.js"
import excelModal from "./reducers/admin/adminMember/modal/excel.js"
import lotAddModal from "./reducers/admin/adminMember/modal/lotAdd.js"
import frameWorkList from "./reducers/admin/frameWork/rightGrid/rightList.js"
import frameWorkMenue from "./reducers/admin/frameWork/leftMenue/leftMenue.js"
import frameWorkRightBth from "./reducers/admin/frameWork/rightGrid/rightEdit.js"
import frameWorkPage from "./reducers/admin/frameWork/rightGrid/rightPage.js"
import companyInf from "./reducers/admin/companyInf/companyInfForm"
import getDepartSelectList from "./reducers/admin/positionInf/positionInfTop.js"
import getDepartSelectListsInfo from "./reducers/admin/positionInf/positionInfleft.js"
import getPowerList from "./reducers/admin/power/leftPowerInfo.js"
import appAdminData from "./reducers/admin/appAdmin/appAdmin.js"
import processAdminTop from"./reducers/admin/processAdmin/processAdminTop/processType.js"
import getProcessAdminList from "./reducers/admin/processAdmin/processList/processList.js"
import addRulesModal from "./reducers/admin/processAdmin/modal/addRuleModal.js"
import bankList from "./reducers/capitalAdmin/accountAdmin/accountCenter/bankList.js"
import outFountData from "./reducers/capitalAdmin/OutFount/outFountCenter/outFountList.js"
import inFountData from "./reducers/capitalAdmin/inFount/inFountCenter/inFountList.js"
import backFountList from "./reducers/capitalAdmin/backFount/backFountCenter/backFountList.js"
import inventory from './reducers/invoicing/inventory/inventory.js'
import costControl from './reducers/invoicing/costControl/costControl.js'
import directionGrab from './reducers/invoicing/directionGrab/directionGrab.js'
import directionImport from './reducers/invoicing/directionImport/directionImport.js'
import drugListInfo from './reducers/files/medicine/medicine.js'
import drugNameListInfo from './reducers/files/medicineName/medicineName.js'
import manufacturerInfo from './reducers/files/manufacturer/manufacturer.js'
import manufacturerNameInfo from './reducers/files/manufacturerName/manufacturerName.js'
import corporationInfo from './reducers/files/corporation/corporation.js'
import corporationNameInfo from './reducers/files/corporationName/corporationName.js'
import billingInfo from './reducers/files/invoiceCompany/invoiceCompany.js'
import diffBillingInfo from './reducers/files/invoiceCompanyName/invoiceCompanyName.js'
import hospitalInfo from './reducers/files/hospital/hospital.js'
import editDrugInfo from './reducers/invoicing/businessAdmin/businessAdmin.js'
import diffHospitalName from './reducers/files/hospitalName/hospitalName.js'
import agentInfo from './reducers/files/agent/agent.js'
import costPolicy from './reducers/files/costPolicy/costPolicy.js'

export {
	global,
	changePsw,
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
	//CRM应用-销售检查
	productAll,
	productAllFilter,
	saleProductList,
	saleProductTime,
	saleProductPage,
    saleTable,
	workReportReportList,
	reportListFilter,
	reportListPagination,
	addSaleReportModal,
	groupAchievements,
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
    outFountData,
    inFountData,
    backFountList,
    //进销存
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
	agentInfo,
	costPolicy
};