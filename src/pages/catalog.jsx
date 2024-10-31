import './styles/catalog.css';
import Product from '../components/product.jsx';
import DataService from '../services/DataService.js';
import { useState, useEffect } from 'react';

function Catalog(){   
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    // when cmp loads
    useEffect(function(){
        loadCatalog();
        loadCategories();
    }, []);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
    }

    function loadCategories(){
        let service = new DataService();
        let cats = service.getCategories();
        setCategories(cats);
    }

    function applyFilter(category) {
        setSelectedCategory(category);
    }

    function clearFilter() {
        setSelectedCategory("");
    }

    return(
        <div className="catalog page">
            {/* <h3>We have {products.length} new products for you!</h3> */}
            
            <div className="filters">
                <button onClick={clearFilter} className='btn btn-sm btn-outline-success'>All</button>
                {categories.map(cat => <button onClick={() => applyFilter(cat)} className='btn btn-sm btn-outline-success'>{cat}</button> )}
            </div>

            <div className='catalog-items'>
                {
                    products
                        .filter(prod => prod.category === selectedCategory || !selectedCategory)
                        .map(item => <Product key={item._id} data={item}></Product> )
                }
            </div> 
        </div>
    );
}




export default Catalog;