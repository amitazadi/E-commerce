import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productscreen";

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">
                            amazona
                        </a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>
                    </div>
                </header>
                <main>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
