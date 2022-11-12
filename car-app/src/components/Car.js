import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Car({ state, dispatch }) {
    return (
        <div className="car">
            {state.isSwitchedOn && <ReactSpeedometer />}
            <Button onClick={() => dispatch({ type: "switchOn/Off" })}>
                {state.isSwitchedOn ? "Ausschhalten" : "Anschalten"}
            </Button>
            <Button>Gas geben</Button>
            <Button>bremsen</Button>
        </div>
    );
}
