import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
// import '../css/Add.css';


// Connect React component to the store, now we can use actions from component
@connect(
	// Map state from Redux store to components props
	state => ({add: state.add}),
	// Map actions and pass them to components props
	dispatch => bindActionCreators(actions, dispatch) // Wrap our actions creator into dispatch calls
)
export default class Add extends React.Component { // Smart component will recieve data from server and will pass it to dump components
	constructor(props) { // Instead of getInitialState()
		super(props);

		this.state = {
			domains: '',
			filter: '',
			rating: 5
		};

		// Remember initial value
		//this.initialState = Object.assign({}, this.state);
	}

	handleSubmit(event) {
		event.preventDefault();
		// TODO: validate form
 		this.props.addDomainsRequest(this.state); // Already wrapped into dispatcher
	}

	handleChange(name, event) {
		let change = {};
		change[name] = event.target.value.toLowerCase();
		this.setState(change);
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<p className="bg-success"><a href="#">Added ({this.props.add.added.length})</a>: {this.props.add.added.join(', ')}</p>
				<p className="bg-info"><a href="#">Duplicates ({this.props.add.duplicates.length})</a>: {this.props.add.duplicates.join(', ')}</p>
				<p className="bg-danger"><a href="#">Errors ({this.props.add.errors.length})</a>: {this.props.add.errors.join(', ')}</p>

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
				<button type="submit" className="btn btn-primary">
					{ this.props.add.fetching ? <span className="glyphicon glyphicon-refresh spinning" aria-hidden="true"></span> : null } Add
				</button>
			</form>
		);
	}
}