import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import usePrinter from '../../../hooks/usePrinter';
import AdminPrinterRaw from './AdminPrinterRaw';

const AdminPrinter = () => {
    const [printers, loading] = usePrinter();
    const [printingMethod, setPrintingMethod] = useState("");
    const [type, setType] = useState('');
    const [modelName, setModelName] = useState('');
    const [color, setColor] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [refilType, setRefilType] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [productPrice, setProductPrice] = useState(0);
    const [wrongPrice, setWrongPrice] = useState(0);
    const [warranty, setWarranty] = useState(1);
    const [productDescription, setProductDescription] = useState('');
    const [openModal, setOpennModal] = useState(false);

    const handelModal = (id) => {
        setOpennModal(true);
    };

    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("printingMethod", printingMethod);
        formData.append("type", type);
        formData.append("modelName", modelName);
        formData.append("color", color);
        formData.append("brand", productBrand);
        formData.append("refilType", refilType);
        formData.append("image", productImg);
        formData.append("price", productPrice);
        formData.append("wrongPrice", wrongPrice);
        formData.append("warranty", warranty);
        formData.append("description", productDescription);

        // console.log(outputVoltage)

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/product/printer/new'

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
                <label onClick={handelModal} label htmlFor={openModal ? 'addModal' : ''}  className="btn">Add Product</label>

                    {/* Put this part before </body> tag */}
                    {openModal && <input type="checkbox" id="addModal" className="modal-toggle" />}
                    <div className="modal modal-bottom sm:modal-middle ">
                        <div className="modal-box text-center">
                            <label htmlFor="addModal" className="btn btn-md btn-circle bg-red-500 border-0 absolute right-2 top-2 text-xl mt-2">✕</label>
                            <h3 className="font-bold text-3xl">Add a product</h3>
                            <form onSubmit={postProduct} className='form-control mt-5' action="" enctype="multipart/form-data">
                                <input name='printingMethod' required onChange={(e) => setPrintingMethod(e.target.value)} type="text" placeholder="Printing Method*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='type' required onChange={(e) => setType(e.target.value)} type="text" placeholder="Type*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='modelName' onChange={(e) => setModelName(e.target.value)} type="text" required placeholder="Model Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='color' onChange={(e) => setColor(e.target.value)} type="text" required placeholder="Color*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='brand' required onChange={(e) => setProductBrand(e.target.value)} type="text" placeholder="Product Brand*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='refilType' required onChange={(e) => setRefilType(e.target.value)} type="text" placeholder="Refil Type*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input type="file" onChange={(e) => setProductImg(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />

                                <input name='productPrice' onChange={(e) => setProductPrice(e.target.value)} type="number" required placeholder="Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='wrongPrice' onChange={(e) => setWrongPrice(e.target.value)} type="number" required placeholder="Wrong Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='warranty' onChange={(e) => setWarranty(e.target.value)} type="number" required placeholder="Warranty*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

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
                            <th>Brand</th>
                            <th>Model Name</th>
                            <th>Printing Method</th>
                            <th>Refil type</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Wrong Price</th>
                            <th>Warranty</th>
                            <th>Color</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            printers?.map((printer, index) => <AdminPrinterRaw
                                key={printer._id}
                                index={index}
                                printer={printer}
                            ></AdminPrinterRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPrinter;