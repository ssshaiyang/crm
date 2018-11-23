export default function redeceName(state, action) {
    if (!state)
        return null;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'GET_DRUG_LIST_SELECTOR':
            newState.drugSelector = action.payload.data;
            break;
        case 'GET_ALL_DRUG_LIST':
            newState.drugList = action.payload.data;
            break;
        case 'GET_CLICKED_ROW_AGENT_INFO':
            newState.agentInfo = action.payload.data;
            break;
        case 'GET_CLICKED_BILING_INFO':
            newState.bilingInfo = action.payload.data;
            break;
        case 'GET_CLICK_DELIVER_INFO':
            newState.deliverInfo = action.payload.data;
            break;
        case 'GET_MANUFACTURER_LIST_INFO':
            newState.manufacturerList = action.payload.data;
            break;
        case 'GET_BILING_COMPPONY_INFO':
            newState.bilingListInfo = action.payload.data;
            break;
        case 'GET_BUSINESS_INFO':
            newState.businessCom = action.payload.data;
            break;
        case 'SEARCH_DRUG_INFO':
            newState.searchDrugInfo = action.payload.data;
            break;
        case 'ADD_DRUG_INFO':
            newState.addDrugInfoCode = action.payload.data;
            break;
        case 'DEL_DRUG_INFO':
            newState.delDrugInfoCode = action.payload.data;
            break;
        case 'SEARCH_MANUFACTURER_INFO':
            newState.searchManufacInfo = action.payload.data;
            break;
        case 'SEARCH_BILING_COMPONY_INFO':
            newState.searchBilingComInfo = action.payload.data;
            break;
        case 'SEARCH_BUSINESS_COMPONY_INFO':
            newState.searchBusinessComInfo = action.payload.data;
            break;
        case 'GET_AGENT_INFO':
            newState.agentInfo = action.payload.data;
            break;
    }
    return newState;
}