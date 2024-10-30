import React, {useState} from "react";

function ChangeInputColor() {
    return (
        <div className="colors">
            <button onClick={() => {ChangeInputColor("red")}}>red</button>
            <button onClick={() => {ChangeInputColor("yello")}}>yellow</button>
            <button onClick={() => {ChangeInputColor("purple")}}>purple</button>
            <button onClick={() => {ChangeInputColor("blue")}}>blue</button>
            <button onClick={() => {ChangeInputColor("green")}}>green</button>
        </div>
    )
}

export default ChangeInputColor;