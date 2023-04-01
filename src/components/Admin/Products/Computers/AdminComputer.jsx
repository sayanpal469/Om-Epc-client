import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useComputer from '../../../hooks/useComputer';
import AdminComputerRaw from './AdminComputerRaw';

const AdminComputer = () => {
    const [computers] = useComputer();
    const [modelName, setModelName] = useState("");
    const [series, setSeries] = useState('');
    const [brand, setBrand] = useState('');
    const [processor, setProcessor] = useState('');
    const [processorBrand, setProcessorBrand] = useState('');
    const [processorFrequency, setProcessorFrequency] = useState('');
    const [processorModel, setProcessorModel] = useState('');
    const [operating, setOperating] = useState('');
    const [ram, setRam] = useState('');
    const [displaySize, setDisplaySize] = useState('');
    const [graphics, setGraphics] = useState('');
    const [hardDrive, setHardDrive] = useState('');
    const [ssd, setSsd] = useState('');
    const [warranty, setWarranty] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [productPrice, setProductPrice] = useState(0);
    const [wrongPrice, setWrongPrice] = useState(0);
    const [productCategory, setProductCategory] = useState('computer');
    const [productColor, setProductColor] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [openModal, setOpennModal] = useState(false);

    const handelModal = (id) => {
        setOpennModal(true);
    };

    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("modelName", modelName);
        formData.append("series", series);
        formData.append("brand", brand);
        formData.append("processor", processor);
        formData.append("processorBrand", processorBrand);
        formData.append("processorFrequency", processorFrequency);
        formData.append("processorModel", processorModel);
        formData.append("operatingSystem", operating);
        formData.append("ram", ram);
        formData.append("displaySize", displaySize);
        formData.append("graphics", graphics);
        formData.append("hardDrive", hardDrive);
        formData.append("ssdCapacity", ssd);
        formData.append("warranty", warranty);
        formData.append("image", productImg);
        formData.append("price", productPrice);
        formData.append("wrongPrice", wrongPrice);
        formData.append("category", productCategory);
        formData.append("color", productColor);
        formData.append("description", productDescription);

        // console.log(modelName, series, brand, processor, processorBrand, processorFrequency, processorModel, operating, ram, displaySize, graphics, hardDrive, ssd, warranty, productImg, productPrice, wrongPrice, productCategory, productColor, productDescription)

        // console.log(formData, modelName)

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/product/computer/new'

        axios.post(UPLOAD_URL, formData)
            .then(response => {
                const { data, status } = response;
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
                <div className='z-50'>
                    <label onClick={handelModal} label htmlFor={openModal ? 'addModal' : ''} className="btn">Add Product</label>

                    {/* Put this part before </body> tag */}
                    {openModal && <input type="checkbox" id="addModal" className="modal-toggle" />}
                    <div className="modal modal-bottom sm:modal-middle ">
                        <div className="modal-box text-center">
                            <label htmlFor="addModal" className="btn btn-md btn-circle bg-red-500 border-0 absolute right-2 top-2 text-xl mt-2">✕</label>
                            <h3 className="font-bold text-3xl">Add a product</h3>
                            <form onSubmit={postProduct} className='form-control mt-5' action="" enctype="multipart/form-data">

                                <input name='productModel' onChange={(e) => setModelName(e.target.value)} type="text" placeholder="Product Model*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='productSeries' onChange={(e) => setSeries(e.target.value)} type="text" placeholder="Series*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='productBrand' onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Brand*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='processor' onChange={(e) => setProcessor(e.target.value)} type="text" placeholder="Processor*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='processorBrand' onChange={(e) => setProcessorBrand(e.target.value)} type="text" placeholder="Processor Brand*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='processorFrequency' onChange={(e) => setProcessorFrequency(e.target.value)} type="text" placeholder="Processor Frequency*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='processorModel' onChange={(e) => setProcessorModel(e.target.value)} type="text" placeholder="Processor Model*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='operating' onChange={(e) => setOperating(e.target.value)} type="text" placeholder="Operating system*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='ram' onChange={(e) => setRam(e.target.value)} type="text" placeholder="Ram*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='displaySize' onChange={(e) => setDisplaySize(e.target.value)} type="text" placeholder="Display Size" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='graphics' onChange={(e) => setGraphics(e.target.value)} type="text" placeholder="Graphics*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='hardDrive' onChange={(e) => setHardDrive(e.target.value)} type="text" placeholder="Hard Drive*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='ssd' onChange={(e) => setSsd(e.target.value)} type="text" placeholder="Ssd capacity*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='warranty' onChange={(e) => setWarranty(e.target.value)} type="number" placeholder="Warranty*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input type="file" onChange={(e) => setProductImg(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />


                                <input name='productPrice' onChange={(e) => setProductPrice(e.target.value)} type="number" placeholder="Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='wrong price' onChange={(e) => setWrongPrice(e.target.value)} type="number" placeholder="Wrong Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='color' onChange={(e) => setProductColor(e.target.value)} type="text" placeholder="Colour*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />


                                <select onChange={(e) => setProductCategory(e.target.value)} className="capitalize select select-bordered w-full max-w-lg rounded-none mt-2">
                                    <option className='capitalize' value='computer'>Computer</option>
                                    <option className='capitalize' value='laptop'>Laptop</option>
                                </select>

                                <textarea name='productDescription' onChange={(e) => setProductDescription(e.target.value)} type="text" placeholder="Description*" className="my-2 textarea textarea-bordered textarea-lg w-full max-w-lg" />

                                <input className="btn capitalize bg-orange-500 border-none rounded-none" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* Product Categories */}
            {/* <div className='flex justify-center mt-5 '>
                <ul className="menu menu-horizontal space-x-2 gap-3 md:space-x-5 flex justify-center lg:space-x-10 border-orange-500">
                    <li><Link to='#' className="border" onClick={() => updateValue(0)} >Computer or Laptop</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(1)} >Ups</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(2)} >Printer</Link></li>
                    <li><Link to='#' className="border" onClick={() => updateValue(3)} >Survillence</Link></li>
                </ul>
            </div> */}

            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Model Name</th>
                            <th>Series</th>
                            <th>Brand</th>
                            <th>Processor</th>
                            <th>Processor Brand</th>
                            <th>Processor Frequency</th>
                            <th>Processor Model</th>
                            <th>Operating System</th>
                            <th>Ram</th>
                            <th>Display Size</th>
                            <th>Graphics</th>
                            <th>Hard Drive</th>
                            <th>Ssd Capacity</th>
                            <th>Warranty</th>
                            <th>Price</th>
                            <th>Wrong Price</th>
                            <th>Colour</th>
                            <th>Category</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            computers?.map((computer, index) => <AdminComputerRaw
                                key={computer._id}
                                index={index}
                                computer={computer}
                            ></AdminComputerRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminComputer;