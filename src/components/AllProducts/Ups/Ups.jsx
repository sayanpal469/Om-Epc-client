import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import useUps from '../../hooks/useUps';
import '../../../style/upsStyle.css'
import UpsCart from './UpsCart';
import ReactPaginate from 'react-paginate';


const Ups = () => {
    const [upses, loading] = useUps();
    const [pageNumber, setPageNumber] = useState(0);

    const upsPerPage = 8;
    const pagesVisited = pageNumber * upsPerPage;
  
    const displayupses = upses
      .slice(pagesVisited, pagesVisited + upsPerPage)
      .map((ups) => (
        <UpsCart
        key={ups._id}
        ups={ups}
    />
      ));
  
    const pageCount = Math.ceil(upses.length / upsPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
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
                { displayupses}
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

export default Ups;