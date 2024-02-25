'use client'

import React from "react";
import {Navbar, NavbarContent,
   NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import Image from 'next/image'
export default function Nav2() {
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
    <div className=" bg-transparent w-full static">
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center" >
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
              className="dark:invert"
              width={60}
              height={16}
              priority
            /></Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#1bb6e1e6] text-white  ">
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
           <Link
                className="w-full text-white font-sans font-medium text-xl flex mt-4"
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
