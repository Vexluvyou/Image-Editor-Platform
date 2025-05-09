"use client";

import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { AppKey } from "@/lib/services/key";
// import { UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const [hasToken, setHasToken] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem(AppKey.accessToken);
    const username = localStorage.getItem(AppKey.username);

    setHasToken(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(AppKey.accessToken);
    localStorage.removeItem(AppKey.refreshToken);
    localStorage.removeItem(AppKey.userId);
    localStorage.removeItem(AppKey.username);
    window.location.href = "/";
  };

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.png"
            alt="logo"
            width={220}
            height={30}
          // width={180}
          // height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                    }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                    }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* <li className="flex-center cursor-pointer gap-2 p-4">
              <p>{username}</p>
            </li> */}
          </ul>

          {/* Button SignIn and SignOut */}
          <div className="mt-4">
            {hasToken ? (
              <Button
                onClick={handleLogout}
                className="button w-full bg-red-500 bg-cover text-white">Logout</Button>
            ) : (
              <Button
                asChild
                className="button bg-gradient bg-cover">
                <Link href="/sign-in">Login</Link>
              </Button>
            )}
          </div>

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;