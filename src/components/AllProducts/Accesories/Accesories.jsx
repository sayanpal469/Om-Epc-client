import React, { useEffect, useState } from 'react';
import useAccesories from '../../hooks/useAccesories';
import AccesoriesCart from './AccesoriesCart';

const Accesories = () => {
    const [accesories] = useAccesories();
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(accesories);
    const [noResults,setNoResults] = useState();
    
  
    useEffect(()=>{
      if(query === ""){
          setFilteredProducts(accesories);
      }
    })
  
  
    const handleSearch = () => {
      if (query.trim() === "") {
        setFilteredProducts(accesories);
        setNoResults(false);
        return;
      }
      const lowercaseQuery = query.toLowerCase();
      const filteredByBrand = accesories.filter(
        (product) => product.brand.toLowerCase().includes(lowercaseQuery)
      );
      const filteredByType = accesories.filter(
        (product) => product.type.toLowerCase().includes(lowercaseQuery)
      );
      const mergedResults = [...filteredByBrand, ...filteredByType,];
      const uniqueResults = Array.from(new Set(mergedResults)); // remove duplicates
      if (uniqueResults.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setFilteredProducts(uniqueResults);
      }
    };
    return (
        <>
         <div className='w-full lg:w-[30%] md:w-[50%] h-fit  mt-10 lg:h-fit   lg:mt-24 md:mt-20 mx-auto'>
        <div className="flex px-10">
  <input
    className="border border-gray-300 py-2 px-4 rounded-lg mr-2 lg:w-[80%] w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    placeholder="Search By Brand, Type"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }}
    // Add this event listener to detect when the user clears the search bar
    onKeyUp={(e) => {
      if (e.key === "Backspace" && query.trim() === "") {
        handleSearch();
      }
    }}
  />
  <button
    className="bg-primary hover:bg-blue-400 text-black hover:text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={handleSearch}
  >
    Search
  </button>
</div>
        </div>
        {noResults ? (
      <div className='m-auto '>
        <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png" alt="No results found" />
      </div>
    ) : "" }
        <div className='flex flex-col lg:flex-row md:flex-col lg:justify-between md:justify-between justify-center px-14 gap-6'>
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5'>
            {!noResults ? filteredProducts.map((product) => (
          <AccesoriesCart key={product._id} product={product} />
        )) : ""}
            </div>
        </div>
                </>
    );
};


export default Accesories;