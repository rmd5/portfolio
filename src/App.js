import CV from "./components/cv/main/cv";

import history from "./history";
import { Router, Switch, Route } from "react-router";
import LANDING from "./components/landing/main/landing";

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={LANDING} />
					<Route path="/cv" component={CV} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
