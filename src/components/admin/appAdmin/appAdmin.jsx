import React from 'react'
import {connect} from 'react-redux'
import { Layout, Menu, Breadcrumb,Card,Row } from 'antd';
const { Header, Content, Footer } = Layout;
import * as actionCreater from "../../../actions/admin/appAdmin/appAdmin.js"
import AppBuyModal from './appBuyModal.jsx'
import AppBuyPanal from './appBuyPanal.jsx'
import SquareModal from './squareModal.jsx'
import SquarePanal from './squarePanal.jsx'


export class AppAdmin extends React.Component {
    componentWillMount(){
        this.props.getBuyAPP()
        this.props.appSquare()
    }
    handleMenue(e){
        if(e.key==1){
            this.props.toShow(true)
        }
        if(e.key==2){
            this.props.toShow(false)
        }
    }
    renderApps(apps) {
        const arrayList=[]
        for(let key in apps){
            arrayList.push(apps[key])
        }

           return arrayList.map((app, i) => (
               <AppBuyPanal key={i} {...app} appStatus={this.props.type}/>
           ))

    }
    renderSquareApps(apps) {
        const arrayList=[]
        for(let key in apps){
            arrayList.push(apps[key])
        }

        return arrayList.map((app, i) => (
            <SquarePanal key={i} {...app} appStatus={this.props.type}/>
        ))

    }
    render(){
        const isShow=this.props.visible? "block":"none";
        const isHidden=!this.props.visible? "block":"none";
        return (
            <div style={{padding:"35px 0"}} className="appAdminLayout">
                    <Layout style={{width:"100%"}}>
                            <Menu
                                onClick={this.handleMenue.bind(this)}
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '80px',background:"#fff" }}
                            >
                                <Menu.Item key="1" className="mainTabHover">企业已购买</Menu.Item>
                                <Menu.Item key="2" className="mainTabHover">应用广场</Menu.Item>
                            </Menu>
                        <Content style={{ marginTop:40}}>
                            <div className="boxOne" style={{display:isShow}}>
                                <div style={{ background: '#fff', padding: 24}}>
                                    <Row>
                                        {this.renderApps.call(this,this.props.buyListData)}
                                    </Row>
                                </div>
                            </div>
                           <div className="boxTwo" style={{display:isHidden}}>
                               <div style={{ background: '#fff', padding: 24}}>
                                   <Row>
                                       {this.renderSquareApps.call(this,this.props.appListData)}
                                   </Row>
                               </div>
                           </div>
                            <AppBuyModal refreshApps={()=>this.props.getBuyAPP()}/>
                            <SquareModal refreshApps={()=>this.props.getBuyAPP()}/>
                            {/*<AppDetailModel refreshApps={()=>this.props.getBuyAPP()}/>*/}
                        </Content>
                    </Layout>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('vis',state.appAdminData.appData)
    return{
        buyListData:state.appAdminData.buyData,
        appListData:state.appAdminData.appData,
        visible:state.appAdminData.visible
    }
}
function mapDispatchToProps(dispatch){
    return{
        getBuyAPP:()=>dispatch(actionCreater.hasBuyList()),
        appSquare:()=>dispatch(actionCreater.appSquareList()),
        toShow:(val)=>dispatch(actionCreater.toShowBox(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppAdmin)