/*
 * @Author: lcj
 * @Date:   2017-08-21 11:18:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-21 11:24:21
 * @Descriptions: crm左侧侧边栏的逻辑组件
 */

'use strict';
import Sider from '../../common/Sider.jsx'
import {
	connect
} from 'react-redux'

function mapStateToProps(state) {
	return {
		sideContent: state.global.crmSiderContent,
		defaultSelectedKeys: "customerManage",
	}
}

export default connect(mapStateToProps)(Sider)