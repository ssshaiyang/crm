/*
 * @Author: lcj
 * @Date:   2017-07-21 11:07:44
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 10:23:50
 * @Description : 进入页面之后校验是否已经登录（tokens是否合法），来跳转到主页
 */

import React from 'react';
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'
import {
	Provider,
	connect
} from 'react-redux'
import store from './store.js'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from 'react-router-dom'
import {
	connectedRouterRedirect
} from 'redux-auth-wrapper/history4/redirect'
import Login from './containers/Login.jsx'
import Register from './containers/Register.jsx'
import Forget from './containers/ForgetPsw.jsx'
import Index from './Index.jsx'

//每次切换页面做用户token校验
const userIsAuthenticated = connectedRouterRedirect({
	redirectPath: '/login',
	authenticatedSelector: state => {
		return !!localStorage.getItem(TOKENNAME) || !!sessionStorage.getItem(TOKENNAME)
	},
	wrapperDisplayName: 'UserIsAuthenticated'
})

class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{height:'100%'}}>
					<Router>
						<div style={{height:'100%'}}>
							<Switch>
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<Route path="/forgetPassword" component={Forget} />
								<Route path="/:page?" component={userIsAuthenticated(Index)}/>
							</Switch>
						</div>
					</Router>
			</div>
		)
	}
}

const App = connect()(Body);

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('body'));