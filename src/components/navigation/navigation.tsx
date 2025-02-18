"use client";

import Link from "next/link";

// components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// constants
import { ROUTES_WITH_LABELS } from "@/constants/routes";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {ROUTES_WITH_LABELS.map((group) => (
          <NavigationMenuItem key={group.type}>
            <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {group.patterns.map((pattern) => (
                  <li key={pattern.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={pattern.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {pattern.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
