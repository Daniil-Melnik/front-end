import React from "react";

export const List = ({content}) => {
    return (
        <ul>
            {content.map((el, i) => (
                <li key={i}>{el.title}</li>
            ))}
        </ul>
    );
};