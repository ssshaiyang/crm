/*
 * @Author: lcj
 * @Date:   2017-07-25 13:24:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 16:57:24
 */

'use strict';
import React from 'react'
import {
	Form,
	Input,
	Button,
	Icon,
	Row,
	Col,
	Checkbox
} from 'antd'
import {
	Link
} from 'react-router-dom'
const FormItem = Form.Item
import {
	login
} from '../utils/interface.js'
import error from '../utils/error-message.json'

let styles = {
	container: {
		width: '100%',
		height: '100%',
		background: 'rgb(68,159,178)',
		background: '-webkit-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: '-o-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: '-moz-linear-gradient(rgb(34,189,181),rgb(105,122,173))',
		background: 'linear-gradient(rgb(34,189,181),rgb(105,122,173))',
	},
	logoRow: {
		padding: '20px',
		height: '20%'
	},
	logo: {
		height: '100%'
	},
	formRow: {
		width: '80%',
		minHeight: '70%',
		margin: '0 auto',
		background: 'white',
		borderRadius: '10px',
	},
	caption: {
		width: '50%'
	},
	title: {
		fontSize: '24px',
		letterSpacing: '2px',
		marginBottom: '5%'
	},
	col: {
		textAlign: 'center',
	},
	form: {
		padding: '0 20% 0 20%',
		width: '100%',
		textAlign: 'left',
	},
	submitButton: {
		background: '#00b8ae',
		color: 'white',
		fontSize: '18px',
		width: '100%',
		height: '40px',
		margin: '2% 0'
	},
	link: {
		color: '#c6c6c6',
		fontSize: '14px'
	},
	code: {
		height: '32px',
		verticalAlign: 'top'
	},
	colCenter: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
}

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			img: {
				logo: '/imgs/login/logo-white-with-letter.png',
				caption: '/imgs/login/login-caption-pic.png'
			}
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		function cb(res, error, params) {
			if (res.error_code === GLOBALSUCCESS) {
				if (params.exp) {
					localStorage.setItem(TOKENNAME, res.data.token);
					localStorage.setItem('uid', res.data.uid);
                    localStorage.setItem('nickname', res.data.nickname);
				} else {
					localStorage.clear();
					sessionStorage.setItem(TOKENNAME, res.data.token);
					sessionStorage.setItem('uid', res.data.uid);
                    sessionStorage.setItem('nickname', res.data.nickname);
				}
				this.props.history.push('/work')
			}
			//刷新验证码
			if (res.error_code !== GLOBALSUCCESS || error) {
				this.refs.code.click();
			}
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				login(values, cb.bind(this))
			}
		})
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div style={styles.container}>
				<Row type="flex" align="center" justify="center" style={styles.logoRow}>
					<img src={this.state.img.logo} alt="logo-white-with-letter" style={styles.logo}/>
				</Row>
				<Row style={styles.formRow} type="flex" align="center" justify="center">
					<Col xs={{span:0}} sm={{span:0,order:2}} md={{span:12,order:1}} style={Object.assign({},styles.col,{borderRight:'1px #f2f4f3 solid'})}>
						<div style={styles.colCenter}>
							<img src={this.state.img.caption} alt="login-caption-pic" style={styles.caption}/>
						</div>
					</Col>
					<Col sm={{span:24,order:1}} md={{span:12,order:2}} style={styles.col}>
						<div style={styles.colCenter}>
							<p style={styles.title}>CRM登录界面</p>
							<Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
								<FormItem>
							        {getFieldDecorator('username', {
							            rules: [
							            	{ required: true, message: error.LOGIN_USERNAME_REQUIRED }
							            ],
							        })(
							            <Input prefix={<Icon type="user" style={{ fontSize: 16 }} />} placeholder="手机号码或用户昵称" />
							        )}
						    	</FormItem>
								<FormItem>
									{getFieldDecorator('password', {
										rules: [
											{ required: true, message: error.PASSWORD_REQUIRED },
											{min:6,message:error.PASSWORD_LENGTH_ERROR},
											{max:16,message:error.PASSWORD_LENGTH_ERROR}],
									})(
									<Input prefix={<Icon type="lock" style={{ fontSize: 16 }} />} type="password" placeholder="密码" />
									)}
							    </FormItem>
								<FormItem>
									{getFieldDecorator('code', {
										rules: [
											{ required: true, message: error.CODE_REQUIRED },
											{len:6,message:error.CODE_LENGTH_ERROR}],
									})(
									<Row gutter={20}>
										<Col span={14}>
											<Input size='large' placeholder="验证码" />
										</Col>
										<Col span={10}>
											<img ref='code' src={GLOBALURL+'/code/image'} alt="code" style={styles.code} onClick={(e)=>{
												e.target.src=e.target.src
											}}/>
										</Col>
									</Row>
									)}
							    </FormItem>
						        <FormItem>
								        {getFieldDecorator('exp', {
							            valuePropName: 'checked',
							            initialValue: true,
							          })(
							            <Checkbox style={{fontSize:'14px'}}>记住密码</Checkbox>
							          )}
						        		<Button htmlType="submit" style={styles.submitButton}>
						        				登录
						        		</Button>
						        		<Link to="/forgetPassword" style={styles.link}>忘记密码</Link>
						        		<Link to="/register" style={Object.assign({},styles.link,{float:'right'})}>注册</Link>
						        </FormItem>
							</Form>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Form.create()(Login);