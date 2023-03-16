import React from 'react';
import useRefurbished from '../../hooks/useRefurbished';
import RefurbishedCart from './RefurbishedCart';

const Refurbished = () => {
    const [refurbished] = useRefurbished();
    return (
        <div className='flex flex-col lg:flex-row md:flex-col lg:justify-between md:justify-between justify-center px-14 gap-6'>
            <div className='w-full lg:w-[30%] md:w-[50%] h-28 mt-10 lg:h-1/4 shadow-xl bg-primary lg:mt-24 md:mt-20 mx-auto'>
                hello
                hello
                hello
                hello
            </div>
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5'>
                {
                    refurbished.map(product => <RefurbishedCart key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Refurbished;