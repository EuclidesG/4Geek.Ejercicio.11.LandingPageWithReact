import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";
import { JumboTron } from "./jumboTron";
import { NavBar } from "./navBar";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<NavBar />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<JumboTron />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					{" "}
					<Card />
				</div>
				<div className="col">
					<Card />{" "}
				</div>
			</div>
		</div>
	);
}
