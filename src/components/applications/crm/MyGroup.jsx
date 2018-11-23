/*
 * @Author: lcj
 * @Date:   2017-08-29 19:27:32
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 09:24:28
 * @Descriptions: crm-我的团队
 */

import React from 'react'
import GroupAchievements from './MyGroup/GroupAchievements.jsx'
import GroupAddressBook from './MyGroup/GroupAddressBook.jsx'

export class MyGroup extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<GroupAchievements/>
				<GroupAddressBook/>
			</div>
		)
	}
}

export default MyGroup