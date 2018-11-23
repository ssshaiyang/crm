// 销售查询-销售详情
import React from 'react'
import {Card} from 'antd'
import {connect}from 'react-redux'
import SaleDetailTime from './saleDetail/saleDetailTime.jsx'
import SaleDetailList from './saleDetail/saleDetailList.jsx'
import SaleCheckPage from './saleDetail/saleCheckpage.jsx'
import {getSaleProductListActionCreater} from '../../../../actions/applications/crm/saleCheck/saleDetail.js'
// import {SaleTablePeriod} from '../../../../actions/applications/crm/saleCheck/saleDetailList/saleTable.js'
import {formatDate,exportDate} from '../../../../utils/common.js'

let styles={
   DivContanier:{
     display:'flex',
     'justifyContent':'space-between',
     padding:'20px 0 0 0',
     color:'#fff',
     fontSize:'14px'
   },
   smallBoxOne:{
     width:'190px',
     height:'70px',
     background:'#01d9b8',
     padding:'10px',
     whiteSpace:'nowrap'
   },
   smallBoxTwo:{
     width:'190px',
     height:'70px',
     background:'rgb(135, 208, 104)',
     // margin:'0 20px',
      padding:'10px',
       whiteSpace:'nowrap'
   },
   smallBoxThree:{
     width:'190px',
     height:'70px',
     background:'#f5a623',
      padding:'10px',
       whiteSpace:'nowrap'
   },
   Text:{
      overflow:'hidden',
      textOverflow:'ellipsis'
   }
}
 export class SaleDetail extends React.Component {
 	constructor(props){
 		super(props)
 	}
 	componentWillMount(){
        // this.props.getSaleListAll()
 	}
 	render(){
    console.log('shijian',this.props.start_time)
     
      let str=''
        if(this.props.start_time){
          let start=formatDate(exportDate(this.props.start_time), '.','.', '')
          let end=formatDate(exportDate(this.props.end_time),'.', '.', '')
          if(start==end){
            str=formatDate(exportDate(this.props.start_time), '.','.', '')
          }else{
             
              str=start+"-"+end
          }
         
        }else{
          str='未选择'
        }


      return(
      	 <div>
      	   <Card
        className="shadowCard"
        title="销售详情">
      	        <div >
                    <SaleDetailTime refreshList={this.props.getSaleListAll}/>
                </div>  
                <div style={styles.DivContanier}>
                     <div style={styles.smallBoxOne}>
                        <p>周期</p>
                        <p style={styles.Text}>
                          {str}
                        </p>
                     </div>
                     <div style={styles.smallBoxTwo}>
                        <p>医院</p>
                        <p style={styles.Text}>
                            {this.props.hospital}
                        </p>
                     </div>
                     <div style={styles.smallBoxThree}>
                        <p>销量</p>
                        <p style={styles.Text}>
                            {this.props.saleCount}
                        </p>
                     </div> 
                </div> 
                <div>
                	  <SaleDetailList/>
                    <div style={{textAlign:'center'}}>
                       <SaleCheckPage refresh={this.props.getSaleListAll}/>
                    </div>
                </div>
      	   </Card>
      	 </div>  
      	)
    }  
 }
  function mapStateToProps(state){
    return {
       start_time:state.saleTable.startTime,
       end_time:state.saleTable.endTime,
       hospital:state.saleTable.hospital,
       saleCount:state.saleTable.saleCount
    }
  }
 export default connect(mapStateToProps,null)(SaleDetail) 