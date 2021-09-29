import CV from "./components/cv/main/cv";

import history from "./history";
import { Router, Switch, Route } from "react-router";
import LANDING from "./components/landing/main/landing";
import PROJECTS from "./components/projects/main/projects";
import { useEffect } from "react";

function App() {
	return (
		<div className="App" style={{ overflowY: "hidden" }}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={LANDING} />
					<Route path="/cv" component={CV} />
					<Route path="/projects" component={PROJECTS} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
