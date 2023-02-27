import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './BuyPageStyle.css'
import { HiPlusCircle } from 'react-icons/hi';
import { AiFillMinusCircle } from 'react-icons/ai';

const BuyPage = () => {
    const { buyId } = useParams();
    const buyRequestProduct = localStorage.getItem('buyProduct');
    const [buyProduct, setBuyProduct] = useState({})
    const [quantity, setQuantuty] = useState(1);
    let deliveryCost = 100;

    useEffect(() => {
        if (buyRequestProduct) {
            setBuyProduct(JSON.parse(buyRequestProduct))
        }
    }, [])

    // console.log(buyProduct);

    const { image, price, ram, modelName, brand, color } = buyProduct

    const imgUrl = `http://localhost:5000/uploads/${image}`;

    const handelSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <form onSubmit={handelSubmit} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10 lg:px-14 gap-10 bg-gray-50 justify-center'>
            <div className='p-10'>
                <div className='flex'>
                    <div>
                        <span className="label-text text-lg">First Name</span>
                        <input type="text" name='first_name' required className="rounded-none input input-bordered  w-full max-w-xs" />
                    </div>
                    <div className='ml-5'>
                        <span className="label-text text-lg">Last Name</span>
                        <input type="text" name='last_name' required className="rounded-none input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='my-5'>
                    <p className="label-text text-lg">Company name (optional)</p>
                    <input type="text" name='company_name' className="rounded-none input input-bordered w-full" />
                </div>
                {/* <label for="country">Country / Region</label> */}
                {/* <select value={getUserCountry} onChange={getCountry} className="input input-bordered w-full mb-5" id="cars" name="cars">
                    {
                        countries.map(one => <option>{one}</option>)
                    }
                </select> */}
                <label className='' htmlFor="">Street address</label>
                <input type="text" name='street_address' required placeholder="House number and street name" className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Town / City</label>
                <input type="text" name='town_name' required className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Postcode</label>
                <input type="text" name='post_code' required className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Phone</label>
                <input type="text" name='phone' required className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Email address</label>
                <input type="email" disabled value='email' required className="rounded-none input input-bordered w-full" />
            </div>


            <div>
                <div className='p-10 h-auto totalBox mt-10'>
                    <h2 className='text-4xl font-bold'>Your order</h2>
                    <div className='overflow x-auto'>
                        <table className=' w-full mt-10'>
                            <thead className=''>
                                <tr className='text-center text-2xl flex justify-between px-2'>
                                    <th className='font-bold'>Product</th>
                                    <th className='font-bold'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='px-2 flex justify-between mt-5'>
                                    <td className='flex items-center'>
                                        <div className="avatar mr-3">
                                            <div className="w-20">
                                                <img src={imgUrl} alt='#' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr className='flex justify-between mt-5 px-2'>
                                    <td className='font-bold capitalize'>{brand}, {modelName}, {ram}</td>
                                    <td className='font-semibold text-2xl'></td>
                                </tr>

                                <tr className='flex mt-5 justify-between items-center px-2'>
                                    <td className='flex items-center'>
                                        <td className='font-bold capitalize'>Quantity</td>
                                        {/* <td className='font-semibold text-lg ml-2'>*</td> */}
                                        <div className='ml-5 flex items-center'>
                                            <AiFillMinusCircle className='text-red-500 hover:text-red-700 text-2xl border-none' onClick={() => {
                                                if (quantity > 1) {
                                                    setQuantuty(quantity - 1)
                                                } else {
                                                    alert('not possible')
                                                }
                                            }}>-</AiFillMinusCircle>

                                            <input type='number' onChange={(e) => setQuantuty(e.target.value)} value={quantity} className='font-semibold border border-gray-500 w-8 text-center text-lg mx-3' />

                                            <HiPlusCircle className='text-blue-500 hover:text-blue-700 text-2xl border-none' onClick={() => setQuantuty(quantity + 1)}>+</HiPlusCircle>
                                        </div>
                                    </td>
                                    <td className='font-semibold'>₹{quantity * price}</td>
                                </tr>

                                <tr className='flex justify-between mt-5 px-2'>
                                    <td className='font-bold capitalize'>SHIPPING AND HANDLING</td>
                                    <td className='font-semibold '>Free</td>
                                </tr>

                                <tr className='flex justify-between mt-5 px-2'>
                                    <td className='font-bold capitalize'>Delivery Cost</td>
                                    <td className='font-semibold'>₹{deliveryCost}</td>
                                </tr>

                                <tr className='flex justify-between mt-5 px-2'>
                                    <td className='font-bold capitalize'>ORDER TOTAL</td>
                                    <td className='font-bold'>₹{(quantity * price) + deliveryCost}</td>
                                </tr>

                                <tr className='flex justify-between mt-5 px-2'>
                                    <td className='font-bold capitalize'>PAYMENT METHOD</td>
                                    <td className='font-semibold capitalize text-sm'>Only cash on delivery available</td>
                                </tr>

                            </tbody>
                        </table>
                        <div className='text-center mt-5 '>
                            <input className='btn btn-warning w-full text-center rounded-none px-10' type="submit" value="Place order" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BuyPage;