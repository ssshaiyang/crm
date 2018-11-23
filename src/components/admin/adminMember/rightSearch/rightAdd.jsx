import React from 'react'
import {Card,Input,Button,Menu, Dropdown, Icon, message} from 'antd'
import {connect}from 'react-redux'
import * as excelActionCreator from "../../../../actions/admin/adminMember/modal/excel.js"
import * as lotAddActionCreator from "../../../../actions/admin/adminMember/modal/lotAdd.js"
import * as actionCreator from "../../../../actions/admin/adminMember/modal/modify.js"

/*import * as  memberListActionCreator from "../../../../actions/admin/adminMember/memberList/memberList.js"
import * as  initPageActionCreator from "../../../../actions/admin/adminMember/memberPage.js"*/
let styles = {
    addButton: {
        fontSize: '16px'
    },
    angle:{
        display:"inline-block",
        width:0,
        height:0,
        overflow:"hidden",
        fontSize:0,
        borderWidth:"6px",
        borderColor:"transparent transparent #A5C3FF transparent",
        borderStyle:"dashed dashed solid dashed",
    },
}


export class MenueContent extends React.Component {
    handleMenuClick (e){
        if (e.key === '1') {
           this.props.openModal({
               modifyModal:true,
               modalType:1
           })
        }
       /* if(e.key==='2'){
            this.props.openLotAdd(true)
        }*/
        if(e.key==='2'){
            this.props.openExcel(true)
        }
    }
    render (){
        const menu = (

                <Menu onClick={this.handleMenuClick.bind(this)}>
                    <Menu.Item key="1" className="hoverColor">
                        <p> 添加员工</p>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="2" className="hoverColor">
                        <p>excel导入</p>
                    </Menu.Item>
                </Menu>

        );
        return (
            <Dropdown overlay={menu}  placement="bottomRight">
                <Button
                    icon="add"
                    className="mainButton"
                    style={styles.addButton}/>
            </Dropdown>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {
        openExcel:(val)=>dispatch(excelActionCreator.excelImportModal(val)),
        openLotAdd:(val)=>dispatch(lotAddActionCreator.lotAddModal(val)),
        openModal :(val)=>dispatch(actionCreator.modifyModalActionCreater(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenueContent)
