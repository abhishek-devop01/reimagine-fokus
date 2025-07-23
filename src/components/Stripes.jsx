import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const stripData = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FwquRbtqqStL0SK1-YvlSSHcsbqgOj4YNA&s",
      num: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      num: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      num: 9,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",
      num: 32,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",
      num: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
      num: 11,
    },
  ];
  return (
    <div className="flex">
      {stripData.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
