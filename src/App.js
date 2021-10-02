import CV from "./components/cv/main/cv";

import history from "./history";
import { Router, Switch, Route } from "react-router";
import LANDING from "./components/landing/main/landing";
import PROJECTS from "./components/projects/main/projects";
import { useEffect, useState } from "react";
import Menu from "./components/menu/menu";

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
	const [size, setSize] = useState(localStorage.getItem("size") || "small")

	useEffect(() => {
		try {
			setTheme(localStorage.getItem("theme"))
			setSize(localStorage.getItem("size"))
		} catch (err) {
			console.log("Could not fetch theme")
		}
	}, [])

	useEffect(() => {
		let root = document.documentElement.style
		if (theme === "dark") {
			root.setProperty('--orange', '236, 164, 32')
			root.setProperty('--teal', "0, 128, 128")
			root.setProperty('--black', "177, 194, 203")
			root.setProperty('--grey', "77, 84, 93")
			root.setProperty('--medium', "131, 131, 131")
			root.setProperty('--light', "218, 218, 218")
			root.setProperty('--white', "27, 34, 43")
			root.setProperty('--dark', "255, 255, 255")
			root.setProperty('--heading', "'Roboto', sans-serif")
			root.setProperty('--content', "'Roboto', sans-serif")
		} else if (theme === "light" || theme === "mono-light") {
			root.setProperty('--orange', '236, 164, 32')
			root.setProperty('--teal', "0, 128, 128")
			root.setProperty('--black', "0, 0, 0")
			root.setProperty('--grey', "70, 70, 70")
			root.setProperty('--medium', "131, 131, 131")
			root.setProperty('--light', "218, 218, 218")
			root.setProperty('--white', "255, 255, 255")
			root.setProperty('--dark', "70, 70, 70")
			root.setProperty('--heading', "'Roboto', sans-serif")
			root.setProperty('--content', "'Roboto', sans-serif")
		} else if (theme === "clown") {
			root.setProperty('--orange', '255, 255, 0')
			root.setProperty('--teal', "0, 0, 255")
			root.setProperty('--black', "255, 0, 0")
			root.setProperty('--grey', "255, 0, 0")
			root.setProperty('--medium', "131, 131, 131")
			root.setProperty('--light', "218, 218, 218")
			root.setProperty('--white', "100, 255, 0")
			root.setProperty('--dark', "70, 70, 70")
			root.setProperty('--heading', "'Kranky', cursive")
			root.setProperty('--content', "'Kranky', cursive")
		}
	}, [theme])

	useEffect(() => {
		let root = document.documentElement.style
		if(size === "x-small") root.setProperty("--font-size", "12px")
		else if(size === "small") root.setProperty("--font-size", "16px")
		else if(size === "medium") root.setProperty("--font-size", "20px")
		else if(size === "large") root.setProperty("--font-size", "24px")
		else if(size === "x-large") root.setProperty("--font-size", "28px")
	}, [size])

	return (
		<div className="App" style={{ overflowY: "hidden", filter: theme === "mono-light" || theme === "mono-dark" ? "grayscale(1)" : "" }}>
			<Menu theme={theme} setTheme={setTheme} size={size} setSize={setSize} />
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
