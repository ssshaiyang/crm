import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Modal,Icon,Form,Table,Input,Row,Col} from 'antd'
import * as actionCreater from "../../../../../actions/invoicing/inventory/inventory.js"
const dataZhi=[{
        pihao:111111111111,
        ruku:150,
        chuku:20
},{
    pihao:111111111111,
    ruku:150,
    chuku:20
}]
class EditableCell extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
            value: this.props.value,
            cacheValue:this.props.value,
        }
    }
    componentWillReceiveProps(nextProps) {
           // console.log("nesx",nextProps)
    }


    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.value!=nextState.value){
                   console.log('nest',nextState.value)

                 this.props.onChange(nextState.value)

        }
        return true
    }
    handleChange(e) {
        const value = e.target.value;
        console.log('3333333',value)
        this.setState({value})
        console.log('3333333',this.state.value)
    }
    render() {
        const { value} = this.state;
        return (
            <Input
                value={value}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}
export class EditModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
              warnData:30,
              dataForm:this.props.data,
              inTotal:0,
              outTotal:0
        }
    }
    componentWillMount(){
        let count=0
        let inNum=0
        let outNum=0
        const dataShu=this.state.dataForm
        for(let i=0;i<dataShu.length;i++){
            dataShu[i].key=count++
            inNum+= dataShu[i].ruku
            outNum+=dataShu[i].chuku
        }
        this.setState({
            inTotal:inNum,
            outTotal:outNum,
        })
        this.setState({dataForm:dataShu})
    }
    handleChange(text,index,title,value){
        console.log(index, text,title,value)
        const { dataForm } = this.state;
        dataForm[index][title]=value;
        this.setState({ dataForm });
        let NumIn=0
        let NumOut=0
        for(let i=0;i<this.state.dataForm.length;i++){
            NumIn+= Number(this.state.dataForm[i].ruku)
            NumOut+=Number(this.state.dataForm[i].chuku)
        }
        this.setState({
            inTotal:NumIn,
            outTotal:NumOut,
        })


    }
    closeModal(){
        this.props.openModalBox(false)
    }
    closeModalSave(){
         console.log('state',this.state)
        this.props.openModalBox(false)
    }
    handleWarn(e){
        this.setState({
            warnData:e.target.value
        })
    }
    render(){
        const columns = [{
            title: '批号',
            dataIndex: 'pihao',
            key: 'pihao',

        }, {
            title: '入库',
            dataIndex: 'ruku',
            key: 'ruku',
            render:(text,record,index)=>{
             return <EditableCell value={text} onChange={(value)=>this.handleChange.call(this,text, index,"ruku",value)}/>
           }
        }, {
            title: '出库',
            dataIndex: 'chuku',
            key: 'chuku',
            render:(text,record,index)=>{
                return <EditableCell value={text} onChange={(value)=>this.handleChange.call(this,text, index,"chuku",value)}/>
            }
        }];
        //合计

        return (
            <div>
                <Modal
                    title="编辑库存数量"
                    visible={this.props.visible}
                    footer={null}
                    onCancel={this.closeModal.bind(this)}
                >
                    <Form>
                        <Card>
                             <Row>
                                 <Col span={5}>设置库存预警值</Col>
                                 <Col span={18}>
                                     <Input value={this.state.warnData} onChange={this.handleWarn.bind(this)}/>
                                 </Col>
                             </Row>
                            <Row>
                                <Col span={5}></Col>
                                <Col span={18}>
                                      <p style={{color:"red"}}>说明：库存达到预警值时，系统将通知采购人员补货</p>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{marginTop:"20px"}}>
                            <Table columns={columns} dataSource={this.state.dataForm} pagination={false} />
                            <Row style={{marginTop:"20px"}}>
                                <Col span={6}>合计</Col>
                                <Col span={9} >
                                    {
                                         this.state.inTotal
                                    }
                                </Col>
                                <Col span={9}>
                                    {this.state.outTotal}
                                </Col>
                            </Row>
                        </Card>
                    </Form>
                    <div style={{textAlign:"center",marginTop:"20px"}}>
                        <Button style={{marginRight:"20px"}} onClick={this.closeModal.bind(this)}>取消</Button>
                        <Button onClick={this.closeModalSave.bind(this)} className="mainButton">保存</Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('edit',state.inventory.editVisible)
    return{
        visible:state.inventory.editVisible,
        data:dataZhi
    }
}
function mapDispatchToProps(dispatch){
    return{
        openModalBox:(val)=>dispatch(actionCreater.editModalActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditModalForm)