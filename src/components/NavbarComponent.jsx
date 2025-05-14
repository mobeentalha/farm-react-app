import React from "react";
function NavbarComponent() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow fixed top-0 left-0 right-0 z-50">
        <ul className="flex gap-6 text-sm">
          <li>About</li>
          <li>News</li>
          <li>Services</li>
          <li>Our Team</li>
          <li>Make Enquiry</li>
        </ul>
        <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
          Contact us →
        </button>
      </nav>
    );
  }
  export default NavbarComponent