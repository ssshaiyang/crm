import React from 'react'
import {connect} from 'react-redux'
import {Card,Steps,Icon,Popover ,Button} from 'antd'
const Step = Steps.Step
import * as actionCreater from "../../../../actions/admin/processAdmin/processAdminTop/processType.js"
import TwoBtn from"./renderBtn.jsx"
let styles={
    containers:{
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
        width:"150px",
        display:"block"
    }
}

export class RenderCard extends React.Component {
    componentWillMount(){

    }

    dataSort(obj){
        console.log("obj",obj)
        let arr=[]
      for(let i in obj.steps){
         arr.push(obj.steps[i])
      }
      return arr.map((val, i)=> {

          if(i==0){
              return  <Step key={i} title={<Popover content={val}><span style={styles.containers}>{val}</span></Popover>} icon={<Icon type="user" style={{display: "none"}}/>}/>

          }else{
              return  <Step key={i} title={val} icon={<Icon type="user" style={{display: "none"}}/>}/>

          }

      })
    }

    render(){
        return (
          <Card style={{marginBottom:"10px"}}>
              <div style={{overflow:"hidden",display:'flex'}}>
                  <div style={{flex:1}}>
                      <Steps size="small" >
                          {this.dataSort.call(this,this.props)}
                      </Steps>
                  </div>
                  <div style={{width:"80px",textAlign:"center"}}>
                      <TwoBtn modalDataProps={this.props}/>
                  </div>
              </div>
          </Card>
        )
    }
}


function mapStateToProps(state){

    return{

    }
}
function mapDispatchToProps(dispatch){
    return{


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RenderCard)