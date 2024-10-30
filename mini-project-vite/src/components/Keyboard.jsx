import React, {useState} from "react";
import ChooseLanguage from "./languages";

const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
const Hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת']

function Keybord(){
    const [inputValue, setInputValue] = useState("")
    const [language, setLanguage] = useState("English")

    function addChar({target}) {
        setInputValue(inputValue + target.innerHTML);
        
    }
    function addSpace() {
        setInputValue(inputValue + " ");
    }
    function addEnter() {
        setInputValue(inputValue + "\n");
    }
    function changeInput({ target }) {
        setInputValue(target.value);
    }

    return (
        <>
            {/* <Input /> */}
            <textarea type="text" onChange={changeInput} value={inputValue}></textarea>
            <div className="keyboard">
                {language === 'English'? English.map((item, index) => (
                    <button key={index} onClick={addChar}>{item}</button>
                )) : Hebrew.map((item, index) => (
                    <button key={index} onClick={addChar}>{item}</button>
                ))
            }
                <button className="space" onClick={addSpace}>space</button>
                <button className="dot" onClick={addChar}>.</button>
                <button className="enter" onClick={addEnter}>enter</button>
            </div>
            <ChooseLanguage setLanguage={setLanguage}/>
        </>
    )
}

export default Keybord;