import React from "react";

const Footer = () => {
  return (
    <footer 
    
    className="w-full mt-20 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        {/* Mobile: stack, Desktop: 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

          {/* Left block */}
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium leading-none">
              Fokus.
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm capitalize text-zinc-600">
              <span>privacy policy</span>
              <span>cookie policy</span>
              <span>impressum</span>
              <span>terms</span>
            </div>
          </div>

          {/* Right block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 text-sm">
            {/* Social */}
            <ul className="capitalize text-zinc-600 flex flex-col gap-2">
              <li className="mb-2 text-base font-medium text-white">Social</li>
              <li>Instagram</li>
              <li>twitter (x?)</li>
              <li>linkedin</li>
            </ul>

            {/* Sitemap */}
            <ul className="capitalize text-zinc-600 flex flex-col gap-2">
              <li className="mb-2 text-base font-medium text-white">sitemap</li>
              {["home", "works", "careers", "contact"].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-4">
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet 
              </p>
              <button className="bg-blue-700 px-4 py-2 rounded-md text-white w-fit">
                Enterprise Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;