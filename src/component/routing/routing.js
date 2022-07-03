import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from '../about/about';
import Contact from '../contact/contact';
import GitHubUsersHook from '../GitHubUsersHook/githubusershook';
import Home from '../home/home';
import Lifecycle from '../lifecycle/lifecycle';


// import './mystyles.css' ;


class Routing extends Component {
	render() {
		return (
			<Router>
				<div className="App"> 
					<nav className="navbar navbar-expand-sm bg-dark">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About Us</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact Us</Link>
							</li>
                            <li className="nav-item">
								<Link className="nav-link" to="/githubusershook">Git Hub Users</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/lifecycle">Life Cycle</Link>
							</li> 
						</ul>
					</nav>
					<br></br>

					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/about' component={About}></Route>
						<Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/githubusershook' component={GitHubUsersHook}></Route>
					    <Route exact path='/lifecycle' component={Lifecycle}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Routing ; 