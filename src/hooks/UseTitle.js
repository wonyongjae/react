import React, {useEffect, useState} from "react";
import '../App.css';

const useTitle = (initialTitel) => {
    const [title, setTitle] = useState(initialTitel);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

const UseTitle = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);

    return (
        <div className="App">
            <h1>Hello</h1>
            <div></div>

        </div>
    );
}

export default UseTitle;