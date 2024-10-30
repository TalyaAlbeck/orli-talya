import React, {useState} from "react";
// import Input from "./Input";

const englishCharacters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

function Keybord(){
    const [inputValue, setInputValue] = useState("")
    function addChar({target}) {
        setInputValue(inputValue + target.innerHTML);
        
    }
    function changeInput({ target }) {
        setInputValue(target.value);
    }
    return (
        <>
            {/* <Input /> */}
            <input type="text" onChange={changeInput} value={inputValue}></input>
            <div className="keyboard">
                {englishCharacters.map((item, index) => (
                    <button key={index} onClick={addChar}>{item}</button>
                ))}
            </div>
        </>
    )
}

export default Keybord;