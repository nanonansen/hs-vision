import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

// import Footer from "./Footer";

import Feed from "./Feed";
import Article from "./Pages/Article";
import ArticleCarousel from "./ArticleCarousel";

function App() {
    return (
        <div className="App">
            <main className="main-content">
                <Header />

                <Switch>
                    <Route path="/article/:articleId">
                        <Article />
                    </Route>
                    <Route path="/carousel">
                        <ArticleCarousel />
                    </Route>
                    <Route path="/">
                        <Feed />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </main>
        </div>
    );
}

export default App;
