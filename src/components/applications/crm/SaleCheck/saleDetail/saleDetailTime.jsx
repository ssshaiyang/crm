// 销售详情时间
import React from 'react'
import {
	Button,
	DatePicker,
	Input,
	InputNumber
} from 'antd'
import * as actionCreater from '../../../../../actions/applications/crm/saleCheck/saleDetailList/saleDetailTime.js' 
import * as actionCreaterTable from '../../../../../actions/applications/crm/saleCheck/saleDetailList/saleTable.js' 
const RangePicker = DatePicker.RangePicker
import {
	connect
} from 'react-redux'
export class SaleDetailTime extends React.Component {
     constructor(props){
          super(props)
     }
     handleTimeChange(value){
          // 改变store（不是双向数据。所以要改变store里面的然后从新刷新ui）
          this.props.changeRange(value)
          // 刷新
          this.props.refreshList({
               startTime: value[0],
               endTime: value[1],
               page: 1,
               limit: 5,
          })
          this.props.period(value)
     }
     handleValueChange(e){
          this.props.changeValue(e)//改变store中的数据
           this.props.refreshList({
               filter:this.props.filter,
               page: 1,
               limit: 5,
           })
         let Val=e.target.value
            if(Val!=''){
                      this.props.hospital("请输入完整的医院名称")
                      
            }else{
               this.props.hospital("未搜索")
            }

     }
     handleBtnChange(){
           this.props.refreshList({
               filter:this.props.filter,
               page: 1,
               limit: 5,
           })
            // this.props.hospital(this.props.filter)
            let count=0;
            let all=this.props.list
            let zhi=this.props.filter
          
                 if(zhi!=''){
                       if(all){
                          for(let i=0;i<all.length;i++){
                              if(all[0].hospital_name==all[i].hospital_name){
                                count++
                              }
                           } 
                           if(count==all.length){
                              this.props.hospital(zhi)
                           }else{
                              this.props.hospital('请输入完整的医院名称')
                           }
                       }
                            
                    }else{
                        this.props.hospital('未搜索')
                    }
                       

     }
     render(){
     	return (
     		<div style={{overflow:'hidden'}}>
                    <div style={{float:'left'}}>
     			  <RangePicker
                        value={[this.props.startTime,this.props.endTime]}
                        onChange={this.handleTimeChange.bind(this)}
                      />
                    </div>
                    <div style={{float:'right'}}>
                         <Input 
                              value={this.props.filter}
                              style={{width:'150px'}}
                              placeholder="输入医院名称"
                              onChange={this.handleValueChange.bind(this)}
                              />
                        <Button
                              className="mainButton"
                              icon="search"
                              onClick={this.handleBtnChange.bind(this)}
                              style={{margin:'0 0px 0 10px'}}>
                         </Button> 
                    </div>  
     		</div>
     	)
     }
}
function mapStateToProps(state){
    return {
      startTime:state.saleProductTime.startTime,
      endTime:state.saleProductTime.endTime,
      filter:state.saleProductTime.filter,
      list:state.saleProductList.data
    }
} 
function mapDispatchToProps(dispatch){
     return{
          changeRange:(range)=>dispatch(actionCreater.SaleTimeActionCreater(range)),
          changeValue:(e)=>dispatch(actionCreater.SaleValueActionCreater(e.target.value)),
          hospital:(e)=>dispatch(actionCreaterTable.SaleTableHospital(e)),
          period:(range)=>dispatch(actionCreaterTable.SaleTablePeriod(range))
     }

}
export default  connect(mapStateToProps,mapDispatchToProps)(SaleDetailTime)                      