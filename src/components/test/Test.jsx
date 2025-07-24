import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './test.css';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TestComponent = () => { 
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
          start: "50% 50%",
          end: "300% 50%",
          pin: true,
          scrub: 1,
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
        marginTop: "-300%",
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
            <h1 id="our">Our</h1>
            <h1 id="work">Work</h1>
          </div>
          <div className="our-work-txt-div">
            <div className="scroll-work">
              <div className="scroll-img">
                <img src="/img1.jpg" alt="work 1" />
                <img src="/img2.jpg" alt="work 2" />
                <img src="/img3.jpg" alt="work 10" />
                <img src="/img4.jpg" alt="work 11" />
                <img src="/img5.jpg" alt="work 12" />
                <img src="/img6.jpg" alt="work 13" />
                <img src="/img7.jpg" alt="work 14" />
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
};

export default TestComponent;