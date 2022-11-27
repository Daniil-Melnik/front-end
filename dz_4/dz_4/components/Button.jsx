import React from "react";

export const Button = ({children, onclick, type})=>{
    return(
        <button type={type} onClick= {onclick} className="">
            {children}
        </button>
    );
};