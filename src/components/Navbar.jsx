"use client"
import Image from 'next/image'

import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-4 lg:px-16">
      <img src='./assets/logo.svg' alt="logo" />
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-8 text-darkGrayishBlue list-none marker:hidden [&>li]:list-none [&>li]::marker:hidden">
          <NavigationMenuItem className="list-none marker:hidden [&>li]:list-none [&>li]::marker:hidden">Home</NavigationMenuItem>
          <NavigationMenuItem>New</NavigationMenuItem>
          <NavigationMenuItem>Popular</NavigationMenuItem>
          <NavigationMenuItem>Trending</NavigationMenuItem>
          <NavigationMenuItem>Categories</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
