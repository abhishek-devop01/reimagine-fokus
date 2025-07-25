import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './SplitImage.css';
import FallingText from '../ReactBits/FallingText';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SplitImage = () => { 
  const box = useRef();

  useGSAP(
    () => {
      const part7Element = document.querySelector(".part-7");
      if (!part7Element) {
        console.warn("'.part-7' element not found for ScrollTrigger.");
        return; 
      }

      let t17 = gsap.timeline({
        scrollTrigger: { 
          trigger: part7Element, 
          start: "55% 55%",
          end: "500% 50%",
          pin: true,
          scrub: 2,
          // markers: true,
        },
      });
      
      t17.to(
        ".our-work-txt-div",
        {
          height: "80vh",
        },
        "height"
      );
      t17.to(
        ".our-work-txt",
        {
          height: "80vh",
        },
        "height"
      );
      t17.to(
        "#our",
        {
          left: "0%",
        },
        "height"
      );
    t17.to(
      "#work",
      {
        right: "-10%",
      },
      "height"
    );
    t17.to(
      ".scroll-img",
      {
        marginTop: "-600%",
      }
    );
  },
  { scope: box }
);

  return (
    <>
      <div id="main" ref={box}>
        <div className="part-7 placeholder-violet-700" style={{ minHeight: '100vh' }}> {/* Added minHeight for visibility */}
          <div className="our-work-txt">
            <h1 id="our">Stay </h1>
            <h1 id="work">Wired</h1>
          </div>
          <div className="our-work-txt-div">
            <div className="scroll-work">
              <div className="scroll-img w-full">
                <img src="/1.jpg" alt="work 1" />
                <img src="/2.jpg" alt="work 2" />
                <img src="/3.jpg" alt="work 10" />
                <img src="/5.jpg" alt="work 12" />
                <img src="/2.jpg" alt="work 2" />
                <img src="/3.jpg" alt="work 10" />
                <img src="/5.jpg" alt="work 12" />
                 <img src="/1.jpg" alt="work 1" />
                <img src="/2.jpg" alt="work 2" />
                <img src="/N01.jpg" alt="work 13" />
                <img src="/NA01.jpg" alt="work 14" />
              </div>
            </div>
          </div>
        </div>        
      </div>
      <div className="h-64 ">
        <div className="h-full pt-10 text-white">
          <FallingText
            text={`Made with coconut water, No added sugar, Fight off Fatigue, Increase Energy`}
            highlightWords={["coconut", "added", "Fatigue", "Fight", "Energy"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={1.13}
            fontSize="2.3rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>
    </>
  );
};

export default SplitImage;