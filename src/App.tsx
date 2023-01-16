import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NoteCards from "./features/notecards/NoteCards";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<NoteCards />
		</div>
	);
}

export default App;
