import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Button,Form,Icon,Table,Select,DatePicker,Upload,message} from 'antd'
import {formatDate,exportDate} from '../../../../utils/common.js'
const Option = Select.Option;
import {uploadVoucher,savePayments} from "../../../../utils/interface.js"
import moment from 'moment';
import * as actionCreater from "../../../../actions/capitalAdmin/outFount/outFountCenter/outFountList.js"
import Grid from '../../../common/Grid.jsx'

export class BottomUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            changeWord:0,
            loading:false,
            value:this.props.value,
            display:this.props.oneData,
            fileList:[],
            uploadFile:null
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value!=nextProps.value||this.props.oneData!=nextProps.oneData){
            this.setState({
                value:nextProps.value,
                display:nextProps.oneData,
                changeWord:0
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.value!=nextState.value){
            this.props.onChange(nextState.value)
        }
        return true
    }
    beforeUpload(file){
        let type = file.type;
        if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/jpg' && type !== 'image/gif') {
            message.error('所上传的格式不正确!');
            return false;
        }
        if (file.size / 1024 / 1024 > 2) {
            message.error('图片大小不可超过2M!');
            return false;
        }

        this.setState({
            uploadFile: file,
            loading:true
        },()=>{
            console.log('fileaaa',this.state.uploadFile)
            function cb(res) {
                if (res.error_code === GLOBALSUCCESS) {
                    console.log('data',res)
                    this.setState({
                        value: res.data,
                        loading:false,
                        changeWord:1,
                    })
                    message.success('上传凭证成功')
                }
            }
            uploadVoucher(this.state.uploadFile, cb.bind(this))
        })
    }
    handleChange(file){

    }
    render(){
        let isShow=""
        if(this.state.display.controlUpload==0){
            isShow="none"
        }else{
            isShow="block"
        }
        return (
            <div>
                <Upload
                    name="load"
                    beforeUpload={this.beforeUpload.bind(this)}
                    // showUploadList={{showPreviewIcon:false}}
                    // fileList={this.state.fileList}
                    showUploadList={false}
                    onChange={this.handleChange.bind(this)}>
                    <Button
                        loading={this.state.loading}
                    >{
                        this.state.changeWord==0? "点击上传":"已上传成功"
                    }
                    </Button>
                </Upload>
                <p className="redColor" style={{display:isShow}}>请上传凭证</p>
            </div>
        )
    }
}
export class BottomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:this.props.value,
            display:this.props.oneData
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value!=nextProps.value||this.props.oneData!=nextProps.oneData){
            this.setState({
                value:nextProps.value,
                display:nextProps.oneData
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.value!=nextState.value){
            this.props.onChange(nextState.value)
        }
        return true
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        let isShow=""
        if(this.state.display.controlUpload==0){
            isShow="none"
        }else{
            isShow="block"
        }
        return (<div>
            <Input onChange={this.handleChange.bind(this)} value={this.state.value} placeholder="请输入..."/>
            <p className="redColor" style={{display:isShow}}>请输入打款凭证编号</p>
        </div>)
    }
}
// BottomDate
export class BottomDate extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:this.props.value,
            display:this.props.oneData
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value!=nextProps.value||this.props.oneData!=nextProps.oneData){
            this.setState({
                value:nextProps.value,
                display:nextProps.oneData
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        // if(this.state.value!=nextState.value){

        // }
        return true
    }
    handleChange(date){
        console.log('date',date)
        this.setState({
            value:date
        },()=>{
            this.props.onChange(this.state.value)
        })
    }
    render(){
        let isShow=""
        if(this.state.display.controlTime==0){
            isShow="none"
        }else{
            isShow="block"
        }
        return (<div>
            <DatePicker onChange={this.handleChange.bind(this)} placeholder="请选择..." />
            <p className="redColor" style={{display:isShow}}>请输入打款日期</p>
        </div>)
    }
}
export class CellInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:this.props.value,
            display:this.props.oneData
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value!=nextProps.value||this.props.oneData!=nextProps.oneData){
            this.setState({
                value:nextProps.value,
                display:nextProps.oneData
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        /* if(this.state.value!=nextState.value){
             this.props.onChange(nextState.value)
         }*/
        return true
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        },()=>{
            this.props.onChange(this.state.value)
        })
    }
    render(){
        let isShow=""
        if(this.state.display.show==0){
            isShow="none"
        }else{
            isShow="block"
        }
        return (<div>
            <Input onChange={this.handleChange.bind(this)} value={this.state.value} placeholder="请输入..."/>
            <p className="redColor" style={{display:isShow}}>请输入实付金额</p>
        </div>)
    }
}


export class CellSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:this.props.text,
            display:this.props.oneData
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value!=nextProps.text||this.props.oneData!=nextProps.oneData){
            this.setState({
                value:0,
                display:nextProps.oneData
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.value!=nextState.value){

        }
        return true
    }
    handleSelect(val){
        if(val!=""){
            this.setState({
                value:val
            },()=>{
                this.props.onChange(this.state.value)
            })
        }
    }
    makeOption(arr){
        return arr.map((value,key)=>{

            return <Option key={key} value={JSON.stringify(value)}>{value.account_user}</Option>
        })
    }
    render(){
        /* pay_account_user:"",
                    pay_account_name:"",
                    pay_bank_account:"333",//支付*/
        let isShow=""
        if(this.state.display.showSelected==0){
            isShow="none"
        }else{
            isShow="block"
        }
        console.log('aa',this.state.value)
        return (
            <div>
                <Select  onChange={this.handleSelect.bind(this)} value={this.state.value}  placeholder="请选择" style={{minWidth:"120px"}}>
                    {this.makeOption.call(this,this.props.data)}
                </Select>
                <p className="redColor" style={{display:isShow}}>请选择支付账户</p>
            </div>
        )
    }
}
export class outFountList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            zhiTop:this.props.topZhi,
            centerZhi: [],
            selectedData:[],
            /*realPay:"none",
            realAccount:"none",*/
            needData:[],

        }
    }
    componentWillMount(){
        //中间部分存入store等修改input/支付账户的时候添加
        this.props.getData()

        let changeData=this.props.detailData;
        console.log("sssssgggggg",changeData)
        let count=1
        for(let i=0;i<changeData.length;i++){
            changeData[i].key=count++;
            changeData[i].show=0;
            changeData[i].showSelected=0;
            changeData[i].numbering=0
            changeData[i].controlTime=0
            changeData[i].controlUpload=0
        }
        let topKey=1
        let topShu=this.state.zhiTop
        for(let i=0;i<topShu.length;i++){
            topShu[i].key=topKey++;
        }

        this.setState({
            centerZhi:changeData,
            zhiTop:topShu
        },()=>{
            console.log("mm",this.state.centerZhi)
        })
    }

    closeModal(){
        const deleteClose=this.state.centerZhi
        for(let i=0;i<deleteClose.length;i++){
            for(let key in deleteClose[i]){
                deleteClose[i]["price"]="";
                deleteClose[i]["receipt_account_user"]="";
                deleteClose[i]["receipt_account_name"]="";
                deleteClose[i]["receipt_bank_account"]="";
                /* allCenterData[i]["receipt_account_user"]=valParse.account_user
                 allCenterData[i]["receipt_account_name"]=valParse.account_name
                 allCenterData[i]["receipt_bank_account"]=valParse.bank_account*/
            }
        }
        this.setState({
            centerZhi:deleteClose,
            selectedData:[],
            needData:[],
        },()=>{
        this.props.getOutFountList({
            page:1,
            limit:5
        })
        this.props.closeModalHandle()
        })

    }
    saveModal(){
        //保存needData
        /*   const params={ receipt_account_user:"",//收
               receipt_account_name:"",
               receipt_bank_account:"",
               pay_account_user:"",
               pay_account_name:"",
               pay_bank_account:"333",//支付
               price :"",
               voucher :"",
               voucher_number :"",
               create_time:"",
           }*/
        const paramData=this.state.needData
        console.log(paramData)
        const allParams=[]
        let leng=0;
        if(paramData.length>0){
            for(let i=0;i<paramData.length;i++){
                if(paramData[i].voucher&&paramData[i].voucher_number&&paramData[i].create_time){
                    paramData[i].numbering=0
                    paramData[i].controlTime=0
                    paramData[i].controlUpload=0
                    leng++
                }else{
                    if(!paramData[i].voucher){
                        paramData[i].controlUpload=1
                    }
                    if(!paramData[i].voucher_number){
                        paramData[i].numbering=1
                    }
                    if(!paramData[i].create_time){
                        paramData[i].controlTime=1
                    }
                }
            }
            this.setState({
                needData:paramData
            },()=>{
                if(leng==paramData.length){
                    const params=[];
                    let a={};
                    for(let i=0;i<paramData.length;i++){
                        for(var m in paramData[i]){
                            a[m]=paramData[i][m]
                        }
                        params.push(a)
                    }
                    for(let i=0;i<params.length;i++){
                        for(var index in params[i]){
                            delete params[i].controlTime
                            delete params[i].controlUpload
                            delete params[i].key
                            delete params[i].numbering
                            delete params[i].controlTime
                            delete params[i].show
                            delete params[i].showSelected
                            delete params[i].pay_account_id
                            delete params[i].pay_price
                        }

                    }
                    const relParams={}
                    relParams.pay_manage_id=this.props.pay_manage_id
                    relParams.dataAll=params
                    console.log("参数",this.props.payid)
                    function cb(res) {
                        if (res.error_code === GLOBALSUCCESS) {
                            message.success('保存成功')
                            //还要刷新l列表
                            this.props.changePage(1,5)
                            this.props.getOutFountList({
                                page:1,
                                limit:5
                            })
                            this.props.closeModalHandle()
                        }
                    }
                    savePayments(relParams, cb.bind(this))
                }
            })


        }else{

        }
    }
    handleInput(key,val){
        // 把修改的那条数据加上一个实付金额
        const allCenterZhi=this.state.centerZhi
        if(val){
            for(let i=0;i<allCenterZhi.length;i++){
                if(allCenterZhi[i].key==key){
                    allCenterZhi[i]["price"]=val
                }
            }
            this.setState({
                centerZhi:allCenterZhi
            })
        }

    }
    handleSelect(key,value){
        const valParse=JSON.parse(value)
        const allCenterData=this.state.centerZhi
        if(value){
            for(let i=0;i<allCenterData.length;i++){
                if(allCenterData[i].key==key){
                    allCenterData[i]["receipt_account_user"]=valParse.account_user
                    allCenterData[i]["receipt_account_name"]=valParse.account_name
                    allCenterData[i]["receipt_bank_account"]=valParse.bank_account
                    allCenterData[i]["account_id"]=valParse.account_id
                }
            }
            this.setState({
                centerZhi:allCenterData
            },()=>{
                console.log(this.state.centerZhi)
            })
        }

    }
    saveBtn(){
        // 判断是否填写完整通过show,如果没有通过状态改变show
        const allSelected=this.state.selectedData
        const needZhi=this.state.needData

        let len=0;
        if(allSelected.length>0){
            for(var i=0;i<allSelected.length;i++){
                if(allSelected[i].price&&allSelected[i].receipt_account_user){
                    //   如果两者都填写了
                    allSelected[i].show=0
                    allSelected[i].showSelected=0
                    len++

                }else{
                    if(!allSelected[i].price){
                        allSelected[i].show=1
                    }else{
                        allSelected[i].show=0
                    }
                    if(!allSelected[i].receipt_account_user){
                        allSelected[i].showSelected=1
                    }else{
                        allSelected[i].showSelected=0
                    }
                }
            }
            this.setState({
                selectedData:allSelected
            },()=>{
                //说明所有的选中的都对，否则不对
                const save=this.state.selectedData
                if(len==allSelected.length){
                    for(let i=0;i<save.length;i++){
                        needZhi.push(save[i])
                    }
                    this.setState({
                        needData:needZhi
                    },()=>{
                        console.log('need',this.state.needData);
                        // 清空选中的
                        this.setState({
                            selectedData:[],
                        })
                        //    清center中的
                        //      const middleData=this.state.centerZhi
                        const centerDelete=this.state.centerZhi
                        for(let i=0;i<needZhi.length;i++){
                            for(let j=0;j<centerDelete.length;j++){
                                if(needZhi[i]["key"]==centerDelete[j]["key"]){
                                    centerDelete.splice(j,1)
                                    console.log('delete',centerDelete)
                                }
                            }

                        }
                        this.setState({
                            centerZhi:centerDelete
                        })
                    })
                }
            })
            // needData并且把需要的数据从新加入这个数组里面,同时删除选中的数据
            console.log('dui',allSelected)
        }else{
            console.log("kong")
        }
        // 中间的保存按钮(如果选择框和输入都填写过了)

    }
    handleBottomInput(key,val){
        // 把修改的那条数据加上一个凭证编号
        const bottomData=this.state.needData
        if(val){
            for(let i=0;i<bottomData.length;i++){
                if(bottomData[i].key==key){
                    bottomData[i]["voucher_number"]=val
                }
            }
            this.setState({
                needData:bottomData
            },()=>{
                console.log('编号',this.state.needData)
            })
        }

    }
    handleBottomTime(key,val){
        // 把修改的那条数据加上一个打款时间
        const LowerData=this.state.needData
        if(val){
            for(let i=0;i<LowerData.length;i++){
                if(LowerData[i].key==key){
                    LowerData[i]["create_time"]=exportDate(val)
                }
            }
            this.setState({
                needData:LowerData
            },()=>{
                console.log('time',this.state.needData)
            })
        }

    }
    handleBottomUpload(key,val){
        // 把修改的那条数据加上一个图片
        const LowerUpData=this.state.needData
        if(val){
            for(let i=0;i<LowerUpData.length;i++){
                if(LowerUpData[i].key==key){
                    LowerUpData[i]["voucher"]=val
                }
            }
            this.setState({
                needData:LowerUpData
            },()=>{
                console.log('upload',this.state.needData)
            })
        }

    }
    render(){
        const containerStyle={
            minHeight:"200px",
        }
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedData:selectedRows
                })
                // const selectedList=this.state.selectedData;
                //把不相同的push进去(push)
                console.log('sane',selectedRows,selectedRowKeys)
            },
        };
        const columns = [{
            title: '系统单号',
            dataIndex: 'order_no',
            key: 'order_no',
        }, {
            title: '付款状态',
            dataIndex: 'pay_status',
            key: 'pay_status',
        }, {
            title: '开票公司',
            dataIndex: 'billing_name',
            key: 'billing_name',
        }, {
            title: "药品",
            dataIndex: 'drug_name',
            key: 'drug_name',
        }, {
            title: '剂型',
            dataIndex: 'dosage',
            key: 'dosage',
        }, {
            title: '规格',
            dataIndex: 'specification',
            key: 'specification',
        }, {
            title: '计量单位',
            dataIndex: 'unit',
            key: 'unit',
        }, {
            title: '生产厂家',
            dataIndex: 'manufacturer_name',
            key: 'manufacturer_name',
        }, {
            title: '采购日期',
            dataIndex: 'purchase_date',
            key: 'purchase_date',
            render:(text,record)=>formatDate(exportDate(text))
        }, {
            title: '开户名',
            dataIndex: 'pay_account_name',
            key: 'pay_account_name',
        }];
        const tableTwo=[
            {
                title: '开户名',
                dataIndex: 'pay_account_user',
                key: 'pay_account_user',
            }, {
                title: '开户行',
                dataIndex: 'pay_account_name',
                key: 'pay_account_name',
            },  {
                title: '账号',
                dataIndex: 'pay_bank_account',
                key: 'pay_bank_account',
            }, {
                title: '需支付金额',
                dataIndex: 'pay_price',
                key: 'pay_price',
            },, {
                title: '实付金额',
                dataIndex: 'price',
                key: 'price',
                render:(text,record)=>{
                    return <CellInput oneData={record} display={this.state.realPay} value={text} onChange={(value)=>this.handleInput.call(this,record.key,value)}/>
                }
            },{
                title: '选择支付账户',
                dataIndex: 'account',
                key: 'account',
                render:(text,record)=>{
                    /* pay_account_user:"",
                         pay_account_name:"",
                         pay_bank_account:"333",//支付*/
                    return <CellSelect oneData={record} display={this.state.realAccount} text={text} data={this.props.people} onChange={(val)=>this.handleSelect.call(this,record.key,val)}/>
                }
            },
        ]

        const tableThree=[ {
            title: '开户名',
            dataIndex: 'pay_account_user',
            key: 'pay_account_user',
        }, {
            title: '开户行',
            dataIndex: 'pay_account_name',
            key: 'pay_account_name',
        }, {
            title: '账号',
            dataIndex: 'pay_bank_account',
            key: 'pay_bank_account',
        }, {
            title: '实付金额',
            dataIndex: 'price',
            key: 'price',
        }, {
            title: '支付账户',
            dataIndex: 'receipt_account_user',
            key: 'receipt_account_user',
        }, {
            title: '打款凭证编号',
            dataIndex: 'voucher_number',
            key: 'voucher_number',
            render:(text,record)=>{
                return <BottomInput  oneData={record}  value={text} onChange={(value)=>this.handleBottomInput.call(this,record.key,value)} />
            }
        }, {
            title: '打款凭证',
            dataIndex: 'voucher',
            key: 'voucher',
            render:(text,record)=>{
                return <BottomUpload oneData={record}  value={text} onChange={(value)=>this.handleBottomUpload.call(this,record.key,value)}/>
            }
        },{
            title: '打款日期',
            dataIndex: 'create_time',
            key: 'create_time',
            render:(text,record)=>{
                return  <BottomDate oneData={record}  value={text} onChange={(value)=>this.handleBottomTime.call(this,record.key,value)}/>
            }
        },]

        const bottomShow=this.state.needData.length>0?"block":"none"
        return(
            <div>
                <Card>
                    <Table
                        columns={columns}
                        dataSource={this.state.zhiTop}
                        bordered
                        size="middle"
                        scroll={{ x: '130%', y: 240 }}
                        pagination={false}
                        // rowKey={record => record.pay_id}
                    />
                </Card>
                <Card style={{margin:"20px 0"}}>
                    <Table rowSelection={rowSelection} columns={tableTwo} dataSource={this.state.centerZhi} pagination={false} />
                    <p style={{marginTop:"10px"}}>
                        <Button className="mainButton" onClick={this.saveBtn.bind(this)}>保存</Button>
                    </p>
                </Card>
                <div style={{display:bottomShow}}>
                    <Card>
                        <p>请选择实际打款的账户并输入打款金额后点击“保存”，并在下方的区域上传对应的打凭证</p>
                        <Table  columns={tableThree} dataSource={this.state.needData} pagination={false} style={{margin:"10px 0"}} rowKey={record => record.key} />
                        <p>上传凭证后点击“保存”完成打款操作</p>
                    </Card>
                </div>
                <div style={{textAlign:"center",marginTop:"20px"}}>
                    <Button onClick={this.closeModal.bind(this)} style={{marginRight:"40px"}}>关闭</Button>
                    <Button onClick={this.saveModal.bind(this)} className="mainButton">保存</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state",state.outFountData)
    return {
        detailData:state.outFountData.paymentCenter,
        people:state.outFountData.accountList,
        topZhi:state.outFountData.paymentTop,
        pay_manage_id:state.outFountData.pay_manage_id
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getOutFountList:()=>dispatch(actionCreater.outFountList()),
        changePage:(page,limit)=>dispatch(actionCreater.changePageLimit(page,limit)),
        getData:(val)=>dispatch(actionCreater.outFountListGetPaymentAccount(val)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(outFountList)