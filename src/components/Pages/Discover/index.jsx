import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Prismic from "prismic-javascript";
import NProgress from "nprogress";
import LazyLoad from "react-lazyload";

import Container from "../../Container";
// import TagCarousel from "../../TagCarousel";
import Image from "../../Image";

import Client from "../../../prismicConfig";
import ProductFilter from "../../ProductFilter";
import Button from "../../Button";
import ProductModal from "../Product-Modal";
import ProductSearch from "../../ProductSearch";

const Discover = ({ handleHideHeader }) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filterViewActive, setFilterViewActive] = useState(false);
    const [searchViewActive, setSearchViewActive] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalId, setModalId] = useState(null);

    useEffect(() => {
        NProgress.start();
        setIsLoading(true);
        const fetchData = async () => {
            const response = await Client.query(
                [
                    Prismic.Predicates.any("document.type", [
                        // "article",
                        "product"
                    ]),
                    Prismic.Predicates.not("my.article.thumbnail_type", "quote")
                ],
                { orderings: "[document.last_publication_date desc]" }
            );
            if (response) {
                let filters = { categories: [], prices: [], colors: [] };

                response.results.forEach(el => {
                    if (el.data.price !== undefined && el.data.price !== null) {
                        filters.prices.push(el.data.price);
                    }
                    if (el.data.color !== undefined && el.data.color !== null) {
                        filters.colors.push(el.data.color);
                    }
                    if (
                        el.data.product_category !== undefined &&
                        el.data.product_category !== null
                    ) {
                        filters.categories.push(el.data.product_category);
                    }
                });
                console.log("filters", filters);

                let uniqueCategories = [...new Set(filters.categories)];
                let uniquePrices = [...new Set(filters.prices)];
                let uniqueColors = [...new Set(filters.colors)];

                setFilterData({
                    categories: uniqueCategories,
                    prices: uniquePrices,
                    colors: uniqueColors
                });

                console.log("response", response.results);

                setData(response.results);

                setIsLoading(false);
                NProgress.done();
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (activeFilter === null) return;
        NProgress.start();
        setIsLoading(true);
        const fetchFilteredData = async () => {
            const response = await Client.query([
                // Prismic.Predicates.any("document.type", "product"),
                Prismic.Predicates.at(
                    "my.product.product_category",
                    activeFilter
                )
            ]);
            if (response) {
                console.log("response", response.results);

                setData(response.results);
                setFilterViewActive(false);
                setShowButton(true);
                setIsLoading(false);
                NProgress.done();
            }
        };

        fetchFilteredData();
    }, [activeFilter]);

    const handleFilterActivation = () => {
        setFilterViewActive(!filterViewActive);
        if (!filterViewActive) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }
    };
    const handleFilterSelection = value => {
        setActiveFilter(String(value));
    };
    const handleModalView = uid => {
        console.log("Open Modal with uid", uid);

        setModalIsVisible(!modalIsVisible);
        if (!modalIsVisible) {
            document.body.classList.add("noscroll");
            setModalId(uid);
        } else {
            document.body.classList.remove("noscroll");
        }
    };
    const handleSearchActivation = () => {
        setSearchViewActive(!searchViewActive);
    };

    if (isLoading) {
        return <div className="preloader">(LOADING)</div>;
    } else {
        return (
            <main className="discover">
                {/* <TagCarousel /> */}
                <div className="button-group">
                    {/* <CSSTransition
                        in={showButton}
                        timeout={400}
                        classNames="filterbutton"
                    >
                        <Button
                            className="button button--secondary open-filter"
                            onClick={handleFilterActivation}
                        >
                            Filter
                        </Button>
                    </CSSTransition> */}
                    <Button
                        className="button button--secondary open-filter"
                        onClick={handleFilterActivation}
                    >
                        Filter
                    </Button>
                    <Button
                        className="button button--secondary open-search"
                        onClick={handleSearchActivation}
                    >
                        Search
                    </Button>
                </div>
                <Container>
                    {data.map((item, index) => {
                        if (item.type === "product") {
                            return (
                                <div
                                    className="grid__item grid__item-col-2"
                                    key={index}
                                >
                                    <span
                                        onClick={() =>
                                            handleModalView(item.uid)
                                        }
                                    >
                                        <Image
                                            src={item.data.featured_image.url}
                                            crop={"&fit=clamp"}
                                        />
                                    </span>
                                    {/* <Link to={`/product/${item.uid}`}>
                                        <Image
                                            src={item.data.featured_image.url}
                                            crop={"&fit=clamp"}
                                        />
                                    </Link> */}
                                </div>
                            );
                        }
                        return (
                            <LazyLoad throttle={100} height={260} key={index}>
                                <div
                                    className="grid__item grid__item-col-2"
                                    key={index}
                                >
                                    <Link to={`/article/${item.uid}`}>
                                        <Image
                                            src={item.data.featured_image.url}
                                        />
                                    </Link>
                                </div>
                            </LazyLoad>
                        );
                    })}

                    <CSSTransition
                        in={filterViewActive}
                        timeout={300}
                        classNames="filterpanel"
                        unmountOnExit
                        appear
                        onEnter={() => setShowButton(false)}
                        onExited={() => setShowButton(true)}
                    >
                        <ProductFilter
                            handleFilterActivation={handleFilterActivation}
                            handleFilterSelection={handleFilterSelection}
                            data={filterData}
                            filterViewActive={filterViewActive}
                        />
                    </CSSTransition>
                    <CSSTransition
                        in={searchViewActive}
                        timeout={300}
                        classNames="searchpanel"
                        unmountOnExit
                        appear
                    >
                        <ProductSearch
                            handleSearchActivation={handleSearchActivation}
                        />
                    </CSSTransition>
                </Container>

                <ProductModal
                    uid={modalId}
                    handleModalView={handleModalView}
                    modalIsVisible={modalIsVisible}
                />
            </main>
        );
    }
};

export default Discover;
