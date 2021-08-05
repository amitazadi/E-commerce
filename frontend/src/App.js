import data from "./data.js";
import Product from "./components/Product.js";

function App() {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">
                        amazona
                    </a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">signin</a>
                </div>
            </header>

            <main>
                <div>
                    <div className="row center">
                        {data.products.map((product) => (
                            <Product product={product}></Product>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="row center">copyright amitazadi</footer>
        </div>
    );
}

export default App;
