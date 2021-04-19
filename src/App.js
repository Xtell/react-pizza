import React, {useState, useEffect} from 'react';

import {Header, Button, Categories, SortPopup} from "./components";
import {Home, Cart} from './pages'
import { Route } from 'react-router-dom'

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3001/db.json').then(resp => resp.json()).then(json => setPizzas(json.pizzas))
    },[])

    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Route path='/'  render={() => <Home items={pizzas} />}></Route>
                <Route path='/cart' component={Cart}></Route>
            </div>
        </div>
    );
}

export default App;
