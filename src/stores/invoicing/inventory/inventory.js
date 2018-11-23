import moment from 'moment'
export default {
    checkOutVisible:false,
    editVisible:false,
    freezeVisible:false,
    unfreezeVisible:false,
    initVisible:false,
    addAndEdit:false,
    addModalType:0,
    formData:{
        drug_id:"测试id",
        drug_name:"",
        specification :"",
        dosage:"",
        unit:"",
        manufacturer_id:"",
        manufacturer_name:"",
        drug_code:"",
        expiry_date :undefined,
        out_deliver_id:"",
        out_deliver_name :"",
        out_date:undefined,
        in_deliver_id:"",
        in_deliver_name:"",
        in_date :undefined,
        amount :"",
        stock_remark:"",
        creator_name:"",
        create_time:Math.round(new Date().getTime()/1000).toString(),
    }


}