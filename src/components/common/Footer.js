import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap'

const Footer = ({ footerText }) => {
	return (
		<Col md={7}>
			<hr></hr>
			<p>{ footerText }</p>
		</Col>
	)
}

Footer.propTypes = {
	footerText: PropTypes.string
}

export default Footer
