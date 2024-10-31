import React, {useState} from "react";
import ChooseLanguage from "./languages";

const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
const Hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת']
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"]
const sizes = [10, 20, 30, 40, 50];

let myStyle = {
    color: "black",
    fontSize: 20
}

function Keybord(){
    const [inputValue, setInputValue] = useState([])
    const [language, setLanguage] = useState("English")
    const [style, setColorStyle] = useState(myStyle);
    const [isUpper, setIsUpper] = useState(false);

    function addChar({target}) {
        // const newValue = inputValue;
        // newValue.push(target.innerHTML)
        // console.log('inputValue: ', inputValue);
        setInputValue((prev)=>{
            let temp = [...prev]
            isUpper ? temp.push({value: target.innerHTML.toString().toUpperCase(), style: style}):
            temp.push({value: target.innerHTML, style: style});
            // console.log(temp);
            
        return temp
    });
    // for(let i = 0; i < prev.length; i++) {
    //     return prev[i]
    // }    
    }
    function addSpace() {
        setInputValue((prev)=>{
            let temp = [...prev]
            temp.push({value: " ", style: {fontSize: style.fontSize}});
            // console.log(temp);
            
        return temp
    });
    }
    function addEnter() {
        setInputValue((prev)=>{
            let temp = [...prev]
            temp.push({value: "\n", style: {fontSize: style.fontSize}});
            // console.log(temp);
            
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
        console.log({...myStyle, fontSize: event.target.value})
        setColorStyle((prev) => {
            return {...prev, fontSize: event.target.value}
        });
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
                {/* {console.log(temp)}; */}
                {inputValue.map((item, index) => {
                    console.log(item.value);
                    return <span key={index} style={item.style} value={item.value}>{item.value}</span>
                })}
            </div>
            {/* <div onChange={changeInputValue} style={style}> {inputValue} </div> */}
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
                    <button key={index} onClick={() => {ChangeInputColor(item)}} style={{backgroundColor: item}}>{item}</button>
                ))}
                {/* <select className="colors" id="color-select" onChange={(e)=> ChangeInputColor(e.target.value)}>
                    {colors.map((item, index) => (
                <option key={index} style={{backgroundColor: item}} value={item}>{item}</option>
                ))}
                </select> */}
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

        </>
    )
}

export default Keybord;