import React, { useState } from "react";
import Button from "../Button";
import Tag from "../Tag";
import Icon from "../Icon";

const ProductFilter = props => {
    const [activeRow, setActiveRow] = useState(null);
    const {
        handleFilterActivation,
        data,
        handleFilterSelection,
        filterViewActive
    } = props;

    const handleOpenPanel = index => {
        setActiveRow(index);
        if (activeRow === index) {
            setActiveRow(null);
        }
    };
    return (
        <div
            className={
                filterViewActive ? "product-filter is-active" : "product-filter"
            }
        >
            <Button
                className="button button--secondary"
                onClick={handleFilterActivation}
            >
                Close
            </Button>
            <div className="product-filter__content">
                {Object.keys(data).map((key, index) => {
                    return (
                        <div
                            className={
                                index === activeRow
                                    ? "product-filter__row isOpen"
                                    : "product-filter__row"
                            }
                            key={index}
                        >
                            <div
                                className="filter-title"
                                onClick={() => handleOpenPanel(index)}
                            >
                                {key}
                                {activeRow === index ? (
                                    <Icon name="minus" />
                                ) : (
                                    <Icon name="plus" />
                                )}
                            </div>
                            <div className="filter-tags">
                                {data[key].map((item, i) => (
                                    <div className="filter-item" key={i}>
                                        <Tag
                                            onClick={() =>
                                                handleFilterSelection(item)
                                            }
                                        >
                                            {item}
                                        </Tag>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductFilter;
