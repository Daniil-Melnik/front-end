import React from "react";
import css from "./Button.module.css";
import {clx} from "../../../../utils/clx";

export const Button = ({children, classname, ...props}) => {
    return (<button className={clx(css.button, classname)} {...props}>
        {children}
        </button>
    );
};