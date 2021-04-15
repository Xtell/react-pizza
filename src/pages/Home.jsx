import {Categories, SortPopup} from "../components";
import React, {useState} from "react";


function Home() {

    const [activeCategory, setActiveCategory] = useState(0);

    function handleCategoryClick(index) {

        setActiveCategory(index)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={handleCategoryClick} activeItemIndex={activeCategory}
                            items={['Все', 'Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={['Популярности', 'Цене', 'Алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

            </div>
        </div>
    )
}

export default Home;