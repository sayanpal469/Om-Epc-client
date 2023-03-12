import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSurveillance from '../../hooks/useSurveillance';
import SurveillanceCart from './SurveillanceCart';
import '../../../style/scrollMouse.css';
import '../../../style/surveillanceStyle.css';
import ReactPaginate from 'react-paginate';


const Surveillance = () => {
    const [surveillances] = useSurveillance();
    const [pageNumber, setPageNumber] = useState(0);

    const survilleancesPerPage = 8;
    const pagesVisited = pageNumber * survilleancesPerPage;
  
    const displaySurveillances = surveillances
      .slice(pagesVisited, pagesVisited + survilleancesPerPage)
      .map((surveillance) => (
        <SurveillanceCart
        key={surveillance._id}
        surveillance={surveillance}
    />
      ));
  
    const pageCount = Math.ceil(surveillances.length / survilleancesPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

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
                { displaySurveillances }
            </section>
            <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'previous-page'}
        nextLinkClassName={'next-page'}
        disabledClassName={'pagination-disabled'}
        activeClassName={'pagination-active'}
      />
        </div>
    );
};

export default Surveillance;