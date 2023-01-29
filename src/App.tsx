import "./App.css";

import NoteCards from "./features/notecards/NoteCards";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<NoteCards />
		</div>
	);
}

export default App;
