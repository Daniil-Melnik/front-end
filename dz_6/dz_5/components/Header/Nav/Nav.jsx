import React from "react";
import {ButtonLink} from "../UI/ButtonLink/ButtonLink";

import css from "./Nav.module.css";
export const Nav = () => {
    return (
        <nav className={css.nav}>
            <h1 className={css.nav__logo}>Logo</h1>
            <ul className={css.nav__list}>
                <li>
                    <ButtonLink href="/profile">Profile</ButtonLink>
                </li>
                <li>
                    <ButtonLink href="/contact">Contacts</ButtonLink>
                </li>
                <li>
                    <ButtonLink href="/about">About us</ButtonLink>
                </li>
                <li>
                    <ButtonLink href="../signin">sign in</ButtonLink>
                </li>
            </ul>
        </nav>
    );
};