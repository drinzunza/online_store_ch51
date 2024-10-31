import { useState } from 'react';
import "./styles/admin.css";

function Admin() {
    const [coupon, setCoupon] = useState({
        code: "", 
        discount: ""
    });

    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: ""
    });

    function handleCouponInput(e) {
        const val = e.target.value;
        const name = e.target.name;
        console.log("Event triggered")

        /**
         * create a copy 
         * modify the copy
         * set the copy back
         */
        let copy = {...coupon};
        if(name === "discount") {
            copy.discount = val;
        }
        else if (name === "code" ){
            copy.code = val;
        }

        //name === "discount" ? copy.discount = val : copy.name = val;
        setCoupon(copy); 
    }

    function handleProductInput(e) {
        const val = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = val; 
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    function saveCoupon() {
        console.log(coupon);
    }

    return (
        <div className="admin page">
            <h3>Store Management</h3>

            <div className="parent">
                <div className="products">
                    <h4>Manage Products</h4>

                    <div>
                        <label className='form-label'>Title</label>
                        <input className='form-control' name="title" onBlur={handleProductInput}></input>
                    </div>

                    <div>
                        <label className='form-label'>Category</label>
                        <input className='form-control' name="category" onBlur={handleProductInput}></input>
                    </div>

                    <div>
                        <label className='form-label'>Image</label>
                        <input className='form-control' name="image" onBlur={handleProductInput}></input>
                    </div>

                    <div>
                        <label className='form-label'>Price</label>
                        <input className='form-control' type='number' name="price" onBlur={handleProductInput}></input>
                    </div>

                    <div className="controls">
                        <button className='btn btn-outline-dark' onClick={saveProduct}>Save Product</button>
                    </div>
                </div>

                <div className="coupons">
                    <h4>Manage Coupons</h4>

                    <div>
                        <label className='form-label'>Code</label>
                        <input className='form-control' name="code" onBlur={handleCouponInput}></input>
                    </div>

                    <div>
                        <label className='form-label'>Discount</label>
                        <input className='form-control' type='number' name="discount" onBlur={handleCouponInput}></input>
                    </div>

                    <div className="controls">
                        <button className='btn btn-outline-dark' onClick={saveCoupon}>Save Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;