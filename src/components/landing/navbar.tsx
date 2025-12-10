"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AventiLogo } from "./aventi-logo";

// --- Data ---
const navLinks = [
  { href: "#", label: "Browse" },
  { href: "#", label: "Categories" },
  { href: "#", label: "Pricing" },
];

// --- Sub-components ---
interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

const NavLink = ({ href, label, className }: NavLinkProps) => (
  <Link href={href} className={className}>
    {label}
  </Link>
);

const SearchInput = () => (
  <div className="relative w-64">
    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      placeholder="Search books..."
      className="pl-8 bg-input border-border text-foreground focus:ring-ring"
    />
  </div>
);

const DesktopNav = () => (
  <nav className="hidden md:flex items-center gap-8">
    {navLinks.map((link) => (
      <NavLink
        key={link.label}
        href={link.href}
        label={link.label}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      />
    ))}
    <SearchInput />
  </nav>
);

const DesktopActions = () => (
  <div className="hidden md:flex items-center gap-3">
    <ThemeToggle />
    <Button
      variant="ghost"
      className="text-muted-foreground hover:text-foreground hover:bg-accent"
    >
      Sign In
    </Button>
    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
      Get Started
    </Button>
  </div>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden text-foreground">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="bg-background border-border text-foreground"
    >
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
      <div className="flex flex-col gap-6 mt-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            href={link.href}
            label={link.label}
            className="text-lg font-medium hover:text-primary transition-colors"
          />
        ))}
        <div className="h-px bg-border" />
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
        <Button variant="ghost" className="justify-start px-0 text-lg">
          Sign In
        </Button>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

// --- Main Component ---
export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground font-bold text-xl"
        >
          <AventiLogo className="w-10 h-10 text-primary" />
          <span>Aventi</span>
        </Link>

        <DesktopNav />
        <DesktopActions />
        <MobileMenu />
      </div>
    </header>
  );
};
