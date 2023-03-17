import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import ProductRaw from './ProductRaw';

const productCategories = ['computer', 'ups', 'printer', 'survillence']

const Products = () => {
    const [value, setValue] = useState(0);
    const [products, loading] = useProduct(productCategories[value]);
    const [name, setName] = useState("");
    const [model, setModel] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const updateValue = (id) => {
        setValue(id)
    }


    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("model", model);
        formData.append("image", productImg);
        formData.append("price", productPrice);
        formData.append("category", productCategory);
        formData.append("brand", productBrand);
        formData.append("description", productDescription);

        // console.log(name, productImg, model)

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/product/new'

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
                                <input name='productName' onChange={(e) => setName(e.target.value)} type="text" placeholder="Product Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input name='productModel' onChange={(e) => setModel(e.target.value)} type="text" placeholder="Model No*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input type="file" onChange={(e) => setProductImg(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />
                                <input name='productPrice' onChange={(e) => setProductPrice(e.target.value)} type="number" placeholder="Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <select onChange={(e) => setProductCategory(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='computer'>Computer/Laptop</option>
                                    <option className='capitalize' value='ups'>Ups</option>
                                    <option className='capitalize' value='printer'>Printer</option>
                                    <option className='capitalize' value='survillence'>Surveillance</option>
                                    {/* <option className='capitalize' value='others'>Others</option> */}
                                </select>
                                <input name='productBrand' onChange={(e) => setProductBrand(e.target.value)} type="text" placeholder="Brand*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />
                                <input name='productDescription' onChange={(e) => setProductDescription(e.target.value)} type="text" placeholder="Description*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input className="btn capitalize bg-orange-500 border-none rounded-none" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* Product Categories */}
            <div className='flex justify-center mt-5 '>
                <ul className="menu menu-horizontal space-x-2 gap-3 md:space-x-5 flex justify-center lg:space-x-10 border-orange-500">
                    <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                </ul>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <ProductRaw
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