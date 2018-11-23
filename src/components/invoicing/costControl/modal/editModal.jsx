
import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Steps,Table,Col,Row,DatePicker ,Select,Input,Radio } from 'antd'
import {formatDate,exportDate} from '../../../../utils/common.js'
import * as actionCreater from "../../../../actions/invoicing/costControl/costControl.js"
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const dataSource= [{
    "id":1,
    "employee_name": "大刚",
    "service_month": "2017-08",
    "unpaid_money": "26400",
    "sales_list": [{
        "son_id":1,
        "drug_name":"生血宝合剂1",
        "specification":"500ml/瓶",
        "dosage":"药剂",
        "unit":"瓶",
        "manufacturer_name":"幸福制药",
        "hospital_name":"杭州117武警医院",
        "hospital_policy_rate":0.05,
        "sales_amount":1000,
        "bid_price":20,
        "gross_sales":"30000",
        "drug_unpaid_money":"5000"
    },
        {
            "son_id":2,
            "drug_name":"生血宝合剂1",
            "specification":"500ml/瓶",
            "dosage":"药剂",
            "unit":"瓶",
            "manufacturer_name":"幸福制药",
            "hospital_name":"杭州117武警医院",
            "hospital_policy_rate":0.05,
            "sales_amount":1000,
            "bid_price":20,
            "gross_sales":"30000",
            "drug_unpaid_money":"5000"
        }]
},{
    "id":1,
    "employee_name": "花花",
    "service_month": "2017-08",
    "unpaid_money": "26400",
    "sales_list": [{
        "son_id":1,
        "drug_name":"生血宝合剂2",
        "specification":"500ml/瓶",
        "dosage":"药剂",
        "unit":"瓶",
        "manufacturer_name":"幸福制药",
        "hospital_name":"杭州117武警医院",
        "hospital_policy_rate":0.05,
        "sales_amount":1000,
        "bid_price":20,
        "gross_sales":"30000",
        "drug_unpaid_money":"5000"
    },
        {
            "son_id":2,
            "drug_name":"生血宝合剂2",
            "specification":"500ml/瓶",
            "dosage":"药剂",
            "unit":"瓶",
            "manufacturer_name":"幸福制药",
            "hospital_name":"杭州117武警医院",
            "hospital_policy_rate":0.05,
            "sales_amount":1000,
            "bid_price":20,
            "gross_sales":"30000",
            "drug_unpaid_money":"5000"
        }]
},{
    "id":1,
    "employee_name": "花花",
    "service_month": "2017-08",
    "unpaid_money": "26400",
    "sales_list": [{
        "son_id":1,
        "drug_name":"生血宝合剂3",
        "specification":"500ml/瓶",
        "dosage":"药剂",
        "unit":"瓶",
        "manufacturer_name":"幸福制药",
        "hospital_name":"杭州117武警医院",
        "hospital_policy_rate":0.05,
        "sales_amount":1000,
        "bid_price":20,
        "gross_sales":"30000",
        "drug_unpaid_money":"5000"
    },
        {
            "son_id":2,
            "drug_name":"生血宝合剂3",
            "specification":"500ml/瓶",
            "dosage":"药剂",
            "unit":"瓶",
            "manufacturer_name":"幸福制药",
            "hospital_name":"杭州117武警医院",
            "hospital_policy_rate":0.05,
            "sales_amount":1000,
            "bid_price":20,
            "gross_sales":"30000",
            "drug_unpaid_money":"5000"
        }]
}]
export class SelectCell extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            val:"",
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

       if(this.state.val!=nextState.val){
           console.log("nest",nextState.val)
           this.props.onChange(nextState.val)
       }
       return true
    }
    handleSelect(value){
       this.setState({
           val:value
       })

    }
    render(){
        return (
            <div>
                <Select defaultValue="1"  onChange={this.handleSelect.bind(this)}>
                    <Option value="1">隔1个月</Option>
                    <Option value="2">隔2个月</Option>
                    <Option value="3">隔3个月</Option>
                    <Option value="4">隔4个月</Option>
                    <Option value="5">隔5个月</Option>
                    <Option value="6">隔6个月</Option>
                    <Option value="7">隔7个月</Option>
                    <Option value="8">隔8个月</Option>
                    <Option value="9">隔9个月</Option>
                    <Option value="10">隔10个月</Option>
                    <Option value="11">隔11个月</Option>
                    <Option value="12">隔12个月</Option>
                </Select>
            </div>
        )
    }
}
export class SeeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            dataZhi:[],
            interval:2,
            rightData:[],
            radioVal:1,
            employee_id:"",
            employee_name:"",
            telephone:"",
            employee_bank_account:"",
            service_month:"",
            unpaid_money:"",
            pay_month:"",
            start_time:"",
            end_time:"",
            sale_time:"",
        }
    }
    componentWillMount(){
        //点击弹框打开时候请求业务人员存store,在这里把业务人员的第一个默认加入state//得到第一个业务人员后请求列表
               /* this.setState({
                    employee_id:this.props.memberData[0].employee_id,
                    employee_name:this.props.memberData[0].employee_name,
                    telephone:this.props.memberData[0].telephone,
                    employee_bank_account:this.props.memberData[0].employee_bank_account,
                   /!* service_month:this.props.memberData[0].employee_id,
                    unpaid_money:this.props.memberData[0].employee_id,
                    pay_month:this.props.memberData[0].employee_id,
                    sale_time:this.props.memberData[0].employee_id,*!/
                },()=>{
                    //请求列表数据并且存入store{....参数}




                })*/










        //列表数据加入state
        let count=1
        let countOne=1
        const allData=this.props.data;
        let rightDrug=[];
        for(let i=0;i<allData.length;i++){
            allData[i].key=count++
            allData[i].pay_month=this.getNextMonth.call(this, allData[i].service_month,this.state.interval)
        }
        //右边的数据也加入store
        rightDrug=allData[0].sales_list
        for(let i=0;i<rightDrug.length;i++){
            rightDrug[i].key=countOne++
        }
       this.setState({
           dataZhi:allData,
           rightData:rightDrug
       })










    }
    closeModal(){
        this.props.openModal(false,0)
    }
    saveCloseModal(){
          this.props.openModal(false,0)
    }
    makeOptions(options){
        const Obj={};
        if(options){
            for(let i=0;i<options.length;i++){
                 Obj[options[i].employee_id]=options[i].employee_name
            }
            let keys=Object.keys(Obj)
            return keys.map((key,i)=> {
              return  <Option value={key} key={i}>
                    {Obj[key]}
                </Option>
            })
        }
    }
    makeRoles(options){
        let index={}
        let a=[]
        let b=[]
        options.map(key=>{
            for(var ind in key){
                a.push(key[ind])
            }
            b.push(a)
            a=[]

        })
        let result = {}
        for (let i = 0; i < b.length; i++) {
            result[b[i][0]] = b[i][1]
        }
        return result
    }
   getNextMonth(date,interval) {
        console.log('date',date)
        var arr = date.split('-');
        var year = arr[0]; //获取当前日期的年份
        var month = arr[1]; //获取当前日期的月份
        // var day = arr[2]; //获取当前日期的日
        var days = new Date(year, month, 0);
        days = days.getDate(); //获取当前日期中的月的天数
        var year2 = year;
        var month2 = parseInt(month) + interval;
        if (month2 >=13) {
            year2 = parseInt(year2) + 1;
            month2 =parseInt(month) + interval-12 ;//月份
        }

        if (month2 < 10) {
            month2 = '0' + month2;
        }

        var t2 = year2 + '-' + month2 ;
        return t2;
    }

    handleCallBack(key,value){
        //在这里添加其他传入的参数
        console.log('hanVue',value)
         const allZhi=this.state.dataZhi;
         for(let i=0;i<allZhi.length;i++){
             if(allZhi[i].key==key){
                 allZhi[i].pay_month= this.getNextMonth.call(this,allZhi[i].service_month,parseInt(value)+1)
             }
         }
         this.setState({
             dataZhi:allZhi
         })
    }
    handleRadio(e){
        //设置其他要传的参数
        this.setState({
            radioVal:e.target.value
        })
        const dataAll=this.state.dataZhi
        let right=[];
        let num=1
           for(let i=0;i<dataAll.length;i++){
               if(dataAll[i].key==e.target.value){
                   right=dataAll[i].sales_list
               }
           }
           for(let i=0;i<right.length;i++){
               right[i].key=num++
           }
           this.setState({
               rightData:right
           })

    }
    handlePeople(){

    }
    changeArr(obj){
        const arr=[]
        arr.push(obj)
        return arr
    }
    render(){
        const width=window.screen.avaiWidth>700 ? 400:"70%";

        const columns = [{
            title: '',
            dataIndex: 'option',
            key: 'option',
            render:(text,record)=>{
                return <Radio value={record.key}></Radio>
            }
        },{
            title: '序号',
            dataIndex: 'key',
            key: 'key',
        }, {
            title: '付款间隔',
            dataIndex: 'interval_time',
            key: 'interval_time',
            render:(text,record)=>{
                console.log("12",record.key)
                return  <SelectCell interval={this.state.interval} onChange={value=>this.handleCallBack.call(this,record.key,value)}/>
            }
        }, {
            title: '业务员',
            dataIndex: 'employee_name',
            key: 'employee_name',
        }, {
            title: '业务月份',
            dataIndex:"service_month",
            key: 'service_month',
        },{
            title: '未支付金额',
            dataIndex:"unpaid_money",
            key: 'unpaid_money',
        },{
            title: '支付月份',
            dataIndex:"pay_month",
            key: 'pay_month',
          /*  render:(text,record)=>{
              return this.getNextMonth.call(this,record.service_month,this.state.interval)
            }*/
        },];
        const rightColumns=[{
            title: '序号',
            dataIndex:"key",
            key: 'key',
        },{
            title: '产品名称',
            dataIndex:"drug_name",
            key: 'drug_name',
        },{
            title: '产品规格',
            dataIndex:"specification",
            key: 'specification',
        },{
            title: '产品剂型',
            dataIndex:"dosage",
            key: 'dosage',
        },{
            title: '计量单位',
            dataIndex:"unit",
            key: 'unit',
        },{
            title: '生产厂家',
            dataIndex:"manufacturer_name",
            key: 'manufacturer_name',
        },{
            title: '销售医院',
            dataIndex:"hospital_name",
            key: 'hospital_name',
        },{
            title: '政策',
            dataIndex:"hospital_policy_rate",
            key: 'hospital_policy_rate',
        },{
            title: '付款月销量',
            dataIndex:"sales_amount",
            key: 'sales_amount',
        },{
            title: '销售单价',
            dataIndex:"bid_price",
            key: 'bid_price',
        },{
            title: '销售总额',
            dataIndex:"gross_sales",
            key: 'gross_sales',
        },{
            title: '付款月支付金额',
            dataIndex:"drug_unpaid_money",
            key: 'drug_unpaid_money',
        },]
        //用参数做最下面的一块
        const paramsColumnd=[{
            title: '业务员',
            dataIndex:"employee_name",
            key: 'employee_name',
        },{
            title: '联系方式',
            dataIndex:"telephone",
            key: 'telephone',
        },{
            title: '开户账号',
            dataIndex:"employee_bank_account",
            key: 'employee_bank_account',
        },{
            title: '业务月份',
            dataIndex:"service_month",
            key: 'service_month',
        },{
            title: '需支付金额',
            dataIndex:"unpaid_money",
            key: 'unpaid_money',
        },{
            title: '支付月份',
            dataIndex:"pay_month",
            key: 'pay_month',
        }]


        return (
                <Modal
                    title={this.props.modalType==0?"修改支付单":"添加支付单"}
                    visible={this.props.addVisible}
                    footer={null}
                    width={width}
                    onCancel={this.closeModal.bind(this)}
                >

                        {/*<Table columns={columns}  dataSource={data} pagination={false} />*/}
                        <Row style={{borderBottom:"1px solid #e9e9e9",paddingBottom:"16px"}}>
                            <Col span={10}>
                                <Row>
                                    <Col span={4} style={{lineHeight:"28px"}}>审核类型</Col>
                                    <Col span={16}>
                                        <RangePicker value={[this.state.start_time,this.state.end_time]} format="YYYY/MM" CustoMForat="YYYY/MM"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={12}>
                                <Col span={9}>
                                    <Row>
                                        <Col span={8} style={{lineHeight:"28px"}}>业务员</Col>
                                        <Col span={16}>
                                            <Select  style={{width:"80px"}} defaultValue={this.props.paramsData.employee_id} onChange={this.handlePeople.bind(this)}>
                                                {this.makeOptions.call(this,this.props.memberData)}
                                            </Select>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={15}>
                                    <Row>
                                        <Col span={19}>
                                            <Input/>
                                        </Col>
                                        <Col span={5} style={{textAlign:"right"}}>
                                            <Button className="mainButton"><Icon type="search"/></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                         <div style={{padding:"16px 0"}}>
                             <Row type="flex" justify="space-between">
                                 <Col span={11}>
                                     <Card>
                                         <RadioGroup  value={this.state.radioVal}  onChange={this.handleRadio.bind(this)}>
                                             <Table dataSource={this.state.dataZhi}  columns={columns} pagination={false}   scroll={{ x: '130%'}}/>
                                         </RadioGroup>
                                     </Card>
                                 </Col>
                                 <Col span={11}>
                                     <Card>
                                         <Table dataSource={this.state.rightData}  columns={rightColumns} pagination={false}   scroll={{ x: '300%'}}/>
                                     </Card>
                                 </Col>
                             </Row>
                         </div>
                    <Card>
                        {/*参数变为数组*/}
                        <Table dataSource={this.changeArr.call(this,this.props.paramsData)}  columns={paramsColumnd} pagination={false} />
                    </Card>
                    <div style={{textAlign:"center",margin:"40px 0"}}>
                        <Button onClick={this.closeModal.bind(this)} style={{marginRight:"40px"}}>返回</Button>
                        <Button onClick={this.saveCloseModal.bind(this)} className="mainButton">保存</Button>
                    </div>
                </Modal>
        )
    }
}
const peopleData=[{
    "employee_id": "1",
    "employee_name": "大刚",
    "telephone":"1300000000",
    "employee_bank_account":"6222021001003344"
},
{
    "employee_id": "3",
    "employee_name": "花花",
    "telephone":"1300000000",
    "employee_bank_account":"6222021001003344"
}]
function mapStateToProps(state){
    return{
        addVisible:state.costControl.addVisible,
        modalType:state.costControl.modalType,
        data:dataSource,
        memberData:peopleData,
        paramsData:state.costControl.paramsData

    }
}
function mapDispatchToProps(dispatch){
    return{
        openModal:(visible,type)=>(dispatch(actionCreater.costControlAdd(visible,type)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SeeModal)