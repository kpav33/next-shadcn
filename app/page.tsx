// Any component/page, where you are using shadcn ui component, must be marked as a client component with "use client" (by default all are server components)
"use client";

import React from "react";

import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

// https://ui.shadcn.com/docs/installation/next
// https://dev.to/hackmamba/build-a-simple-e-commerce-pim-with-nextjs-prisma-and-neon-4ei2
// https://nextjs.org/docs/app
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      {/* Basic container styling */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Website</h1>
      <p className="text-lg leading-relaxed">
        This is a basic outline for your Next.js home page with Tailwind CSS and
        Shadcn UI components.
      </p>
      <Button>Click me</Button>
    </div>
  );
}
