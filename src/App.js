import "./App.css";
import { useState } from "react";
import Show from "./Show";

function App() {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <div className="header">
                <i class="fa-solid fa-calculator calculator"></i>
                <h1>React Counter</h1>
            </div>
            <div className="container">
                <Show number={number} setNumber={setNumber} />
            </div>
            <div className="footer">
                <p>Made by me to me at Le reacteur</p>
            </div>
        </div>
    );
}

export default App;
