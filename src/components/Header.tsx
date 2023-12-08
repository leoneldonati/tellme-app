import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Greetings from "./Greetings";
import { useState } from "react";
import { MenuIcon } from "../icons";

export default function Header() {

  // estado botón del header
  const [open, setOpen] = useState(false);


  return (
    <header className="p-4 flex flex-row items-center justify-between ">
      <div className="flex-1">
        <Greetings />
      </div>

      <div>
        <Link to="/profile">
          <Avatar />
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        <button
          className="block [&:hover>svg]:fill-amber-800 [&:hover>svg]:scale-110 [&>svg:active]:scale-100 transition"
          onClick={() => setOpen((prevState) => !prevState)}
          style={{ transform: `rotate(-${open ? 90 : 0}deg)`}}
        >
          <MenuIcon className="w-8 h-auto transition" />
        </button>
      </div>
    </header>
  );
}
