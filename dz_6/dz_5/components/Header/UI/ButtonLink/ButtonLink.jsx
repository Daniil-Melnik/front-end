import React from "react";
import Link from "next/link";
import css from "./ButtonList.module.css";

import {clx} from "../../../../utils/clx";
export const ButtonLink = ({children,classname ,...props}) => {
    return (
        <Link className={clx(css.link, classname)} {...props}>
            {children}
        </Link>
    );
};