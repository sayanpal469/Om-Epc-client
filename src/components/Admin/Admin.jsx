import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Admin = () => {
    return (
        <div class="drawer drawer-mobile bg-slate-100 pt-1">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col px-12">
                <label for="my-drawer-2" class="btn btn-primary mt-10 drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side shadow-xl rounded-2xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 text-white bg-orange-400 pl-8">
                    <li><Link className='' to='/admin'>
                        <FaUserAlt className='text-2xl'></FaUserAlt>
                    </Link></li>
                    <li><Link className='my-3' to='/admin/getRequest'>Customer Get Request</Link></li>
                    <li><Link className='my-3' to='/admin/products'>Products</Link></li>
                    <li><Link className='my-3' to='/admin/buyRequest'>Product Buy Request</Link></li>
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