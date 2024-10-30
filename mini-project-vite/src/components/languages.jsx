import React, {useState} from "react";

function ChooseLanguage(props) {
    // function changeLanguage({target}) {
    //     const newLanguage = target.innerHTML;
    //     console.log(newLanguage);
    //     setLanguage(newLanguage);
    // }

    return (
        <>
            <button onClick={() => props.setLanguage("English")}>English</button>
            <button onClick={() => props.setLanguage("Hebrew")}>Hebrew</button>
        </>
    )
}

export default ChooseLanguage;