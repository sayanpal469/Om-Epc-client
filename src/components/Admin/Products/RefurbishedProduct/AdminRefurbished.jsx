import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import useRefurbished from '../../../hooks/useRefurbished';
import AdminRefurbishedRaw from './AdminRefurbishedRaw';

const AdminRefurbished = () => {
    const [refurbished] = useRefurbished();
    const [productType, setProductType] = useState('')
    const [productBrand, setProductBrand] = useState('');
    const [modelName, setModelName] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [productPrice, setProductPrice] = useState(0);
    const [wrongPrice, setWrongPrice] = useState(0);
    const [productDescription, setProductDescription] = useState('');
    const [openModal, setOpennModal] = useState(false);

    const handelModal = (id) => {
        setOpennModal(true);
    };

    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("type", productType);
        formData.append("modelName", modelName);
        formData.append("brand", productBrand);
        formData.append("image", productImg);
        formData.append("price", productPrice);
        formData.append("wrongPrice", wrongPrice);
        formData.append("description", productDescription);

        // console.log(outputVoltage)

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/product/refurbished/new'

        axios.post(UPLOAD_URL, formData)
            .then(response => {
                const { data, status } = response
                if (status == 200) {
                    swal('Product added');
                    e.target.reset();
                    setOpennModal(false)
                }
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                });
            })
    }


    return (
        <div>

            <div className='flex justify-center mt-2'>
                {/* <button className='btn'>Add</button> */}
                {/* The button to open modal */}
                <div>
                    <label onClick={handelModal} label htmlFor={openModal ? 'addModal' : ''} className="btn">Add Product</label>

                    {/* Put this part before </body> tag */}
                    {openModal && <input type="checkbox" id="addModal" className="modal-toggle" />}
                    <div className="modal modal-bottom sm:modal-middle ">
                        <div className="modal-box text-center">
                            <label htmlFor="addModal" className="btn btn-md btn-circle bg-red-500 border-0 absolute right-2 top-2 text-xl mt-2">✕</label>
                            <h3 className="font-bold text-3xl">Add a product</h3>
                            <form onSubmit={postProduct} className='form-control mt-5' action="" enctype="multipart/form-data">

                                <input name='productType' required onChange={(e) => setProductType(e.target.value)} type="text" placeholder="Product Type*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='modelName' onChange={(e) => setModelName(e.target.value)} type="text" required placeholder="Model Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                             
                                <input name='brand' required onChange={(e) => setProductBrand(e.target.value)} type="text" placeholder="Product Brand*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input type="file" onChange={(e) => setProductImg(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />

                                <input name='productPrice' onChange={(e) => setProductPrice(e.target.value)} type="number" required placeholder="Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='wrongPrice' onChange={(e) => setWrongPrice(e.target.value)} type="number" required placeholder="Wrong Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />


                                <textarea name='productDescription' onChange={(e) => setProductDescription(e.target.value)} type="text" placeholder="Description*" className="my-2 textarea textarea-bordered textarea-lg w-full max-w-lg" />

                                <input className="btn capitalize bg-orange-500 border-none rounded-none" type="submit" value="Submit" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Type</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Wrong Price</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            refurbished?.map((product, index) => <AdminRefurbishedRaw
                                key={product._id}
                                index={index}
                                product={product}
                            ></AdminRefurbishedRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminRefurbished;