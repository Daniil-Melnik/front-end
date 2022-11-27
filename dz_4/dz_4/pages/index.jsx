import React, {useEffect, useState} from "react";
import { List } from "../components/List/List";
import { Button } from "../components/Button";
import Head  from "next/head";

export default function IndexPage(){
    const [content, setContent] = useState(null);
    const [value, setValue] = useState("");
    const [page, setPage] = useState(0);
    function handleClick(e){
        e.preventDefault();
        if (!value) return;
        setContent(LastState=> [{title: value}, ...(LastState || [])]);
        setValue("");
    }
    
    return(
        
     <div>
        <Head>
            <title>Test gallery</title>
        </Head>
        <h3 className="">Это галерея создана для деморнтрации картинок из <a href="https://jsonplaceholder.typicode.com/photos">https://jsonplaceholder.typicode.com/photos</a> </h3>
        
        
    </div>
    );
}

