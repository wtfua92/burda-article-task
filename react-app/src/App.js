import React, {useEffect, useState} from 'react';
import './App.scss';

import Header from "./components/Header";
import Article from "./components/Article/Article";

function App() {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
      fetch("http://localhost:8080/api/bazaar-article_49926/", {
          method: "GET",
          mode: "cors"
      }).then((resp) => resp.json()).then((jsonResp) => {
          setArticleData(jsonResp.data);
      });
  }, []);

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
      </>

  );
}

export default App;
