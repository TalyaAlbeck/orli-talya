import React, {useState} from "react";

function ChooseLanguage(props) {

    return (
        <>
            <button onClick={() => props.setLanguage("English")}>English</button>
            <button onClick={() => props.setLanguage("Hebrew")}>Hebrew</button>
        </>
    )
}

export default ChooseLanguage;