import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({ width, start, para, hover }) => {
  return (
    <div 
    data-scroll data-scroll-section  data-scroll-speed="0.8" 
      className={`${width} hover:bg-purple-500 p-6 bg-zinc-700 rounded-xl text-zinc-300 min-h-[32vw] flex flex-col justify-between`}
    >
      <div className="w-full h-full">
        <div className="flex capitalize items-center justify-between ">
          <h3 className="capitalize ">up next: culutre</h3>
          <MdArrowRightAlt />
        </div>
        <h1 className="text-3xl mt-7">some heading</h1>
      </div>

      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none mb-5">
              Start a Project
            </h1>
            <button className="px-5 py-2 border-1 rounded-full mt-3 ">
              Contact us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
