/*
 * @Author: lcj
 * @Date:   2017-08-09 13:39:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 16:27:26
 */
'use strict';

import React from 'react';
import {
	Row,
	Col,
	Menu,
	Icon,
	Dropdown
} from 'antd'
import TopMenu from './topbar/TopMenu.jsx'
import TopRightMenu from './topbar/TopRightMenu.jsx'
// import AdminLogin from '../work/admin/AdminLogin.jsx'

let styles = {
	row: {
		height: '64px',
		textAlign: 'center',
		backgroundColor: 'white',
		borderBottom: '1px #f2f4f3 solid'
	},
	verticalMenu: {
		position: 'absolute',
		fontSize: '24px',
		right: '0'
	},
	bell: {
		fontSize: '26px',
		color: 'white',
		background: 'rgb(61,75,95)',
		padding: "7px",
		borderRadius: "4px",
		cursor: 'pointer'
	}

}

//右上角菜单栏
const rightMenu = (
	<Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
    </Menu.Item>
  </Menu>
);

export class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: {
				logo: '/imgs/logo.png'
			}
		}
	}

	render() {
		return (
			<div>
				<Row style={styles.row} type="flex" justify="center" align="middle">
					<Col xs={{span:24}} md={{span:4}} style={{borderRight:'2px #f2f4f3 solid'}}>
						<img src={this.state.img.logo} alt="E+CRM Logo"/>
					</Col>
					<Col xs={{span:0}} md={{span:15}}>
						<TopMenu />
					</Col>

					<Col xs={{span:0}} md={{span:5}}>
						<Row>
							<Col span={7}>
								<DropDownMenu menu={rightMenu}/>
							</Col>
							<Col span={10}>
								<TopRightMenu/>
							</Col>
						</Row>
					</Col>
					<Col xs={{span:10}} md={{span:0}}  style={styles.verticalMenu}>
						<Dropdown overlay={<TopMenu mode="vertical"/>} trigger={['hover']}>
							<Icon type="bars"/>
						</Dropdown>
				  	</Col>
				</Row>
			</div>
		)
	}
}


class DropDownMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Dropdown overlay={this.props.menu} placement="bottomCenter">
					<Icon type="bell" style={styles.bell}/>
				</Dropdown>
			</div>
		)
	}
}

export default TopBar;