import React from 'react';
import { Link } from 'react-router-dom';
import useSurveillance from '../../hooks/useSurveillance';
import SurveillanceCart from './SurveillanceCart';
import '../../../style/scrollMouse.css';
import '../../../style/surveillanceStyle.css';

const Surveillance = () => {
    const [surveillances] = useSurveillance();

    return (
        <div>
            <div className='surveillance-banner bg-fixed'>
                <div className='Heading text-4xl md:text-5xl lg:text-6xl text-white font-mono'>
                    Our Surveillances
                    <div className='flex text-2xl justify-center mt-2 space-x-2 mb-10'>
                        <Link to='/'>Home</Link>
                        <span className='text-orange-500'>//</span>
                        <Link to='/surveillance' className='text-orange-500'>Surveillance</Link>
                    </div>
                    {/* mouse scroll */}
                    <div id="scroll-down-animation" className='mt-20'>
                        <span className="mouse">
                            <span className="move"></span>
                        </span>
                    </div>

                </div>
            </div>


            {/* Products section area */}
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5 px-14">
                {
                    surveillances.map(surveillance => <SurveillanceCart
                        key={surveillance._id}
                        surveillance={surveillance}
                    />)
                }
            </section>
        </div>
    );
};

export default Surveillance;