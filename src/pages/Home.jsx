import {Categories, SortPopup, PizzaBlock} from "../components";
import React, {useState} from "react";


function Home({items}) {

    const [activeCategory, setActiveCategory] = useState(0);

    function handleCategoryClick(index) {

        setActiveCategory(index)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={handleCategoryClick} activeItemIndex={activeCategory}
                            items={['Все', 'Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup items={[{name: 'Популярности', type: 'popular'},
                    {name: 'Цене', type: 'price'}, {
                    name: 'Алфавиту',
                    type: 'alphabet'
                }]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((item) => <PizzaBlock key={item.id} {...item}/>)
                }

            </div>
        </div>
    )
}

export default Home;