import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "lenis";
import "./text.css";
import TextPressure from "../ReactBits/TextPressure";
import DecryptedText from "../ReactBits/ DecryptedText";
import Magnet from "../ReactBits/Magnet";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          start: "0% 50%",
          end: "100% 50%",
          scrub: 1,
        },
      });

      tl.to(".one-img", { x: -500, rotate: -30 }, "a");
      tl.to(".three-img", { x: 500, rotate: 30 }, "a");
      tl.to(".two-img", { x: -500, rotate: -30, delay: -0.5 }, "b");
      tl.to(".four-img", { x: 500, delay: -0.5, rotate: 30 }, "b");
      tl.to(".innerText h2", { y: -100, opacity: 1, delay: -0.4 }, "b");
      tl.to(".innerText a", { y: -100, opacity: 1, delay: -0.4 }, "b");
    });

    mm.add("(max-width: 799px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section2",
          start: "0% 50%",
          end: "100% 80%",
          scrub: 1,
        },
      });

      tl.to(".one-img", { x: -200, rotate: -30 }, "a");
      tl.to(".three-img", { x: 200, rotate: 30 }, "a");
      tl.to(".two-img", { x: -200, rotate: -30, delay: -0.5 }, "b");
      tl.to(".four-img", { x: 200, delay: -0.5, rotate: 30 }, "b");
      tl.to(".innerText h2", { y: -100, opacity: 1, delay: -0.4 }, "b");
      tl.to(".innerText a", { y: -100, opacity: 1, delay: -0.4 }, "b");
    });

    return () => {
      lenis.destroy();
      mm.revert();
    };
  }, []);

  return (
    <div
      // data-scroll
      //   data-scroll-section
      //   data-scroll-speed="-0.1"
      id="main"
      ref={mainRef}
    >
      <section className="section3">
        <div style={{ position: "relative", height: "600px" }}>
          <TextPressure
            text="Fokus"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </section>

      <section className="d-flex-c section1 ">
        <h1 className="heading ">
          <DecryptedText
            text="We’re more than just a brand"
            speed={60}
            maxIterations={10}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h1>
        <p>#FuelYourFocus</p>
      </section>
      <section className="d-flex section2 ">
        <div className="innerText d-flex-c">
          <h2>
            Fokus is not just what you drink — it’s what drives you. Built for
            creators, dreamers, and doers — welcome to your daily dose of
            clarity, community, and creative energy.
          </h2>
          <a href="#">
            <Magnet padding={100} disabled={false} magnetStrength={2}>
              <button id="button">About us</button>
            </Magnet>
          </a>
        </div>
        <div className="img-div d-flex">
          <div className="lft d-flex-c">
            <div className="imge one-img"></div>
            <div className="imge two-img"></div>
          </div>
          <div className="rght d-flex-c">
            <div className="imge three-img"></div>
            <div className="imge four-img"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Text;
