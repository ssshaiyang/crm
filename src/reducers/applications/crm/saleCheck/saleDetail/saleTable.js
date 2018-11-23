/*
* @Author: Administrator
* @Date:   2017-09-01 13:11:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-02 10:02:40
*/
import moment from 'moment'
export default function SaleTable(state,action){
      if(!state)
      	return null;

      let newState=Object.assign({},state);
      switch (action.type){
      	  case 'SALE_PRODUCT_PERIOD':
          console.log(action.payload)
           newState.startTime=action.payload.start_time;
      	   newState.endTime=action.payload.end_time;
      	   break;
      	  case 'SALE_PRODUCT_HOSPITAL':
      	   newState.hospital=action.payload.hospital;
      	   break;  
          case 'SALE_PRODUCT_SALECOUNT':
      	   newState.saleCount=action.payload.saleCount;
      	   break;
          case 'INIT_SALE_PRODUCT_HOSPITAL':
             newState.hospital=action.payload.hospital;
           break;
      }
      return newState;        
}



