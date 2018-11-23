import React from 'react'
import {connect} from 'react-redux'
import {Card,Input,Form} from 'antd'
const FormItem = Form.Item;
export class InputBox extends React.Component {
    componentWillMount(){

    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <FormItem
                >
                    {getFieldDecorator('price', { rules: [
                        { required: true, message: 'Please select your favourite colors!' },
                    ]})(
                        <Input/>
                    )}
                </FormItem>

            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
    }
}
export default connect(null,mapDispatchToProps)(Form.create()(InputBox))