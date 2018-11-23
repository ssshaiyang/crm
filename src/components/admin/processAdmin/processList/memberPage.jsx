import Pagination from '../../../common/Pagination.jsx'
import {
    connect
} from 'react-redux'
import * as actionCreaterModal from "../../../../actions/admin/processAdmin/modal/addRuleModal.js"

function mapStateToprops(state) {
    const pagination = state.addRulesModal

    return {
        totalCount: pagination.totalCount,
        limit: pagination.limit,
        page: pagination.page,
        pageSizeOptions: ['5', '10', '15', '20', '25', '50', '100']
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (page, size) => dispatch(actionCreaterModal.getAddBranchModalPage(page, size))
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Pagination)