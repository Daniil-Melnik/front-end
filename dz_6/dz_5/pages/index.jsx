import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav"
import css from "./index.module.css";
import { Button } from "../components/Header/UI/Button/Button";
import {Card} from "../components/Cards/Card"

const IndexPage = ({data}) => {
    console.log(data);
    return(
        <Layout title="Main">
            <header>
                <Nav />
            </header>
            <main className={css.main}>
                <div className={css.main__title}>
                    <h1 className={css.main__logo}>My blog</h1>
                    <Button>Lets reed</Button>
                </div>
                <section className={css.cards}>{data.map((el , i) => (
                    <Card key={i} id={i} {...el} />
                    ))}
                </section>
            </main>
        </Layout>
    );

};

export async function getStaticProps(context){
    const result = await fetch("https://leti.kzteams.ru/api/blog/page")
    .then(res => {
        if (res.ok) return res.json();
        else throw Error(res.statusText);
    })
    .catch(err => console.error(err));
    if (!Array.isArray(result)) {
        return{
            props:{
                data: [],
            },
            revalidate: 100,
        };
    }
    return{
        props:{
            data: [...result],
        },
        revalidate: 100,
    };
}


export default IndexPage