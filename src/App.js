import React, {useState, useEffect} from 'react';
import store from "./redux/store";
import {Header, Button, Categories, SortPopup} from "./components";
import {Home, Cart} from './pages'
import { Route } from 'react-router-dom'

function App() {
    const [pizzas, setPizzas] = useState([]);

    store.subscribe(() => console.debug(store.getState()))

    useEffect(() => {

        fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => setPizzas(json.pizzas))
    },[])

    return (
        <div className="wrapper">
            <Header/>
            <button className=""></button>
            <div className="content">
                <Route path='/'  render={() => <Home items={pizzas} />}></Route>
                <Route path='/cart' component={Cart}></Route>
            </div>
        </div>
    );
}

export default App;
