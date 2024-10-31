import { useContext } from 'react';
import './styles/navbar.css';

import { Link } from  'react-router-dom';
import DataContext from '../state/dataContext';

function Navbar() {
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function countProducts() {
        let count = 0;
        for(let i=0; i<cart.length; i++) {
            const prod = cart[i];
            count += prod.quantity;
        }

        return count;
    }

    return (
        <nav class="navbar border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Organika</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about">About us</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
                        </li>


                    </ul>
                    <div class="d-flex" role="search">                     
                        <div className='btn btn-outline-light me-3'>
                            {user.name}
                        </div>   

                        <Link className='btn btn-outline-light' to="/cart">
                        <span className='badge text-bg-success me-2'>{countProducts()} </span>
                        View Cart</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

