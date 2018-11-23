    import React from 'react'
import { connect } from 'react-redux'
import { Card, Input, Button, Form, Icon } from 'antd'
import Grid from '../../../common/Grid.jsx'
import BusinessCompanyModal from './businessCompanyModal.jsx'
import MakeInvoiceCompanyModel from './makeInvoiceCompanyModel.jsx'
import MedicineAgentModel from './medicineAgentModel.jsx'
import MedincineOperationModel from './medincineOperationModel.jsx'
import * as actionCreater from "../../../../actions/files/medicine/medicine.js"

export class AgentTableBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs(),
            drugsListInfo:[]
        }
    }

    componentWillMount() {
        const data = {
            page: -1,
            limit: 10
        }
        this.props.getDrugList(data);
        console.log(this.props.drugsListInfo)
    }

   
    componentDidMount(){    
         console.log(this.props.drugsListInfo);
       

    }

    componentWillReceiveProps(nextProps){
         var drugsListInfo = [];
        console.log(nextProps.drugsListInfo);
        drugsListInfo = nextProps.drugsListInfo.data;
        var that = this;
        drugsListInfo.map(function(item){
            switch(item.unit){
                case'1':
                item.unit = '盒'
                break;
                case'2':
                item.unit = '件'
                break;
                case'3':
                item.unit = '瓶'
                break;
                case'4':
                item.unit = '支'
                break;
            }
            console.log(item.gmp_expire_time);
            var gmpDate = that.getChangeDate(item.gmp_expire_time);
            var businessDate = that.getChangeDate(item.business_license_expire_time);
            var productionDate = that.getChangeDate(item.production_expire_time);
            var proxyDate = that.getChangeDate(item.proxy_expire_time);

            // this.getChangeDate = that.getChangeDate.bind(this);
          
            item.gmp_expire_time =  gmpDate;
            item.business_license_expire_time =  businessDate;
            item.production_expire_time =  productionDate;
            item.proxy_expire_time =  proxyDate;
            
            
        })
        this.setState({
            drugsListInfo:drugsListInfo
        })
    
    }

    componentDidUpdate(){

    }
    // componentWillUpdate(){
       
    // }
     getChangeDate(date){
        var date = new Date( date *1000)
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return(date = year+"-"+month+"-"+strDate);
    }

    createColumnDefs() {
        return [
            {
                headerName: "药品编号",
                field: 'drug_id',
                width: 100,

            },
            {
                headerName: "药品名",
                field: 'drug_name',
                width: 100,

            },
            {
                headerName: "剂型",
                field: 'dosage',
                width: 100,

            },
            {
                headerName: "规格",
                field: 'specification',
                width: 100,

            },
            {
                headerName: "计量单位",
                field: 'unit',
                width: 100,

            },
            {
                headerName: "生产厂家",
                field: 'manufacturer_id',
                width: 100,

            },
            {
                headerName: "代理商",
                field: 'agent_name',
                width: 100,
                cellRendererFramework: MedicineAgentModel,
            },
            {
                headerName: "开票公司",
                field: 'company_billing',
                width: 100,
                cellRendererFramework: MakeInvoiceCompanyModel,
            },
            {
                headerName: "商业公司",
                field: 'company_delive',
                width: 100,
                cellRendererFramework: BusinessCompanyModal,
            },
            {
                headerName: "中标类型",
                field: 'bid_type',
                width: 100,

            },
            {
                headerName: "参考中标价",
                field: 'bid_price',
                width: 100,
            },
            {
                headerName: "零售价",
                field: 'retail_price',
                width: 100,
            },
            {
                headerName: "开票价",
                field: 'invoice_price',
                width: 100,
            },
            {
                headerName: "税票价",
                field: 'tax_price',
                width: 100,

            },
            {
                headerName: "底价",
                field: 'base_price',
                width: 100,

            },
            {
                headerName: "其他费用",
                field: 'if_distribution',
                width: 100,

            },
            {
                headerName: "是否停用",
                field: 'if_disabled',
                width: 100,

            },
            {
                headerName: "省级医保代码",
                field: 'province_medicare_code',
                width: 100,

            },
            {
                headerName: "国家医保代码",
                field: 'floor_price',
                width: 100,
            },
            {
                headerName: "国家医保代码",
                field: 'country_medicare_code',
                width: 100,

            },
            {
                headerName: "营业执照代码",
                field: 'business_license_code',
                width: 100,

            },
            {
                headerName: "营业执照过期日期",
                field: 'isable',
                width: 100,

            },
            {
                headerName: "省级医保代码",
                field: 'business_license_expire_time',
                width: 100,

            },
            {
                headerName: "GMP代码",
                field: 'gmp_code',
                width: 100,

            },
            {
                headerName: "GMP过期日期",
                field: 'gmp_expire_time',
                width: 100,

            },
            {
                headerName: "生产许可证",
                field: 'production_license',
                width: 100,

            },
            {
                headerName: "生产许可证过期日期",
                field: 'production_expire_time',
                width: 100,

            },
            {
                headerName: "委托书",
                field: 'proxy',
                width: 100,

            },
            {
                headerName: "委托书过期时间",
                field: 'proxy_expire_time',
                width: 100,
            },
            {
                headerName: "协议区域",
                field: 'protocol_region',
                width: 100,
            },
            {
                headerName: "创建人",
                field: 'creator_id',
                width: 100,
            },
            {
                headerName: "创建人姓名",
                field: 'creator_name',
                width: 100,
            },
            {
                headerName: "创建时间",
                field: 'create_time',
                width: 100,
            },
            {
                headerName: "备注",
                field: 'drug_remark',
                width: 100,
            },
            {
                headerName: "操作",
                field: 'operation',
                cellRendererFramework: MedincineOperationModel,
                width: 100,
            },
        ]
    }

    getRowData(value) {
        //onsole.log('sssssss',value)
    }

    render() {
        const containerStyle = {
            minHeight: window.screen.availHeight - 530 + 'px',
        }
        return (
            <div>
                <Grid
                    defaultColDef={{
                        enableRowGroup: true,
                    }}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.drugsListInfo ? this.state.drugsListInfo : []}
                    containerStyle={containerStyle}
                >
                </Grid>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //获取药品列表
        getDrugList: (params) => dispatch(actionCreater.getDrugListInfo(params)),
    }
}

function mapStateToProps(state) {
    
    return {

        //获取药品信息
        drugsListInfo: state.drugListInfo.drugList,
        //搜索药品信息
        searchDrugInfo: state.drugListInfo.searchDrugInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentTableBox)