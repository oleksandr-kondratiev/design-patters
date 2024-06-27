import { Github } from "lucide-react";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation/navigation";
import { ThemeButton } from "@/components/theme-button/theme-button";

export const Header = () => {
  return (
    <header className="container mx-auto m-4 flex justify-between">
      <Navigation />
      <div className="flex gap-2">
        <Link href="https://github.com/oleksandr-kondratiev/design-patters">
          <Button variant="outline" size="icon">
            <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            <span className="sr-only">Github</span>
          </Button>
        </Link>
        <ThemeButton />
      </div>
    </header>
  );
};
