import Pagination from '../../../common/Pagination.jsx'
import {
    connect
} from 'react-redux'
import * as actionCreater from "../../../../actions/capitalAdmin/inFount/inFountCenter/inFountList.js"

function mapStateToprops(state) {
    const pagination = state.inFountData

    return {
        totalCount: pagination.totalCount,
        limit: pagination.limit,
        page: pagination.page,
        pageSizeOptions: ['5', '10', '15', '20', '25', '50', '100']
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (page, size) => dispatch(actionCreater.inPageActionCreater(page, size))
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Pagination)