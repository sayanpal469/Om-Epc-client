import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Admin = () => {
    return (
        <div className="drawer drawer-mobile bg-slate-100 pt-1">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col px-12">
                <label for="my-drawer-2" className="btn btn-primary mt-10 drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side shadow-xl rounded-2xl">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-white bg-orange-400 pl-8">
                    <li><Link className='' to='/admin'>
                        <FaUserAlt className='text-2xl'></FaUserAlt>
                    </Link></li>
                    <li><Link className='my-3' to='/admin/getRequest'>Customer Get Request</Link></li>
                    <li><Link className='my-3' to='/admin/ups'>Upses</Link></li>
                    <li><Link className='my-3' to='/admin/computer'>Computers</Link></li>
                    <li><Link className='my-3' to='/admin/printer'>Printers</Link></li>
                    <li><Link className='my-3' to='/admin/surveillance'>Surveillances</Link></li>
                    <li><Link className='my-3' to='/admin/refurbished'>Refurbished</Link></li>
                    <li><Link className='my-3' to='/admin/accesories'>Accesories</Link></li>
                    <li><Link className='my-3' to='/admin/orders'>Orders</Link></li>
                    <li><Link className='my-3' to='/admin/service'>Services</Link></li>
                    <li><Link className='my-3' to='/admin/computerServiceReq'>Computer Service Requests</Link></li>
                    <li><Link className='my-3' to='/admin/upsServiceReq'>Ups Service Requests</Link></li>
                    <li><Link className='my-3' to='/admin/printerServiceReq'>Printer Service Requests</Link></li>
                    <li><Link className='my-3' to='/admin/surveillanceServiceReq'>Surveillance Service Requests</Link></li>
                    <li><Link className='my-3' to='/admin/users'>Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;