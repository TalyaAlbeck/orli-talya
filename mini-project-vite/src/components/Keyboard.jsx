import React, {useState} from "react";
import ChooseLanguage from "./languages";

const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const Hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת'];
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
const sizes = [10, 20, 30, 40, 50];
const fontFamilies = ['sans-serif', 'serif', 'monospace'];

let myStyle = {
    color: "black",
    fontSize: 20,
    fontFamily: 'sans-serif'
}

function Keybord(){
    const [inputValue, setInputValue] = useState([])
    const [language, setLanguage] = useState("English")
    const [style, setColorStyle] = useState(myStyle);
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
        setColorStyle((prev) => {
            return {...prev, color: newColor}
        })
    }
    function changeTextSize(event){
        setColorStyle((prev) => {
            console.log({...prev, fontSize: parseInt(event.target.value)})
            return {...prev, fontSize: parseInt(event.target.value)}
        });
    }
    function changeFontFamily(event){
        setColorStyle((prev) => {
            console.log({...prev, fontFamily: event.target.value})
            return {...prev, fontFamily: event.target.value}
        });
    }
    function changeInputValue() {
        for(let i = 0; i < inputValue.length; i++) {
            return inputValue[i]
        }
    }
    function deleteLastChar(){
        setInputValue((prev)=>{
            let temp = [...prev]
            temp.pop();
            return temp
    });
    }
    function resetText(){
        setInputValue([]);
    }

    console.log('inputValue: ', inputValue);
    return (
        <>
            <div onChange={changeInputValue} style={style}>
                {inputValue.map((item, index) => {
                    console.log(item.style);
                    return <span key={index} style={item.style} value={item.value}>{item.value}</span>
                })}
            </div>
            <br /><br />
            <div>
                <button onClick={deleteLastChar}>delete</button>
                <button onClick={resetText}>reset</button>
            </div>
                
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
                    <button key={index} onClick={() => {ChangeInputColor(item)}} style={{backgroundColor: item}}>{item}</button>
                ))}
            </div>
            <div>
                <button onClick={() => setIsUpper(true)}>Upper</button>
                <button onClick={() => setIsUpper(false)}>Lower</button>
            </div>
            <div>
                <select onChange={changeTextSize}>
                    {sizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                    ))}
                </select>
            </div>
            <div>
                <select onChange={changeFontFamily}>
                    {fontFamilies.map((font, index) => (
                        <option key={index} value={font}>{font}</option>
                    ))}
                </select>
            </div>

        </>
    )
}


export default Keybord;