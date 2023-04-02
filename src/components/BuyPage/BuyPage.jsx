import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import './BuyPageStyle.css'
import { HiPlusCircle } from 'react-icons/hi';
import { AiFillMinusCircle } from 'react-icons/ai';
import axios from 'axios';
import swal from 'sweetalert';
import useUserEmail from '../hooks/useUserEmail';


const BuyPage = () => {
    const buyRequestProduct = localStorage.getItem('buyProduct');
    const [buyProduct, setBuyProduct] = useState({})
    const [quantity, setQuantuty] = useState(1);
    const [userEmail] = useUserEmail();
    const navigate = useNavigate();
    let deliveryCost = 100;
    const [phoneNumber, setPhoneNumber] = useState('');

    

    useEffect(() => {
        // const auth = localStorage.getItem('user');
        if (buyRequestProduct) {
            // const userAuth = JSON.parse(auth)
            setBuyProduct(JSON.parse(buyRequestProduct))
            // setUserEmail(userAuth?.email);
            // window.location.reload();
        }
    }, []);

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 10); // remove all non-digit characters and limit to 10 digits
        setPhoneNumber(inputPhoneNumber);
    }



    const { image, price, ram, modelName, brand } = buyProduct

    const imgUrl = `https://omepcserver.up.railway.app/uploads/${image}`;


    const handelSubmit = (e) => {
        e.preventDefault()
        const firstName = e.target.first_name.value;
        const lastName = e.target.last_name.value;
        const address = e.target.street_address.value;
        const city = e.target.city.value;
        const post_code = e.target.post_code.value;
        const phone = phoneNumber;
        const Quantity = quantity;
        const email = userEmail;
        const totalBill = (quantity * price) + deliveryCost;
        const product = buyProduct;

        axios.post('https://omepcserver.up.railway.app/api/omEpc/buy/new', {
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            email: email,
            contact: phone,
            postCode: post_code,
            Quantity: Quantity,
            totalBill: totalBill,
            product: product
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    navigate('/myOrder')
                    window.location.reload();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <form onSubmit={handelSubmit} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10 lg:px-14 gap-10 bg-gray-50 justify-center'>
            <div className='p-10'>
                <div className='flex mb-5'>
                    <div>
                        <span className="label-text text-lg">First Name</span>
                        <input type="text" name='first_name' required className="rounded-none input input-bordered  w-full max-w-xs" />
                    </div>
                    <div className='ml-5'>
                        <span className="label-text text-lg">Last Name</span>
                        <input type="text" name='last_name' required className="rounded-none input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <label className='' htmlFor="">Street address</label>
                <input type="text" name='street_address' required placeholder="House number and street name" className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Town / City</label>
                <input type="text" name='city' required className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Postcode</label>
                <input type="text" name='post_code' required className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Phone</label>
                <input
                 type="tel"
                 id="phoneNumber"
                 name="phoneNumber"
                 value={phoneNumber}
                 onChange={handlePhoneNumberChange}
                 pattern="[0-9]{10}" // enforce 10-digit pattern
                 required 
                 className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Email address</label>
                <input type="email" disabled value={userEmail} required className="rounded-none input input-bordered w-full" />
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
                                                    swal({
                                                        title: "Oh No!",
                                                        text: "Not Possible",
                                                        icon: "warning",
                                                        button: "Okay",
                                                      });
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