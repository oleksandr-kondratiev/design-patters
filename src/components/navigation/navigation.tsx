"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// constants
import { ROUTES_WITH_LABELS } from "@/constants/routes";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {ROUTES_WITH_LABELS.map(({ label, value }) => (
          <NavigationMenuItem key={value}>
            <Link href={value} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: pathname.includes(value) && "bg-secondary",
                })}
              >
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
