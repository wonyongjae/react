import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";


const useConfirm = (messege = "", onConfirm, onCancel) => {
    if(!onConfirm && typeof onConfirm !== "function"){
        return;
    }
    if(onCancel && typeof onCancel !== "function"){
        return;
    }
    const confirmAction = () => {
        if(onConfirm(messege)){
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};

const UseConfirm = () => {
    const deleteWorld = () => console.log("Delete the World");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are u sure", deleteWorld, abort);

    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}

export default UseConfirm;