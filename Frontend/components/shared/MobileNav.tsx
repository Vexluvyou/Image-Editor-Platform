"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AppKey } from "@/lib/services/key"

const MobileNav = () => {
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
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.png"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <div>
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

        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/images/logo-text.png"
                alt="logo"
                width={152}
                height={23}
              />

              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname

                  return (
                    <li
                      className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                      key={link.route}
                    >
                      <Link className="sidebar-link cursor-pointer" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </>
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
          </SheetContent>
        </Sheet>



      </nav>
    </header>
  )
}

export default MobileNav