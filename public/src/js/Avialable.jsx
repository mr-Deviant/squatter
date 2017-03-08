import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
// import '../css/Avialable.css';

// Connect React component to the store, now we can use actions from component
@connect(
	// Map state from Redux store to components props
	state => ({avialable: state.avialable}),
	// Map actions and pass them to components props
	dispatch => bindActionCreators(actions, dispatch) // Wrap our actions creator into dispatch calls
)
class Avialable extends React.Component {
	render () {
		const { avialable } = this.props;

		this.items = avialable.map(function (item, index) {
			return (<li key={item.id}>{item.name}</li>);
		});

		return (
			<ul>
				{this.items}
			</ul>
		);
	}
}

export default Avialable;
