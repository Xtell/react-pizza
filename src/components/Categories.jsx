import React, {useState} from 'react';
import classnames from "classnames";

function Categories({items, onClickItem, activeItemIndex}) {
    return (
        <div className="categories">
            <ul>

                {
                    items &&
                    items.map((name, index) => <li className={classnames({'active': activeItemIndex === index})}
                                                   onClick={() => onClickItem(index)}
                                                   key={`${name}_${index}`}>{name}</li>)
                }
            </ul>
        </div>
    )
}

export default Categories