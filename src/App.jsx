import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const getRespone = async () => {
        let res = await fetch("http://127.0.0.1:8000/api/v1/dummy/posts");
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
