import React, {useState} from "react";
import ChooseLanguage from "./languages";

const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const Hebrew = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת'];
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "black"];
const sizes = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const fontFamilies = ['sans-serif', 'serif', 'monospace'];

let myStyle = {
    color: "black",
    fontSize: 20,
    fontFamily: 'sans-serif'
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
            temp.push({value: <br />, style: {fontSize: style.fontSize}});            
            return temp
    });
    }
    function ChangeInputColor(newColor) {
        setStyle((prev) => {
            return {...prev, color: newColor}
        })
    }
    function changeTextSize(event){
        setStyle((prev) => {
            return {...prev, fontSize: parseInt(event.target.value)}
        });
    }
    function changeFontFamily(event){
        setStyle((prev) => {
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
    function randomStyle() {
        console.log("random");
        let i = colors.length;
        let ranC = colors[(Math.floor((Math.random()) * colors.length))];
        let ranS = sizes[(Math.floor((Math.random()) * sizes.length))];
        let ranF = fontFamilies[(Math.floor((Math.random()) * fontFamilies.length))];
        
        setStyle((prev) => {
            return {...prev, color: ranC, fontSize: ranS, fontFamily :ranF}
        })
        
    }


    return (
        <>
            <nav>
                <div className="colors">
                    {colors.map((item, index) => (
                        <button key={index} onClick={() => {ChangeInputColor(item)}} style={{backgroundColor: item}}></button>
                    ))}
                </div>
                <div>
                    <select onChange={changeTextSize} style={{fontSize: '25px', marginLeft: '20px'}}>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select onChange={changeFontFamily} style={{fontSize: '25px', marginLeft: '20px'}}>
                        {fontFamilies.map((font, index) => (
                            <option key={index} value={font}>{font}</option>
                        ))}
                    </select>
                </div>
                <button className="rendom" onClick={randomStyle}>random style</button>
            </nav>
            
            <div onChange={changeInputValue} style={style} className="inputDiv">
                {inputValue.map((item, index) => {
                    return <span key={index} style={item.style} value={item.value}>{item.value}</span>
                })}
            </div>
            <br /><br />
            <div className="specials">
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
                <div className="specials">
                    <button className="space" onClick={addSpace}>space</button>
                    <button className="dot" onClick={addChar}>.</button>
                    <button className="enter" onClick={addEnter}>enter</button>
                </div>
            <br /><br /><br />
            </div>
            <ChooseLanguage setLanguage={setLanguage}/>
            <div>
                <button onClick={() => setIsUpper(false)}>Lower</button>
                <button onClick={() => setIsUpper(true)}>Upper</button>
            </div>
            
            
        </>
    )
}


export default Keybord;