import "./App.css";
import Car from "./components/Car";
import { useReducer } from "react";

const initState = {
    isSwitschedOn: false,
    speed: 0,
};
const reducer = (state, action) => {
    return state;
};
function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div className="App">
            <Car state={state} dispatch={dispatch} />
        </div>
    );
}

export default App;
