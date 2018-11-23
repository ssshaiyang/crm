import React from 'react'
import {connect} from 'react-redux'
import {Card,Select,Form,Row,Col,Button} from 'antd'
import * as actionCreater from "../../../../actions/admin/processAdmin/processAdminTop/processType.js"
const Option = Select.Option;
import AddRuleModal from '../modal/addRuleModal.jsx'
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        },
    },
};
const rowItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 4
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 20
        },
    },
}
export class ProcessFrom extends React.Component {
    componentWillMount(){

    }
    makeOptions(options){
        if(options){
            let keys=Object.keys(options)
            return keys.map(key=>(
                <Option value={key} key={key}>
                    {options[key]}
                </Option>
            ))
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
    openModal(){
        this.props.visibleModal({
            visible:true,
            modalType:0
        })
    }
    render(){
        const {
            getFieldDecorator
        } = this.props.form;

        return (
                    <div style={{overflow:"hidden",borderBottom:"1px solid gay"}}>
                        <div style={{float:"left",width:"80px"}}>
                            <FormItem
                                getFieldDecorator={getFieldDecorator}
                                col={24}
                                itemName="apply_type_id"
                                row
                                label=""
                                rules={
                                    [{ required: true, message:"选择类型"}]
                                }>
                                <Select style={{width:"200px"}}>
                                    {this.makeOptions(this.makeRoles(this.props.processTypeList))}
                                </Select>
                            </FormItem>
                        </div>
                        <div style={{float:"right"}}>
                               <Button className="mainButton" onClick={this.openModal.bind(this)}>添加规则</Button>
                        </div>
                        <AddRuleModal/>
                    </div>
        )
    }
}
class FormItem extends React.Component {
    render() {
        const Layout = this.props.row ? rowItemLayout : formItemLayout;
        return (
            <Col span={this.props.col}>
                <Form.Item
                    {...Layout}
                    label={this.props.label}>
                    {this.props.getFieldDecorator(this.props.itemName, {
                        rules: this.props.rules,
                    })(
                        this.props.children
                    )}
                </Form.Item>
            </Col>
        )
    }
}

FormItem.defaultProps = {
    col: 24,
    itemName: 'itemName',
    rules: [],
    label: 'label'
}


const ProcessAdminTop =Form.create({
    onFieldsChange,
    mapPropsToFields
})(ProcessFrom)

function mapPropsToFields(props) {
//映射到表单
    let fields={};
    let data=props.data;
    for (let key in props.data){
            fields[key]={
                value:props.data[key]&&props.data[key].toString()
            }
    }
    console.log("fields",fields)
    return fields
}

function onFieldsChange(props,changedFields){
//传到store
    props.completeInf(changedFields)
}



//filter就是data值
function mapStateToProps(state){
    //console.log('sdsds',state.processAdminTop.selected)
    return{
      processTypeList:state.processAdminTop.data,
      data:state.processAdminTop.selected
    }
}
function mapDispatchToProps(dispatch){
    return{
        completeInf:(fields)=>dispatch(actionCreater.completeMemberInf(fields)),
        visibleModal:(val)=>dispatch(actionCreater.showModal(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProcessAdminTop)
