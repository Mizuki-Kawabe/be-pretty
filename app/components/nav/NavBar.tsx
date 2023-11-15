"use client";

import Link from "next/link";
import Container from "../Container";

// const pages = ["products", "appointment", "about", "contact"];
// const settings = ["profile", "account", "dashboard", "logout"];

const NavBar = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="navbar flex justify-between">
          <Link href="/" className="btn btn-ghost text-xl text-deepTan">
            Be Pretty
          </Link>
          <a className="btn bg-deepTan border-none text-white hover:bg-tan active:bg-tan ">
            Login
          </a>
        </div>
      </Container>
    </div>
  );
};
export default NavBar;
