import React, {useState, useEffect} from 'react';

import {Header, Button, Categories, SortPopup} from "./components";
import {Home, Cart} from './pages'
import { Route } from 'react-router-dom'

function App() {
    const [pizzas, setPizzas] = useState(null);

    useEffect(() => {

        fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => setPizzas(json.pizzas))
    },[])
    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Route path='/' exact component={Home}></Route>
                <Route path='/cart' component={Cart}></Route>
            </div>
        </div>
    );
}

export default App;
