import React from 'react';
// import '../css/Add.css';

export default class Add extends React.Component { // Smart component will recieve data from server and will pass it to dump components
	constructor(props) { // Instead of getInitialState()
		super(props);

		this.state = {
			domains: '',
			filter: ''
		};
	}

	handleSubmit(event) {
 
	}

	handleChange(name, event) {
		let change = {};
		change[name] = event.target.value.toLowerCase();
		this.setState(change);
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<label>Domains:</label>
					<textarea className="form-control" rows="10" value={this.state.domains} onChange={this.handleChange.bind(this, 'domains')} required></textarea>
				</div>
				<div className="form-group">
					<label>Filter:</label>
					<input className="form-control" value={this.state.filter} onChange={ (e) => this.handleChange('filter', e) } />
				</div>
				<input type="submit" className="btn btn-primary" value="Add" />
			</form>
		);
	}
}