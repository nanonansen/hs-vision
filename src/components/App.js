import React, { useState, useEffect } from "react";

import Container from "./Container";
// import PreHeader from "./PreHeader";
import Header from "./Header";
import TagCarousel from "./TagCarousel";

import Card from "./Card";
// import BottomNav from "./BottomNav";
import Ticker from "./Marquee";
import Quote from "./Quote";
import Footer from "./Footer";

import FEED_DATA from "../FEED_DATA";

function App() {
    const [data, setData] = useState(FEED_DATA);

    useEffect(() => {
        setData(FEED_DATA);
    }, []);

    return (
        <div className="App">
            {/* <PreHeader></PreHeader> */}

            <main className="main-content">
                <Header />
                <Container>
                    <TagCarousel />
                    {data &&
                        data.map((item, index) => {
                            switch (item.type) {
                                case "image":
                                    return (
                                        <Card type={"image"} content={item} />
                                    );
                                case "gallery":
                                    return (
                                        <Card type={"gallery"} content={item} />
                                    );
                                case "quote":
                                    return <Quote content={item} />;
                                case "marquee":
                                    return <Ticker content={item} />;
                                default:
                                    return null;
                            }
                        })}
                    {/* <Card type="image" />
                    <Card type="image-gallery" />
                    <Card type="image" />
                    <Card type="image" />
                    <Card type="image" />
                    <Ticker />
                    <Card type="image" />
                    <Card type="image" /> */}
                </Container>
                {/* <BottomNav /> */}
                <Footer />
            </main>
        </div>
    );
}

export default App;
