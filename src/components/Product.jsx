import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count}) => {
  return (
    <div className="w-full  h-[18rem] bg-black text-white ">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-light capitalize">{val.title}</h1>
        <div className="detail w-1/3 pr-12">
          <p className="mb-10">{val.description}</p>
          <div className="prod-btns flex gap-6 items-center">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
