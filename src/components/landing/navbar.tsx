"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
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
    <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-500" />
    <Input
      placeholder="Search books..."
      className="pl-8 bg-neutral-900/50 border-neutral-800 text-neutral-200 focus:ring-blue-500"
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
        className="text-sm text-neutral-400 hover:text-white transition-colors"
      />
    ))}
    <SearchInput />
  </nav>
);

const DesktopActions = () => (
  <div className="hidden md:flex items-center gap-4">
    <Button
      variant="ghost"
      className="text-neutral-300 hover:text-white hover:bg-white/10"
    >
      Sign In
    </Button>
    <Button className="bg-slate-950 hover:bg-slate-900 text-white">
      Get Started
    </Button>
  </div>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="bg-neutral-950 border-neutral-800 text-white"
    >
      <div className="flex flex-col gap-6 mt-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            href={link.href}
            label={link.label}
            className="text-lg font-medium hover:text-blue-400"
          />
        ))}
        <div className="h-px bg-neutral-800" />
        <Button variant="ghost" className="justify-start px-0 text-lg">
          Sign In
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
      </div>
    </SheetContent>
  </Sheet>
);

// --- Main Component ---
export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <AventiLogo className="w-10 h-10 text-orange-500" />
          <span>Aventi</span>
        </Link>

        <DesktopNav />
        <DesktopActions />
        <MobileMenu />
      </div>
    </header>
  );
};
