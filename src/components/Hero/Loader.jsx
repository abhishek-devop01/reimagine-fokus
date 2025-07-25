import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
import "./loader.css"
import Particles, { LiquidChrome } from "../ReactBits/LiquidChrome";
gsap.registerPlugin(Flip, SplitText);

const Loader = () => {
  const heroRef = useRef(null);
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const heroBgRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const navDividerRef = useRef(null);
  const sidebarDividerRef = useRef(null);
  const sidebarLogoRef = useRef(null);
  const siteInfoDividerRef = useRef(null);

  const setupTextSplitting = (containerElement) => {
    if (!containerElement) return;

    const textElements = containerElement.querySelectorAll("h1, h2, p, a");
    textElements.forEach((element) => {
      if (
        element.textContent.trim() !== "" &&
        !element.classList.contains("gsap-split")
      ) {
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "line",
        });
        element.classList.add("gsap-split");

        split.lines.forEach((line) => {
          const textContent = line.textContent;
          if (!line.querySelector("span")) {
            line.innerHTML = `<span>${textContent}</span>`;
          }
        });
      }
    });
  };

  const createCounterDigits = () => {
    const counter1 = counter1Ref.current;
    const counter2 = counter2Ref.current;
    const counter3 = counter3Ref.current;

    if (counter1) counter1.innerHTML = "";
    if (counter2) counter2.innerHTML = "";
    if (counter3) counter3.innerHTML = "";

    if (counter1) {
      const num0 = document.createElement("div");
      num0.className = "num";
      num0.textContent = "0";
      counter1.appendChild(num0);

      const num1 = document.createElement("div");
      num1.className = "num";
      num1.textContent = "1";
      counter1.appendChild(num1);
    }

    if (counter2) {
      for (let i = 0; i <= 9; i++) {
        const numDiv = document.createElement("div");
        numDiv.className = "num";
        numDiv.textContent = i;
        counter2.appendChild(numDiv);
      }
      const final0_c2 = document.createElement("div");
      final0_c2.className = "num";
      final0_c2.textContent = "0";
      counter2.appendChild(final0_c2);
    }

    if (counter3) {
      for (let i = 0; i <= 9; i++) {
        const numDiv = document.createElement("div");
        numDiv.className = "num";
        numDiv.textContent = i;
        counter3.appendChild(numDiv);
      }
      const final0_c3 = document.createElement("div");
      final0_c3.className = "num";
      final0_c3.textContent = "0";
      counter3.appendChild(final0_c3);
    }
  };

  const getNumHeight = (counterRef) => {
    return counterRef?.current?.querySelector(".num")?.clientHeight || 0;
  };

  /**
   * Handles the Flip animation for images, including a concurrent scale animation.
   * This function now returns a GSAP timeline for better sequencing.
   * @param {HTMLElement} container
   * @returns {gsap.core.Timeline}
   */
  function animateImages(container) {
    if (!container) return gsap.timeline();

    const images = container.querySelectorAll(".img");

    images.forEach((img) => img.classList.remove("animate-out"));

    const state = Flip.getState(images);

    images.forEach((img) => img.classList.add("animate-out"));

    const flipTl = gsap.timeline();

    flipTl.add(
      Flip.from(state, {
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.inOut",
      })
    );

    images.forEach((img, index) => {
      flipTl
        .to(
          img,
          {
            scale: 1, // Scale up
            duration: 0.1,
            ease: "power2 .in",
          },
          "<+" + index * 0.01
        )
        .to(
          img,
          {
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          "<+=0.1"
        );
    });

    return flipTl;
  }

  useEffect(() => {
    if (heroRef.current) {
      setupTextSplitting(heroRef.current);
    }

    createCounterDigits();

    const numHeight = getNumHeight(counter3Ref);

    if (counter3Ref.current) {
      gsap.to(counter3Ref.current, {
        y: -(10 * numHeight),
        duration: 2.5,
        ease: "power2.inOut",
      });
    }

    if (counter2Ref.current) {
      gsap.to(counter2Ref.current, {
        y: -(10 * numHeight),
        duration: 3,
        ease: "power2.inOut",
        delay: 0.2,
      });
    }

    if (counter1Ref.current) {
      gsap.to(counter1Ref.current, {
        y: -(1 * numHeight),
        duration: 2,
        ease: "power2.inOut",
        delay: 1.5,
      });
    }

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    if (imagesContainerRef.current) {
      gsap.set(imagesContainerRef.current.querySelectorAll(".img"), {
        scale: 0,
      });
    }

    if (heroBgRef.current) {
      tl.to(heroBgRef.current, {
        scaleY: "100%",
        duration: 2.9,
        ease: "power2.inOut",
        delay: 0.25,
      });
    }

    if (imagesContainerRef.current) {
      tl.to(
        imagesContainerRef.current.querySelectorAll(".img"),
        {
          scale: 1.2,
          duration: 3,
          stagger: 0.08,
          ease: "power3.out",
        },
        "<"
      );
    }

    if (heroRef.current) {
      tl.to(
        heroRef.current.querySelector(".counter"),
        {
          opacity: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        ">-=0.5"
      );
    }

    tl.add(animateImages(imagesContainerRef.current), "<");

    if (sidebarDividerRef.current) {
      tl.to(
        sidebarDividerRef.current,
        {
          scaleY: "100%",
          duration: 0.8,
        },
        ">-=.5"
      );
    }

    tl.to(
      [navDividerRef.current, siteInfoDividerRef.current],
      {
        scaleX: "100%",
        duration: 0.8,
        stagger: 0.3,
      },
      "<"
    );

    if (sidebarLogoRef.current) {
      tl.to(
        sidebarLogoRef.current,
        {
          scale: 1,
          duration: 0.7,
          ease: "back.out(2)",
        },
        "<+=1.2"
      );
    }

    if (heroRef.current) {
      tl.to(
        [
          heroRef.current.querySelector(".logo-name a span "),
          heroRef.current.querySelectorAll(".nav-items .links a span"),
          heroRef.current.querySelector(".nav-items .links p span"),
          heroRef.current.querySelector(".nav-items .cta a span"),
        ],
        {
          y: "0%",
          duration: 1.8,
          stagger: 0.07,
          ease: "power4.out",
        },
        "<+=0.2"
      );

      tl.to(
        [
          heroRef.current.querySelector(".header h1 span"),
          heroRef.current.querySelector(".site-info h2 span"),
          heroRef.current.querySelectorAll(".site-info-copy p span"),
          heroRef.current.querySelector(".hero-footer h2 span"),
        ],
        {
          y: "0%",
          duration: 1.5,
          stagger: 0.05,
          ease: "power4.out",
        },
        "<+=0.9"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="hero"
      ref={heroRef}
    >
    
  

      {" "}
      <div className="hero-bg" ref={heroBgRef}>
        <LiquidChrome
    baseColor={[0.3, 0.1, 0.1]}
    speed={0.3}
    amplitude={0.34}
    interactive={true}
  />
      </div>
      <div className="counter">
        <div className="counter-1 digit" ref={counter1Ref}></div>
        <div className="counter-2 digit" ref={counter2Ref}></div>
        <div className="counter-3 digit" ref={counter3Ref}></div>
      </div>
      <div className="images-container" ref={imagesContainerRef}>
        <div className="img">
          <img src="/img1.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img2.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img3.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img4.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img5.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img6.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img7.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img8.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img9.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img10.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img11.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/img12.jpg" alt="" />
        </div>
      </div>
      <nav>
        <div className="logo-name">
          <a className="a" href="#">
            <span>
              <img id="fokusname" className="img" ref={sidebarLogoRef} src={"./lo.png"} alt="" />
            </span>
          </a>
        </div>
        <div className="nav-items">
          <div className="links">
            <a className="a" href="#">
              <span>Home</span>
            </a>
            <p className="p">
              <span>/</span>
            </p>
            <a className="a" href="#">
              <span>About</span>
            </a>
          </div>
          <div className="cta">
            <a className="a" href="#">
              <span>LogIn</span>   
            </a>
          </div>
        </div>
        <div className="divider" ref={navDividerRef}></div>{" "}
      </nav>
      <div className="sidebar">
        <div className="logo" ref={sidebarLogoRef}>
          {" "}
          <img className="fokuslogo" src="/fokus.png" alt="" />
        </div>
        <div className="divider" ref={sidebarDividerRef}></div>{" "}
      </div>
      <div className="header">
        <h1 className="h1">
          <span className="name ">Fokus</span>
        </h1>
      </div>
      <div className="site-info">
        <h2 className="h2">
          <span>Stay Active </span>
          
        </h2>
        <div className="divider" ref={siteInfoDividerRef}></div> {/* Add ref */}
        <div className="site-info-copy">
          <p className="p">
            <span>Built for the bold. </span>
          </p>
          <p className="p">
            <span>Operating since 2k25</span>
          </p>
        </div>
      </div>
      <div className="hero-footer">
        <h2>
          <span>Scroll Down</span>
        </h2>
      </div>
    </section>
  );
};

export default Loader;