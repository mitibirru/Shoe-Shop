import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                className="cursor-pointer flex items-center gap-2 relative"
              >
                {item.name}
                {!showCatMenu && <BsChevronDown size={14} />}
                {showCatMenu && <BsChevronUp size={14} />}
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href={`/category/${submenu.name.toLowerCase()}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className=" h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {submenu.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
