import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const PrinterDetails = () => {
    const { printId } = useParams();
    const [printer, setPrinter] = useState({});
    const [loading, setLoading] = useState(true);
    const [readmore, setReadmore] = useState(false);
    const navigate = useNavigate();

    const handelBuyClick = (id) => {
        if (!localStorage.getItem('user')) {
            navigate('/login')
        } else {
            localStorage.setItem('buyProduct', JSON.stringify(printer))
            navigate('/buy')
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let { data, status } = await axios.get(`https://omepcserver.up.railway.app/api/omEpc/product/printer/${printId}`)
                // console.log(data)
                if (status == 200) {
                    setPrinter(data.printer)
                    setLoading(false)
                    // setError('')
                }
                // console.log(data)
            } catch (error) {
                // setError(error.message)
                setLoading(false)
                console.log(error.message)
            }
        }

        fetchData()
    }, [])

    const { modelName, printingMethod, brand, type, refilType, warranty, image, price, wrongPrice, color, description } = printer;
    const imgUrl = `https://omepcserver.up.railway.app/uploads/${image}`;



    return (
        <div className="container px-14 py-24 mx-auto">
            {loading && <Loading />}

            {!loading && <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 space-x-5">
                <img alt="ecommerce" className="w-full object-cover object-center rounded mt-10" src={imgUrl} />
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">{brand}</h2> */}
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{brand} {modelName} Printer</h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p className="leading-relaxed">{description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex">
                            <span className="mr-3">Color</span>
                            <p className={`rounded-full bg-${color} w-6 h-6 focus:outline-none`}></p>
                        </div>
                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Warranty</span>
                            <p className='font-bold'>{warranty} Year</p>
                        </div>
                    </div>

                    <div className='pb-5 border-b-2 border-gray-200 collapse'>
                        <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>Specifications</h1>
                        <div className='lg:flex justify-between my-4 items-center'>
                            <h3 className=''>In The Box</h3>
                            <h3 className='text-sm'>
                                Black Ink Bottle,Cyan Ink Bottle,Magenta Ink Bottle,Yellow Ink Bottle, USB Cable, Printer</h3>
                        </div>
                        <div className='lg:flex justify-between  items-center capitalize'>
                            <h3>Brand</h3>
                            <h3 className='text-sm'>{brand}</h3>
                        </div>
                        <div className='lg:flex justify-between my-4 items-center capitalize'>
                            <h3>Model Name</h3>
                            <h3 className='text-sm'>{modelName}</h3>
                        </div>
                        <div className='flex justify-between items-center capitalize'>
                            <h3>printing method</h3>
                            <h3 className='text-sm'>{printingMethod}</h3>
                        </div>


                        <div>{readmore ? <button onClick={() => setReadmore(false)} className='text-red-500 font-semibold'>Read less..</button>
                            : <button onClick={() => setReadmore(true)} className='text-blue-500 font-semibold'>Read more...</button>}</div>

                        {readmore && <div>
                            <div className='flex justify-between my-4 items-center capitalize'>
                                <h3>type</h3>
                                <h3 className='text-sm'>{type}</h3>
                            </div>
                            <div className='flex justify-between my-4 items-center capitalize'>
                                <h3>Refill Type</h3>
                                <h3 className='text-sm'>{refilType}</h3>
                            </div>
                        </div>}


                    </div>

                    <div className="lg:flex mt-5 lg:items-center justify-between space-y-3 lg:space-y-2">
                        <div className=''>
                            <span className="title-font font-medium text-gray-900 text-3xl">₹{price}</span>
                            <span className='text-gray-400 ml-2 text-xl'><del>₹{wrongPrice}</del></span>
                        </div>
                        <button onClick={() => handelBuyClick(printId)} className="text-white btn capitalize bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded">Buy Now</button>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default PrinterDetails;