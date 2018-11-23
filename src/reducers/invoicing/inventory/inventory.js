export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'INVENTORY_CHECKOUT_MODAL':
            newState.checkOutVisible = action.payload.checkOutVisible;
            break;
        case 'INVENTORY_FREEZE_VISIBLE_MODAL':
            newState.freezeVisible = action.payload.freezeVisible;
            break;
        case 'INVENTORY_EDIT_MODAL':
            newState.editVisible = action.payload.editVisible;
            break;
        case 'INVENTORY_UNFREEZE_MODAL':
            newState.unfreezeVisible = action.payload.unfreezeVisible;
            break;
        case 'INVENTORY_INIT_MODAL':
            newState.initVisible = action.payload.initVisible;
            break;
        case 'INVENTORY_ADD_AND_EDIT':
            newState.addAndEdit = action.payload.addAndEdit;
            newState.addModalType = action.payload.addModalType;
            break;
        case "INVENTORY_MODAL_COMPLETE_MEMBER_INF":
            newState.formData[action.payload.key] = action.payload.value;
            break;
        case "INVENTORY_FORM_DATA_DRUG_NAME" :
            newState.formData=action.payload.data
            break;
        case "INVENTORY_FORM_DATA_INIT" :
            newState.formData={
                 drug_id:"",
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
            break;

    }
    return newState;
}

/*
checkOutVisible:false,
    editVisible:false,
    freezeVisible:false,
    unfreezeVisible:false,
    initVisible:false
    addAndEdit:false,
    addModalType:0
    */
