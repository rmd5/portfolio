import CV from "./components/cv/main/cv";

import history from "./history";
import { Router, Switch, Route } from "react-router";
import LANDING from "./components/landing/main/landing";
import PROJECTS from "./components/projects/main/projects";
import { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import Lost from "./components/lost/lost";

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
	const [size, setSize] = useState(localStorage.getItem("size") || "small")
	const [menuPosition, setMenuPosition] = useState(localStorage.getItem("position") || "right")
	const [orientation, setOrientation] = useState(localStorage.getItem("orientation") || "up")

	const [initial, setInitial] = useState(16)

	useEffect(() => {
		try {
			setTheme(localStorage.getItem("theme") || "light")
			setSize(localStorage.getItem("size") || "small")
			setMenuPosition(localStorage.getItem("position") || "right")
			setOrientation(localStorage.getItem("orientation") || "up")
		} catch (err) {
			console.log("Could not fetch theme")
		}
	}, [])

	useEffect(() => {
		let root = document.documentElement.style
		if (theme === "dark") {
			setInitial(16)
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
			if (theme === "mono-light") {
				root.setProperty('--heading', "'Homemade Apple', cursive")
				root.setProperty('--content', "'Homemade Apple', cursive")
				setInitial(14)
			} else {
				root.setProperty('--heading', "'Roboto', sans-serif")
				root.setProperty('--content', "'Roboto', sans-serif")
				setInitial(16)
			}
		} else if (theme === "clown") {
			setInitial(16)
			root.setProperty('--orange', '0, 0, 255')
			root.setProperty('--teal', "60, 185, 0")
			root.setProperty('--black', "255, 255, 0")
			root.setProperty('--grey', "0, 255, 0")
			root.setProperty('--medium', "131, 131, 131")
			root.setProperty('--light', "218, 218, 218")
			root.setProperty('--white', "205, 0, 0")
			root.setProperty('--dark', "255, 255, 255")
			root.setProperty('--heading', "'Mystery Quest', cursive")
			root.setProperty('--content', "'Mystery Quest', cursive")
		}
	}, [theme])

	useEffect(() => {
		console.log(initial)
		let root = document.documentElement.style
		if (size === "x-small") root.setProperty("--font-size", (initial - 4) + "px")
		else if (size === "small") root.setProperty("--font-size", (initial) + "px")
		else if (size === "medium") root.setProperty("--font-size", (initial + 4) + "px")
		else if (size === "large") root.setProperty("--font-size", (initial + 8) + "px")
		else if (size === "x-large") root.setProperty("--font-size", (initial + 12) + "px")
	}, [size, initial])

	useEffect(() => {
		let root = document.documentElement.style
		if (menuPosition === "left") root.setProperty("--menu-closed", "translate(-100%, 0px)")
		else if (menuPosition === "right") root.setProperty("--menu-closed", "translate(100%, 0px)")
		document.getElementById("menu").style.display = "block"
	}, [menuPosition])

	useEffect(() => {
		let root = document.documentElement.style
		if (orientation === "up") root.setProperty("--rotation", "0deg")
		else if (orientation === "left") root.setProperty("--rotation", "270deg")
		else if (orientation === "right") root.setProperty("--rotation", "90deg")
		else if (orientation === "down") root.setProperty("--rotation", "180deg")
		document.getElementById("menu").style.display = "block"
	}, [orientation])

	return (
		<div className="App" style={{ overflowY: "hidden", filter: theme === "mono-light" || theme === "mono-dark" ? "grayscale(1)" : "" }}>
			<Menu theme={theme} setTheme={setTheme} size={size} setSize={setSize} position={menuPosition} setPosition={setMenuPosition} orientation={orientation} setOrientation={setOrientation} />
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={LANDING} />
					<Route path="/cv" component={CV} />
					<Route path="/projects" component={PROJECTS} />
					<Route path="/" component={Lost} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
