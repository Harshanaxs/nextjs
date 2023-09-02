"use client";
import { Button } from "@/registry/new-york/ui/button";
import { useState } from "react"; // Import React useState for state management

export function NavBar() {
  // Add state for showing/hiding a mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-zinc-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-blue-900">
          Hart&apos;s Auth
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Mobile Menu (hidden by default on medium and large screens) */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 md:items-center`}
        >
          <Button className="text-white">Home</Button>
          <Button className="text-white">Features</Button>
          <Button className="text-white">Pricing</Button>
          <Button className="text-white">Contact</Button>
          <Button className="text-white">Sign In</Button>
          <Button className="bg-black text-secondary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}
