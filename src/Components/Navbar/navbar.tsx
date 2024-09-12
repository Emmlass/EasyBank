import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import logoImage from "../../Images/logo.svg";
import { MyButton } from "../Button/button";

export default function MyNavbar() {
const menuItems = [
    "Home",
    "About",
    "Contact",
    "Blog",
    "Careers",
  ];
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <Navbar isBordered
    classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-primary",
      ]
    }}>
      <NavbarBrand>
        <img src={logoImage} alt="easybank" className="h-6 sm:h-4" />
      </NavbarBrand>

      {/* The below is visible on mobile screens */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="gap-4 hidden sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}
           isActive = {activeItem === index}
           onMouseEnter={() => setActiveItem(index)} // Set active on hover
            onMouseLeave={() => setActiveItem(null)} // Reset on hover out
           >
            <Link
              href="#"
              size="sm"
              style={{ fontFamily: "font-publicsans", color: "hsl(233, 8%, 62%)" }}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <MyButton />
        </NavbarItem>
      </NavbarContent>

      {/* For mobile screens, Also change the bg-color of the links */}
      <NavbarMenu className="flex items-center">
        <div className="flex flex-col gap-2 py-4 items-center font-publicsans bg-neutral-verylightgray rounded-lg w-[296px]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}
          onMouseEnter={() => setHoveredItem(index)} // Set hovered index
          onMouseLeave={() => setHoveredItem(null)} // Reset on hover out
          className={`w-full flex justify-center ${hoveredItem === index ? "bg-green-500" : ""}`} // Apply green bg on hover
           >
            <Link href="#" size="lg"
            style={{ color: hoveredItem === index ? "white" : "inherit" }} // Change text color on hover
            >
              {item}
            </Link>
            </NavbarMenuItem>
          ))}
          </div>
      </NavbarMenu>
      
    </Navbar>
  );
}
