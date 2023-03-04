import React from 'react';
import { Link } from 'react-router-dom';
import useUps from '../../hooks/useUps';
import '../../../style/upsStyle.css'
import UpsCart from './UpsCart';

const Ups = () => {
    const [upses, loading] = useUps()
    return (
        <div>

            <div className='ups-banner bg-fixed'>
                <div className='Heading text-4xl md:text-5xl lg:text-6xl text-white font-mono'>
                    Our Upses
                    <div className='flex text-2xl justify-center mt-2 space-x-2'>
                        <Link to='/'>Home</Link>
                        <span className='text-orange-500'>//</span>
                        <Link to='/computer' className='text-orange-500'>Computer</Link>
                    </div>

                    {/* mouse scroll */}
                    <div id="scroll-down-animation" className='mt-24'>
                        <span className="mouse">
                            <span className="move"></span>
                        </span>
                    </div>

                </div>
            </div>

            {/* Products section area */}
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5 px-14">
                {
                    upses.map(ups => <UpsCart
                        key={ups._id}
                        ups={ups}
                    />)
                }
            </section>
        </div>
    );
};

export default Ups;