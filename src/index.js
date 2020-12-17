//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "./index.css";

import cardImg from "./img/286x180.jpg";

const NavBar = props => {
	return (
		//NAVBAR
		<nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							Features
						</a>
						<a className="nav-link" href="#">
							Pricing
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
function JumboTron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!!!
				</a>
			</p>
		</div>
	);
}

function Card() {
	return (
		<div className="card">
			<img className="card-img-top" src={cardImg} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

const Body = props => {
	return (
		<div className="container">
			<div className="row">{JumboTron()}</div>
			<div className="row">
				<div className="col">{Card()}</div>
				<div className="col">{Card()}</div>
				<div className="col">{Card()}</div>
				<div className="col">{Card()}</div>
			</div>
		</div>
	);
};
function Footer() {
	return (
		<div className="Container-fluid">
			<div className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container footer">Este es el footer del sitio</div>
			</div>
		</div>
	);
}

//render your react application
ReactDOM.render(
	<div>
		<NavBar /> <Body /> <Footer />
	</div>,
	document.querySelector("#app")
);