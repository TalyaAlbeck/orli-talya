import React, {useState} from "react";

const englishCharacters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

function Keybord(){
    return (
        <div className="keyboard">
            {englishCharacters.map((item, index) => (
                <button key={index}>{item}</button>
            ))}
        </div>
    )
}

export default Keybord;