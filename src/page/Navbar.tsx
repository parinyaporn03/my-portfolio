import React from "react";

const navbar_list: string[] = ["Home", "About", "Works", "Contact"];
type NavbarProps = {
  onClick: (event: React.SyntheticEvent) => void;
};
const Navbar = ({ onClick }: NavbarProps) => {
  return (
    <div
      className=" flex gap-2  p-4 justify-end fixed top-0  right-0 z-50"
      onClick={onClick}
    >
      {navbar_list.map((page, index) => (
        <a
          key={index}
          href={`#${page}`}
          className="bg-white cursor-pointer rounded-full border-2 border-solid border-black p-2 px-4 hover:bg-slate-200 "
        >
          {page}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
