import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useSurveillance from "../../hooks/useSurveillance";
import SurveillanceCart from "./SurveillanceCart";
import "../../../style/scrollMouse.css";
import ReactPaginate from "react-paginate";

const Surveillance = () => {
  const [surveillances] = useSurveillance();
  const [surveillanceFilterList, setSurveillanceFilterList] = useState([]);
  const [value, setValue] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const rangeRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const survilleancesPerPage = 8;
  const pagesVisited = pageNumber * survilleancesPerPage;

  const displaySurveillances = surveillances
    .slice(pagesVisited, pagesVisited + survilleancesPerPage)
    .map((surveillance) => (
      <SurveillanceCart key={surveillance._id} surveillance={surveillance} />
    ));

  const displaySurveillanceFiltered = surveillanceFilterList.map((surveillance) => (
    <SurveillanceCart key={surveillance._id} surveillance={surveillance} />
  ));

  const pageCount = Math.ceil(surveillances.length / survilleancesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((v) => v !== value));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

  const uniqueBrands = surveillances.reduce((accumulator, computer) => {
    if (!accumulator.includes(computer.brand)) {
      accumulator.push(computer.brand);
    }
    return accumulator;
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleMouseDown(event) {
    setDragging(true);
  }

  function handleMouseUp(event) {
    setDragging(false);
  }

  function handleMouseMove(event) {
    if (dragging) {
      const range = rangeRef.current;
      const rangeWidth = range.offsetWidth;
      const rangeLeft = range.getBoundingClientRect().left;
      const x = event.clientX - rangeLeft;
      const value = Math.round((x / rangeWidth) * 200000);
      setValue(value);
    }
  }

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragging]);

  const handelFilterApply = () => {
    // console.log(computers);
    const NumValue = Number(value);
    if(NumValue === 0) {
      setValue(0);
    }
    if (NumValue > 0 || selectedCheckboxes) {
      // console.log((value));
      const filterObject = { price: value, brands: selectedCheckboxes };
      console.log(filterObject);

      const filteredComputers = surveillances.filter((computer) => {
        const priceMatch =
          (!filterObject.price && filterObject.price !== 0) ||
          Number(computer.price) <= Number(filterObject.price);
        const brandsMatch =
          !filterObject.brands.length ||
          filterObject.brands.includes(computer.brand);

        if (filterObject.price === 0 && filterObject.brands.length) {
          // search according to brands only
          return brandsMatch;
        } else if (filterObject.price && !filterObject.brands.length) {
          // search according to price in all computers
          return priceMatch;
        } else if (filterObject.price && filterObject.brands.length) {
          // search according to both price and brands
          return priceMatch && brandsMatch;
        } else {
          // no filters applied, return empty array
          return true;
        }
      });

      console.log(filteredComputers);
      // // console.log(selectedCheckboxes);
      // console.log(filterObject);
      setSurveillanceFilterList(filteredComputers);
    } else if (NumValue <= 0) {
      console.log(value);
      setSurveillanceFilterList([]);
    } else if (NumValue <= 0 && selectedCheckboxes ) {
      setSurveillanceFilterList([]);
    }
  };

  return (
    <div>
      <div className="surveillance-banner bg-fixed" style={{
          backgroundImage: `linear-gradient(rgba(12, 110, 134, 0.945), rgba(129, 131, 34, 0.493)), url("https://i.ibb.co/FmKKrZp/cctv.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}>
        <div className="Heading text-4xl md:text-5xl lg:text-6xl text-white font-mono">
          Our Surveillances
          <div className="flex text-2xl justify-center mt-2 space-x-2 mb-10">
            <Link to="/">Home</Link>
            <span className="text-orange-500">//</span>
            <Link to="/surveillance" className="text-orange-500">
              Surveillance
            </Link>
          </div>
          {/* mouse scroll */}
          <div id="scroll-down-animation" className="mt-20">
            <span className="mouse">
              <span className="move"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-[120px] mt-20 ml-20 h-[45px]">
        <div className="dropdown">
          <div
            tabIndex={0}
            className=" cursor-pointer bg-primary  w-[120px] h-[45px] text-center flex justify-center items-center"
          >
            <p className="font-semibold">Filter</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <p className="w-full text-center font-semibold mb-5">By Brands</p>
            {uniqueBrands.map((option) => (
              <label className="label cursor-pointer">
                <span className="label-text">{option}</span>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedCheckboxes.includes(option)}
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-primary"
                />
              </label>
            ))}
            <div>
              <p className="w-full text-center font-semibold mb-5">By Price</p>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  value={value}
                  onChange={handleChange}
                  className="range range-primary range-sm"
                />
              </div>

              <div className="w-full flex justify-between text-xs px-2 mt-2">
                <span>₹0</span>
                <span>₹200000</span>
              </div>
              <p className="font-semibold my-5">
                Your Price : ₹{value ? value : 0}
              </p>
            </div>
            <div className="w-full  flex justify-center  items-center">
              <button
                onClick={() => {
                  handelFilterApply();
                }}
                className="bg-primary w-full py-2 font-semibold"
              >
                Apply
              </button>
            </div>
          </ul>
        </div>
      </div>
      {/* Products section area */}
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-20 mb-5 px-14">
      {surveillanceFilterList.length > 0
          ? displaySurveillanceFiltered
          : displaySurveillances}
      </section>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous-page"}
        nextLinkClassName={"next-page"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
};

export default Surveillance;
