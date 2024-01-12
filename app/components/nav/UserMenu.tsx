"use client";

import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { FaUser } from "react-icons/fa";
import BackDrop from "./BackDrop";
import { MdSettingsInputComponent } from "react-icons/md";
import { SafeUser } from "@/types";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="text-slate-700 z-30">
          <FaUser className="z-30" />
        </div>
        {status === "authenticated" ? (
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-black rounded-box w-52 text-white z-30"
          >
            <li>
              <Link href="/order">Your Orders</Link>
            </li>
            <li>
              <Link href="/favorite">Your Beauticians</Link>
            </li>

            <hr />
            <li>
              <span
                onClick={() => {
                  signOut();
                }}
              >
                LogOut
              </span>
            </li>
          </ul>
        ) : (
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-black rounded-box w-52 text-white z-30"
          >
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default UserMenu;
