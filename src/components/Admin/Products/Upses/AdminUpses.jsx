import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import useUps from '../../../hooks/useUps';
import AdminUpsesRaw from './AdminUpsesRaw';

const AdminUpses = () => {
    const [upses, loading] = useUps();
    const [modelNumber, setModelNumber] = useState("");
    const [modelName, setModelName] = useState('');
    const [color, setColor] = useState('');
    const [inputVoltage, setInputVoltage] = useState('');
    const [outputVoltage, setOutputVoltage] = useState('');
    const [outputPlugsNumber, setOutputPlugsNumber] = useState(1);
    const [phase, setPhase] = useState('');
    const [batteriesNumber, setBatteriesNumber] = useState(1);
    const [productPrice, setProductPrice] = useState(0);
    const [wrongPrice, setWrongPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [warranty, setWarranty] = useState(1);
    const [productBrand, setProductBrand] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [openModal, setOpennModal] = useState(false);

    const handelModal = (id) => {
        setOpennModal(true);
    };

    const postProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("brand", productBrand);
        formData.append("modelNumber", modelNumber);
        formData.append("modelName", modelName);
        formData.append("color", color);
        formData.append("inputVoltage", inputVoltage);
        formData.append("outputVoltage", outputVoltage);
        formData.append("outputPlugsNumber", outputPlugsNumber);
        formData.append("phase", phase);
        formData.append("batteriesNumber", batteriesNumber);
        formData.append("image", productImg);
        formData.append("price", productPrice);
        formData.append("wrongPrice", wrongPrice);
        formData.append("warranty", warranty);
        formData.append("description", productDescription);

        console.log(outputVoltage)

        const UPLOAD_URL = 'https://omepcserver.up.railway.app/api/omEpc/product/ups/new'

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
                                <input name='brand' required onChange={(e) => setProductBrand(e.target.value)} type="text" placeholder="Product Brand*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='modelNumber' onChange={(e) => setModelNumber(e.target.value)} type="text" required placeholder="Model Number*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='modelName' onChange={(e) => setModelName(e.target.value)} type="text" required placeholder="Model Name*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='color' onChange={(e) => setColor(e.target.value)} type="text" required placeholder="Color*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='inputVoltage' onChange={(e) => setInputVoltage(e.target.value)} type="text" required placeholder="Input Voltage*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='outputVoltage' onChange={(e) => setOutputVoltage(e.target.value)} type="text" required placeholder="Output Voltage*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='outputPlugsNumber' onChange={(e) => setOutputPlugsNumber(e.target.value)} type="number" required placeholder="Output Plugs Number*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='phase' onChange={(e) => setPhase(e.target.value)} type="text" required placeholder="Phase*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='batteriesNumber' onChange={(e) => setBatteriesNumber(e.target.value)} type="number" required placeholder="Batteries Number*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input type="file" onChange={(e) => setProductImg(e.target.files[0])} accept='image/png, image/jpg, image/jpeg' className="my-2" />


                                <input name='productPrice' onChange={(e) => setProductPrice(e.target.value)} type="number" required placeholder="Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='wrongPrice' onChange={(e) => setWrongPrice(e.target.value)} type="number" required placeholder="Wrong Price*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <input name='warranty' onChange={(e) => setWarranty(e.target.value)} type="number" required placeholder="Warranty*" className="my-2 input input-bordered w-full max-w-lg rounded-none" />

                                <textarea required name='productDescription' onChange={(e) => setProductDescription(e.target.value)} type="text" placeholder="Description*" className="my-2 textarea textarea-bordered textarea-lg w-full max-w-lg" />

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
                            <th>Model Number</th>
                            <th>Input voltage</th>
                            <th>Output voltage</th>
                            <th>Output plugs number</th>
                            <th>Batteries Number</th>
                            <th>Price</th>
                            <th>Wrong Price</th>
                            <th>Warranty</th>
                            <th>Color</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            upses?.map((ups, index) => <AdminUpsesRaw
                                key={ups._id}
                                index={index}
                                ups={ups}
                            ></AdminUpsesRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUpses;