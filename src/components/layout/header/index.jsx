"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);

  const paths = [
    {
      path: "about",
      label: "About",
    },
    {
      path: "community",
      label: "Community",
    },
    {
      path: "events",
      label: "Events",
    },
    // {
    //   path: "ressources",
    //   label: "Ressources",
    // },
    // {
    //   path: "blog",
    //   label: "Blog",
    // },
    {
      path: "contacts",
      label: "Contacts",
    },
  ];

  const isActive = (path) => path === pathname?.split("/")[1];

  useEffect(() => {
    setIsMenu(false);
  }, [pathname]);

  return (
    <div className="relative z-50 flex items-center justify-between px-4 py-3 md:px-12 lg:px-24">
      <Link href={"/"} className="flex items-center gap-x-2 lg:gap-x-5">
        <Image
          alt="logo"
          src={"/images/logo.png"}
          width={71}
          height={70}
          className="hidden lg:block"
        />
        <Image
          alt="logo"
          src={"/images/logo.png"}
          width={41}
          height={40}
          className="lg:hidden"
        />
        <h3 className="hidden font-bold lg:block">
          AFRICA AI <br />
          FORUM
        </h3>
        <h3 className="font-bold lg:hidden">AFRICA AI FORUM</h3>
      </Link>
      <ul className="hidden justify-center gap-x-4 font-semibold lg:flex">
        {paths?.map((path, key) => (
          <li
            key={key}
            className={`${isActive(path?.path) && "font-bold text-primary_dl"}`}
          >
            <Link href={`/${path?.path}`}>{path?.label}</Link>
          </li>
        ))}
      </ul>
      <button className="lg:hidden" onClick={() => setIsMenu(true)}>
        <Menu />
      </button>
      {isMenu && (
        <div className="fixed inset-0 bg-white p-5">
          <div className="mb-10 flex items-center justify-between">
            <Link href={"/"} className="flex items-center gap-x-2 lg:gap-x-5">
              <Image
                alt="logo"
                src={"/images/logo.png"}
                width={71}
                height={70}
                className="hidden lg:block"
              />
              <Image
                alt="logo"
                src={"/images/logo.png"}
                width={41}
                height={40}
                className="lg:hidden"
              />
              <h3 className="hidden font-bold lg:block">
                AFRICA AI <br />
                FORUM
              </h3>
              <h3 className="font-bold lg:hidden">AFRICA AI FORUM</h3>
            </Link>

            <button className="lg:hidden" onClick={() => setIsMenu(false)}>
              <X />
            </button>
          </div>
          <ul className="flex flex-col justify-center gap-y-5 overflow-y-auto font-semibold">
            {paths?.map((path, key) => (
              <li
                key={key}
                className={`border-b border-black ${isActive(path?.path) && "font-bold text-primary_dl"}`}
              >
                <Link href={`/${path?.path}`}>{path?.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
