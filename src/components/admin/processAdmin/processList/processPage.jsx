import Pagination from '../../../common/Pagination.jsx'
import {
    connect
} from 'react-redux'
import * as actionCreaterList from "../../../../actions/admin/processAdmin/processList/processList.js"

function mapStateToprops(state) {
    const pagination = state.getProcessAdminList

    return {
        totalCount: pagination.totalCount,
        limit: pagination.limit,
        page: pagination.page,
        pageSizeOptions: ['5', '10', '15', '20', '25', '50', '100']
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (page, size) => dispatch(actionCreaterList.getProcessPage(page, size))
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Pagination)