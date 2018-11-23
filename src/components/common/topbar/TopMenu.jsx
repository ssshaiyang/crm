/*
 * @Author: lcj
 * @Date:   2017-08-09 13:54:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-16 11:01:03
 */

'use strict';

import React from 'react'
import {
	Menu,
	Icon,
	Dropdown
} from 'antd'
import Link from '../Link.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../actions/topMenu.js'
import PropTypes from 'prop-types'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
let styles = {
	horizontalNav: {
		height: '63px',
		lineHeight: '63px'
	},
	verticalNav: {
		width: '200px',
		textAlign: 'center',
		fontSize: '24px',
		lineHeight: '24px',
		letterSpacing: '1px',
	}
}



export class TopMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const menuContent = this.props.topCountentMenue.menuContent;
		const subContent=this.props.topCountentMenue.subMenueContent;
		const mode = this.props.mode;
		let key = window.location.pathname;
		let end = key.indexOf('/', 1);
		key = end === -1 ? key.slice(1) : key.slice(1, end);
		return (

				<Menu
					mode={mode||'horizontal'}
					onClick={this.props.changeTopPage}
					selectedKeys={[this.props.selected||key]}
					style={mode==='vertical'?styles.verticalNav:styles.horizontalNav}>
					{
						menuContent.map(data=>Item(data))

					}
					{
						this.props.companyLogined?
						<SubMenu
						key="sub1"
						title={<span><Icon type="user" />更多</span>}
					>

						        {subContent.map(data=>subItem(data))}

					</SubMenu>:""
					}
				</Menu>

		)
	}
}

TopMenu.propTypes = {
	mode: PropTypes.string
}

TopMenu.defaultProps = {
	mode: 'horizontal'
}

//通过传递的data返回Item单元
function Item(data) {
	return (
		<Menu.Item key={data.key}>
	        <Link to={data.url} style={{fontSize:'16px'}} needCompanyLogined={data.needCompanyLogined}>
	        	<Icon type={data.icon} />
	        	<span>{data.type}</span>
	        </Link>
	    </Menu.Item>
	)
}
function subItem(data) {
    return (
		<Menu.Item key={data.key}>
			<Link to={data.url} style={{fontSize:'14px'}} needCompanyLogined={data.needCompanyLogined}>
				<Icon type={data.icon} />
				<span>{data.type}</span>
			</Link>
		</Menu.Item>
    )
}
function mapStateToProps(state) {
	return {
		topCountentMenue:state.topMenu,
        companyLogined: state.global.companyLogined
	};
}

function mapDispatchToProps(dispatch) {
	return ({
		changeTopPage: (params) => dispatch(actionCreater.topMenuSelectedCreater(params.key))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu)