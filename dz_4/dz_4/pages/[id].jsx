import { useRouter } from "next/dist/client/router";
import React from "react";
import Head from "next/head";
import { Card } from "../components/Card/Card";

const BlogItem  = ({data})=>{
    const router = useRouter();
    if (router.isFallback) return <h1>Loading...</h1>
    return(
    <div>
        <Head>
            <title>Gallery page</title>
        </Head>
        
        <Card key={data.id} url={data.url} title={data.title} />
    </div>
    );
};

export default BlogItem;

export async function getStaticProps(context){
    console.log(context);
    const TODOArticle = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`).then(res => res.json());
    return{
        props: {
            data: TODOArticle,
        },
        revalidate: 60,
    };
}

export async function getStaticPaths(context){
    return {
        paths: [{params: {id: "1"} }, {params: {id: "2"} }],
        fallback: true,
    };
}