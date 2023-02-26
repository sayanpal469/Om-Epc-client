import React from 'react';
import { Link } from 'react-router-dom';
import ComputerCart from './ComputerCart';
import '../../../style/computerStyle.css';
import '../../../style/scrollMouse.css';
import useComputer from '../../hooks/useComputer';
import Footer from '../../Footer/Footer';


const Computer = () => {
    const [computers] = useComputer();

    return (
        <div>
            <div className='computer-banner bg-fixed'>
                <div className='Heading text-4xl md:text-5xl lg:text-6xl text-white font-mono'>
                    Our Computers
                    <div className='flex text-2xl justify-center mt-2 space-x-2'>
                        <Link to='/'>Home</Link>
                        <span className='text-orange-500'>//</span>
                        <Link to='/computer' className='text-orange-500'>Computer</Link>
                    </div>

                    {/* mouse scroll */}
                    <div id="scroll-down-animation" className='mt-24'>
                        <span class="mouse">
                            <span class="move"></span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Products section area */}
            <section class="w-fitmx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5 px-14">
                {
                    computers?.map(computer => <ComputerCart
                        key={computer._id}
                        computer={computer}
                    />)
                }
            </section>

            {/* <Footer/> */}
        </div>
    );
};

export default Computer;