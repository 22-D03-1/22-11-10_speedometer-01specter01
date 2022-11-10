import "./App.css";
import Car from "./components/Car";


function App() {
    return (
        <div className="App">
            <h1>hello</h1>
            <Car />
            <Speedometer id="dial5" value="-110" title="Acceleration X" />
        </div>
    );
}

export default App;
