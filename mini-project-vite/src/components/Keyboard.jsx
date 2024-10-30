import React, {useState} from "react";
import ChooseLanguage from "./languages";
import ChangeInputColor from "./colors";

const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
const Hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת']
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"]

let myStyle = {
    color: "black",
    fontSize: 20
}

function Keybord(){
    const [inputValue, setInputValue] = useState("")
    const [language, setLanguage] = useState("English")
    const [style, setColorStyle] = useState(myStyle)

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
    function ChangeInputColor(newColor) {
        setColorStyle((prev) => {
            return {...prev, color: newColor}
        })
    }

    return (
        <>
            {/* <Input /> */}
            <textarea type="text" onChange={changeInput} value={inputValue} style={style}></textarea>
                <br /><br />
            <div className="keyboard">
                {language === 'English'? English.map((item, index) => (
                    <button key={index} onClick={addChar}>{item}</button>
                )) : Hebrew.map((item, index) => (
                    <button key={index} onClick={addChar}>{item}</button>
                ))
            }<br />
                <button className="space" onClick={addSpace}>space</button>
                <button className="dot" onClick={addChar}>.</button>
                <button className="enter" onClick={addEnter}>enter</button>
            <br /><br /><br />
            </div>
            <ChooseLanguage setLanguage={setLanguage}/>
            <div className="colors">
                {colors.map((item, index) => (
                    <button onClick={() => {ChangeInputColor(item)}} style={{backgroundColor: item}}>{item}</button>
                ))}
            </div>

        </>
    )
}

export default Keybord;