import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <>
      <nav className="bg-orange-200">
        <div className="flex items-center justify-between align-element p-4">
          <div className="flex items-center space-x-4">
            {/* TITLE */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hidden lg:flex text-3xl items-center ${
                  isActive ? "border-b-2 border-black" : ""
                }`
              }
            >
              C
            </NavLink>
            {/* DROPDOWN */}
            <div className="dropdown relative lg:hidden">
              <label tabIndex={0} className="cursor-pointer">
                <FaBarsStaggered className="h-6 w-6" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content absolute mt-2 z-10 p-2 shadow bg-base-200 rounded-box w-52"
              >
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="lg:hidden">
            <span className="text-xl font-bold">Comfy Store</span>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex space-x-4">
              <NavLinks />
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            {/* CART LINK */}
            <NavLink to="/cart" className="relative">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary absolute -top-2 -right-2">
                {numItemsInCart}
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
