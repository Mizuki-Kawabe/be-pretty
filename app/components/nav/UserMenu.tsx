"user client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { FaUser } from "react-icons/fa";

const UserMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="text-slate-700">
        <FaUser />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-52 text-white"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
