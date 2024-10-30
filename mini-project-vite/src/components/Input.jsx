import React, {useState} from "react";

let myStyle = {
    color: "red",
    fontSize: 20,
    backgroundColor: "purple"
}

function Input() {
    const [inputValue, setInputValue] = useState("")
    function changeInput({ target }) {
        setInputValue(target.value);
    }
    return <input type="text" onChange={changeInput} style={myStyle}></input>
}

export default Input;