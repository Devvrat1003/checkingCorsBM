import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const getRespone = async () => {
        let res = await fetch("https://wsgibm.onrender.com/api/v1/dummy/posts");
        let data = await res.json();

        console.log(data, "data");
    };
    return (
        <>
            <button onClick={getRespone}>Click me</button>
        </>
    );
}

export default App;
