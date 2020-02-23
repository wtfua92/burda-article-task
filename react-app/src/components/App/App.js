import React, {useEffect, useState, Component} from 'react';
import './App.scss';

import Header from "../Header";
import Article from "../Article";
import Footer from "../Footer";

class App extends Component {
    constructor() {
        super();
        this.state = {
            articleData: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/bazaar-article_49926/", {
            method: "GET",
            mode: "cors"
        }).then((resp) => resp.json()).then((jsonResp) => {
            this.setState(() => ({
                articleData: jsonResp.data
            }));
        });
    }

    render() {
        const {articleData} = this.state;
        return (
            <>
                <Header/>
                <main className="main col-4">
                    {
                        articleData &&
                        <>
                            <section className="articles col-4 col-md-2 col-lg-3">
                                <Article articleData={articleData} />
                            </section>
                            <aside className="sidebar hidden-sm col-md-2 col-lg-1">
                            </aside>
                        </>
                    }
                </main>
                <Footer/>
            </>
        );
    }
}

export default App;
