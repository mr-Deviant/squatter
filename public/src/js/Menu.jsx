import React from 'react';
import { Link } from 'react-router';
// import '../css/Menu.css';

class Menu extends React.Component {
	// Props validation
	static propTypes = {
		items: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
				link: React.PropTypes.string.isRequired,
				text: React.PropTypes.string.isRequired
			})
		).isRequired 
	};

	render () {
		this.items = this.props.items.map(function (item, index) {
			return (<li key={item.id}><Link to={item.link} activeClassName="active">{item.text}</Link></li>);
		});

		return (
			<nav className="navbar navbar-default navbar-static-top">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						{this.items}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Menu;