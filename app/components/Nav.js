'use client'

import React from "react";
import {Navbar,NavbarContent,
   NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import Image from 'next/image'
import { ThemeSwitcher } from "./ThemeSwitcher";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Formations", section: "formations" },
    { text: "Admissions et Inscriptions", section: "admission-inscription" },
    { text: "Nous contacter", section: "contact" },
    { text: "L'université", section: "points" },
   

  ];
  
  const handleMenuClique = () =>{
    setIsMenuOpen(false);
  }

  return (
    <div className=" w-full ">
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="bg-white dark:text-black ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
         <ThemeSwitcher/>
        
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="center" >
        <NavbarItem>
          <Link color="foreground" href="#">
            Formations 
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
             Admissions et Inscriptions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
           L'université
          </Link>
        </NavbarItem>
    
        <NavbarItem>
          <Link color="foreground" href="#">
            Nous contacter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
        <Link href="/">
        <Image
              src="/logoHEC.jpg"
              alt="Logo"
              width={60}
              height={16}
              priority
            /></Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" text-gray-900  ">
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
           <Link
                className="w-full text-[#808080] font-sans font-medium text-xl flex mt-4"
                href={`${menuItem.section}`}
                size="lg"
                onClick={handleMenuClique}
              >
                {menuItem.text}
              </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  );
}