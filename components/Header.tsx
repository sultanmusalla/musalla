"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.querySelector(".hero") as HTMLElement | null;
      const heroBottom = hero ? hero.offsetHeight - 104 : window.innerHeight;
      setScrolled(window.scrollY > heroBottom);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "header-scrolled" : ""}>
      <nav>
        <div className="brand">
          <a href="www.sultan-musallah.org">
            <Image
              src="/Logo.png"
              alt="Sultan Musollah logo"
              width={120}
              height={56}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
        <div className={`navlinks${open ? " open" : ""}`} id="navlinks">
          <a href="#prayer-times" onClick={() => setOpen(false)}>Prayer Times</a>
          {/* <a href="#about" onClick={() => setOpen(false)}>About</a> */}
          {/* <a href="#events" onClick={() => setOpen(false)}>Events</a> */}
          <a href="#locationContact" onClick={() => setOpen(false)}>Location & Contact</a>
          {/* <a href="#contact" onClick={() => setOpen(false)}>Contact</a> */}
          <a 
            href="https://chat.whatsapp.com/D7T6lnH0SrXEyYhbffr16t?s=cl&p=i&ilr=0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
            style={{ alignSelf: "center", marginLeft: "8px" }}
          >
            Join Whatsapp Group
          </a>
        </div>
        <button
          className="navtoggle"
          id="navtoggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
      </nav>
    </header>
  );
}

