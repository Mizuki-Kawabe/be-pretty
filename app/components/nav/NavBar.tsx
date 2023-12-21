"use client";

import CartCount from "@/app/cart/cartCount";
import Link from "next/link";
import Container from "../Container";

const NavBar = () => {
  return (
    // <div className="bg-white">
    //   <Container>
    //     <div className="navbar flex justify-between">
    //       <Link href="/" className="btn btn-ghost text-xl text-deepTan">
    //         Be Pretty
    //       </Link>
    //       <a className="btn bg-deepTan border-none text-white hover:bg-tan active:bg-tan ">
    //         Login
    //       </a>
    //     </div>
    //   </Container>
    // </div>
    <div className="bg-white">
      <Container>
        <div className="navbar bg-white p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-black">
                <li>
                  <Link href="/product" className="text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/appointment" className="text-white">
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-deepTan text-xl">
              Be Pretty
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/product">Products</Link>
              </li>
              <li>
                <Link href="/appointment">Appointment</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <CartCount />
          <div className="navbar-end">
            <a className="btn bg-deepTan border-none text-white hover:bg-tan active:bg-tan">
              Button
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NavBar;
