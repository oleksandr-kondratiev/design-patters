import { Github } from "lucide-react";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation/navigation";

export const Header = () => {
  return (
    <header className="container mx-auto m-4 flex justify-between">
      <Navigation />
      <Link href="https://github.com/oleksandr-kondratiev/design-patters">
        <Button>
          <Github className="mr-2 h-4 w-4" /> Code
        </Button>
      </Link>
    </header>
  );
};
