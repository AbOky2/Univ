'use client'

import React from "react";
import {Navbar,NavbarContent,
   NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import Image from 'next/image'
import { ThemeSwitcher } from "./ThemeSwitcher";
import { TransitionLink } from "../../lib/TransitionLink";


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
          <TransitionLink color="foreground" href="#">
            Formations 
          </TransitionLink>
        </NavbarItem>
        <NavbarItem isActive>
          <TransitionLink href="#" aria-current="page">
             Admissions et Inscriptions
          </TransitionLink>
        </NavbarItem>
        <NavbarItem>
          <TransitionLink color="foreground" href="#">
           L'université
          </TransitionLink>
        </NavbarItem>
    
        <NavbarItem>
          <TransitionLink color="foreground" href="#">
            Nous contacter
          </TransitionLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
        <Link href="/">
        <Image
              src="/logoHEC.jpg"
              alt="Logo"
              width={46}
              height={16}
              priority
            /></Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" text-gray-900  bg-white ">
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
           <TransitionLink
                className="w-full text-[#808080] font-sans font-medium text-xl flex mt-4"
                href={`${menuItem.section}`}
                size="lg"
                onClick={handleMenuClique}
              >
                {menuItem.text}
              </TransitionLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  );
}