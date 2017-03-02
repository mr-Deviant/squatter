import React from 'react';
import Menu from './Menu.jsx';
// import '../css/App.css';

class App extends React.Component {
	constructor () {
		super();

		this.menu = [
			{id: 1, link: '/', text: 'Add'},
			{id: 2, link: '/avialable', text: 'Avialable'},
			{id: 3, link: '/occupied', text: 'Occupied'},
			{id: 4, link: '/not-checked', text: 'Not checked'},
		];
	}

	render () {
		return (
			<div>
				<Menu items={this.menu} />
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
