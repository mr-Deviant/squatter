import React from 'react';
import actions from '../actions/index.js';
// import '../css/Add.css';

export default class Add extends React.Component { // Smart component will recieve data from server and will pass it to dump components
	constructor(props) { // Instead of getInitialState()
		super(props);

		this.state = {
			domains: '',
			filter: '',
			rating: 5
		};

		// Remember initial value
		this.initialState = Object.assign({}, this.state);
	}

	// We need this for accessing store from this.context
	static contextTypes = {
		store: React.PropTypes.object
	};

	// TODO: connect https://github.com/reactjs/redux/issues/1159

	componentDidMount() {
		this.store = this.context.store;
	}

	handleSubmit(event) {
		event.preventDefault();
		// TODO: check form
 		actions.addDomains(this.store, this.state);
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
				<div className="form-group">
					 Rating ({this.state.rating}):
					<input type="range" min="1" max="10" value={this.state.rating} onChange={this.handleChange.bind(this, 'rating')} />
				</div>
				<input type="submit" className="btn btn-primary" value="Add" />
			</form>
		);
	}
}