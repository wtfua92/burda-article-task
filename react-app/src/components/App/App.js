import React, { Component } from "react";
import "./App.scss";

import Header from "../Header";
import Article from "../Article";
import Footer from "../Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articleData: null,
      prevScrollTop: 0,
      scrollDown: false,
      isBottom: false,
      headerClassName: "header"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/bazaar-article_49926/", {
      method: "GET",
      mode: "cors"
    })
      .then(resp => resp.json())
      .then(jsonResp => {
        this.setState(() => ({
          articleData: jsonResp.data
        }));
      });

    document.addEventListener("scroll", this.scrollHandler);
  }

  componentWillMount() {
    document.removeEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollDown = this.state.prevScrollTop < currentScrollTop;
    const isBottom =
      currentScrollTop + window.innerHeight + 5 >
      document.documentElement.scrollHeight;

    this.setState(prevState => ({
      ...prevState,
      scrollDown: scrollDown,
      isBottom: isBottom,
      prevScrollTop: currentScrollTop,
      headerClassName: !scrollDown || isBottom ? "header" : "header--hidden"
    }));
  };

  render() {
    const { articleData, headerClassName } = this.state;
    return (
      <>
        <Header className={headerClassName} />
        <main className="main col-4">
          {articleData && (
            <>
              <section className="articles col-4 col-md-2 col-lg-3">
                <Article articleData={articleData} />
              </section>
              <aside className="sidebar hidden-sm col-md-2 col-lg-1"/>
            </>
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
