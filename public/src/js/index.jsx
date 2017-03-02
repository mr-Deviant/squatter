// Good tutorial: http://monsterlessons.com/project/categories/react
// https://maxfarseer.gitbooks.io/redux-course-ru/content/tochka_vhoda.html

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Add from './Add.jsx';
import Avialable from './Avialable.jsx';
import Occupied from './Occupied.jsx';
import NotChecked from './NotChecked.jsx';

// JS
import $ from 'jquery'; // We create an alias in webpack.config.js
// TODO: use https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap instead
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.jsx';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

const store = createStore( () => {}, {} );

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Add} />
				<Route path="/avialable" component={Avialable} />
				<Route path="/occupied" component={Occupied} />
				<Route path="/not-checked" component={NotChecked} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
