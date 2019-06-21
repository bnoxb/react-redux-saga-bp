import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth/authActions'
import { Link, withRouter } from 'react-router'
import Footer from '../components/common/Footer'
import { PageHeader } from 'react-bootstrap'
import Navigation from '../components/common/Navigation';
import '../App.css';


class MainLayout extends React.Component {

	_logout = () => {
		this.props.dispatch(logout())
		this.props.history.push('/')
	}

	render() {
		return (
			<div className='app'>
				<header className='primary-header'></header>
				<Navigation isAuth={this.props.auth ? true : false} _logout={this._logout}/>
				
					{this.props.children}
				
				<Footer
					footerText={ footerConfig.footerText }
				/>
			</div>
		)
	}
}

const footerConfig = {
	footerText: 'Home Layout'
}

// MainLayout.contextTypes = {
// 	router: PropTypes.object.isRequired
// }

function mapStateToProps(state) {
	return {
		auth: state.auth.authToken
	}
}

export default withRouter(connect(mapStateToProps)(MainLayout));
