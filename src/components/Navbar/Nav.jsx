import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({children}) => {
    return (
        <div className='mt-0 nav-bar'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className='logo' src="https://i.ibb.co/7Xt1RPG/1674998575548.png" alt ="logo"/>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li className='font-medium text-black'><Link to='/'>Home</Link></li>
                                <li className='font-medium text-black'><Link to='/about'>About</Link></li>
                                <li className='font-medium text-black'><Link to='/Service'>Service</Link></li>
                                <li className='font-medium text-black'><Link to='/Service'>UPS & Backup</Link></li>
                                <li className='font-medium text-black'><Link to='/Service'>Computer</Link></li>
                                <li className='font-medium text-black'><Link to='/Service'>Printer</Link></li>
                                <li className='font-medium text-black'><Link to='/Service'>Survillence</Link></li>
                                <li className='font-medium text-black'><Link to='/Service'>Career</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Nav;