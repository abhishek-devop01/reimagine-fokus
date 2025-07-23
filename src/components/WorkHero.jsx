import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const WorkHero = () => {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-800.webp",
      top: "24%",
      left: "10%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-800.webp",
      top: "33%",
      left: "4%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1-p-800.webp",
      top: "15%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b1608a4f57abd6f4bb1b06_cover-home-p-800.webp",
      top: "91%",
      left: "62%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/669d6f1f10e02f2cb6320ad9_669ad38beb29c99f7dfe1353_mockup-v3%402x%202-p-1600-p-800.webp",
      top: "77%",
      left: "75%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696679f0461a7a4ea3f2f06_20231005_Webflow_Conf_177-p-800.webp",
      top: "25%",
      left: "69%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImage(arr) {
      setImages((pre) =>
        pre.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImage([]);
        break;
      case 2:
        showImage([0]);
        break;
      case 3:
        showImage([0, 1]);
        break;
      case 4:
        showImage([0, 1, 2]);
        break;
      case 5:
        showImage([0, 1, 2, 3]);
        break;
      case 6:
        showImage([0, 1, 2, 3, 4]);
        break;
      case 7:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
      case 8:
        showImage([0, 1, 2, 3, 4, 5, 6]);
        break;
    }
  });

  return (
    <div className="max-w-screen-xl  mx-auto  text-center relative">
      <h1 className="text-[30vw] font-medium  select-none">FOKUS</h1>
      <div className="imgs w-full h-full absolute top-0 ">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                className="w-32 absolute -translate-x-1/2 -translate-y-1/2"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default WorkHero;
