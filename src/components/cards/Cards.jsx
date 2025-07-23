import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full  -mt-20 ">
      <div className="max-w-screen-xl  mx-auto flex items-center gap-2 py-20 mt-17 ">
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={"bg-purple-500"}
        />
      </div>
    </div>
  );
};

export default Cards;
