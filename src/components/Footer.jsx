import React from "react";
const Footer = () => {
  return (
    <div className="w-full mt-20 text-white">
      <div className="max-w-screen-xl mx-auto py-3 flex items-start ">
        <div className="f-left basis-1/2 p-2">
          <h1 className="text-[11vw] font-medium">Fokus.</h1>
          <p className="text-sm flex gap-8 capitalize text-zinc-600">
            {" "}
            <span>privacy policy</span>
            <span>cookie policy</span> <span>impressum</span>
            <span>terms</span>
          </p>
        </div>
        <div className="f-right basis-1/2 flex items-start justify-end gap-16 py-10">
          <ul className="text-sm capitalize text-zinc-600 flex flex-col gap-3 ">
            <li className="mb-5 text-xl">Social</li>
            <li>Instagram</li>
            <li>twitter (x?)</li>
            <li>linkedin</li>
          </ul>
          <div className="text-sm capitalize text-zinc-200 flex flex-col gap-3">
            <h5 className="mb-5 text-zinc-600">sitemap</h5>
            {["home", "works", "careers", "contact"].map((elem, index) => {
              return <span key={index}>{elem}</span>;
            })}
          </div>
          {/* <ul className='text-sm capitalize text-zinc-200 flex flex-col gap-3 '>
                <li className='mb-5 text-xl text-zinc-600'>sitemap</li>
                <li>home</li>
                <li>works</li>
                <li>careers</li>
                <li>contact</li>
            </ul> */}
          <div className="w-1/3 min-h-52 flex flex-col justify-center items-start ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi, suscipit.
            </p>
            <button className="bg-blue-700 flex items-center gap-2 p-2 mt-5">
              Enterprice Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
