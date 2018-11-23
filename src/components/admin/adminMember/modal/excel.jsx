import React from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    Modal,
    Upload,
    message
} from 'antd'
import {
    connect
} from 'react-redux'
// import ERROR from '../../../../utils/error-message.json'
import * as actionCreator from "../../../../actions/admin/adminMember/modal/excel.js"
import {
    uploadCustomer,
    uploadEmployee,
    uploadEmployees,
    downloadCustomer,
    importCustomerByFile
} from '../../../../utils/interface.js'
const FormItem = Form.Item;
let styles={
    container:{
        width:'80%',
        margin:'0 auto'
    }
}
export class ExcelModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            filePath: false
        }
    }
    beforeUpload(file) {
        this.setState({
            file:file,
            filePath:true
        })
    }
    onRemove() {
        this.setState({
            file: '',
            filePath:false
        })
    }
    closeModal(){
        this.setState({
            file: '',
            filePath: false
        })
        this.props.closeModalBox(false)
    }
   import () {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                this.setState({
                    filePath: res.data
                })
                message.success('导入成功!');
            }
        }
       uploadEmployee(this.state.file, cb.bind(this))
    }
    onOk() {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                message.success("导入成功!")
                this.props.closeModal();
                this.props.closeModalBox(false)
               // 刷新列表
                this.props.initFilter();
                this.props.initPagination();
                this.props.refreshList();
            }
        }
        uploadEmployees(this.state.filePath, cb.bind(this))
    }
    render(){
        // const width=window.screen.avaiWidth>700 ? 400:"70%";

        return(
            <Modal
                visible={this.props.visible}
                title="Excel-添加员工信息"
                footer={null}
                onCancel={this.closeModal.bind(this)}
            >
                <p style={{textAlign:'center',marginBottom:'10px'}}>
                    注:请先下载
                   <a
                        target="_blank"
                        href={GLOBALURL+"/employees/download"}>批量导入模板</a>
                    ,按模板格式录入数据后,在此导入
                </p>
                <Row>
                    <Col span={18} offset={2}>
                        <Upload
                            beforeUpload={this.beforeUpload.bind(this)}
                            onRemove={this.onRemove.bind(this)}>
                            <Button disabled={!!this.state.file}>
                                浏览
                            </Button>
                        </Upload>
                    </Col>
                    <Col span={4}>
                        <Button onClick={this.import.bind(this)}>导入</Button>
                    </Col>
                </Row>
                <div style={{textAlign:'center',margin:'10px 0'}}>
                    <Button style={{marginRight:'20px'}} className="cancelButton" onClick={this.closeModal.bind(this)}>关闭</Button>
                    <Button className="mainButton" onClick={this.onOk.bind(this)} disabled={!this.state.filePath}>导入</Button>
                </div>
            </Modal>
        )
    }
}
function mapStateToProps(state){
    return {
        visible:state.excelModal.visible,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeModalBox:(val)=>dispatch(actionCreator.excelImportModal(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(ExcelModal))