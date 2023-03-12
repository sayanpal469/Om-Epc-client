import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePrinter from '../../hooks/usePrinter';
import PrinterCart from './PrinterCart';
import '../../../style/printerStyle.css'
import '../../../style/scrollMouse.css'
import ReactPaginate from 'react-paginate';


const Printer = () => {
    const [printers] = usePrinter();
    const [pageNumber, setPageNumber] = useState(0);

    const printersPerPage = 8;
    const pagesVisited = pageNumber * printersPerPage;
  
    const displayPrinters = printers
      .slice(pagesVisited, pagesVisited + printersPerPage)
      .map((printer) => (
        <PrinterCart
                        key={printer._id}
                        printer={printer}
                    />
      ));
  
    const pageCount = Math.ceil(printers.length / printersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
    return (
        <div>

            <div className='printer-banner bg-fixed'>
                <div className='Heading text-4xl md:text-5xl lg:text-6xl text-white font-mono'>
                    Our Printers
                    <div className='flex text-2xl justify-center mt-2 space-x-2 mb-10'>
                        <Link to='/'>Home</Link>
                        <span className='text-orange-500'>//</span>
                        <Link to='/ups' className='text-orange-500'>Printer</Link>
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
                {displayPrinters}
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

export default Printer;