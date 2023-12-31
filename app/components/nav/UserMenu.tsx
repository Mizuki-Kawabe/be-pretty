"use client";

import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { FaUser } from "react-icons/fa";
import BackDrop from "./BackDrop";
import { MdSettingsInputComponent } from "react-icons/md";
import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleOpen = useCallback(() => {
  //   setIsOpen((prev) => !prev);
  // }, []);

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="text-slate-700 z-30"
          // onClick={toggleOpen}
        >
          <FaUser className="z-30" />
        </div>
        {currentUser ? (
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-black rounded-box w-52 text-white z-30"
          >
            <li>
              <a href="/orders">Your Orders</a>
            </li>
            <li>
              <a href="/bookings">Your Bookings</a>
            </li>
            <li>
              <a href="/admin">Admin Dashboard</a>
            </li>
            <hr />
            <li>
              <a
                onClick={() => {
                  signOut();
                }}
              >
                LogOut
              </a>
            </li>
          </ul>
        ) : (
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-black rounded-box w-52 text-white z-30"
          >
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default UserMenu;
