"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { AventiLogo } from "./aventi-logo";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-xl mb-4"
            >
              <AventiLogo className="w-8 h-8 text-orange-500" />
              <span>Aventi</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Your gateway to the world&apos;s greatest adventures. Discover
              stories that take you places.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 text-sm"
                >
                  Browse Library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 text-sm"
                >
                  Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-blue-400 text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2025 BooksLib. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-neutral-500 hover:text-neutral-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-500 hover:text-neutral-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
