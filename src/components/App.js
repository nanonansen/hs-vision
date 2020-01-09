import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

// import Footer from "./Footer";

import Feed from "./Feed";
import Article from "./Pages/Article";
import Product from "./Pages/Product";
//import ArticleCarousel from "./ArticleCarousel";
import Discover from "./Pages/Discover";

function App() {
    const [hideHeader, setHideHeader] = useState(false);
    const handleHideHeader = () => {
        console.log("hide Header");
        setHideHeader(!hideHeader);
    };
    return (
        <div className="App">
            <main className="main-content">
                <Header hideHeader={hideHeader} />

                <Switch>
                    <Route path="/article/:articleId">
                        <Article />
                    </Route>
                    <Route path="/product/:productId">
                        <Product />
                    </Route>

                    <Route path="/discover">
                        <Discover handleHideHeader={handleHideHeader} />
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
