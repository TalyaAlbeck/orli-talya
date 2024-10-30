import React, {useState} from "react";

function Input() {
    const [inputValue, setInputValue] = useState("")
    function changeInput({ target }) {
        setInputValue(target.value);
    }
    return <input type="text" onChange={changeInput}></input>
}

export default Input;