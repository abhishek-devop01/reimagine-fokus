import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count}) => {
  return (
    <div className="w-full h-[50vh] bg-black text-white ">
      <div onMouseEnter={()=>{mover(count)}} className="w-full px-10 mx-auto flex items-center justify-between flex-wrap">
        <h1 className="text-[4.9vw] font-light capitalize">{val.title}</h1>
        <div className="detail w-1/3 pr-12">
          <p className="mb-10 flex-wrap ">{val.description}</p>
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
