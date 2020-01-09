import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Prismic from "prismic-javascript";

import Client from "../../../prismicConfig";
import Image from "../../Image";
import Button from "../../Button";
import Icon from "../../Icon";

const ProductModal = ({ uid, handleModalView, modalIsVisible }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // Fetch Data when component mounts
    useEffect(() => {
        //NProgress.start();
        if (uid !== null) {
            const fetchData = async () => {
                const response = await Client.query(
                    Prismic.Predicates.at("my.product.uid", uid)
                );
                if (response) {
                    setData(response.results[0]);
                    setIsLoading(false);
                    //NProgress.done();
                }
            };
            fetchData();
        }
    }, [uid]);
    if (isLoading) {
        return <div className="preloader">(LOADING)</div>;
    }
    return (
        <CSSTransition
            in={modalIsVisible}
            timeout={300}
            classNames="product-modal"
            unmountOnExit
            appear
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
        >
            <div className="product-modal">
                <div className="product-modal__topbar">
                    <Button
                        onClick={handleModalView}
                        className="product-modal__close"
                    >
                        <Icon name={"close"}></Icon>
                    </Button>
                    {/* <span className="product-modal__topbar-title">
                        Category
                    </span> */}
                </div>
                <div className="product-modal__content">
                    <Image
                        src={data.data.featured_image.url}
                        crop={"&fit=clamp"}
                    />
                    <div className="product-modal__header">
                        <h1 className="product-modal__title">
                            {data.data.product_title[0].text}
                        </h1>
                        <p className="product-modal__brand">
                            {data.data.brand}
                        </p>
                        <Button className={"button button--primary "}>
                            Buy Now
                        </Button>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil reiciendis suscipit eaque! Et reprehenderit,
                        obcaecati quis consequuntur optio ea nihil. Illum rem
                        architecto quos inventore dolore non quidem dolores
                        magnam itaque voluptatem officia doloribus, laboriosam
                        sed officiis dignissimos minima, velit facere quaerat,
                        quae deleniti nemo accusamus. Repellat deleniti, vitae
                        autem voluptas error blanditiis quasi voluptatum laborum
                        maiores veniam numquam natus neque excepturi molestias
                        ratione velit assumenda molestiae incidunt, ab quis,
                        obcaecati officiis? Unde itaque nesciunt sunt, labore
                        officia incidunt perferendis minus? Est sunt eius a
                        nostrum modi tenetur laborum sapiente consectetur,
                        asperiores facere necessitatibus dignissimos dolorem
                        dolore neque molestiae ex quisquam expedita. Natus ab
                        nemo, odit labore magni illo quidem, assumenda commodi
                        quia tempora praesentium, accusantium nisi? Quam
                        officiis iste, exercitationem magni molestiae
                        praesentium, maiores ipsa porro dignissimos nostrum illo
                        incidunt voluptatibus optio adipisci nesciunt et aliquid
                        maxime omnis vel ducimus, tempore error saepe! Quis
                        voluptatibus, voluptatem saepe consequatur ad ea odio
                        fuga sequi et inventore laboriosam dolores. Velit
                        sapiente sint doloribus culpa autem vitae repellendus
                        maxime at possimus labore perferendis dignissimos atque
                        rerum eum cum veniam assumenda omnis pariatur,
                        asperiores quia, accusantium sit? Molestias quibusdam
                        laborum reiciendis, animi veniam amet doloribus alias
                        accusantium, cum eveniet dolorem tempora sit debitis.
                    </p>
                </div>
            </div>
        </CSSTransition>
    );
};

export default ProductModal;
