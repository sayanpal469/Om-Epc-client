import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductRaw from './ProductRaw';

const Products = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("");
    const [model, setModel] = useState('');
    const [productImg, setProductImg] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/api/omEpc/product')
            .then(res => res.json())
            .then(data => {
                if (data.success == true) {
                    setProducts(data.products)
                } else {
                    alert(`Server error : ${data.message}`)
                }
            })
    }, [products])

    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("model", model);
        formData.append("image", productImg);

        // console.log(name, productImg, model)

        const UPLOAD_URL = 'http://localhost:5000/api/omEpc/product/new'

        axios.post(UPLOAD_URL, formData)
            .then(response => console.log(response))
            .catch((err) => {
                console.log(err.message)
            })
    }

    
    return (
        <div>
            <div className='flex justify-center mt-2'>
                {/* <button className='btn'>Add</button> */}
                {/* The button to open modal */}
                <div>
                    <label htmlFor="addModal" className="btn">Add Product</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="addModal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle ">
                        <div className="modal-box text-center">
                            <label htmlFor="addModal" className="btn btn-sm btn-circle bg-red-500 border-0 absolute right-2 top-2">✕</label>
                            <h3 className="font-bold text-3xl">Add a product</h3>
                            <form onSubmit={postProduct} className='form-control mt-5' action="" enctype="multipart/form-data">
                                <input name='productName'  onChange={(e) => setName(e.target.value)} type="text" placeholder="Product Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input name='productModel' onChange={(e) => setModel(e.target.value)} type="text" placeholder="Model No*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input type="file" onChange={(e) => setProductImg(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />
                                
                                <input className="btn capitalize bg-orange-500 border-none rounded-none" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto mt-10">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRaw
                                key={product._id}
                                index={index}
                                product={product}
                            ></ProductRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;