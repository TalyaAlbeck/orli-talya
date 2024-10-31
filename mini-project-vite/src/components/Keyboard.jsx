import React, {useState} from "react";
import ChooseLanguage from "./languages";

const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
const Hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת']
const colors = ["pink", "red", "orange", "yellow", "green", "blue", "purple", "black"]

let myStyle = {
    color: "black",
    fontSize: 20
}

function Keybord(){
    const [inputValue, setInputValue] = useState([])
    const [language, setLanguage] = useState("English")
    const [style, setStyle] = useState(myStyle);
    const [isUpper, setIsUpper] = useState(false);

    function addChar({target}) {
        setInputValue((prev)=>{
            let temp = [...prev]
            isUpper ? temp.push({value: target.innerHTML.toString().toUpperCase(), style: style}):
            temp.push({value: target.innerHTML, style: style});            
        return temp
    }); 
    }
    function addSpace() {
        setInputValue((prev)=>{
            let temp = [...prev]
            temp.push({value: " ", style: {fontSize: style.fontSize}});
            
        return temp
    });
    }
    function addEnter() {
        setInputValue((prev)=>{
            let temp = [...prev]
            temp.push({value: "\n", style: {fontSize: style.fontSize}});
            
        return temp
    });
    }
    function changeInput({ target }) {
        setInputValue(target.value);
    }
    function ChangeInputColor(newColor) {
        setStyle((prev) => {
            return {...prev, color: newColor}
        })
    }
    function changeSelectStyle(e) {
        console.log(e);
        console.log("h") 
    }

    function changeInputValue() {
        for(let i = 0; i < inputValue.length; i++) {
            return inputValue[i]
        }
    }

    console.log('inputValue: ', inputValue);
    return (
        <>
            {/* <Input /> */}
            <div onChange={changeInputValue} style={style}>
                {inputValue.map((item, index) => {
                    console.log(item.value);
                    return <span key={index} style={item.style} value={item.value} onSelect={(e) => {changeSelectStyle(e)}}>{item.value}</span>
                })}
            </div>
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
                        <div>
                            <button onClick={() => setIsUpper(false)}>Lower</button>
                            <button onClick={() => setIsUpper(true)}>Upper</button>
                        </div>
            <div className="colors">
                {colors.map((item, index) => (
                    <button key={index} onClick={() => {ChangeInputColor(item)}} style={{backgroundColor: item}}></button>
                ))}
                {/* <select className="colors" id="color-select" onChange={(e)=> ChangeInputColor(e.target.value)}>
                    {colors.map((item, index) => (
                <option key={index} style={{backgroundColor: item}} value={item}>{item}</option>
                ))}
                </select> */}
            </div>
        </>
    )
}

export default Keybord;